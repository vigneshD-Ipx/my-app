import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './components/Home';
import Report from './components/Report';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const BASEURL = 'http://localhost/laravel-crud/public';
function App() {
    return (
        <div className="App">
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/reports" element={<Report/>}></Route>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
