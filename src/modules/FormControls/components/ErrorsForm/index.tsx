import { FC, useContext } from 'react';
import { Form } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import { GlobalContext, FormContextType } from '@context';

export const ErrorsForm: FC = (): JSX.Element => {
    const { errors, setErrors } = useContext(GlobalContext) as FormContextType;
    const changeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) > 1000) {
            setErrors(1000);
        } else {
            setErrors(Number(event.target.value));
        }
    };

    return (
        <div>
            <Form.Text className={'text-white'}>Number of errors: {errors}</Form.Text>
            <FormRange step={0.1} onChange={changeRange} value={errors} max={10} />
            <Form.Control step={0.1} type='number' onChange={changeRange} value={errors} min={0} max={1000} />
        </div>
    );
};
