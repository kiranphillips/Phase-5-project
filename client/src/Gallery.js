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

    // const onClickNext= () => {
    //     if (index + 1 === picList.length) {
    //     setIndex(0)
    //     } else {
    //     setIndex(index + 1)
    //     }
    //   }

    //   const onClickPrevious= () => {
    //     if (index - 1 === -1 ){
    //       setIndex(
    //         picList.length - 1
    //       )
    //     } else {
    //       setIndex(index - 1)
    //     }
    // }
   
        return (
        //   <section className="hexagon-gallery">
        //   <div class="hex" {...picList.map(image => <img id="gallery" src={image} />)} />
        //     {/* <button onClick={onClickPrevious}> Previous </button>
        //     <button onClick={onClickNext}> Next </button>  */}
        //     <div class="hex"></div>
            <section class="hexagon-gallery">
      <div class="hex"><img src="https://media.gadventures.com/media-server/dynamic/blogs/posts/peter-west-carey/2015/04/safari_pwc.jpg" alt="some"/></div>
      <div class="hex"><img src="https://epic7travel.com/wp-content/uploads/2019/10/African-Safari-Animals-Elephant-procession-sunset-1.jpg" alt="some"/></div>
      <div class="hex"><img src="https://wildernessexplorersafrica.com/wp-content/uploads/2021/08/Bush-breakfast-in-Serengeti-national-park.png" alt="some"/></div>
      <div class="hex"><img src="https://www.africaendeavours.com/wp-content/uploads/2016/01/pp-gallery-africa-savanna-safari-lodge-outdoor-dining-evening-900x600.jpg" alt="some"/></div>
      <div class="hex"><img src="https://cdn.theculturetrip.com/wp-content/uploads/2017/06/africa-main-650x433.jpg" alt="some"/></div>
      <div class="hex"><img src="https://cdn-images.go2africa.com/wp-content/uploads/2019/05/20143758/botswana-safari-spa-saruni-mara.jpg" alt="some"/></div>
      <div class="hex"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHE1GPMnRiqql6tDuhvBVuw6sIRMQmm9Qia11ezUVBlhtirFVdhLk9gNluqeP6mxXWtQ&usqp=CAU" alt="some"/></div>
      <div class="hex"><img src="http://www.foodrepublic.com/wp-content/uploads/2016/02/Earth-Lodge-Cuisine-3-700x467.jpg" alt="some"/></div>
      <div class="hex"><img src="https://goshenisafaris.com/wp-content/uploads/2019/02/Food-Options-in-a-Safari4-min.jpg" alt="some"/></div>
      <div class="hex"><img src="https://images.squarespace-cdn.com/content/v1/59587e46d2b857c0a9d56be3/1519889699131-QZ4O3XV5JJGXVGMCEFEV/Kwandwe-Fort-House-boma-night.jpg" alt="some"/></div>
      <div class="hex"><img src="https://i.pinimg.com/originals/13/2b/ca/132bca7836248468973c297547dc6c7d.jpg" alt="some"/></div>
      <div class="hex"><img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Boma-at-Phinda-Vlei-Lodge.jpg" alt="some"/></div>
      <div class="hex"><img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/6f/c7/fa/bush-dinner-set-up.jpg" alt="some"/></div>
      <div class="hex"><img src="https://www.cloud9africa.com/wp-content/uploads/2021/02/bush-dinner-perfect.jpg" alt="some"/></div>
      <div class="hex"><img src="http://www.africanbowhunting.com/wp-content/uploads/2018/01/bowhunt4-1-1024x683.jpg" alt="some"/></div>
      <div class="hex"><img src="https://www.explorationscompany.com/media/4946/africa-family-safaris-archery.jpg?mode=stretch&quality=80&width=680&height=450&upscale=false" alt="some"/></div>
      <div class="hex"><img src="https://i.pinimg.com/originals/e5/07/99/e507991e678f46fd5c76ffd57cbb6bc7.jpg" alt="some"/></div>
      <div class="hex"><img src="https://www.planetware.com/wpimages/2020/08/south-africa-top-luxury-lodges-singita-boulders-lodge.jpg" alt="some"/></div>
      <div class="hex"><img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/07/17/an95918321singita_ebony_lod.jpg?quality=75&width=982&height=726&auto=webp" alt="some"/></div>
      <div class="hex"><img src="https://www.aluxurytravelblog.com/wp-content/uploads/2019/03/Londolozi-1.jpg" alt="some"/></div>
      <div class="hex"><img src="https://media-cdn.tripadvisor.com/media/photo-s/13/33/79/a4/the-boma-a-beautiful.jpg" alt="some"/></div>
      <div class="hex"><img src="https://artofsafari.travel/wp-content/uploads/2020/01/SouthAfrica_GreaterKrugerNationalPark_LondoloziTreeCamp_WildlifeLionPride.jpg" alt="some"/></div>
      <div class="hex"><img src="https://www.africaendeavours.com/wp-content/uploads/2018/06/A327-2000x837-gamedrive-lions-55.jpg" alt="some"/></div>
      <div class="hex"><img src="https://cdn-images.go2africa.com/wp-content/uploads/2019/03/06091303/private_game_drive_vehicle_singita_castleton.jpg" alt="some"/></div>
      <div class="hex"><img src="https://www.ubuntutravelgroup.com/wp-content/uploads/2019/12/night-dining-boma-andbeyond-sandibe-1.jpg" alt="some"/></div>
      <div class="hex"><img src="https://resources.knightonreeve.co.uk/accommodation/andbeyond-sandibe-okavango-safari-lodge/_1920x1020_crop_center-center_80/Sandibe_B059.jpg?mtime=20161003135800" alt="some"/></div>
      <div class="hex"><img src="https://www.theluxevoyager.com/wp-content/uploads/2019/02/African-Bush-Camps-Bumi-Hills-Safari-Lodge-Exteriors-Deck-971x546.jpg" alt="some"/></div>

          </section>
        );
        }
