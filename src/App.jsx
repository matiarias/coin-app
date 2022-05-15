import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './pages/Error404';
import Home from './pages/Home';
import LoginScreen from './pages/LoginScreen';

import "./css/styles.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<LoginScreen />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
