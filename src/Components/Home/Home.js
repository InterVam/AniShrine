import {Page,Img,Desc,Nav,Comp,Title,Arrow} from "./HomeStyle"

import { FaArrowRight ,FaArrowLeft } from "react-icons/fa"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const baseURL = "https://api.jikan.moe/v4/top/anime";
  const params = new URLSearchParams([['limit' , 5]]);
  const [post, setPost] = useState(null);
  const [pageNo , setPageNo] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    axios.get(baseURL,{params}).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  const handleOnFrwrdClick = () =>{
    if(pageNo === 4)
      setPageNo(0)
    else
      setPageNo(pageNo+1)

   }
  const handleOnBkwrdClick = () =>{
    if(pageNo === 4 && !flag){
      setPageNo(0)
      setFlag(false)
    }
    else if(pageNo === 0 && flag){
      setFlag(true)
      setPageNo(4)}  
    else{
        setPageNo(pageNo-1)}
    
  }
console.log(pageNo)
console.log(post);

    return (
    <Page
 
    >
     <Comp>
       <Img src={post.data[pageNo].images.jpg.large_image_url}></Img>
       <Desc>
       {post.data[pageNo].synopsis}
       </Desc>
       <Title>
        {post.data[pageNo].title} 
       </Title>
       <Nav>
       <Arrow onClick={handleOnBkwrdClick}><FaArrowLeft size={100}/></Arrow>
       <Arrow onClick={handleOnFrwrdClick}><FaArrowRight size={100}/></Arrow>
       </Nav>
      </Comp>
    </Page>);
}
 
export default Home;