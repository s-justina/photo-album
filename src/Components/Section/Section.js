// https://pixabay.com/get/54e9d14b4e52a814f1dc8460c62d3f7f1537dce04e507441702a7cd2974dc4_640.jpg
import React, {Component} from 'react'
import './Section.css'
import Carousel, {Modal, ModalGateway} from "react-images";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import ls from 'local-storage';
import {loadFavouriteImages} from "../../Utils/Functions";
import swal from 'sweetalert';

class Section extends Component {
    state = {
        currentImage: "",
        viewerIsOpen: false,
        imagesLiked: [],
    };
componentDidMount() {
    // window.addEventListener('resize', (e)=>console.log(e));
    console.log(window.document.body.offsetHeight)
    window.scrollBy(0, window.innerHeight);
}

    renderImg = (catImages) => {
        return catImages.map((catImage, index) => {
            return <div
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
                                {/*{console.log('be4: ', catImage)}*/}
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
        const favouriteImages = loadFavouriteImages();
        if (!catImage.isFavourite) {
            this.setState({
                imagesLiked: [...this.state.imagesLiked, index]
            });
            catImage.isFavourite = true;
            ls.set('FavouriteImages', [...favouriteImages, catImage])
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
                        this.setState({
                            // image liked index
                            imagesLiked: this.state.imagesLiked.filter((imageLiked) => imageLiked !== index)
                        });
                        catImage.isFavourite = false;
                        const filteredFavouriteImages = favouriteImages.filter(favouriteImage => favouriteImage.src !== catImage.src)
                        ls.set('FavouriteImages', filteredFavouriteImages);
                        swal("Poof! Kotek uciekł!", {
                            icon: "success",
                        });
                        setTimeout(() => {
                            this.setState({
                                rerender: !this.state.rerender
                            })
                        })
                    } else {
                        swal("Twój kot jest bezpieczny!");
                    }
                });

        }

    };

    render() {
        // console.log('rerender: ', this.props.catImages);
        return (
            <React.Fragment>
                <section className='sectionContainer'>

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
                        {/*{console.log('sadjaslfj: ', this.props.catImages)}*/}
                        {this.props.catImages.length > 0 ? this.renderImg(this.props.catImages) : null}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Section