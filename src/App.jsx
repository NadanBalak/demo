import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App()
{
    return(<div>
            <h1><Header /></h1>
            <Note />
            <h4><Footer /></h4>

        </div>);
}

export default App;