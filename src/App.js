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
    }

    render() {
        const SectionHeader = (this.state.catImages <= 0 ? null :
            <div><h4>Jeżeli chcesz lepiej przyjrzeć się zdjęciu, kliknij je</h4> <h2>Wyniki
                wyszukiwania:</h2></div>);

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/favourites">
                        <Favourites/>
                    </Route>
                    <Route path="/" exact>
                        <div className="App">
                            <Header saveCatImages={this.saveCatImages}/>
                            <Link to="/favourites">Favourites</Link>
                            {SectionHeader}
                            <Section catImages={this.state.catImages}/>
                            <Footer/>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
