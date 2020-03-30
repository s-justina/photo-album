// https://pixabay.com/get/54e9d14b4e52a814f1dc8460c62d3f7f1537dce04e507441702a7cd2974dc4_640.jpg
import React, {Component} from 'react'
import './Section.css'

class Section extends Component {
    state = {};
renderImg = ()=>{
    return this.props.catImages.map((catImage, index)=> {
        return <div
            style={{
                backgroundImage: `url(${catImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}
            key={index}
            className='albumImageStyle'/>
    })
};
    render() {
        return (
            <React.Fragment>
                <section className='sectionContainer'>
                    {this.props.catImages <=0? null : <h2>Wyniki wyszukiwania:</h2>}
                    <div className='imgContainer'>
                        {this.props.catImages.length > 0? this.renderImg() : null }
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Section