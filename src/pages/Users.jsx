import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import HttpService from "../service/HttpService";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      HttpService.get("https://dummyjson.com/users")
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
/*          "id": 1,
"firstName": "Terry",
"lastName": "Medhurst",
*/
  return (
    <Fragment>
      <ul className="products">
        {data ? data.map((usersss) => <li>{usersss.id}, Fname: {usersss.firstName} , Lnamw : {usersss.lastName} </li>) : <tr></tr>}
      </ul>
    </Fragment>
  );
}

export default Users;
