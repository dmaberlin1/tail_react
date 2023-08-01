import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import React from "react";

function App() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
            <Header/>
            <Main/>
            <Footer/>
            </div>
        </>
    );
}

export default App;
