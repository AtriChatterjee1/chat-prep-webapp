import { memo } from 'react';
import type { FC } from 'react';

import { NextPage } from 'next';

interface Props {
  className?: string;
}

const Leaderboard: NextPage = () => {
  return (
      <div className=" flex flex-col items-center px-[10vw] pt-[8vh]">

          <div className="relative bg-gray w-[85vw] sm:w-[75vw] rounded-3xl px-[2%] pt-[2%] pb-[3%] justify-between items-center  text-white ">
            <div className="text-borderGray text-base font-metropolis w-min h-min whitespace-nowrap flex-col">
              Back to Dashboard

            </div>
            <div className='flex flex-row mt-6'>
              <div className="text-white text-4xl sm:text-xl font-bold font-metropolis w-min h-min whitespace-nowrap"> 
                  My Scores
              </div>
              <div className='text-white text-2xl sm:text-base font-metropolis w-min h-min whitespace-nowrap px-6 py-1 '>
                18 Dec 2023

              </div>


            </div>

            <div className='text-xl mt-16 font-bold font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>Rank</div>
              <div>Name</div>
              <div>Time</div>
              <div>Score</div>

            </div>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>
            <div className='text-xl mt-8 font-metropolis text-center w-full justify-between grid grid-cols-4 gap-x-4 items-stretch '> 
              <div>#1</div>
              <div>Vrishank</div>
              <div>03:45s</div>
              <div>100</div>
            </div>
            <hr className="my-2 bg-borderGray -200 border-0 h-px"></hr>      
          </div>



      </div>

  );
};

export default Leaderboard;