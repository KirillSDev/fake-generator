import { IData } from '@interfaces/data';
import { createFakerByLocate } from '@utils/createFaker';
import { generateError } from '@utils/generateError';

self.onmessage = (event) => {
    const { data, errors, locale, seed } = event.data;
    const updatedData = data.map((item: IData) => {
        const obj = { ...item };
        obj.fullName = generateError(obj.fullName, errors, seed, locale);
        obj.address = generateError(obj.address, errors, seed, locale);
        obj.phone = generateError(obj.phone, errors, seed, locale);
        return obj;
    });

    self.postMessage({ updatedData });
};

export {};
