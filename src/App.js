import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { AboutMe } from "./Components/AboutMe";
import { Resume } from "./Components/Resume";
import { PE } from "./Components/PE";
import { Contact } from "./Components/Contact";


function App() {
    return(
      <div className="app"> 
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Resume/>
        <PE/>
        <Contact/>
      </div>
    )

}

export default App;
