import Footer from './components/Footer'
import Card from './components/Card'
import {useState,useEffect} from 'react'




function App() {




const [page,setPage]=useState(0)
const [left,setLeft]=useState(false)
const [card,setCard]=useState([
  {
    imgUrl:"./images/image-tanya.jpg",
    about:'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name:'Tanya Sinclair',
    profession:'UX Engineer'

  },
 {
    imgUrl:"./images/image-john.jpg",
    about:'“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name:'John Tarkpor',
    profession:'Junior Front-end Developer'

  },

  ])


const sleep=(ms)=>
{
  return new Promise (resolve =>setTimeout(resolve,ms));
}

const pageUp=async()=>
{
await setLeft(true)
await sleep(250)

if(page==card.length-1)
 await setPage(0)

else 
 await setPage(page+1);

}

const pageDown=async()=>
{

await setLeft(false)
await sleep(250)
if(page==0)
  await setPage(card.length-1)
else 
  await setPage(page-1);


}


useEffect(()=>{setLeft(left)},[page,pageUp,pageDown, sleep])


  return (
<>
<Card card={card} page={page} pageUp={pageUp} pageDown={pageDown}  left={left} />
<Footer/>
</>
  );}


export default App;
