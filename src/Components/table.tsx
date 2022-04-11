import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import ExpenseDataType from '../models/expense';
import Loader from './loader'

type Props = {
}

class Expenses extends Component<Props, ExpenseDataType> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
            tableData: [],
            loaded: false
        };
      }

      componentDidMount() {
        if (this.state.tableData.length == 0) {
            axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/expense`)
            .then(res => {
                const data = res.data;
                this.setState({ tableData : data });
                this.setState({ loaded : true });
              })
            }
        }

    render () {
        if (this.state.loaded) {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Product Purchased</th>
                        <th>Price</th>
                        <th>Payee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.tableData.map(
                            (obj) => (
                                    <tr key={ obj.id }>
                                        <td>{obj.id}</td>
                                        <td>{obj.date}</td>
                                        <td>{obj.product_purchased}</td>
                                        <td>{obj.price}</td>
                                        <td>{obj.payee}</td>
                                    </tr>
                            )
                        )
                    }
                    
                </tbody>
            </Table>
        )
                }
        else {
            return (
                <div className="text-center my-4">
                    <Loader />
                </div>
            )
        }
    }
}

export default Expenses;