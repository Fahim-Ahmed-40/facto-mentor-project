import { use, useState } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/Utils";
import { CasaLogo } from "~/utils/images/logo.image";

const Header: React.FC = () => {
   
  const [isToggle, setIsToggle] = useState(false);


  const navLinkstyle= 'font-roboto text-heading text-[18px] xl:text-[17px] 2xl:text-[18px] px-[3px] leading-[30px] font-normal '

  const buttonToggle=()=>{
        setIsToggle(!isToggle)
  };

  return (
       <header className="py-[14px] sm:py-[20px]">
           <div className="container container-pad"> 
              <div className="flex items-center justify-between gap-[18px] xl:gap-[24px]">
                 <div aria-label="left" className="flex items-center justify-start gap-[13px] sm:gap-[16px]">
                  
                  <Link to={"#"} className="max-w-[100px]  sm:max-w-[128px] xl:max-w-[140px] 2xl:max-w-[151px] w-full">
                     <img src={CasaLogo}  className="max-w-[100px]  sm:max-w-[128px] xl:max-w-[140px] 2xl:max-w-[151px] w-full" alt="logo" />
                  </Link>
                 </div>

                 <div className={cn( "   bg-white z-50  transition-all xl:transition-none duration-150 xl:duration-[0]  w-[340px] sm:w-[340px]  xl:w-auto   xl:bg-transparent xl:flex   fixed  top-0 h-[100vh] xl:h-auto xl:relative", isToggle ? "left-0 xl:left-0" : "-left-full  xl:left-0")} aria-label="center" >
                    <div className="flex items-center justify-between gap-[24px] p-[13px] sm:p-[16px] xl:hidden">
                         <Link to={"#"} className="max-w-[112px] sm:max-w-[130px]   w-full">
                             <img src={CasaLogo}  className="max-w-[112px] sm:max-w-[130px]   w-full" alt="logo" />
                         </Link>

                         <button type="button" className="underline font-roboto text-heading text-[18px] sm:text-[16px]" onClick={buttonToggle}>
                           close
                         </button>
                    </div>
      
                    
                    <div className={cn("p-[13px] sm:p-[16px] h-[calc(91vh - 28px)] sm:h-[calc(87vh)] xl:h-auto xl:p-0 flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-center gap-[22px] sm:gap-[28px] xl:gap-[40px] 2xl:gap-[48px] ovevrflow-auto")}>
                       <Link to={"#services"} className={cn(navLinkstyle)}>
                       Services
                    </Link>
                    <Link to={"#"} className={cn(navLinkstyle)}>
                       How it works
                    </Link>
                    <Link to={"#"}  className={cn(navLinkstyle)}>
                       Why is different
                    </Link>
                    <Link to={"#"}  className={cn(navLinkstyle)}>
                       Reviews
                    </Link>
                    <Link to={"#"}  className={cn(navLinkstyle)}>
                       Pricing
                    </Link>
                    <Link to={"#"}  className={cn(navLinkstyle)}>
                       Contact
                    </Link>
                    </div>
                    
                    <div className="block p-[16px] xl:hidden">
                    <button type="button" className="block xl:hidden text-[14px] sm:text-[16px] xl:text-[18px]  leading-[22px] sm:leading-[26px] text-white font-manrope font-semibold py-[8px]  sm:py-[12px] px-[20px] sm:px-[26px] xl:py-[14px] xl:px-[34px] rounded-[100px]   w-full bg-[#141414]">
                      Sign Up
                    </button>
                 </div>
             </div>

                 

                 <div className={cn("block xl:hidden opacity-100 visible transition-all duration-150 ease-linear fixed top-0 left-0 w-full  z-40 bg-[#b4b4b466]", isToggle && "opacity-100 visible xl:opacity-0 xl:invisible")}  role="overlay"  onClick={buttonToggle}></div>


                 <div aria-label="right" className="max-w-[181px] xl:max-w-[323px] w-full  flex itmes-center justify-end gap-[16px]  xl:gap-[20px] 2xl:gap-[22px]">
                     <button type="button" className="text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[26px] text-primary font-manrope font-semibold py-[8px]  sm:py-[12px] px-[20px] sm:px-[26px] xl:py-[14px] xl:px-[34px] 2xl:py-[16px] 2xl:px-[40px] rounded-[100px] max-w-[100px]  sm:max-w-[135px]  xl:max-w-[145px]  w-full bg-[#DFEDE3] ">
                      Sign In
                      </button>
                     <button type="button" className="hidden xl:block text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[26px] text-white font-manrope font-semibold  py-[12px] px-[26px] xl:py-[14px] xl:px-[34px] 2xl:py-[16px] 2xl:px-[40px] rounded-[100px] max-w-[144px]  xl:max-w-[154px] w-full  bg-heading">
                      Sign Up
                    </button>


                    <div className="block xl:hidden ">
                  <button
              className="flex items-center justify-center xl:hidden h-[36px] min-w-[36px] max-w-[36px] sm:h-[50px] sm:min-w-[50px] sm:max-w-[50px] rounded-full bg-[#141414] cursor-pointer"
              type="button" onClick={buttonToggle}>
                 <div className="min-w-[19px] max-w-[19px] h-[14px] sm:min-w-[24px] sm:max-w-[24px] sm:h-[17px] md:min-w-[26px] md:max-w-[26px] md:h-[18px] justify-between flex flex-col gap-[3px] cursor-pointer">
                  <span className="bg-white w-full h-[2px] rounded-[10px]"></span>
                  <span className="bg-white w-full h-[2px] rounded-[10px]"></span>
                  <span className="bg-white w-full h-[2px] rounded-[10px]"></span>
                 </div>
                </button>
                    </div>
                 </div>
              </div>
           </div>
       </header>
  );
};

export default Header;
