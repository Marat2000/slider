import Footer from './components/Footer'
import Card from './components/Card'
import {useState} from 'react'




function App() {




const [page,setPage]=useState(0)
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
{
    imgUrl:"./images/image-lorem.jpg",
    about:'“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”',
    name:'Lorem Ipsum',
    profession:'Front-end Developer',
    author: 'Konstantin Mishchenko',
    authorLink: 'https://www.pexels.com/ru-ru/photo/1926769/'

  },



  ])



const pageDown=()=>
{

if(page==card.length-1)
  setPage(0)

else 
  setPage(page+1);
}

const pageUp=()=>
{

if(page==0)
   setPage(card.length-1)
else 
   setPage(page-1);

}




  return (
<>
<Card card={card} page={page} pageUp={pageUp} pageDown={pageDown}   />
<Footer/>
</>
  );}


export default App;
