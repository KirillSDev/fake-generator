import { FC, useContext } from 'react';
import { CountrySelectionForm } from './components/CountrySelectionForm';
import { ErrorsForm } from './components/ErrorsForm';
import { SeedForm } from './components/SeedForm';
import styles from './FormControls.module.scss';
import { Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import { GlobalContext, FormContextType } from '@context';
export const FormControls: FC = (): JSX.Element => {
    const { data, dataWithErrors } = useContext(GlobalContext) as FormContextType;
    const headers = [
        { label: 'ID', key: 'id' },
        { label: 'Fullame', key: 'fullName' },
        { label: 'Address', key: 'address' },
        { label: 'Phone', key: 'phone' },
    ];

    return (
        <div className={styles.container}>
            <CountrySelectionForm />
            <ErrorsForm />
            <SeedForm />
            <CSVLink separator={';'} filename={'data'} data={dataWithErrors} headers={headers}>
                <Button className={styles.button}>Export to CSV</Button>
            </CSVLink>
        </div>
    );
};
