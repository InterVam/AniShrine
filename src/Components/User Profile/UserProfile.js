import { Page , Userimg ,Hellouser ,Uploaddiv, Anifav ,NavBtnLink} from "./UserProfileStyles";
import { AuthenticatedUser } from "../../Context/authUser";
import { useContext , useState} from "react";
import {storage , auth , app} from "../../Configs/firebaseConf"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile ,signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { doc, collection, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import axios from "axios";
import Item2 from "../ItemBoilerPlate/ItemwithNocheck";
const UserProfile = () => {
    const history = useHistory();
    const [isLoading, setLoading] = useState(true);
    const { user ,setUser ,logOutUser} = useContext(AuthenticatedUser);
   const [file, setFile] = useState("");
   const [myAnime, setMyAnime] = useState();
   const [loaded, setLoaded] = useState(false)
   const [post, setPost] = useState(false)

    const [percent, setPercent] = useState(0)
    const db = getFirestore(app);

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
    const posts = []

    const baseURL = "https://api.jikan.moe/v4/anime/";
    const fetchData = async ()=>{
        const docwork = doc(db, "users",user.uid)
        const docSnap = await getDoc(docwork);

        if (docSnap.exists()) {
          console.log( docSnap.data());
          docSnap.data().data.forEach(async(item)=>{
        await axios.get(baseURL+item,{params:{}}).then((response)=>posts.push(response.data)).finally(()=>{setMyAnime(posts)});

    }
   
    )
        } 
    }

    // console.log(myAnime)

    useEffect( () => {
         fetchData();
        console.log(posts)
      }, []);
    
      
if (myAnime==undefined)  {return(<div>LOADING</div>)}
    return (
        <Page>
        <Uploaddiv>
             <Userimg src={user.photoURL}></Userimg>
            <input type="file" onChange={handleChange} accept="/image/*"></input>
            <button style={{marginBottom: "30px"}}onClick={handleUpload}>Upload New Profile Picture</button>
        </Uploaddiv>
            <Hellouser>Hello , {user.name}</Hellouser>
        <Uploaddiv>
            <Anifav>Number of Anime Favourited {myAnime.length}</Anifav>
            <NavBtnLink onClick={handleSignOut}>Sign Out</NavBtnLink>
        </Uploaddiv>
        <Uploaddiv>
    
        {myAnime.map((item)=><Item2 product={item.data}/>)}
        {/* {console.log(myAnime)} */}
      {/* {console.log(post.map((item)=><Item2 product={item}/>))} */}
        </Uploaddiv>
        </Page> );

}


  

 
export default UserProfile;