const Controller=(props)=>{return(

 <div className='controller'>
  <img  onClick={props.pageUp} className='arrow' src="./images/icon-prev.svg" alt="arrow"/>
  <img  onClick={props.pageDown} className='arrow' src="./images/icon-next.svg" alt="arrow"/>
  </div>


	)}
export default Controller