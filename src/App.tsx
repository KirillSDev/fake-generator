import { FC, useContext } from 'react';
import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import { DataTable } from './modules/DataTable/DataTable';
import { FormControls } from './modules/FormControls/FormControls';
import { FormContextType, GlobalContext } from './Context';
import cn from 'classnames';
const App: FC = (): JSX.Element => {
    const { seed, errors } = useContext(GlobalContext) as FormContextType;
    return (
        <div className={styles.container}>
            <h4 className={styles.text}>Fake data generator</h4>
            <Container fluid className={cn(styles.form)}>
                <FormControls />

                <DataTable />
            </Container>
        </div>
    );
};

export default App;
