import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: '/imagens/img1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '../imagens/img2.jpg',
    caption: 'Slide 2'
  },
  {
    url: '../imagens/img4.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../imagens/img8.jpg',
    caption: 'Slide 4'
  },
  {
    url: '../imagens/img9.jpg',
    caption: 'Slide 5'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div id="slide" style={{'backgroundImage': `url(${slideImage.url}
)`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;