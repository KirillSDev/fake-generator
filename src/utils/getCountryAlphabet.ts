export const getCountryAlphabet = (locale: string): string => {
    const georgianAlphabet = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
    const frenchAlphabet = 'abcdefghijklmnopqrstuvwxyzàâçéèêëîïôœùûüÿ';
    const norwegianAlphabet = 'abcdefghijklmnopqrstuvwxyzæøå';
    const countryAlphabet = () => {
        switch (locale) {
            case 'GEORGIA':
                return georgianAlphabet;
            case 'NORWAY':
                return norwegianAlphabet;
            case 'FRANCE':
                return frenchAlphabet;
            default:
                return 'abcdefghijklmnopqrstuvwxyz';
        }
    };
    return countryAlphabet();
};
