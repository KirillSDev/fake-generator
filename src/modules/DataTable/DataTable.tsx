import { FC, useCallback, useContext, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import styles from './DataTable.module.scss';
import { TableRow } from './components/TableRow';
import { GlobalContext, FormContextType } from '@context';
import cn from 'classnames';
import { createFakerByLocate } from '@utils/createFaker';
import { generateData } from '@utils/generateData';
import { IData } from '@interfaces/data';
import { debounce } from 'lodash';
import { useScrollHandler } from '@hooks/useScrollHandler';

const worker = new Worker(new URL('@workers/updateDataWithErrors.worker.ts', import.meta.url));

export const DataTable: FC = (): JSX.Element => {
    const { locale, seed, errors, data, setData, setDataWithErrors, dataWithErrors } = useContext(
        GlobalContext
    ) as FormContextType;
    const ref = useRef<HTMLTableSectionElement>(null);
    const myFaker = createFakerByLocate(locale);
    myFaker.seed(seed);

    const handleScroll = useCallback(() => {
        const height = ref.current?.scrollHeight! - ref.current?.scrollTop!;
        if (height <= ref.current?.offsetHeight! + 1) {
            generateData(seed, myFaker, setData, setDataWithErrors, 10);
        }
    }, [seed, myFaker, setData, setDataWithErrors]);
    const debouncedHandleScroll = useRef(debounce(handleScroll, 300));

    useScrollHandler(ref, debouncedHandleScroll.current);

    useEffect(() => {
        generateData(seed, myFaker, setData, setDataWithErrors, 20);
    }, [seed, locale]);

    useEffect(() => {
        worker.postMessage({ data, errors, locale, seed });
    }, [errors, data]);

    useEffect(() => {
        worker.onmessage = (event) => {
            const { updatedData } = event.data;
            setDataWithErrors(updatedData);
        };
    }, [generateData]);

    useEffect(() => {
        return () => {
            worker.onmessage = null;
            worker.terminate();
        };
    }, [worker]);

    return (
        <Table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <th className='col-1'>#</th>
                    <th className='col-2'>ID</th>
                    <th className='col-6'>Full Name</th>
                    <th className='col-6'>Address</th>
                    <th className='col-6'>Phone</th>
                </tr>
            </thead>
            <tbody id='table' ref={ref} className={cn(styles.body)}>
                {dataWithErrors.map((note: IData, idx) => (
                    <TableRow
                        key={note.id + idx}
                        number={idx + 1}
                        id={note.id}
                        phone={note.phone}
                        address={note.address}
                        fullName={note.fullName}
                    />
                ))}
            </tbody>
        </Table>
    );
};
