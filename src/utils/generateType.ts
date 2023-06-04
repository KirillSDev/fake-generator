import random from 'random';
export const generateType = () => {
    const types = ['delete', 'add', 'permute'];
    const randomIndex = random.int(0, types.length - 1);
    const type = types[randomIndex];
    return type;
};
