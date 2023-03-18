const Controller=(props)=>{return(

 <div className='controller'>
  <img  onClick={props.pageUp} className='arrow' src="./images/icon-prev.svg"/>
  <img  onClick={props.pageDown} className='arrow' src="./images/icon-next.svg"/>
  </div>


	)}
export default Controller