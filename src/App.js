import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FormSubscribe from "./components/FormSubscribe";

function App() {
    return (
        <div className="justify-center flex-col w-1/2">
            <Header/>
            <Main/>
            <FormSubscribe/>
            <Footer/>
        </div>
    );
}

export default App;
