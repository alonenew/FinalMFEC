import { useEffect, useState } from "react"

export default function CategoryAPI(){
    const [dataCategory, setDataCategory] = useState([]);
    const [err, setErr] = useState(false);
    
    useEffect(() => {
      fetch('http://localhost:8080/category/all')
        .then(res => res.json())
        .then(dataCategory => setDataCategory(dataCategory))
        .catch((err) => setErr(err));
        console.log(err);
    }, []);
    
    return dataCategory;
}
