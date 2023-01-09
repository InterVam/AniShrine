import React from "react";
import { Check, Data, Prod } from "./ItemStyle";
const Item = ({product,onSelectProduct}) => {
    const {images,mal_id,title}=product
    return ( 
    <Prod key={mal_id}>
        <Check type="checkbox"
        onChange={(e)=>{const value = e.target.value;
                        const isChecked = e.target.checked;
                 onSelectProduct(value)}}
         value={mal_id}
         ></Check>
        {/* {product.mal_id?<Data>{product.mal_id}</Data>:<Data>Error</Data>} */}
        {title?<Data>{title}</Data>:<Data>Error</Data>}      
        {images?<img src={images.jpg.large_image_url}></img>:<Data>Error</Data>}
       
    </Prod> );
}
export default Item;