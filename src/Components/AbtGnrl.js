import spare from "../assets/images/spare.png";
import above from "../assets/images/above.png";
import customer from "../assets/images/customer.png";
import trusted from "../assets/images/trusted.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const AbtGnrl = () => {
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={spare} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 )
}
 
export default AbtGnrl;