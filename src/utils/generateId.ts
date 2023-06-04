import CryptoJS from 'crypto-js';

export const generateId = (seed: number, fullname: string, address: string, phone: string) => {
    const data = seed + fullname + address + phone;
    const hash = CryptoJS.SHA256(data);
    return hash.toString(CryptoJS.enc.Hex).slice(0, 6);
};
