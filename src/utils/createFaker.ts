import { LocaleDefinition, nb_NO, fr, ka_GE, Faker } from '@faker-js/faker';

export const createFakerByLocate = (localeProps: string) => {
    const localeMap: Record<string, LocaleDefinition> = {
        NORWAY: nb_NO,
        FRANCE: fr,
        GEORGIA: ka_GE,
    };

    const myFaker = new Faker({
        locale: localeMap[localeProps],
    });
    return myFaker;
};
