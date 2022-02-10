import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import FlightinfoS1 from "../components/flightinfo-s1";
import FlightinfoS2 from "../components/flightinfo-s2";
import FlightinfoS3 from "../components/flightinfo-s3";
import FlightinfoS4 from "../components/flightinfo-s4";

class Flightinfo extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <FlightinfoS1/>
                <FlightinfoS2/>
                <FlightinfoS3/>
                <FlightinfoS4/>
            </Container>    
        );
    }
}

export default Flightinfo;