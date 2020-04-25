import React, {Component} from 'react'
import './Favourites.css'
import {Link} from "react-router-dom";
import Section from "../Section/Section";
import logoText from "../../assets/love-cat.svg";
import logoImage from "../../assets/cat-logo.svg";
import {loadFavouriteImages} from "../../Utils/Functions";
import Footer from "../Footer/Footer";


class Favourites extends Component {
    state = {
        catImages: [],
    };
    updateParent = () => {
        this.setState({
            rerender: !this.state.rerender
        })
    };

    render() {
        const favouriteImages = loadFavouriteImages();
        return (
            <React.Fragment>
                <div  className='backgroundFavourites'>
                <div>
                    <div className="clearfix center">
                        <div className="column">
                            <img src={logoText} alt="logo-txt" className="logotxt"/>
                        </div>
                        <div className="column left">
                            <img src={logoImage} alt="logo" className="logotxt lowerLogo"/>
                        </div>
                    </div>
                    <Link to="/" className='btnPath'>Wróć</Link>

                </div>
                <h2 className='title'>Twoje ulubione</h2>
                <Section isFavouritePage={true} favouriteImages={favouriteImages}/>
                <Footer/>
                </div>
            </React.Fragment>

        )
    }

}

export default Favourites