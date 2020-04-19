import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, NavLink, Link, Switch} from 'react-router-dom';
import Favourites from "./Components/Favourites/Favourites";


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
        const SectionHeader = (this.state.catImages <= 0 ? null : (
                <div>
                    <div className='sectionHeaderStyle'><h4 className='specialInformation'>Jeżeli chcesz lepiej
                        przyjrzeć się zdjęciu, kliknij je</h4> <h2>Wyniki
                        wyszukiwania:</h2></div>
                    <Section catImages={this.state.catImages}/>
                </div>)
        );
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/favourites">
                        <Favourites/>
                    </Route>
                    <Route path="/" exact>
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

export default App;
