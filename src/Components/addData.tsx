import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Select Name",
            product_purchased: "",
            price: 0,
            date: 'mm/dd/yyyy',
            valid: false
        };
      }

    updateName(e) {
        this.setState({name: e.target.innerText})
    }

    updateProduct(e) {
        this.setState({product_purchased: e.target.value})
    }
    updatePrice(e) {
        this.setState({price: Number(e.target.value)})
    }
    updateDate(e) {
        this.setState({date: e.target.value})
    }

    submitForm(event) {
        let error_messages = []
        if (typeof(this.state.name)!="string") {
            error_messages.push("Name should only be string")
        }
        if (typeof(this.state.price)!="number") {
            error_messages.push("Price should only be number")
        }
        if (error_messages.length == 0) {
            axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/expense`,
            {
                date: this.state.date,
                product_purchased: this.state.product,
                price: this.state.price,
                payee: this.state.name
            }
            ).then(res => {
                console.log("RESP");
                console.log(res);
             })
            }
        else {
            alert(error_messages)
        }
    }
    
    render() {
        // console.log(this.state);
        return (
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Text className="text-muted">
                        Read the below details before proceeding. Make sure you fill all the details.
                        </Form.Text>
                        <br />
                        <Form.Label>Name *</Form.Label>
                        {/* <Form.Control type="Name" placeholder="Enter your Name...." /> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {this.state.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(event: React.MouseEvent<HTMLElement>) => {this.updateName(event)}}>Ramesh</Dropdown.Item>
                                <Dropdown.Item onClick={(event: React.MouseEvent<HTMLElement>) => {this.updateName(event)}}>Rahul</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Product Purchased *</Form.Label>
                        <Form.Control value={this.state.product_purchased} type="text" placeholder="Product Purchased ...." onChange={event => this.updateProduct(event)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Price *</Form.Label>
                        <Form.Control value={this.state.price} type="text" placeholder="Price of the product ...." onChange={event => this.updatePrice(event)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Date *</Form.Label>
                        {/* <Form.Control type="text" placeholder="Date you purchased the product ...." /> */}
                        <Form.Control value={this.state.date} type="date" name='date' onChange={event => this.updateDate(event)}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={(event: React.MouseEvent<HTMLElement>) => {this.submitForm(event)}}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default AddData