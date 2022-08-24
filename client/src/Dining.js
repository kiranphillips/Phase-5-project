import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
// import { Button } from "bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Dining() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="Dining">
      <Popup trigger={<button> Food Menu</button>}>
        <div className="food">
          <Popup
            trigger={
              <button>
                <img src="https://timber.mhmcdn.com/public/member/959840/thumb/3ca69b66-fa69-458f-98fd-0c4bfb995448-w300-p1.jpg" />
                Breakfast
              </button>
            }
          >
            {
              <button>
                <img src="https://static.wixstatic.com/media/c0cd00_fc8412010ec64a94b199a459d699b86b~mv2.jpg/v1/fill/w_560,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c0cd00_fc8412010ec64a94b199a459d699b86b~mv2.jpg" /> Lunch
              </button>
            }
          
            {
              <button>
                <img src="https://encorediningcapecod.com/wp-content/uploads/2018/06/dinner-soups-1.jpg" /> Dinner
              </button>
            }
          </Popup>
        </div>
      </Popup>
      <Popup trigger={<button> Drinks Menu </button>}>
        <div className="drinks">
          <Popup
            trigger={
              <button>
                <img src="https://commercialhotelmorpeth.com.au/wp-content/uploads/2021/05/miss-mullens-drinks-no-happy-hour-768x1086.jpg" /> cocktails
              </button>
            }
          >
            
            {
              <button>
                <img src="https://s3.amazonaws.com/thumbnails.venngage.com/template/cfa670dd-9683-4201-a591-9be0a9810ad2.png" /> Wine
              </button>
            }
          
            {
              <button>
                <img src="https://image.shutterstock.com/image-vector/beer-menu-on-wood-background-600w-425288428.jpg" />
                Beer
              </button>
            }
          
          </Popup>
        </div>
      </Popup>
      <div className="App">
        Insight So Some Delights
        <div>
          <div>
          <>
           <Button variant="outline-info" onClick={handleShow}>
        Order Room Service
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tell us what you want.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>what can we get you? </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label> What can we get you to Drink</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel Order
          </Button>
          <Button variant="success" onClick={handleClose}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
      </>
          </div>
          <Carousel>
            <Carousel.Item>
              <img
                className="slide"
                src="https://media.cnn.com/api/v1/images/stellar/prod/200401121910-underscored-brunch-eggs-benedict-new.jpg?q=w_4928,h_2767,x_0,y_0,c_fill"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Breakfast</h3>
                <p>Eggs Benedict</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://media-cdn.tripadvisor.com/media/photo-s/17/80/9a/f2/cod-main-course.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Lunch</h3>
                <p>Seared Hake </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://houndstoothrestaurant.com/wp-content/uploads/2019/08/beef-dinner-entree.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Dinner</h3>
                <p>Lamb chop</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://tastesbetterfromscratch.com/wp-content/uploads/2019/12/Charcuterie-Board-Web-10.jpg"
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h3>Charcuterie board</h3>
                <p>Various chesse's of your choice</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://images.absolutdrinks.com/drink-images/Raw/Absolut/2bc2bb4c-17d6-4a3c-9df2-4d22f8553d24.jpg?imwidth=500"
                alt="Fifth slide"
              />

              <Carousel.Caption>
                <h3> Cocktail</h3>
                <p>Espresso Martini</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://www.foxandbriar.com/wp-content/uploads/2016/07/Spanish-Gin-Tonics-7-of-19.jpg"
                alt="Sixth slide"
              />

              <Carousel.Caption>
                <h3>Cocktail</h3>
                <p>Gin & Tonic</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://produits.bienmanger.com/46156-1w0h0_Beef_Biltong_Smoked_Smoked_Meat_Dried_And_Sliced.jpg"
                alt="Seventh slide"
              />

              <Carousel.Caption>
                <h3>Snack</h3>
                <p>Meat board</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://paleogrubs.com/wp-content/uploads/2018/02/5a-salad-recipe-2-1024x1024.jpg"
                alt="Eighth slide"
              />

              <Carousel.Caption>
                <h3>Snack</h3>
                <p>Fresh beet and radish salad</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://cdn.shopify.com/s/files/1/0289/7546/4483/products/SixDogsDogBeet_960x.png?v=1623952222"
                alt="Ninth slide"
              />

              <Carousel.Caption>
                <h3>Gin & Tonic</h3>
                <p>six dogs blue</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://flavorverse.com/wp-content/uploads/2017/06/South-African-Food.jpg"
                alt="TENTH slide"
              />

              <Carousel.Caption>
                <h3>Lunch</h3>
                <p>Tradition dish</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://assets-westchestermagazine-com.s3-accelerate.amazonaws.com/2021/06/westch_image002_1939595.jpg"
                alt=" 11TH slide"
              />

              <Carousel.Caption>
                <h3>Dinner</h3>
                <p>Octopus served on a bed of veggies</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          );
        </div>
      </div>
    </div>
  );
}

export default Dining;
