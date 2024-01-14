import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/demo')
            .then((res) => {
                setHello(res.data);
            })
            .catch((error)=> console.log(error))
    }, []);
    return (
        <div className="App">
            백엔드 데이터 : {hello}
        </div>
    );
}

export default App;