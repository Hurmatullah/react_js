import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPendings] = useState(true);
    const [error, setErrors] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
            throw Error("I am sorry for now we are not able to fetch your data");
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setPendings(false);
            setErrors(null);
        }).catch(err => {
            setErrors("I am sorry, for now we are not able to fetch your data");
            setPendings(false);
        })
        }, 1000);
  }, [url]);

  return {data, pending, error}

}

export default useFetch;