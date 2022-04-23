import { useState , useEffect } from "react";

const URL_ALL = 'http://localhost:8080/tasklist/all';
const URL_UPDATE = 'http://localhost:8080/tasklist/update';

export const getAll = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(URL_ALL)
        .then((resp) => resp.json())
        .then((data) => {
            setData(data);
        });
    }, [path]);
    return {data}
};


export const update = (path) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(URL_UPDATE + path)
        .then((resp) => resp.json())
        .then((data) => {
            setData(data);
        });
    }, [path]);
    return {data}
};



export { getAll , update};