

export const AboutMe = () => {

   

    return (
        <>
        
        <div className="container" id="aboutme" style={{paddingTop: 100, paddingBottom: 100}}>
            <div className="row">
                <div className="col">
                    <div className="card text-white bg-dark mg-3" style={{ height: '600px'}}> 
                        <div className="card-header" style={{ fontSize: '35px', textAlign: 'center'}}> 
                            ABOUT ME
              
                            
                        </div>
                        <div className="card-body" style={{marginTop: '50px', marginBottom: '50px'}}>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="intro-tab" data-bs-toggle="tab" data-bs-target="#intro" type="button" role="tab" aria-controls="intro" aria-selected="true">Self Introduction</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="edu-tab" data-bs-toggle="tab" data-bs-target="#edu" type="button" role="tab" aria-controls="edu" aria-selected="false">Education</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="skill-tab" data-bs-toggle="tab" data-bs-target="#skill" type="button" role="tab" aria-controls="skill" aria-selected="false">Skills</button>
                                    </li>
                                    

                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="intro" role="tabpanel" aria-labelledby="intro-tab">
                                    <p className="card-text" style={{fontSize: '22px', paddingTop: '30px'}}> 
                                        I am pursuing a bachelor's degree in information and computer sciences at the University of Hawaii at Manoa. 
                                        I grew up in mililani, Hawaii. I developed an interest in coding after taking a handful of computer science 
                                        classes in high school. Now I am highly motivated to learn and enhance my knowledge by taking on new tasks 
                                        and learning new languages. My primary goal is to excel as a frontend or full-stack developer by putting my
                                        technical talents and knowledge to use. 
                                    </p>
                                </div>
                                <div className="tab-pane fade show" id="edu" role="tabpanel" aria-labelledby="edu-tab">
                                    <div className="card-text-edu" style={{fontSize: '12px', paddingTop: '30px'}}> 
                                    <h2>UNIVERSITY OF HAWAII AT MANOA</h2>
                                    <p>January 2022 - May 2026</p>
                                    <p>Bachelor in Information & Computer Science</p>
                                    <p>3.65 GPA</p>
                                    <p>Fall 2023 Dean's list</p>
                                    <ul>
                                        <li>Intro to Computer Science</li>
                                        <li>Discrete Mathematics</li>
                                        <li>Calculus</li>
                                    </ul>

                                    <h2>LEEWARD COMMUNITY COLLEGE</h2>
                                    <p>August 2022 - December 2023</p>
                                    <ul>
                                        <li>Associates of Arts in Liberal Arts</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade show" id="skill" role="tabpanel" aria-labelledby="skill-tab">
                                    <div className="card-text-skill" style={{fontSize: '20px', paddingTop: '30px'}}> 
                                      <ul>
                                        <li>
                                            <span>LANGUAGES</span>
                                            <br />
                                            Java, HTML, CSS, JavaScript, Python
                                        </li>
                                        <li>
                                            <span>DEVELOPMENT TOOLS</span>
                                            <br />
                                            Eclipse IDE, VS Code, Canopy, Jira
                                        </li>
                                        <li>
                                            <span>FRAMEWORKS/TECHNOLOGY</span>
                                            <br />
                                            React, Bootstrap 5, Node.js (basic), Express.js (basic)
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>


    )


}