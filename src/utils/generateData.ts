import { Faker } from '@faker-js/faker';
import { IData } from '@interfaces/data';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { generateId } from './generateId';

export const generateData = (
    seed: number,
    faker: Faker,
    setData: Dispatch<SetStateAction<IData[]>>,
    setDataWithErrors: Dispatch<SetStateAction<IData[]>>,
    count: number
) => {
    const newData = Array.from({ length: count }).map(() => {
        const name = faker.person.fullName();
        const fullAddress = faker.location.streetAddress({ useFullAddress: true });
        const phoneNumber = faker.phone.number();
        const uniqueId = generateId(seed, name, fullAddress, phoneNumber);
        return {
            id: uniqueId,
            fullName: name,
            address: fullAddress,
            phone: phoneNumber,
        };
    });

    setData((prevData) => (count === 10 ? [...prevData, ...newData] : newData));
    setDataWithErrors((prevData) => (count === 10 ? [...prevData, ...newData] : newData));
};
