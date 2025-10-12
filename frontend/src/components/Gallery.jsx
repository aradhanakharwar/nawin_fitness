import { useState } from "react";

const Gallery = () => {
    const galleryData = [
        { id: 1, src: 'img/gallery/gallery-1.jpg', isWide: true },
        { id: 2, src: 'img/gallery/gallery-2.jpg', isWide: false },
        { id: 3, src: 'img/gallery/gallery-3.jpg', isWide: false },
        { id: 4, src: 'img/gallery/gallery-4.jpg', isWide: false },
        { id: 5, src: 'img/gallery/gallery-5.jpg', isWide: false },
        { id: 6, src: 'img/gallery/gallery-6.jpg', isWide: true },
        { id: 7, src: 'img/gallery/gallery-7.jpg', isWide: true },
        { id: 8, src: 'img/gallery/gallery-8.jpg', isWide: false },
        { id: 9, src: 'img/gallery/gallery-9.jpg', isWide: false },
    ];

    // 2. State to manage the currently opened image
    const [selectedImage, setSelectedImage] = useState(null);

    // 3. Functions to open and close the modal
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    return (
        <div>

            {/* Breadcrumb Section Begin */}
            <section class="breadcrumb-section set-bg" style={{ backgroundImage: "url('img/breadcrumb-bg.jpg')" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb-text">
                                <h2>Gallery</h2>
                                <div class="bt-option">
                                    <a href="./index.html">Home</a>
                                    <a href="#">Pages</a>
                                    <span>Gallery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* Gallery Section Begin */}
            <div class="gallery-section gallery-page">
                <div class="gallery">
                    <div class="grid-sizer"></div>
                    {galleryData.map((image) => {
                        return (
                            <div
                                key={image.id}
                                className={`gs-item set-bg ${image.isWide ? 'grid-wide' : ''}`}
                                style={{ backgroundImage: `url('${image.src}')` }}
                            >

                                {/* This div will open the modal for image preview */}
                                <div className="thumb-icon" onClick={() => openModal(image.src)}>
                                    <i className="fa fa-picture-o"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {selectedImage && (
                <div className="image-modal-overlay" onClick={closeModal}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* THIS IS YOUR CLOSE BUTTON */}
                        <button className="modal-close-button" onClick={closeModal}>×</button>
                        <img src={selectedImage} alt="Enlarged gallery view" />
                    </div>
                </div>
            )}
            {/* Gallery Section End */}
        </div>
    )
}

export default Gallery;