// https://pixabay.com/get/54e9d14b4e52a814f1dc8460c62d3f7f1537dce04e507441702a7cd2974dc4_640.jpg
import React, {Component} from 'react'
import './Section.css'
import Carousel, {Modal, ModalGateway} from "react-images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// < i
// className = "fas fa-thumbs-up" > < /i>
class Section extends Component {
    state = {
        currentImage: "",
        viewerIsOpen: false,
    };
    renderImg = () => {
        return this.props.catImages.map((catImage, index) => {
            return <React.Fragment key={index}>
            <div
                style={{
                    position: 'relative',
                    backgroundImage: `url(${catImage.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
                className='albumImageStyle'
                onClick={()=>{this.setState({viewerIsOpen: true, currentImage: index})}}>
                <div className='hiddenStripe'>
                    <div className='PositionOnTheHiddenStripe'>
                    <p className="tags">
                        {catImage.tags.split(',').join(' ')}
                    </p>
                    <div className='containerForLikes'>
                    <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                    <p className='likes'>{catImage.likes}</p>
                    </div>
                </div>
                </div>
                </div>
            </React.Fragment>

        })

    };
    closeLightbox = () => {
        this.setState({
            viewerIsOpen:false,
        })
    };

    render() {
        return (
            <React.Fragment>
                <section className='sectionContainer'>
                    {this.props.catImages <= 0 ? null : <h2>Wyniki wyszukiwania:</h2>}
                    <ModalGateway>
                        {this.state.viewerIsOpen ? (
                            <Modal onClose={this.closeLightbox}>
                                <Carousel
                                    // frameProps={{autoSize:true}}
                                    currentIndex={this.state.currentImage}
                                    views={this.props.catImages.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                    <div className='imgContainer'>
                        {this.props.catImages.length > 0 ? this.renderImg() : null}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Section