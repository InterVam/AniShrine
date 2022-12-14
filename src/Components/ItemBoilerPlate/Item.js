import React from "react";
import { Check, Data, Prod ,Image,Randdiv } from "./ItemStyle";
import HeartCheckbox from 'react-heart-checkbox';
import { AuthenticatedUser } from "../../Context/authUser";
import { useContext , useState} from "react";
const Item = ({product,onSelectProduct}) => {
    const {images,mal_id,title}=product
    const { user ,setUser ,logOutUser} = useContext(AuthenticatedUser);

    return ( 
    <Prod key={mal_id}>
        <Randdiv>    
        <Check type="checkbox"
         id="heart"
         size="md"
         value={mal_id}
        onChange={(e)=>{const value = e.target.value;
                 onSelectProduct(value)}}
         ></Check>
        </Randdiv>
        {/* {product.mal_id?<Data>{product.mal_id}</Data>:<Data>Error</Data>} */}
        {images?<Image src={images.jpg.large_image_url}></Image>:<Data>Error</Data>}
       
        {title?<Data>{title}</Data>:<Data>Error</Data>}  
      
        
       
    </Prod> );
}
export default Item;