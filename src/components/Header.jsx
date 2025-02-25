import React, {Component} from "react";

class Header extends Component {
    render() {
        return(
            <div className="">
                <div className="flex-row space-x-[2%] bg-black text-orange-300 sticky">
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contacts'>Contact</a>
                </div>
            </div>
        );
    }
}
 
export default Header;