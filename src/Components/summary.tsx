import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Loader from './loader'
import Card from 'react-bootstrap/Card'

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summaryData : null,
            total: 0,
            payablePerson:  "",
            payableAmount:  0,
            loaded : false
        };
      }

      componentDidMount() {
        if (this.state.summaryData == null) {
            axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/summary`)
            .then(res => {
                const data = res.data;
                this.setState({ summaryData : data });
                let total = 0;
                let max = 0;
                let payablePerson =  "";
                let tempAmount =  0;
                for (let key in data) {
                    if (Number(data[key]) > max) {
                        max = Number(data[key])
                        payablePerson = key;
                    }
                    else {
                        tempAmount = tempAmount + Number(data[key])
                    }
                    total = total + Number(data[key]);
                }
                this.setState({ total });
                this.setState({ payablePerson });
                this.setState({ payableAmount: data[payablePerson] - tempAmount });
                this.setState({ loaded : true });
                console.log(this.state)
              })
            }
        }

      render () {
        if (this.state.loaded) {
        return (
            <>
            <Card body>Total: {this.state.total}</Card>
            {
                Object.entries(this.state.summaryData).map( 
                    ([key, value]) => <Card body>{key} has paid Rs.{value} till now</Card> 
                    )
            }
            <Card body>Pay {this.state.payablePerson}: {this.state.payableAmount}</Card>
            </>
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

export default Summary