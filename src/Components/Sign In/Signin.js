import { Button, Div, Form, Input, LinkStart,Err } from "./SignInStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required!')
                .email('enter valid email')
                ,
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
        <Form className="Signin" onSubmit={formik.handleSubmit}>
        <LinkStart>Link Start</LinkStart>
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
            <Button type="submit">Sign In</Button>
        </Form>
    </Div> );
}
 
export default SignIn;