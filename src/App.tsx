import { FC } from 'react';
import styles from './style.module.scss';
import FormRange from 'react-bootstrap/FormRange';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const App: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Container fluid='sm'>
                <div className={styles.form}>
                    <Form.Group className='m'>
                        <Form.Label>Choose country</Form.Label>
                        <Form.Select>
                            <option>USA</option>
                            <option>FRANCE</option>
                            <option>GEORGIA</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Text>Number of errors</Form.Text>
                    <FormRange />
                    <Form.Control />
                    <Form.Control />
                    <Button>Random</Button>
                </div>
                <div>
                    <Table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>*</td>
                                <td>Otto Nick Vachovski</td>
                                <td>Batumi, Kobaladze 2</td>
                                <td>+9955723582</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>*</td>
                                <td>Otto Nick Vachovski</td>
                                <td>Batumi, Kobaladze 2</td>
                                <td>+9955723582</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>*</td>
                                <td>Otto Nick Vachovski</td>
                                <td>Batumi, Kobaladze 2</td>
                                <td>+9955723582</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>*</td>
                                <td>Otto Nick Vachovski</td>
                                <td>Batumi, Kobaladze 2</td>
                                <td>+9955723582</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>*</td>
                                <td>Otto Nick Vachovski</td>
                                <td>Batumi, Kobaladze 2</td>
                                <td>+9955723582</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default App;
