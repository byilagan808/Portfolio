import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";

function App() {
    return(
      <div className="app"> 
        <Navbar/>
        <Home/>

      </div>
    )

}

export default App;
