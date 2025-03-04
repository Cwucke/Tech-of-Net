import React, { Component } from "react";
import Button from "../components/Button";

class Home extends Component{
    state = {  } 
    render() { 
        return (
            <div>
            <p>Domik</p>
            <div className="flex gap-4">
            <Button  color="primary" size="large" title="Confirm"/>
            <Button  color="primary" size="medium" title="Delete"/>
            </div>
            </div>
        );
    }
}
 
export default Home;