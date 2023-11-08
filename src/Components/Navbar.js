export const Navbar = () =>{

    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center fixed-top">
            <div className="container">
                <a href="#" className="navbar-brand"> BLAKE </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                    <div className="navbar-toggler-icon"></div>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutme" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
           
        </>
    )    
}  