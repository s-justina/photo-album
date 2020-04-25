import React, {Component} from 'react'
import "./Header.css"
import logoImage from "../../assets/cat-logo.svg"
import logoText from "../../assets/love-cat.svg"
import axios from "axios"
import {fetchData, firstSearch} from "../../redux/actions";
import {connect} from "react-redux";

const API_KEY = '15810825-92ac7d5556d19337c67cc6d1a';

class Header extends Component {
    state = {
        value: "",
        searching: false,
        active: false,
    };
    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            value,
        })

    };
    handleClick = (e) => {

        if (this.state.value.length !== 0) {
            const randomPage = Math.floor(Math.random() * 10 + 1);
            const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.value}&image_type=photo&page=${randomPage}`;
            this.props.fetchData(url);
            this.setState({
                searching: true,
            })
        }

    };
    handleEnter = (e) => {
        if (this.state.value.length !== 0 && e.keyCode === 13) {
            this.handleClick()
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='headerBackgroundMain'/>
                    <div className="clearfix center">
                        <div className="column">
                            <img src={logoText} alt="logo-txt" className="logotxt"/>
                        </div>
                        <div className="column left">
                            <img src={logoImage} alt="logo" className="logotxt lowerLogo"/>
                        </div>
                    </div>
                    <div className='headerWork'>
                        <h2 className="albumTitle">galeria kotów</h2>
                        <p className='sentence'><span>"Najmarniejszy kot jest arcydziełem."</span> - Leonardo da Vinci
                        </p>
                        <div className='searchBar'>
                            <input type="text" placeholder="wpisz frazę..."
                                   className={"searcher " + (this.state.active ? "active" : 'none')}
                                   onFocus={this.handleFocus}
                                   onChange={this.handleChange}
                                   onKeyUp={this.handleEnter}/>
                            <button className='btnstyle' onClick={this.handleClick}>Znajdź</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
return {
    catImagesSearchData: state.catImages
}
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url)   )
    }
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header); // (3)
export default HeaderContainer