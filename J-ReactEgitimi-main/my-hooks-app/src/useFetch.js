import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([]);

    const getList= () =>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setData(data)
        })
    }

    useEffect(()=> {
        getList();
    }, [url])

  return {data, getList};
}
