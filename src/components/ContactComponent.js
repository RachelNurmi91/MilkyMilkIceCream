import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormFeedback, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '',
            contactType: 'By Phone',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email); 

        return(
            <React.Fragment>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Flavors
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="content-container">
                    <div className="row">
                        <div className="col-12">
                            <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    invalid={errors.firstName}
                                    onBlur={this.handleBlur("firstName")}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                                </FormGroup>
                                <FormGroup> 
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            invalid={errors.email}
                                            onBlur={this.handleBlur("email")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup> 
                                        <div className="form-group">
                                            <Label htmlFor="message">Message</Label>
                                            <Input type="textarea" id="message" name="message" rows="5"
                                            value={this.state.message}
                                            onChange={this.handleInputChange}></Input>
                                        </div>
                                </FormGroup>

                                <Button type="submit" className="btn btn-green text-white">Submit</Button>
                            </Form>
                        </div>
                    </div>    
                </div>
                </React.Fragment>
        );
    }
}

export default Contact;