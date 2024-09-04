import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import Container from "react-bootstrap/Container";

const CarouselModal = ({ show, onHide, info }) => {

  return (
    <Modal
      key={info.title}
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="modal-90ws  "
      style={{ width: "100%"}}
      dialogClassName="modal-90w"
   centered={true}
    >
      <Modal.Header closeButton style={{backgroundColor:'#000'}}> 
        <Modal.Title className=" w-100 text-center text-white">
          {info.title
            ?.split(" ")
            .map(
              (item) =>
                item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase()
            )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-0 shadow'>
            <CarouselSlider images={info.images} />
          
      </Modal.Body>
   
    </Modal>
  );
};

export default CarouselModal;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
