import { useEffect, useState } from "react"

export default function ChecklistAPI(){
    const [dataChecklist, setDataChecklist] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:8080/checklist/all')
        .then(res => res.json())
        .then(dataChecklist => setDataChecklist(dataChecklist))
    }, []);
    
    return dataChecklist;
}
