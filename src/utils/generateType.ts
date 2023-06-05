import random from 'random';
export const generateType = (seed: number) => {
    const rng = random.clone(seed);
    const types = ['delete', 'add', 'permute'];
    const randomIndex = rng.int(0, types.length - 1);
    const type = types[randomIndex];
    return type;
};
