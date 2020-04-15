// https://pixabay.com/get/54e9d14b4e52a814f1dc8460c62d3f7f1537dce04e507441702a7cd2974dc4_640.jpg
import React, {Component} from 'react'
import './Section.css'
import Carousel, {Modal, ModalGateway} from "react-images";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
// < i
// className = "fas fa-thumbs-up" > < /i>
class Section extends Component {
    state = {
        currentImage: "",
        viewerIsOpen: false,
        imagesLiked: [],
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
                    onClick={() => {
                        this.setState({viewerIsOpen: true, currentImage: index})
                    }}>
                    <div className='hiddenStripe'>
                        <div className='PositionOnTheHiddenStripe'>
                            <p className="tags">
                                {catImage.tags.split(',').join(' ')}
                            </p>
                            <div className='containerForLikes'>
                                <FontAwesomeIcon onClick={(e)=>this.onHeartClick(e,index)}
                                                 className='icon iconAnimation'
                                                 icon={this.state.imagesLiked.includes(index) ? solidHeart : regularHeart}/>
                                <FontAwesomeIcon className='icon' icon={faThumbsUp}/>
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
            viewerIsOpen: false,
        })
    };
    onHeartClick = (e,index) => {
        e.stopPropagation();
        //warunek jeśli nie ma w tablicy to dodaj
        //jeśli jest to usuń
        if(!this.state.imagesLiked.includes(index)){
            this.setState({
                imagesLiked: [...this.state.imagesLiked,index]
            })
        } else {
            this.setState({
                // image liked index
                imagesLiked: this.state.imagesLiked.filter((imageLiked)=>imageLiked !== index )
                })
        }

    };

    render() {
        return (
            <React.Fragment>
                <section className='sectionContainer'>
                    {this.props.catImages <= 0 ? null :
                        <div><h4>Jeżeli chcesz lepiej przyjrzeć się zdjęciu, kliknij je</h4> <h2>Wyniki
                            wyszukiwania:</h2></div>}
                    <ModalGateway>
                        {this.state.viewerIsOpen ? (
                            <Modal onClose={this.closeLightbox}>
                                <Carousel
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