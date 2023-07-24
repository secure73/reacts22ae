import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import HttpService from "../service/HttpService";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      HttpService.get("https://dummyjson.com/products")
        .then((res) => {
          //console.log(res);
          setData(res.data.products);
          console.log(data);
          return false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  return (
    <Fragment>
      <div>Products</div>

      <div className="products">
        {data ? data.map((permission) => <li>hiii</li>) : <tr></tr>}
      </div>

      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setData("Ali")}
        >
          Make effect
        </button>
      </div>
    </Fragment>
  );
}

export default Products;
