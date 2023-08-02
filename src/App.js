import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import React, {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <>
            <div className={`max-w-screen-xl mx-auto grid grid-rows-layout font-main ${darkMode ? "dark" : ""}`}>
            <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
            <Main/>
            <Footer/>
            </div>
        </>
    );
}

export default App;
