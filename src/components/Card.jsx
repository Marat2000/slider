import Controller from './Controller'

const Card=(props)=>{


	 
	return(
<div style={{ overflow:'hidden' }}>
	<Controller pageUp={props.pageUp} pageDown={props.pageDown}/>
		<div  style={{ display:'flex', transition:'.5s', transform:`translate(${props.page*(-100)}%)` }}>


{(props.card).map((item)=>{return(


<div className={ props.card.indexOf(item)==props.page ?'container opacity1':'container opacity0'} key={item.imgUrl}>
<img className="mainImg" src={item.imgUrl}  alt="mainImg" />


<div className='text'>
  <p className='about'>{item.about}</p>

<div className="user">
  <span className='name'>{item.name}</span>
  <span className='profession'> {item.profession} </span>
</div>
</div>
</div>

 
)})

}


</div>
 

</div>)}


export default Card
