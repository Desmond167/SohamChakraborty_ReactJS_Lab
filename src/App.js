import React from 'react';
import { Component } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import Dashboard from './Components/dashboard.tsx';
import AddData from './Components/addData.tsx';

class App extends Component {

    render () {
        return (
            <>
                <Routes>
                    <Route path='/add' element={<AddData />}></Route>
                    <Route path='/' element={< Dashboard />}></Route>
                </Routes>
            </>
        )
    }
}

export default App;