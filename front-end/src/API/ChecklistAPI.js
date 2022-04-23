import { useEffect, useState } from "react"

export default function ChecklistAPI(){
    const [dataChecklist, setDataChecklist] = useState([]);
    const [err, setErr] = useState(false);
    
    useEffect(() => {
      fetch('http://localhost:8080/checklist/all')
        .then(res => res.json())
        .then(dataChecklist => setDataChecklist(dataChecklist))
        .catch((err) => setErr(err));
        console.log(err);
    }, []);
    
    return dataChecklist;
}
