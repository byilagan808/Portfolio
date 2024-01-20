import { Portfolio } from "./Portfolio"


export const PE = () => {
    return (

        <>
        
        <div className="container" id="projects"  style={{paddingTop: 100, paddingBottom: 100}}>
        <h1 style = {{textAlign: 'center', textDecoration: 'underline'}}> PROJECTS & EXTRA-CURRICULARS </h1>
            <div className="row">
                <div className="card-deck" style={{display:'flex',flexDirection:'row'}}>
                    <Portfolio/>
                

                </div>
            </div>
        </div>
        
        </>


    )


}