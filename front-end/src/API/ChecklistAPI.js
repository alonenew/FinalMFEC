import { useEffect, useState } from "react"

export default function ChecklistAPI(){
    const [dataChecklist, setDataChecklist] = useState([]);

    const BASE_URL = "http://localhost:8080";

    useEffect(() => {
      fetch(BASE_URL+'/checklist/all')
        .then(res => res.json())
        .then(dataChecklist => setDataChecklist(dataChecklist))
    }, []);
    
    return dataChecklist;
}
