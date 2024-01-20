import {useEffect, useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Jeon from "./Jeon";

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
         <BrowserRouter>
            <div className="App">
                백엔드 데이터 : {hello}
            </div>
            <Routes>
            <Route path="/jeon" element={<Jeon/>}/>

            </Routes>
         </BrowserRouter>
        
    );
}

export default App;