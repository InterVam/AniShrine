import { Button, Div, Form, Input, LinkStart } from "./SignInStyles";

const SignIn = () => {
    return ( <Div>
        <Form className="Signin">
        <LinkStart>Link Start</LinkStart>
            <Input
            type="text"
            placeholder="Username"
            required></Input>
            
            <Input
            type="password"
            placeholder="Password"
            requires></Input>
            <Button>Sign In</Button>
        </Form>
    </Div> );
}
 
export default SignIn;