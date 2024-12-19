import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Addbook({listbooks,setlistbooks}) {
    console.log(listbooks,setlistbooks);
    
    const [show, setShow] = useState(false);
const [title,settitle]=useState("")
const [author,setauthor]=useState("")
const [Nationality,setNationality]=useState("")
const [year,setyear]=useState(0)
const [image, setImage] = useState("");
const [description, setdescription] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const handlesubmit=()=>{
    const newbook={id:listbooks.length+1,title,author,Nationality,year,image,description}
    setlistbooks([...listbooks,newbook])
    handleClose()

   }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          add book
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>


              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="book title"
                  autoFocus
                  onChange={(event)=>settitle(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="author"
                  autoFocus
                  onChange={(event)=>setauthor(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nationality"
                  autoFocus
                  onChange={(event)=>setNationality(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description"
                  autoFocus
                  onChange={(event)=>setdescription(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="link of photo"
                  autoFocus
                  onChange={(event)=>setImage(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="year"
                  autoFocus
                  onChange={(event)=>setyear(event.target.value)}
                />
              </Form.Group>
             
             
             </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Addbook