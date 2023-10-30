import Header from '@/components/header'
import Card from './../components/card';
import Drawir from './../components/drawir';
import Menu from './../components/drawir';
import Nav from '@/components/nav';
export default function Home() {
 
  return (
    <div className='flex'>
      {/* <Drawir/> */}
      <div className='co bg-black '>
       
       <div className="h-[100vh]">
          <div className="bg-black pt-[50px] h-[95vh] overflow-scroll overflow-x-hidden">
            <Card />
            {/* <img src="/logo.png" alt="" />  <img src="/logo.png" alt="" /> */}
          
          </div>
       </div>
      {/* <Menu/> */}
      
      </div>
      </div>
  )
}
