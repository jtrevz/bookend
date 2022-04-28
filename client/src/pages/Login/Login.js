import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'
import styles from './../Signup/styles'

function Login () {
    return (
        <div className='signup'>
        <Container className='signUpContent'>
        <Row>
            <Col className='col-xs-6 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3'>
                <h2 className='banner'>Welcome to Bookend!</h2>
                <Form className='form'>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="fName" placeholder="First Name" />
                        </Form.Group>    
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lName" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                        <Button className='btn-custom float-end' 
                                type="submit"
                                style={styles.customButton}
                                >
                                Submit
                        </Button>

                <h5 className='smallBanner'>Don't have an account? <a href='./signup'>Sign Up</a></h5>
                </Form>
            </Col>
        </Row>
      </Container>
      </div>
    )
}

export default Login;
