import React,{useState} from 'react'
import data from '../data/data.js'
import Images from './Images.js'
import Row from 'react-bootstrap/Row';


const Parent = () => {
    const [totalLikes, setTotalLikes]= useState(0)
    function totalLikesHandler(c){
      if (c==="i"){
        setTotalLikes(totalLikes+1)
      }
      else{
        setTotalLikes(totalLikes-1)
      }
    }
    
  return (
    <>
    <h1 style={{textAlign:'center',backgroundColor:'yellowgreen', margin:'1rem 40%',width:'20%',border:'solid black 1px', borderRadius:'0.5rem'}}>Total likes: {totalLikes}</h1>
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