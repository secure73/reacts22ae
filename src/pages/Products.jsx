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
      <div className="products">
        {data ? data.map((ptoduct) => <li>{ptoduct.title}, Price: {ptoduct.price} € </li>) : <tr></tr>}
      </div>
    </Fragment>
  );
}

export default Products;
