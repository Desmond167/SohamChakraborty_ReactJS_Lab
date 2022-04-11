import React from 'react';
import { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'

class Loader extends Component {
    render () {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
}

export default Loader