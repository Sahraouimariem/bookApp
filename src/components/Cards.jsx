import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Editbook from './Editbook';

function Cards(props) {
    console.log(props);
    
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"30px",marginTop:"9%"}} className="App">
       {props.wajdi.map(book=>
     <div key={book.id}>
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={book.image} />
       <Card.Body>
         <Card.Title>{book.title}</Card.Title>
         <Card.Text style={{height:"200px",overflowY:"auto"}}>
         {book.description}
         </Card.Text>
       </Card.Body>
       <ListGroup className="list-group-flush">
         <ListGroup.Item> {book.year}</ListGroup.Item>
         <ListGroup.Item> {book.Nationality}</ListGroup.Item>
         <ListGroup.Item>Pages: 47-180</ListGroup.Item>
       </ListGroup>
       <Card.Body>
        <Button variant='danger'onClick={()=>props.setlistbooks(props.wajdi.filter(el=>el.id!=book.id))}>delete</Button>
        <Editbook book={book} books={props.wajdi} setlistbooks={props.setlistbooks} />
       </Card.Body>
     </Card>
     </div>

       )}
   

    </div>
  );
}

export default Cards;