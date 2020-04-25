import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Section from "./Containers/Section";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, NavLink, Link, Switch} from 'react-router-dom';
import Favourites from "./Components/Favourites/Favourites";
import { connect } from "react-redux";


class App extends React.Component {
    state = {
        catImages: [],
    };
    saveCatImages = (images) => {
        this.setState({
            catImages: images,
        })
    };

    render() {
        const SectionHeader = (this.props.catImages <= 0 ? null : (
                <div className='sectionHeaderStyle'>
                    <div ><h4 className='specialInformation'>Jeżeli chcesz lepiej
                        przyjrzeć się zdjęciu, kliknij je</h4> <h2>Wyniki
                        wyszukiwania:</h2></div>
                    <Section/>
                </div>)
        );
        return (
            <BrowserRouter basename={window.location.pathname || ''}>
                <Switch>
                    <Route exact path="/favourites">
                        <Favourites/>
                    </Route>
                    <Route exact path="/">
                        <div className="App">
                            <Header saveCatImages={this.saveCatImages}/>
                            <Link to="/favourites" className='btnPath'>Ulubione</Link>
                            {SectionHeader}
                            <Footer/>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstSearchDone: state.firstSearchDone, // (1)
        catImages: state.catImages,
    }
};

export const AppContainer = connect(mapStateToProps, null)(App); // (3)
export default AppContainer