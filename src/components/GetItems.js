import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetItems = () => {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(localStorage.token);

  useEffect(() => {
    console.log(localStorage.token);
    axios.get('http://localhost:3001/api/items',

      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }


    ).then((res) => {
      setItems(res.data)

    })
  }, [])

  return <>
    {console.log(items)}
    {/* <button onClick={handelClick}>reload</button> */}
    {/* <input type="text" ref={tokenRef} placeholder="enter token" /> */}

  </>
}


export default GetItems