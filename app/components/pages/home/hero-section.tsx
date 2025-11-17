import Illustrator from "~/assets/logo/Illustration (1).png";


const HeroSection:React.FC = () => {
  return (
    <section>
       <div className="container container-pad">
          <div className="flex flex-col items-center justify-center pt-[141px]">
             <div className="bg-[#DFEDE3] rounded-full px-[24px] py-[8px] font-manrope font-medium text-primary text-[8px] sm:text-[16px] md:text-[18px] lg:text-[20px]">Fast. secure. hassle-free</div>
             <div className="font-roboto font-extrabold text-[15px] sm:text-[30px] md:text-[38px] lg:text-[58px]  xl:text-[72px] text-center leading-tight pt-[32px]">
                  Get Paid Faster
                  <span className="inline-block w-[72px] h-[48px]">
                    <img src={Illustrator} alt="" className="max-w-[32px] max-h-[25px] -p-2 sm:p-0 sm:max-w-[48px] p-0 sm:h-auto md:max-w-[58px]  w-full h-full inline-block" />
                  </span> 
                  Instant Cash
                  <br />
                  for Businesses!
              </div>

             <div className="font-manrope font-regular text-[7px] sm:text-[14px] md:text-[18px] mt-[24px] text-[#686868] text-center">
                Stop waiting months for credit card payments. CASA helps business owners access cash <br/> instantly by converting card transactions into immediate funds.
    
             </div>
             <div className="mt-[48px]">
                <button type="button" className=" hover:bg-[#DFEDE3] max-auto h-auto bg-[#0F4E23] text-[#DFEDE3] hover:text-[#0F4E23] font-Manrope font-semibold text-[12px] sm:text[16px] md:text-[16px] lg:text-[18px]  px-[32px] py-[12px] rounded-full">Get started</button>
                
             </div>
          </div>
       </div>
    </section>
  );
};

export default HeroSection;
