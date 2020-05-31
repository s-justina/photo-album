// https://pixabay.com/get/54e9d14b4e52a814f1dc8460c62d3f7f1537dce04e507441702a7cd2974dc4_640.jpg
import React, {Component} from 'react'
import './Section.css'
import Carousel, {Modal, ModalGateway} from "react-images";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import swal from 'sweetalert';
import PacmanLoader from "react-spinners/PacmanLoader";


class Section extends Component {
    state = {
        currentImage: "",
        viewerIsOpen: false,
        imagesLiked: [],
    };

    componentDidMount() {
        if (this.props.isFavouritePage || this.props.firstSearchDone) {
            return
        }
        window.scrollBy(0, window.innerHeight);
        this.props.firstSearch()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const currentY = window.scrollY;
        if (currentY > window.innerHeight || this.props.isFavouritePage) {
            return
        }
        window.scrollBy(0, window.innerHeight - currentY);
    }

    renderImg = (catImages) => {
        return catImages.length > 0 && catImages.map((catImage, index) => {
            return <div
                key={index}
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
                            <FontAwesomeIcon onClick={(e) => this.onHeartClick(e, index, catImage)}
                                             className='icon iconAnimation'
                                             icon={(() => {
                                                 return catImage.isFavourite ? solidHeart : regularHeart
                                             })()}/>
                            <FontAwesomeIcon className='icon' icon={faThumbsUp}/>
                            <p className='likes'>{catImage.likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        })

    };

    closeLightbox = () => {
        this.setState({
            viewerIsOpen: false,
        })
    };
    onHeartClick = (e, index, catImage) => {
        e.stopPropagation();
        if (!catImage.isFavourite) {
            this.props.addToFavourites(catImage);
        } else {
            swal({
                title: "Jesteś pewien?",
                text: "Jeśli wciśniesz przycisk 'cancel', spowoduje to że kot ucieknie z ulubionych!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.props.removeFromFavourites(catImage);

                        swal("Poof! Kotek uciekł!", {
                            icon: "success",
                        });
                    } else {
                        swal("Twój kot jest bezpieczny!");
                    }
                });

        }

    };

    displayCorrectImages = () => {
        return this.props.isFavouritePage ? this.props.favouriteImages : this.props.catImages
    };

    render() {
        return (
            <React.Fragment>
                <section className='sectionContainer'>

                    <ModalGateway>
                        {this.state.viewerIsOpen ? (
                            <Modal onClose={this.closeLightbox}>
                                <Carousel
                                    currentIndex={this.state.currentImage}
                                    views={this.displayCorrectImages().map(x => {
                                        console.log('image: ',x);
                                        return {
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.tags
                                        }
                                    })}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                    <div className='imgContainer'>
                        {this.renderImg(this.displayCorrectImages())}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


export default Section