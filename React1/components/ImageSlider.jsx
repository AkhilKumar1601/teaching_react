/* Question

Create image carousel with:

Next button
Previous button

Use array of image URLs.

Concepts
Array indexing
Dynamic rendering */

import { useState } from 'react';

function ImageSlider () {

	const [ currentIndex, setCurrentIndex ] = useState (0);

        const images = [
    		"https://picsum.photos/id/1015/400/200",
    		"https://picsum.photos/id/1016/400/200",
    		"https://picsum.photos/id/1018/400/200",
  	];

	return (
		<>
		<h1> Image Slider </h1>
		<img src={images[currentIndex]} alt="slider"/>
		<button onClick = {() => {if(currentIndex > 0) setCurrentIndex(c => c - 1)} }> Previous </button>
		<button onClick = {() => {if(currentIndex < 2) setCurrentIndex(c => c + 1)} }> Next </button>
		<div>Image {currentIndex + 1} of {images.length}</div>
		</>
	)
}

export default ImageSlider;
