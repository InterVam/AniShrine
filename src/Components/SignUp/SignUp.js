import { Button, Div, Form, Input, LinkStart ,Err} from "./SignUpStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            username:"",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required!'),
            email: Yup.string()
                .required('Required!')
                .email('enter valid email'),
            password: Yup.string()
                .required('Required!')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                  ),
            
        }),
        onSubmit: () => {

            console.log("okay")
        }
    });


    return ( <Div>
        <Form className="SignUp" onSubmit={formik.handleSubmit}>
        <LinkStart>Let's Get Started</LinkStart>
            <Input
                name="username"
                id="username"
                type="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
{formik.errors.username && formik.touched.username ? <Err className="errorMsg">{formik.errors.username}</Err> : null}
             <Input
                 name="email"
                id="email"
                type="email"
                placeholder="Email Adress"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
{formik.errors.email && formik.touched.email ? <Err className="errorMsg">{formik.errors.email}</Err> : null}
            <Input
             name="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password ? <Err className="errorMsg">{formik.errors.password}</Err> : null}
            <Button type="submit">Sign Up</Button>
        </Form>
    </Div> );
}
 
export default SignUp;