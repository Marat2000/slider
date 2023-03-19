import Controller from './Controller'
import {useState} from 'react'

const Card=(props)=>{


	 
	return(<div style={{display:'flex' , overflow:'hidden' }} >

{(props.card).map((item)=>{return(


<div className={props.card.indexOf(item)==props.page ?'container opacity1':'container opacity0'}  key={item.imgUrl}>
<div className='imgController'>
<img className="mainImg" src={item.imgUrl}  alt="mainImg" />
 <Controller pageUp={props.pageUp} pageDown={props.pageDown}/>
</div>
<div className='text'>
  <p className={props.card.indexOf(item)==props.page ?"about text1":props.left? "about text0left":"about text0right"}>{item.about}</p>

<div className="user">
  <span className='name'>{item.name}</span>
  <span className='profession'> {item.profession} </span>
</div>
</div>
</div>
 
)})

}



</div>)}


export default Card
