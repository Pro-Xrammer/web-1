import { useLocation } from 'react-router-dom'
import { navigation  } from '../constants'
import {brainwave} from '../assets'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import { useState } from 'react'
import { disablePagescroll , enablePageScroll} from 'scroll-lock'
const Header = () => {
const pathname = useLocation();
const [openNavigation, setopenNavigation] = useState(false);
const ToggleNavigation =() =>{
  if(openNavigation){
    setopenNavigation(false)
    enablePageScroll()
  }else{
    setopenNavigation(true)
    disablePagescroll()
  }
};

const handleclick = () =>{
  if(!openNavigation) return;
  enablePageScroll()
  setopenNavigation(false);
}
  return (
    <>
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
         ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>

        <div className="flex  items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className='block w-[12rem] xl:mr-8 ' href='#hero'>
            <img src={brainwave} width={190} height={40} alt="image" />
        </a>
        <nav className={` ${openNavigation ? 'flex' : 'hidden'}
        fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row '>

            {navigation.map((items) =>(
            <a className={`block relative font-code text-2xl uppercase text-n-1 transtion-colors hover:text-color-1 
            ${items.onlyMobile ? 'lg:hidden' : ''} 
            px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
             ${items.url === pathname.hash ?'z-2 lg:text-n-1' : 'lg:text-n-1/50'} 
              lg:leading-5 lg:hover:text-n-1 xl:px-12`}
               key={items.id} 
               href={items.url}
               onClick={handleclick}>
                
                {items.title} 
                </a>
            ))}
            
            </div>
            <HamburgerMenu/>
        </nav>
        <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>New Account</a>
         <Button className="hidden lg:block">
            Sign in
         </Button>

         <Button onClick={ToggleNavigation} className="ml-auto lg:hidden" px="px-3">
          <MenuSvg openNavigation={openNavigation}/>
         </Button>
        </div>
        </div>
    </>
  )
}

export default Header;