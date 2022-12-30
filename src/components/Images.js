import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Images = (props) => {
    const [likes, setLikes]= useState(0)
    function likesHandler(c){
        if (c==="i"){
          setLikes(likes+1)
          props.totalLikesHandler(c)
        }
        else {
          if(likes===0){
            setLikes(0)
          }
          else{
            setLikes(likes-1)
            props.totalLikesHandler(c)
          }
        }  
    }
  return (
    <>
        <Card>
            <Col>
                <Card.Img variant="top" src={props.img} alt={props.title} />
                <Card.Body>
                <Card.Title>Title: {props.title}</Card.Title>
                <Card.Text>
                    <h5>ID: {props.id}</h5>
                    <h4>likes: {likes}</h4>
                </Card.Text>
                <div style={{display:'flex', flexDirection:'row', gap:'1rem'}}>
                <Button variant="primary" onClick={()=>likesHandler("i")} >Like</Button>
                <Button variant="primary" onClick={()=>likesHandler("d")} >dislike</Button>
                </div>
                </Card.Body>
            </Col>
        </Card>
    </>
  )
}

export default Images