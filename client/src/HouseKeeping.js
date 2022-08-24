import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function HouseKeeping() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Customize your room
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tell us what you want.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label> What type pillow do you prefer ?</Form.Label>
              <Form.Select>
                <option value="0"></option>
                <option value="1">Down Pillow</option>
                <option value="2">Feather Pillow</option>
                <option value="3">Cotton Pillow</option>
                <option value="4">Memory Foam Pillow</option>
                <option value="5">Polyester Pillow</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label>What type sheets do you prefer ?</Form.Label>
              <Form.Select>
                <option value="0"></option>
                <option value="1">Egyptian Cotton</option>
                <option value="2">Polyester</option>
                <option value="3">Linen</option>
                <option value="4">Silk</option>
                <option value="5">Satin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label> Coffee or Tea ?</Form.Label>
              <Form.Select>
                <option value="0"></option>
                <option value="1">Nespresso Machine</option>
                <option value="2">French Press</option>
                <option value="2">
                  Have a staff member bring you a fresh cup of your choice
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label> Wake up call ?</Form.Label>
              <Form.Select>
                <option value="0"></option>
                <option value="1">No</option>
                <option value="2">Yes</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label> What temprture would you like your room?</Form.Label>
              <Form.Select>
                <option value="0"></option>
                <option value="1">60 degrees</option>
                <option value="2">65 degrees</option>
                <option value="3">70 degrees</option>
                <option value="4">75 degrees</option>
                <option value="5">80 degrees</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prefrences">
              <Form.Label> Smoking or non Smoking?</Form.Label>
              <Form.Select>
                <option value="0"></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>What would you like in your fridge?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel Changes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div class="row">
        <img
          className="hsk"
          src="https://cdn2.safari.com/kruger-national-park/media/thumbnails/products/ed__1_Ao2Uwln.jpg.825x550_q90_crop-scale_upscale.jpg"
          alt="First slide"
        />
      </div>

      <div class="row">
      <img
        className="hsk"
        src="http://www.sabi-sands.com/assets/img/singita-boulders-lodge-room-sabi-sands.jpg"
        alt="First slide"
      />
      </div>

      <div class="row">
      <img
        className="hsk"
        src="https://journeysbydesign.com/wp-content/uploads/2017/01/crop_dsc63721-960x647.jpg"
        alt="First slide"
      />
      </div>
      <div class="row">
      <img
        className="hsk"
        src="https://d2o51t207iusce.cloudfront.net/1200x801/filters:quality(80):format(webp)/library/wp-content/uploads/Singita-Lebombo-Lodge-Suite-Interior-exterior-2.jpg"
        alt="First slide"
      />
      </div>
    </>
  );
}
export default HouseKeeping;
