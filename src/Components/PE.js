import { Portfolio } from "./Portfolio"
import { RoSE } from "./RoSE"
import { List } from "./List"
import { Eight } from "./Eight"

export const PE = () => {
    return (

        <>
        
        <div className="container" id="projects"  style={{paddingTop: 100, paddingBottom: 100}}>
        <h1 style = {{textAlign: 'center', textDecoration: 'underline'}}> PROJECTS & EXTRA-CURRICULARS </h1>
            <div className="row">
                
                    
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="proj-tab" data-bs-toggle="tab" data-bs-target="#proj" type="button" role="tab" aria-controls="proj" aria-selected="true">Projects</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="extra-tab" data-bs-toggle="tab" data-bs-target="#extra" type="button" role="tab" aria-controls="extra" aria-selected="false">Extra-Curriculars</button>
                    </li>
                </ul>
                    
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="proj" role="tabpanel" aria-labelledby="proj-tab">
                        <div className="card-deck justify-content-center" style={{display:'flex',flexDirection:'row', paddingTop:'20px',}}>
                            <Portfolio/>
                            <List/>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade show" id="extra" role="tabpanel" aria-labelledby="extra-tab">
                        <div className="card-deck justify-content-center" style={{display:'flex',flexDirection:'row', paddingTop:'20px'}}>
                            <RoSE/>
                            <Eight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>


    )


}