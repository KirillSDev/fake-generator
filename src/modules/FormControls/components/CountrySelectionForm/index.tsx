import { FC, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { GlobalContext, FormContextType } from '@context';

export const CountrySelectionForm: FC = (): JSX.Element => {
    const { setLocale } = useContext(GlobalContext) as FormContextType;
    const changeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const locationValue = event.target.value;
        setLocale(locationValue);
    };
    return (
        <Form.Group>
            <Form.Label>Choose country</Form.Label>
            <Form.Select onChange={changeCountry} defaultValue={'NORWAY'}>
                <option>NORWAY</option>
                <option>FRANCE</option>
                <option>GEORGIA</option>
            </Form.Select>
        </Form.Group>
    );
};
