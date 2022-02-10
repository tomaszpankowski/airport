import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BookS1 from "../components/book-s1";

class Book extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BookS1/>
            </Container>    
        );
    }
}

export default Book;