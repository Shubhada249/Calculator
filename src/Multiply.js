import React,{useContext} from 'react';
import {Numbers} from "./App";

function Multiply() {
    const val = useContext(Numbers);
    const n1=val.val1;
    const n2=val.val2;
    return <h1>{n1} * {n2} = {n1*n2} </h1>;
}

export default Multiply;
