export const getCountryAlphabet = (locale: string): string => {
    const georgianAlphabet = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
    const frenchAlphabet = 'abcdefghijklmnopqrstuvwxyzàâçéèêëîïôœùûüÿ';
    const norwegianAlphabet = 'abcdefghijklmnopqrstuvwxyzæøå';
    const countryAlphabet = () => {
        if (locale === 'GEORGIA') {
            return georgianAlphabet;
        } else if (locale === 'NORWAY') {
            return norwegianAlphabet;
        } else {
            return frenchAlphabet;
        }
    };
    return countryAlphabet();
};
