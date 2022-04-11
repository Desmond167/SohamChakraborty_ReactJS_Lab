import React from 'react';
import { Component } from 'react';
import Expenses from './table.tsx';
import Summary from './summary.tsx';
import Header from './header';
import AddExpense from './addExpense.tsx';

class Dashboard extends Component {
    
    render () {
        return (
            <>
                <Header />
                <AddExpense />
                <Expenses/>
                <hr />
                <Summary />
            </>
        )
    }
}

export default Dashboard