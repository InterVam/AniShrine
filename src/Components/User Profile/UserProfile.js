import { Page , Userimg ,Hellouser ,Uploaddiv, Anifav ,NavBtnLink} from "./UserProfileStyles";
import { AuthenticatedUser } from "../../Context/authUser";
import { useContext , useState} from "react";
import {storage , auth} from "../../Configs/firebaseConf"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile ,signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
const UserProfile = () => {
    const history = useHistory();
    const { user ,setUser ,logOutUser} = useContext(AuthenticatedUser);
   const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0)
   
    const handleSignOut = ()=>{
        logOutUser();
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          history.push("/home");
    }


  // Handle file upload event and update state
   function handleChange(event) {
        setFile(event.target.files[0]);
        }
     
        const handleUpload = () => {
            if (!file) {
                alert("Please upload an image first!");
            }
     
            const storageRef = ref(storage, `/files/${file.name}`);
     
            // progress can be paused and resumed. It also exposes progress updates.
            // Receives the storage reference and the file to upload.
            const uploadTask = uploadBytesResumable(storageRef, file);
     
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
     
                    // update progress
               setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                    updateProfile(auth.currentUser, {
                        photoURL: url
                    })
                    setUser({ 
                        uid: user.uid,
                        name: auth.currentUser.displayName,
                        photoURL: auth.currentUser.photoURL,
                        loggedIn: true,})
                        
    });
    }
        );
    };
    return (
    <Page>
    <Uploaddiv>
         <Userimg src={user.photoURL}></Userimg>
        <input type="file" onChange={handleChange} accept="/image/*"></input>
        <button style={{marginBottom: "30px"}}onClick={handleUpload}>Upload New Profile Picture</button>
    </Uploaddiv>
        <Hellouser>Hello , {user.name}</Hellouser>
    <Uploaddiv>
        <Anifav>Number of Anime Favourited</Anifav>
        <NavBtnLink onClick={handleSignOut}>Sign Out</NavBtnLink>
    </Uploaddiv>
    </Page> );
}
 
export default UserProfile;