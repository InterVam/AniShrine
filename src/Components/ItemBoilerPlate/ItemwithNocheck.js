import React from "react";
import { Check, Data, Prod ,Image,Randdiv } from "./ItemwithNocheckStyles";
import HeartCheckbox from 'react-heart-checkbox';
import { AuthenticatedUser } from "../../Context/authUser";
import { useContext , useState} from "react";
const Item2 = ({product}) => {
    const {images,mal_id,title}=product
    const { user ,setUser ,logOutUser} = useContext(AuthenticatedUser);
    console.log(product)
    return ( 
    <Prod key={mal_id}>
       
        {/* {product.mal_id?<Data>{product.mal_id}</Data>:<Data>Error</Data>} */}
        {images?<Image src={images.jpg.large_image_url}></Image>:<Data>Error</Data>}
       
        {title?<Data>{title}</Data>:<Data>Error</Data>}  
      
        
       
    </Prod> );
}
export default Item2;