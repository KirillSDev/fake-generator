import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import styles from './DataTable.module.scss';
import { TableRow } from './components/TableRow';
import { GlobalContext, FormContextType } from '@context';
import cn from 'classnames';
import { createFakerByLocate } from '../../utils/createFaker';
import { generateData } from '@utils/generateData';
import { IData } from '@interfaces/data';
import { generateError } from '@utils/generateError';

export const DataTable: FC = (): JSX.Element => {
    const { locale, seed, errors, data, setData, setDataWithErrors, dataWithErrors } = useContext(
        GlobalContext
    ) as FormContextType;
    const ref = useRef<HTMLTableSectionElement>(null);
    const myFaker = createFakerByLocate(locale);
    myFaker.seed(seed);

    const handleScroll = () => {
        const height = ref.current?.scrollHeight! - ref.current?.scrollTop!;
        if (height == ref.current?.offsetHeight) {
            generateData(seed, myFaker, setData, setDataWithErrors, 10);
        }
    };
    const updateDataWithErrors = () => {
        const updatedData = data.map((item: IData) => {
            const obj = { ...item };
            obj.fullName = generateError(myFaker, obj.fullName, errors, locale);
            obj.address = generateError(myFaker, obj.address, errors, locale);
            obj.phone = generateError(myFaker, obj.phone, errors, locale);
            return obj;
        });
        setDataWithErrors(updatedData);
    };
    useEffect(() => {
        generateData(seed, myFaker, setData, setDataWithErrors, 20);
    }, [seed, locale]);

    useEffect(() => {
        ref.current?.addEventListener('scroll', handleScroll);
        return () => {
            ref.current?.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        if (errors) {
            updateDataWithErrors();
        }
    }, [errors, seed, locale, data.length]);
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
            <tbody ref={ref} className={cn(styles.body)}>
                {dataWithErrors.map((note: IData, idx) => (
                    <TableRow
                        key={note.id}
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
