import {useEffect, useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import JpaComponent from "./jpa/JpaComponent";

import Header from "./header";
import JpaInsertComponent from "./jpa/JpaInsertComponent";
import JpaDetailComponent from "./jpa/JpaDetailComponent";

function App() {
    return (
         <BrowserRouter>
            <div className="App">
            <Header />
                <Routes>
                    {/* <Route path="/algorithm" element={<AlgorithmComponent />} /> */}
                    <Route path="/jpa" element={<JpaComponent />} />
                    <Route path="/jpa/:id" element={<JpaDetailComponent />} />
                    {/* <Route path="/react" element={<ReactComponent />} /> */}
                </Routes>
                <Routes>
                     <Route path="/jpainsert" element={<JpaInsertComponent />} />
                </Routes>
            </div>
         </BrowserRouter>
        
    );
}

export default App;