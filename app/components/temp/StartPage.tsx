import ClaimCards from "./ClaimCards";
import "../styles/StartPage.css";
import claimAsset from "../assets/claimsAsset.png";
import { useNavigate } from "react-router";

export default function StartPage(){
    const navigate = useNavigate();

    const handleStartClaim = () => {
        navigate("/claim-form");
    };

    
    const handleReportDeath = () => {
        navigate("/report-death");
    };

    const handleSearchPolicy = () => {
        navigate("/search-policy");
    };


    return (
        <div className="container">
            <div className="claims-card">
                <div className="claims-text">
                    <h1> Claims </h1>
                    <div className="claims-body">
                        <p>We make a promise to each of our policy owners: to be there through every stage
                            of the grieving process. If you're visiting this page, chances are you're 
                            going through a difficult time.
                        </p>
                        <br/>
                        <p>That's why we want to make it as easy as possible for you to file a claim, search for
                            a missing policy, or get information needed to fulfill your loved one's wishes.
                        </p>
                    </div>
                </div>
                <img src={claimAsset} className="claims-asset"/>
            </div>

            <div className="claims-list">
                <h1> How can we help you?</h1>
                <ul className="cards-container">
                    <li><ClaimCards header={"Continue your claim"} description={"If you have received a letter and have a claim number, register to securely access your claim online."} buttonText="Register now" buttonFunc={handleStartClaim}/> </li>
                    <li><ClaimCards header={"Report a death"} description={"Start the claim process by notifying us of a death."} buttonText="Report a death" buttonFunc={handleReportDeath}/> </li>
                    <li><ClaimCards header={"Search for a policy"} description={"Looking for an existing policy or unclaimed funds?"} buttonText="Search for a policy" buttonFunc={handleSearchPolicy}/> </li>
                </ul>
            </div>
        </div>
    );
};