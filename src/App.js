import './index.css';
import logo from "./images/logo.svg"
import company_logo1 from "./images/client-databiz.svg"
import company_logo2 from "./images/client-audiophile.svg"
import company_logo3 from "./images/client-meet.svg"
import company_logo4 from "./images/client-maker.svg"
import hero_img from "./images/image-hero-desktop.png";
import hero_img_mobile from "./images/image-hero-mobile.png";
import { HiChevronDown, HiChevronUp, HiOutlineMenu } from "react-icons/hi";
import { BsCalendarDay, BsCalendarFill, BsCardList } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { CgCloseO } from "react-icons/cg";
import React from 'react';
function App()
{
  const [hidden, setShow] = React.useState(null);
  const [sub, setSub] = React.useState({
    'features': false,
    'company': false,
  })

  const handleClick = () =>
  {
    setShow(!hidden)
    const sub = {
      'features': false,
      'company': false,
    }
    setSub(sub);
  }

  const handleSubmenu = (key, value) =>
  {
    setSub({ ...sub, [key]: (!value) });
    console.log(sub);
  }


  return (
    <div className="App h-screen w-screen font-Epilogue text-ms m-0 p-0 box-border bg-Almost-White flex flex-col items-center gap-3 text-Almost-Black relative">

      {/* header */}
      <header className='h-[9%] flex items-center bg-Almost-White drop-shadow-md px-10 w-full justify-between Mobile:px-5'>
        {/* left */}
        <div className="left w-1/2 h-full flex items-center gap-12">
          <img src={logo} alt="logo img" className='cursor-pointer w-[4rem] -mb-1 object-cover' />
          <ul className='flex items-center gap-8 text-[14px] text-Medium-Gray cursor-pointer font-ms Mobile:hidden Tab:hidden'>
            <li className='flex items-center gap-2 hover:text-Almost-Black transition-all relative group '>Features<HiChevronDown className='group-hover:hidden transition-all' /> <HiChevronUp className='hidden group-hover:block transition-all hover:block' />
              <div className="dropdown absolute top-[1.2rem] right-0 w-[8rem] bg-Almost-White h-[8rem] hidden text-Medium-Gray   p-3 rounded-sm drop-shadow-md z-100 group-hover:flex transition-all ">
                <ul className='flex flex-col gap-1 [&>li]:flex [&>li]:items-center [&>li]:gap-2 capitalize items-start w-full h-full justify-between'>
                  <li className="hover:text-Medium-Gray flex items-center">
                    <BsCalendarDay className='text-[#2b8bb8]' />todo list
                  </li>
                  <li className="hover:text-Medium-Gray flex items-center">
                    <BsCalendarFill className='text-[#392bb8]' />calender
                  </li>
                  <li className="hover:text-Medium-Gray flex items-center">
                    <BsCardList className='text-[#2add33]' /> reminders
                  </li>
                  <li className="hover:text-Medium-Gray flex items-center">
                    <FcIdea className='text-[#621ce4]' /> planing
                  </li>
                </ul>
              </div>
            </li>
            <li className='flex items-center gap-2 hover:text-Almost-Black transition-all relative group '>Company<HiChevronDown className='group-hover:hidden transition-all' /> <HiChevronUp className='hidden group-hover:block transition-all hover:block' />
              <div className="dropdown absolute top-[1.2rem] right-0 w-[8rem] bg-Almost-White h-[6rem] hidden text-Medium-Gray   p-3 rounded-sm drop-shadow-md z-100 group-hover:flex transition-all ">
                <ul className='flex flex-col gap-1 [&>li]:flex [&>li]:items-center [&>li]:gap-2 capitalize items-start w-full h-full justify-between'>
                  <li className="hover:text-Medium-Gray ">
                    Histroy
                  </li>
                  <li className="hover:text-Medium-Gray">
                    Our Team
                  </li>
                  <li className="hover:text-Medium-Gray">
                    Blog
                  </li>

                </ul>
              </div>
            </li>
            <li className='hover:text-Almost-Black transition-all'>Careers</li>
            <li className='hover:text-Almost-Black transition-all'>About</li>
          </ul>
        </div>
        <div className="right text-[14px] text-Medium-Gray flex items-center gap-10 capitalize Mobile:hidden">
          <button className=" capitalize hover:text-Almost-Black transition-all">login</button>
          <button className='border-2 rounded-xl px-4 py-2 hover:text-Almost-Black transition-all '>Register</button>


        </div>
        {/* // Menu Icon */}
        <HiOutlineMenu className='hidden Mobile:block text-[2rem] cursor-pointer text-Medium-Gray hover:text-Almost-Black transition-all drop-shadow-md Tab:block' onClick={handleClick} />
      </header >
      <section className="hero h-[80%] w-4/5 flex justify-between gap-10 Mobile:w-full Mobile:flex-col items-center ">
        {/* left */}
        <div className="left w-1/2 h-full flex flex-col  justify-between Mobile:order-2 Mobile:w-full  Mobile:text-[14px] Mobile:text-center Mobile:items-center Mobile:h-1/2 Mobile:gap-3 Mobile:p-3 Desktop:justify-center Desktop:gap-10 Tab:text-[15px]">
          {/* top */}

          <h1 className='text-[4rem] font-lg tracking-tight leading-none mt-[6rem]  Mobile:text-[2rem] Mobile:m-0 Desktop:text-[5rem] Tab:text-[3rem]'>  Make remote work</h1>
          <p className="text-Medium-Gray">Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.</p>
          <button className=" bg-Almost-Black text-Almost-White px-4 py-2 rounded-xl cursor-pointer drop-shadow-md w-[10rem] hover:bg-Almost-White hover:text-Almost-Black hover:border-2 border-2 transition-all Mobile:w-[8rem]">Learn more</button>

          {/* logo */}
          <div className="company logo flex  w-full Mobile:py-5">
            <ul className='flex w-full items-center justify-between Mobile:justify-around Mobile:gap-10'>
              <li><img src={company_logo1} alt="img logo 1" /></li>
              <li><img src={company_logo2} alt="img logo 2" /></li>
              <li><img src={company_logo3} alt="img logo 3" /></li>
              <li><img src={company_logo4} alt="img logo 4" /></li>

            </ul>
          </div>
        </div>
        {/* right */}
        <div className='w-1/2 h-full flex items-center justify-center Mobile:w-full Mobile:h-1/2 '>
          <img src={hero_img} alt="hero img" className='h-full object-center Mobile:hidden Tab:hidden' />
          <img src={hero_img_mobile} alt="hero img" className='Tab:block hidden h-full object-cover Mobile:w-full Mobile:object-cover Mobile:block' />
        </div>


      </section>

      {/* // Menu */}
      {hidden && (
        <div className=' fixed  w-screen h-screen'>
          <div className='w-screen h-screen backdrop-sm backdrop-brightness-50 fixed cursor-pointer z-[90] hidden Mobile:block Tab:block' onClick={handleClick}></div>
          <div className="menu hidden Mobile:block fixed top-0 right-0 bottom-0 w-3/5 bg-Almost-White z-[100] h-screen drop-shadow-lg backdrop-blur Tab:block Tab:w-1/5" >
            <CgCloseO className='text-[1.5rem] top-5 absolute right-5 text-Medium-Gray cursor-pointer hover:text-Almost-Black transition-all' onClick={handleClick} />

            <ul className='gap-3 text-[14px] text-Medium-Gray cursor-pointer font-ms hidden Mobile:flex Tab:flex flex-col p-5 mt-14'>
              <li className='flex hover:text-Almost-Black transition-all relative group flex-col ' onClick={() => handleSubmenu('features', sub.features)}>
                {/* Features */}
                <span className='flex items-center gap-2 transition-all '   >Features{!sub.features && <HiChevronDown className='transition-all' />}
                  {/* //Submenu */}
                  {sub.features && <HiChevronUp className='transition-all ' />}</span>
                {/* //Submenu */}
                {sub.features && <div className="bg-Almost-White  text-Medium-Gray transition-all mt-3 ">
                  <ul className=' pl-10 flex-col gap-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 capitalize items-start w-full h-full justify-between flex' >
                    <li className="hover:text-Medium-Gray ">
                      <BsCalendarDay className='text-[#2b8bb8]' />todo list
                    </li>
                    <li className="hover:text-Medium-Gray">
                      <BsCalendarFill className='text-[#392bb8]' />calender
                    </li>
                    <li className="hover:text-Medium-Gray">
                      <BsCardList className='text-[#2add33]' /> reminders
                    </li>
                    <li className="hover:text-Medium-Gray">
                      <FcIdea className='text-[#621ce4]' /> planing
                    </li>
                  </ul>
                </div>}
              </li>
              <li className='flex hover:text-Almost-Black transition-all relative group flex-col ' onClick={() => handleSubmenu('company', sub.company)}>
                {/* // Company */}
                <span className='flex items-center gap-2 transition-all'>Company{!sub.company && <HiChevronDown className='transition-all' />}
                  {sub.company && <HiChevronUp className='transition-all ' />}
                </span>
                {/* //Submenu */}
                {sub.company && <div className="bg-Almost-White  text-Medium-Gray transition-all mt-3 ">
                  <ul className=' pl-10 flex-col gap-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 capitalize items-start w-full h-full justify-between flex' >
                    <li className="hover:text-Medium-Gray ">
                      History
                    </li>
                    <li className="hover:text-Medium-Gray">
                      Our Team
                    </li>
                    <li className="hover:text-Medium-Gray">
                      Block
                    </li>

                  </ul>
                </div>}
              </li>
              <li className='hover:text-Almost-Black transition-all'>Careers</li>
              <li className='hover:text-Almost-Black transition-all'>About</li>
            </ul>

            <div className="right text-[14px] text-Medium-Gray  items-center gap-3 capitalize Mobile:flex hidden flex-col">
              <button className=" capitalize hover:text-Almost-Black transition-all">login</button>
              <button className='border-2 rounded-xl px-4 py-2 hover:text-Almost-Black transition-all w-4/5 '>Register</button>


            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
