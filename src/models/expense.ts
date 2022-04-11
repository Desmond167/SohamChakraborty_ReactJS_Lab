
type ExpenseDataType = {
        id: number;
        date: string;
        product_purchased: string;
        price: number;
        payee: string;
    };

type TableState = {
    tableData: ExpenseDataType[];
    loaded: boolean;
};

let expenseData:ExpenseDataType[]

export default TableState