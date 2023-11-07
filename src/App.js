import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { AboutMe } from "./Components/AboutMe";
import { Resume } from "./Components/Resume";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";


function App() {
    return(
      <div className="app"> 
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Resume/>
        <Projects/>
        <Contact/>

      </div>
    )

}

export default App;
