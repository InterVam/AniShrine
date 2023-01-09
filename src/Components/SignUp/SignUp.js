import { Button, Div, Form, Input, LinkStart ,Err} from "./SignUpStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword  , updateProfile } from "firebase/auth";
import {auth} from "../../Configs/firebaseConf"
import { AuthenticatedUser } from "../../Context/authUser";
import { useContext } from "react";
import {  doc, setDoc } from "firebase/firestore";
import {app} from "../../Configs/firebaseConf";
import { getFirestore } from "firebase/firestore";
const SignUp = () => {
    const { setUser } = useContext(AuthenticatedUser);
    const history = useHistory();
    const db = getFirestore(app);
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
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                  ),
            
        }),
        onSubmit: async () => {
         createUserWithEmailAndPassword(auth, formik.values.email , formik.values.password)
         .then((userCredential) => {
            console.log("hey")
           const user = userCredential.user;
           setUser({ 
            uid: user.uid,
            name: formik.values.username,
            photoURL: "https://media.discordapp.net/attachments/646090028170346537/1061781171622662205/pngwing.com_1.png",
            loggedIn: true,
        anime:[""]})
            updateProfile(auth.currentUser, {
             displayName: formik.values.username,
             photoURL: "https://media.discordapp.net/attachments/646090028170346537/1061781171622662205/pngwing.com_1.png"
           }).then(()=>{
             console.log(auth.currentUser.displayName);
             history.push("/home"); // New line
               const docwork = doc(db, "users",user.uid)
               
             try  {
                const docRef = setDoc(docwork, {
                 data:"0"
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
           })
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           // ..
           console.log(errorMessage)
         });
         console.log(formik.values.password)
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
