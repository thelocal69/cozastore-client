import React from 'react';
import { Wrapper, Form, Input, Button, Title } from './Style';

const Login = () => {

    const handleSubmit = () => {

    }

    return (
        <>
            <Wrapper>
                <Form onSubmit={handleSubmit}>
                    <Title>Login</Title>
                    <Input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder='Password'
                    />
                    <div class="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                    <Button>Login</Button>
                    <div class="signup-link">
                        Not a member? <a href="">Signup now</a>
                    </div>
                </Form>
            </Wrapper>
        </>
    )
}

export default Login