import React, {useState} from "react";
import { question } from "./api";
import Accord from './Accord';
function Accordian() {
    const [data , setData]= useState(question);
  return (
    <div>
    {
        data.map((curr)=>{
            const {id} = curr;
            return <Accord key={id}  {...curr}/>
        })
    }
    </div>
  );
}

export default Accordian;
