import { FC } from 'react';

interface ITableRow {
    number: number;
    id: string;
    fullName: string;
    address: string;
    phone: string;
}

export const TableRow: FC<ITableRow> = ({ number, id, fullName, address, phone }): JSX.Element => {
    return (
        <tr>
            <td className='col-1'>{number}</td>
            <td className='col-2'>{id}</td>
            <td className='col-6'>{fullName}</td>
            <td className='col-6'>{address}</td>
            <td className='col-6'>{phone}</td>
        </tr>
    );
};
