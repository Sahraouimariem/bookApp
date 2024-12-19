import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Editbook({book,books,setlistbooks}) {
    
    
    const [show, setShow] = useState(false);
const [title,settitle]=useState(book.title)
const [author,setauthor]=useState(book.author)
const [Nationality,setNationality]=useState(book.Nationality)
const [year,setyear]=useState(book.year)
const [image, setImage] = useState(book.image);
const [description, setdescription] = useState(book.description);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const handlesubmit=(newid)=>{
    const newbook={id:book.id,title,author,Nationality,year,image,description}
    const newlist=books.map((book)=>book.id===newid?newbook:book)
    setlistbooks(newlist)

    handleClose()

   }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit book
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
                defaultValue={book.title}
                  type="text"
                  placeholder="book title"
                  autoFocus
                  onChange={(event)=>settitle(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>author</Form.Label>
                <Form.Control defaultValue={book.author}
                  type="text"
                  placeholder="author"
                  autoFocus
                  onChange={(event)=>setauthor(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nationality</Form.Label>
                <Form.Control defaultValue={book.Nationality}
                  type="text"
                  placeholder="Nationality"
                  autoFocus
                  onChange={(event)=>setNationality(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>description</Form.Label>
                <Form.Control defaultValue={book.description}
                  type="text"
                  placeholder="description"
                  autoFocus
                  onChange={(event)=>setdescription(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>image</Form.Label>
                <Form.Control defaultValue={book.image}
                  type="text"
                  placeholder="link of photo"
                  autoFocus
                  onChange={(event)=>setImage(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>year</Form.Label>
                <Form.Control defaultValue={book.year}
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
            <Button variant="primary" onClick={()=>handlesubmit(book.id)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Editbook