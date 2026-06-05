import { useState } from "react";

function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/400/200",
    "https://picsum.photos/id/1016/400/200",
    "https://picsum.photos/id/1018/400/200",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Image Slider</h1>

      <img src={images[currentIndex]} alt="slider">

      <button onClick={previousImage}>Previous</button>

      <button onClick={nextImage}>Next</button>

      <p>Image {currentIndex + 1} of {images.length}</p>
    </div>
  );
}

export default ImageSlider;
