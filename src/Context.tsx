import { IData } from '@interfaces/data';
import random from 'random';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from 'react';

export interface FormContextType {
    seed: number;
    setSeed: Dispatch<SetStateAction<number>>;
    locale: string;
    setLocale: Dispatch<SetStateAction<string>>;
    errors: number;
    setErrors: Dispatch<SetStateAction<number>>;
    data: IData[];
    setData: Dispatch<SetStateAction<IData[]>>;
    dataWithErrors: IData[];
    setDataWithErrors: Dispatch<SetStateAction<IData[]>>;
}

export const GlobalContext = createContext<FormContextType | null>(null);

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<IData[]>([]);
    const [dataWithErrors, setDataWithErrors] = useState<IData[]>([]);
    const [seed, setSeed] = useState<number>(random.int(0, 100000));
    const [locale, setLocale] = useState<string>('NORWAY');
    const [errors, setErrors] = useState<number>(0);
    const value = {
        seed,
        setSeed,
        locale,
        setLocale,
        errors,
        setErrors,
        data,
        setData,
        dataWithErrors,
        setDataWithErrors,
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default ContextProvider;
