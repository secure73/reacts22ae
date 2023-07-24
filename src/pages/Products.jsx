import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Axios } from "axios";

function Products() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await Axios.get('https://dummyjson.com/products').then(response)

      setData(response.data); // Save the fetched data to the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log(data);
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
