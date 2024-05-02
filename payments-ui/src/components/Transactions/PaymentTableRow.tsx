import { PaymentType } from "../../data/DataFunctions";

const PaymentTableRow = (props: PaymentType) : JSX.Element => {
    const { id, orderId, date, country, currency, amount } = props
    return <tr>
        <td>{id}</td>
        <td>{orderId}</td>
        <td>{date}</td>
        <td>{country}</td>
        <td>{currency}</td>
        <td>{amount}</td>
</tr>;
};

export default PaymentTableRow;