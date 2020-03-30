import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

class App extends React.Component {
    state = {
        catImages: [],
    };
    saveCatImages = (images)=>{
        this.setState({
            catImages: images,
        })
    }
    render() {
        return (
            <div className="App">
                <Header saveCatImages={this.saveCatImages}/>
                <Section catImages={this.state.catImages}/>
            </div>
        );
    }
}

export default App;
