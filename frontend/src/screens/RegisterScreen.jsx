import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, Row, Col, FormLabel, FormControl} from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={ submitHandler}>
            <Form.Group className="my-2" controlId='name'>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={ (e) => setName(e.target.value)}
                    ></FormControl>
                    </Form.Group> 
                <Form.Group className="my-2" controlId='email'>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={ (e) => setEmail(e.target.value)}
                    ></FormControl>  
                </Form.Group>
                <Form.Group className="my-2" controlId='password'>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={ (e) => setPassword(e.target.value)}
                    ></FormControl>  
                </Form.Group>
                <Form.Group className="my-2" controlId='confirmPassword'>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={ (e) => setConfirmPassword(e.target.value)}
                    ></FormControl>
                    </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
                    Sign Up
                </Button>
                <Row className="py-3">
                    <Col>
                    Already have an account <Link to="/login">Login</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>

    );
};
export default RegisterScreen;