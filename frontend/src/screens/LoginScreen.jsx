import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, Row, Col, FormLabel, FormControl} from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={ submitHandler}>
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

                <Button type="submit" variant="primary" className="mt-3">
                    Sign In
                </Button>
                <Row className="py-3">
                    <Col>
                    New Customer? <Link to="/register">Register</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>

    );
};
export default LoginScreen;