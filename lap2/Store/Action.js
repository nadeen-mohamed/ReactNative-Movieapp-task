import axios from "axios"

export const CartAction  = () => (payload) => {
    return{
        type: "ADD_TO_CART",
        payload
  
    }
          
    
  }
  export const RemoveFavorite=(payload)=>{
    return {
        type: "REMOVE",
        payload
    }
}
 export const Counter=(payload)=>{
    return {
        type: "CHANGECOUNT",
        payload
    }
}