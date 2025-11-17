import React from 'react'
import { Icons } from "~/utils/images/icon.image";


const Herocards = () => {
  return (
    <>
    <div className="container container-pad mb-[30px]">
       <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-3  gap-[36px] mt-[130px]">
  <div className="bg-[#E0F0E5] w-[457px] 
  h-[665px] rounded-[25px] py-[46px] px-[28px]">
    <div className="flex flex-col gap-[50px]">
      <div className="flex gap-[24px]">
        <div >
          <img src={Icons.Herocard1_layers} alt="" className="pt-[2px] max-w-[68px] h-auto" />
        </div>
        <div className="font-roboto font-semibold text-[32px] text-heading leading-[40px]">
          Sales overview from Previous Day
        </div>
      </div>

      <div className="bg-[#FFFFFF] h-[361px] w-[400px] rounded-3xl px-[33px] pt-[32px] pb-[27px]  relative ">
        <div className="flex flex-row">
          <div>
            <img
              src={Icons.Herocard1_wave}
              className="pt-[6px] pr-[16px]"
            />
          </div>
          <div className="font-manrope font-medium text-[#686868] text-[24px] leading-[36px]">
            Total Sales:{' '}
            <span className="font-roboto font-bold text-[#686868] text-[32px] leading-[40px]">
              $12,500
            </span>
          </div>
        </div>

        <div className="absolute top-[102px] left-[173px] flex flex-col gap-1 z-20 bg-[#F1F68E] rounded-[12px] w-fit h-[87px] px-[16px] py-[12px]">
          <div className="font-roboto font-normal text-[18px] text-[#686868] leading-[30px]">
            Highest sale
          </div>
          <div className="flex flex-row gap-1">
            <div>
              <img src={Icons.Herocard1_high} alt="" />
            </div>
            <div className="font-roboto font-bold text-[24px] leading-[34px]">$2,450</div>
          </div>
        </div>

        <div className="pt-[150px] w-auto h-[232px]">
          <div className="absolute top-[155px] left-[33px] z-10 flex justify-between items-end gap-4 h-[150px] max-w-full">
            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#E0F0E5] w-[34px] h-[68px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Sun</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#E0F0E5] w-[34px] h-[45px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Mon</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#E0F0E5] w-[34px] h-[88px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Tues</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#E0F0E5] w-[34px] h-[71px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Wed</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#0F4E23] w-[34px] h-[143px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Thu</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#DAFFC2] w-[34px] h-[57px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Fri</span>
            </div>

            <div className="flex flex-col items-center flex-1">
              <div className="bg-[#E0F0E5] w-[34px] h-[106px] max-h-full"></div>
              <span className="mt-[12px] font-roboto font-semibold text-[14px] text-[#686868] leading-[24px]">Sat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#BFE5A6] w-[400px] h-[64px] rounded-[24px] px-[24px] py-[16px]">
        <div className="flex flex-row gap-[16px]">
          <div>
            <img src={Icons.Herocard1_swave} alt="" className="pt-[5px]"/>
          </div>
          <div className="font-roboto font-regular text-[20px] leading-[32px]">
            Avg. sale:$104.16 /per transaction
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Second Column */}
  <div className="bg-[#DAFFC2] w-[456px] 
  h-[665px] rounded-[25px] py-[46px] px-[28px]">
    {/* Header section */}
    <div className="flex  gap-[24px]">
      <div >
      <img
        src={Icons.Herocard2_bolt}
        alt="bolt icon"
        className="pt-[2px] max-w-[48px]"
      />
      </div>
      <div className="font-roboto font-semibold text-[32px] text-heading leading-[40px]">
        Factoring Possible Amount.
      </div>
    </div>

    {/* Available amount */}
    <div className="flex justify-center items-center mt-[54px] mb-[36px]">
      <div className="h-[125px] w-[245px] md:object-center object-fill bg-white p-[24px] rounded-2xl">
        <div className="flex flex-col gap-[16px]">
          <div className="font-manrope font-normal text-[#686868] text-[24px] leading-[26px]">
            Available amount
          </div>
          <div className="font-roboto font-semibold text-heading text-[32px] leading-[40px]">
            $ 15,375 <span className="font-roboto font-semibold text-heading text-[18px] leading-[30px] py-[2px]">USD</span>
          </div>
        </div>
      </div>
    </div>

    {/* Factored amount box */}
    <div className="w-[350px] object-fill bg-white p-2 rounded-2xl h-[281px] py-[24px] px-[13px]">
      <div className="flex gap-2 items-center">
        <img
          src={Icons.Herocard2_dollarsign}
          alt="dollar icon"
          className="w-12 h-12 rounded-lg p-2"
        />
        <h1 className="font-roboto font-medium text-[24px] leading-[32px] text-heading">
          Factored amount vs. remaining balance
        </h1>
      </div>

      <div className="bg-[#E0F0E5] p-4 rounded-lg mt-[24px]">
        <div className="flex justify-between items-center mb-[32px]">
          <p className="text-[#686868] text-lg font-semibold">
            Factored balance
          </p>
          <h1 className="text-xl font-Roboto font-bold flex gap-2 items-center">
            $ 11,531.25
          </h1>
        </div>

        {/* Grid */}
        <div className="flex grid grid-cols-4">
          <div className="invisible bg-orange-400">75%</div>
          <div className="invisible bg-orange-400">75%</div>
          <div className="invisible bg-orange-400">75%</div>
          <div>75%</div>
        </div>

        <div className="w-full bg-[#F2F2F2] rounded-full h-3 mt-2">
          <div
            className="bg-[#0F4E23] h-3 rounded-full"
            style={{ width: '75%' }}
          ></div>
        </div>
      </div>
    </div>
  </div>

  {/* Third Column */}
  <div className="bg-[#F1F68E] w-[457px] 
  h-[665px] rounded-[25px]  py-[46px] px-[22px] relative">
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-row gap-[16px]">
        <div>
          <img src={Icons.Herocard3_leaf} alt="" className="pt-[2px] max-w-[48px]" />
        </div>
        <div className="font-roboto font-semibold text-[32px] text-heading leading-[40px]">
          Secure & Streamlined Workflow
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-[#FFFFFF] h-[124px] w-[267px] absolute top-[160px] left-[79px] rounded-[25px] px-[24px] py-[20px] -rotate-13">
        <div className="flex flex-row gap-[22px]">
          <div className="font-roboto font-bold text-[24px] text-heading leading-[34px]">Recent User</div>
          <div className="font-roboto font-semibold text-[14px] text-[#686868] leading-[24px] pt-2 ">View All</div>
        </div>

        <div className="flex -space-x-4 mt-2">
          <img
            src={Icons.Herocard3_anony1}
            alt="User 1"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={Icons.Herocard3_anony2}
            alt="User 2"
            className="w-12 h-12 rounded-full border-[20px] border-white"
          />
          <img
            src={Icons.Herocard3_anony3}
            alt="User 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={Icons.Herocard3_anony4}
            alt="User 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={Icons.Herocard3_anony5}
            alt="User 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="w-12 h-12 rounded-full bg-[#DAFFC2] flex items-center justify-center text-[#0F4E23] font-semibold text-[15px] border-2 border-white">
            +9
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-[#FFFFFF] h-[165px] w-[195px] absolute top-[317px] left-[229px] rounded-[25px] px-[24px] py-[20px] mt-[16px] rotate-2.5">
        <div className="flex flex-col gap-4">
          <div className="text-md font-semibold text-gray-400">
            Total Balance
          </div>

          <div className="text-black font-bold text-3xl">23,576.00</div>

          <div className="flex flex-row gap-3">
            <div>
              <img src={Icons.Herocard3_plus} alt="" />
            </div>
            <div className="text-md font-semibold text-gray-400">
              Add Number
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Card */}
      <div className="bg-[#FFFFFF] h-[96px] w-[374px] rounded-[25px] absolute top-[483px] left-[25px] px-[24px] py-[16px] mt-[26px] rotate-7">
        <div className="flex flex-row gap-4 items-center">
          <div className="rounded-full">
            <img
              src={Icons.Herocard3_anony6}
              alt=""
              className="rounded-full h-12 w-auto"
            />
          </div>

          <div className="flex flex-col">
            <div className="font-roboto font-bold text-[24px] text-heading leading-[34px]">Online</div>
            <div className="font-manrope font-regular text-[16px] text-[#686868] leading-100%">Tomy Restaurant</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold">+$10K</div>
            <button className="bg-[#E0F0E5] text-[#0F4E23] rounded-2xl content-fit">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
    </>
  );
};

export default Herocards
