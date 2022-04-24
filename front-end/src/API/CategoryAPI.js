import { useEffect, useState } from "react"

export default function CategoryAPI(){
    const [dataCategory, setDataCategory] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:8080/category/all')
        .then(res => res.json())
        .then(dataCategory => setDataCategory(dataCategory))
    }, []);
    
    return dataCategory;
}
