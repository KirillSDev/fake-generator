import { IData } from '@interfaces/data';
import { createFakerByLocate } from '@utils/createFaker';
import { generateError } from '@utils/generateError';

self.onmessage = (event) => {
    const { data, errors, locale } = event.data;
    const myFaker = createFakerByLocate(locale);
    const updatedData = data.map((item: IData) => {
        const obj = { ...item };
        obj.fullName = generateError(myFaker, obj.fullName, errors, locale);
        obj.address = generateError(myFaker, obj.address, errors, locale);
        obj.phone = generateError(myFaker, obj.phone, errors, locale);
        return obj;
    });

    self.postMessage({ updatedData });
};

export {};
