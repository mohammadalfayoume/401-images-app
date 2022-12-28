import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const Images = (props) => {
    const [likes, setLikes]= useState(0)
    function likesHandler(){
        setLikes(likes+1)
        props.totalLikesHandler()
    }
  return (
    <>
    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} alt={props.title} />
      <Card.Body>
        <Card.Title>Title: {props.title}</Card.Title>
        <Card.Text>
            <h5>ID: {props.id}</h5>
            <h4>likes: {likes}</h4>
        </Card.Text>
        <Button variant="primary" onClick={likesHandler} >Add Like</Button>
      </Card.Body>
    </Card> */}
        <Card>
            <Col>
                <Card.Img variant="top" src={props.img} alt={props.title} />
                <Card.Body>
                <Card.Title>Title: {props.title}</Card.Title>
                <Card.Text>
                    <h5>ID: {props.id}</h5>
                    <h4>likes: {likes}</h4>
                </Card.Text>
                <Button variant="primary" onClick={likesHandler} >Add Like</Button>
                </Card.Body>
            </Col>
        </Card>
    </>
  )
}

export default Images