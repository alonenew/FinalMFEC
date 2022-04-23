import { useEffect } from "react";

function createTask() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/tasklist/create')

    })
}

export default createTask;