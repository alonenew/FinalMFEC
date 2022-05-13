import { useEffect, useState } from "react"

export default function CategoryAPI(){
    const [dataCategory, setDataCategory] = useState([]);
    
    const BASE_URL = "http://localhost:8080";
    useEffect(() => {
      fetch(BASE_URL+'/category/all')
        .then(res => res.json())
        .then(dataCategory => setDataCategory(dataCategory))
    }, []);
    
    return dataCategory;
}
