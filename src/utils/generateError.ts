import random from 'random';
import { generateType } from './generateType';
import { getCountryAlphabet } from './getCountryAlphabet';
export const generateError = (value: string, errors: number, seed: number, locale: string) => {
    const minLength = 8;
    const maxLength = 40;
    const integerPart = Math.floor(errors);
    const rng = random.clone(seed);
    let numberOfErrors = 0;
    if (!Number.isInteger(errors) && rng.float() <= errors % 1) {
        numberOfErrors = 1;
    }
    const totalErrors = integerPart + numberOfErrors;
    for (let i = 0; i < totalErrors; i++) {
        const alphabet = getCountryAlphabet(locale);
        const type = generateType(seed);
        const randomIndex = rng.int(0, value.length);
        const randomIndexByLocale = rng.int(0, alphabet.length - 1);
        const permutationIndex = rng.int(0, value.length - 1);
        const letter = alphabet[randomIndexByLocale];
        if (value.length < minLength) {
            const addErrors = Math.min(totalErrors - i, minLength - value.length);
            for (let j = 0; j < addErrors; j++) {
                const insertIndex = rng.int(0, value.length);
                value = value.slice(0, insertIndex) + letter + value.slice(insertIndex);
                i++;
            }
            continue;
        }

        if (value.length > maxLength) {
            const deleteErrors = Math.min(totalErrors - i, value.length - maxLength);
            for (let j = 0; j < deleteErrors; j++) {
                const deleteIndex = rng.int(0, value.length - 1);
                value = value.slice(0, deleteIndex) + value.slice(deleteIndex + 1);
                i++;
            }
            continue;
        }
        switch (type) {
            case 'add':
                value = value.slice(0, randomIndex) + letter + value.slice(randomIndex);
                break;
            case 'delete':
                value = value.slice(0, randomIndex) + value.slice(randomIndex + 1);
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

    return value.trim();
};
