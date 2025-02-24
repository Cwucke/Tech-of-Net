import React, {Component} from "react";

class Header extends Component {
    render() {
        return(
            <>
                <a href='/'>Home</a><p/>
                <a href='/about'>About</a>
                <a href='/contacts'>Contact</a>
            </>
        );
    }
}
 
export default Header;