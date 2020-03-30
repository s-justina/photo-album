import React, {Component} from 'react'
import "./Header.css"
import logoImage from "../../assets/cat-logo.svg"
import logoText from "../../assets/love-cat.svg"

class Header extends Component {
state = {
    value: "",
};
    render() {

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='headerBackground'/>
                    <div className="iconContainer">
                        <div className="column">
                            <img src={logoText} alt="logo-txt" className="logotxt"/>
                        </div>
                        <div className="column left">
                            <img src={logoImage} alt="logo" className="logotxt lowerLogo"/>
                        </div>
                    </div>
                    <div className='headerWork'>
                    <h2 className="title">cats photo gallery</h2>
                    <p className='sentence'><span>"Najmarniejszy kot jest arcydziełem."</span> - Leonardo da Vinci</p>
                    <div className='searchBar'>
                        <input type="text" placeholder="wpisz frazę..." className='searcher'/>
                        <button className='btnstyle'>Znajdź</button>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header

