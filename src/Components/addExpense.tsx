import React from 'react';
import { Component } from 'react';
import Button from 'react-bootstrap/Button'
import  { Redirect } from 'react-router-dom'

class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
      }

    getForm() {
        this.setState({clicked: true})
        window.location.href = "/add";
    }

    render() {
        return (
            <div className='m-3'>
                <Button variant="primary" size="lg" active onClick={(event: React.MouseEvent<HTMLElement>) => {this.getForm()}}>
                    Add Expense to List
                </Button>
            </div>
        )
    }
}

export default AddExpense