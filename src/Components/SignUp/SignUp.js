import { Button, Div, Form, Input, LinkStart } from "./SignUpStyles";
const SignUp = () => {
    return ( <Div>
        <Form className="Signin">
        <LinkStart>Let's Get Started</LinkStart>
            <Input
            type="text"
            placeholder="Username"
            required></Input>
             <Input
            type="email"
            placeholder="Email"
            required></Input>
            <Input
            type="password"
            placeholder="Password"
            requires></Input>
            <Button>Sign Up</Button>
        </Form>
    </Div> );
}
 
export default SignUp;