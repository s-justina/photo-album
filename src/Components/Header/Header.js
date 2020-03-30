import React, {Component} from 'react'
import "./Header.css"
import logoImage from "../../assets/cat-logo.svg"
import logoText from "../../assets/love-cat.svg"
import axios from "axios"
const API_KEY = '15810825-92ac7d5556d19337c67cc6d1a';
class Header extends Component {
state = {
    catImages: [],
    value: "",
    searching: false,
};
    handleChange = (e)=>{
        let value = e.target.value;
        this.setState({
            value
        })

    };
handleClick = (e)=>{
    console.log('działa: ', e);

    if(this.state.value.length !==0){
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.value}&image_type=photo`;
        console.log(url);
        axios.get(url)
            .then(response=>{
                //data.hits[""0""].webformatURL
                console.log(response.data.hits)
                const catImages = response.data.hits.map(hit=>hit.webformatURL)
                console.log(catImages);
                this.setState({
                    catImages,
                    searching: false,
                })
            });
        this.setState({
        searching: true,
        })
    }

};
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='headerBackground'/>
                    <div className="clearfix">
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
                        <input type="text" placeholder="wpisz frazę..." className='searcher' onChange={this.handleChange}/>
                        <button className='btnstyle' onClick={this.handleClick}>Znajdź</button>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header

