import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";


export const Testimonials = ({reviews}) => {

    const[index,setIndex] = useState(0);

    function leftHandler(){
        if(index === 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightHandler(){
        if(index === reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriceHandler(){
        let randomIdx = Math.floor(Math.random()*reviews.length);
        setIndex(randomIdx);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700'>
        <div>
            <Card reviews={reviews[index]}></Card>
        </div>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button onClick={leftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button onClick={rightHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight></FiChevronRight>
            </button>
        </div>

        <div>
            <button onClick={surpriceHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-3'>Surprice Me</button>
        </div>
    </div>
  )
}

export default Testimonials;
