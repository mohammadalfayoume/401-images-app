import React,{useState} from 'react'
import data from '../data/data.js'
import Images from './Images.js'
import Row from 'react-bootstrap/Row';


const Parent = () => {
    const [totalLikes, setTotalLikes]= useState(0)
    function totalLikesHandler(){
        setTotalLikes(totalLikes+1)
    }
  return (
    <>
    <h1 style={{textAlign:'center',backgroundColor:'yellowgreen'}}>Total likes: {totalLikes}</h1>
    <Row xs={1} md={3} className="g-4">
    {data.map((card,idx)=>{
        return(
            <>
            <Images id={card._id} title={card.title} img={card.image_url} totalLikesHandler={totalLikesHandler}/>
            </>
        )
    })}
    </Row>
    </>
  )
}

export default Parent