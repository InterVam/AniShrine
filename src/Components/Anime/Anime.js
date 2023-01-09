import { Page , Label,ButtonGrp,Button ,TopBar, Prdcts , BottBar} from "./AnimeStyles";
import axios from "axios";
import React from "react";
import { useState , useEffect} from 'react';
import Item from "../ItemBoilerPlate/Item";


const Anime = () => {
    const baseURL = "https://api.jikan.moe/v4/top/anime";
    const params = new URLSearchParams([['limit' , 20]]);
    const [post, setPost] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [mal_id, setmal_id] = useState([]);
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
   

    const handleSelect = prod => {
        if(mal_id.indexOf(prod) > -1){
            setmal_id(oldValues => {
                return oldValues.filter(item => item !== prod)})
          
        }
        else{setmal_id(current => [...current, prod]);}
        
    }
    

        
    console.log(mal_id)
    return ( 
    <Page>
        <Prdcts>
            {post.data.map((item)=><Item product={item} onSelectProduct={handleSelect}/>)}
            
        </Prdcts>
    </Page>
    );
}
 
export default Anime;