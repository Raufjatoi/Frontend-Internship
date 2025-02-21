import "./lets.css";
import img from "./lets-images/img.jpg";

const Lets = () => {
    return (
        <>
        <div className="container-fluid margin-space">
            <div style={{height:"30px"}} >
                
                <h2 className="underline-yellow">Lets talk </h2>
                <img src={img} className="float-left sizeH"></img>

                <ul> 
                    <li> <h4 className="smallH6"> Hop on a discovery call  </h4>
                         <h6 style={{color:"black", fontWeight:"normal"}}> Let's start by understanding your business. In our initial conversation, we'll explore your team setup, project goals, timeline, budget, and required expertise to see how we can align.</h6>
                        </li>

                        <div style={{height:"30px"}} ></div>

                    <li> <h4 className="smallH6"> Identify the right solution together  </h4>
                         <h6 style={{color:"black", fontWeight:"normal"}}> Let's start by understanding your business. In our initial conversation, we'll explore your team setup, project goals, timeline, budget, and required expertise to see how we can align.</h6>
                        </li>

                        <div style={{height:"30px"}} ></div>

                    <li> <h4 className="smallH6"> Get started and accelerate fast  </h4>
                         <h6 style={{color:"black", fontWeight:"normal" }}> Once we've got the plan in place, we'll dive in. You'll get regular updates, and we'll keep things flexible, adjusting as we go to tailor to your needs.</h6>
                        </li> 
                </ul>
            </div>

        </div>
        </>
    );
}

export default Lets;