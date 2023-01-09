import { Page , Prdcts } from "./AnimeStyles";
import axios from "axios";
import React from "react";
import { useState , useEffect , useContext} from 'react';
import Item from "../ItemBoilerPlate/Item";
import {  doc, setDoc } from "firebase/firestore";
import {app} from "../../Configs/firebaseConf";
import { getFirestore } from "firebase/firestore";
import { AuthenticatedUser } from "../../Context/authUser";

const Anime = () => {
    const baseURL = "https://api.jikan.moe/v4/top/anime";
    const { user ,setUser ,logOutUser} = useContext(AuthenticatedUser);
    const params = new URLSearchParams([['limit' , 20]]);
    const [post, setPost] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [mal_id, setmal_id] = useState([]);
    const db = getFirestore(app);

   

    useEffect(() => {
        axios.get(baseURL,{params}).then((response) => {
          setPost(response.data);
          setLoading(false);
   
        });
      }, []);
      if (!post) return null;


    console.log(post)
    if(isLoading){
        return <div className="App">Loading...</div>
    }


    const handleSelect =    prod => {
        if(mal_id.indexOf(prod) > -1){
            setmal_id(oldValues => {
                return oldValues.filter(item => item !== prod)})
          
        }
        else{setmal_id(current => [...current, prod]);}
        
        
    }


    const docwork = doc(db, "users",user.uid)
    try  {
      
       const docRef = setDoc(docwork, {
        data:mal_id
       });
       console.log("Document written with ID: ", docRef.id);
     } catch (e) {
       console.error("Error adding document: ", e);
     }
    

    return ( 
    <Page>
        <Prdcts>
            {post.data.map((item)=><Item product={item} onSelectProduct={handleSelect}/>)}
        </Prdcts>
    </Page>
    );
}
 
export default Anime;