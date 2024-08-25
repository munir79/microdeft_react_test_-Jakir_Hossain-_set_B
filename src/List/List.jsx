import React, 
{ useEffect, useState } from 'react';
import Card from '../Card';

const List = () => {
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    } ,[])
    return (
        <div>
            {
                product.map(pr=> <Card key={pr.id} pr={pr}></Card>)
            }
        </div>
    );
};

export default List;