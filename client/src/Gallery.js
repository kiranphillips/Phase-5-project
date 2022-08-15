// import React, { Component } from 'react';
// import animal1 from '../pics/animal1.jpg'
// import animal2 from '../pics/animal2.jpg'

// class Gallery extends Component {   

// state = {
//     index: 0,
//     picList: [animal1, animal2]
//     }

//     onClickNext= () => {
//         if (this.state.index + 1 === this.state.picList.length) {
//           this.setState({
//             index: 0
//           })
//         } else {
//           this.setState({
//             index: this.state.index + 1
//           })
//         }
//       }

//       onClickPrevious= () => {
//         if (this.state.index - 1 === -1 ){
//           this.setState({
//             index: this.state.picList.length - 1
//           })
//         } else {
//           this.setState({
//             index: this.state.index - 1
//           })
//         }
      
//     //   render() {
//         return (
//           <div>
//             <img src={this.state.picList[this.state.index]}/>
//             <button onClick={this.onClickPrevious}> Previous </button>
//             <button onClick={this.onClickNext}> Next </button>
//           </div>
//         );
//         }
//     }
//     export default Gallery;