import random from 'random';
import { generateType } from './generateType';
import { Faker } from '@faker-js/faker';
import { getCountryAlphabet } from './getCountryAlphabet';
export const generateError = (faker: Faker, value: string, errors: number, locale: string) => {
    const integerPart = Math.floor(errors);

    let numberOfErrors = 0;
    if (!Number.isInteger(errors) && random.float() <= errors % 1) {
        numberOfErrors = 1;
    }
    const totalErrors = integerPart + numberOfErrors;
    for (let i = 0; i < totalErrors; i++) {
        const alphabet = getCountryAlphabet(locale);
        const type = generateType();
        const randomIndex = random.int(0, value.length);
        const randomIndexByLocale = random.int(0, alphabet.length - 1);
        const permutationIndex = random.int(0, value.length - 1);
        const letter = alphabet[randomIndexByLocale];

        if (value.length < 40) {
            switch (type) {
                case 'delete':
                    value = value.slice(0, randomIndex) + value.slice(randomIndex + 1);
                    break;
                case 'add':
                    value = value.slice(0, randomIndex) + letter + value.slice(randomIndex);
                    break;
                case 'permute':
                    let b = '';
                    let a = value[permutationIndex];
                    if (value.length === permutationIndex + 1) {
                        b = value[permutationIndex - 1];
                    } else {
                        b = value[permutationIndex + 1];
                    }
                    value = value.slice(0, permutationIndex) + b + a + value.slice(permutationIndex + 2);
                    break;
            }
        }
    }

    return value;
};
