import React, {useState} from 'react';

import img1 from './imgs/img1.jpeg'
import img2 from './imgs/img2.webp'
import img3 from './imgs/img3.webp'
import img4 from './imgs/img4.jpeg'
import img5 from './imgs/img5.jpeg'
import img6 from './imgs/img6.jpeg'
import img7 from './imgs/img7.webp'
import img8 from './imgs/img8.webp'
import img9 from './imgs/img9.jpeg'
import img10 from './imgs/img10.jpeg'
import img11 from './imgs/img11.jpeg'
import img12 from './imgs/img12.jpeg'
import img13 from './imgs/img13.jpeg'
import img14 from './imgs/img14.jpeg'
import img15 from './imgs/img15.jpeg'
import img16 from './imgs/img16.jpeg'
import img17 from './imgs/img17.jpeg'
import img18 from './imgs/img18.jpeg'
import img19 from './imgs/img19.jpeg'
import img20 from './imgs/img20.jpeg'
import img21 from './imgs/img21.jpeg'
import img22 from './imgs/img22.jpeg'
import img23 from './imgs/img23.jpeg'
import img24 from './imgs/img25.jpeg'
import img25 from './imgs/img25.jpeg'
import img26 from './imgs/img26.png'
import img27 from './imgs/img27.jpeg'

export default function Gallery() {

const [index, setIndex] = useState(0)
const [picList, setPicList] = useState([img1,img2,img3,img4,img5,img6,img7,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27])

    const onClickNext= () => {
        if (index + 1 === picList.length) {
        setIndex(0)
        } else {
        setIndex(index + 1)
        }
      }

      const onClickPrevious= () => {
        if (index - 1 === -1 ){
          setIndex(
            picList.length - 1
          )
        } else {
          setIndex(index - 1)
        }
    }
   
        return (
          <div className="ui four column grid">
            <img id="gallery" src={picList[index]}/>
            <button onClick={onClickPrevious}> Previous </button>
            <button onClick={onClickNext}> Next </button>
          </div>
        );
        }
