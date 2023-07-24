import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import HttpService from "../service/HttpService";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data.length);
    if  (data.length ===0)
    {
        HttpService.get('https://dummyjson.com/products').then((res)=>{
        setData(res.data.products);
        return false;
    }).catch((error) => {
        console.log(error)
    });
    }
  }, [data]);

  return (
    <Fragment>
      <div>Products</div>

      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>setData('Ali')}>
            
            Make effect
        </button>
      </div>
      {console.log(data)}
    </Fragment>
  );
}

export default Products;
