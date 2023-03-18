import Controller from './Controller'

const Card=(props)=>{


	return(<>


{(props.card.filter(el=>props.card.indexOf(el)==props.page)).map((item)=>{return(


<div className='container' key={item.imgUrl}>
<div className='imgController'>
<img className="mainImg" src={item.imgUrl} alt="mainImg"/>
 <Controller pageUp={props.pageUp} pageDown={props.pageDown}/>
</div>
<div className='text'>
  <p className="about">{item.about}</p>

<div className="user">
  <span className='name'>{item.name}</span>
  <span className='profession'> {item.profession} </span>
</div>
</div>
</div>
 
)})

}

</>)}


export default Card
