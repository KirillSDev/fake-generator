import { ChangeEvent, FC, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './styles.module.scss';
import random from 'random';
import { GlobalContext, FormContextType } from '@context';

export const SeedForm: FC = (): JSX.Element => {
    const { seed, setSeed } = useContext(GlobalContext) as FormContextType;
    const generateSeed = () => {
        const randomSeed = random.int(0, 100000);
        setSeed(randomSeed);
    };
    const changeSeed = (event: ChangeEvent<HTMLInputElement>) => {
        setSeed(Number(event.target.value));
    };

    return (
        <div className={styles.container}>
            <Form.Text className='text-center text-white'>Seed</Form.Text>
            <Form.Control onChange={changeSeed} type='number' value={seed} />
            <Button onClick={generateSeed} className={styles.button}>
                Random
            </Button>
        </div>
    );
};
