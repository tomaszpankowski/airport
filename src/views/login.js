import React,{Component} from "react";
import LoginForm from "../components/login-form";

class Login extends Component{
    render(){
        return(          
            <main className="minh-100vh login-s1 d-flex align-items-center">    
                <LoginForm backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Login;