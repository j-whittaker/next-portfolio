"use client"

import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useProperty from '../hooks/useProperty';
import '../styles/components/testimonialSlider.css';
import SideArrowIcon from '../../public/assets/side-arrow.svg';

function SideArrow() {
  return <Image className="w-9/12 hover:opacity-75" alt="slider nav arrow" src={SideArrowIcon} />
}

function SlideBtn({setActiveSlide, active }: { setActiveSlide: MouseEventHandler<HTMLSpanElement>; active: string; }) {
  return <span onClick={setActiveSlide} className={`slide-btn border inline-block w-12 h-2 content-[''] mx-2 my-0 rounded-[unset] border-solid border-primary ${active}`}></span>;
}

function TestimonialSlide({quote, author, active }: { quote: string;  author: string;  active: boolean;}) {
  return (<>
    <div className={`testimonial-slide border rounded min-h-[18rem] flex-col justify-between p-12 border-solid border-lightgrey ${active ? 'flex' : 'hidden'}`}>
      <div className='quote !mt-0 !mb-4'>{`"${quote}"`}</div>
      <div className='author font-[700] !m-[unset]'>{`-${author}`}</div> 
    </div>
  </>);
}

// added for code neatness, when passing in large string bodies
function buildSlide(quote: string, author: string, active: boolean) {
  return <TestimonialSlide key={author} quote={quote} author={author} active={active}/>
}

const TestimonialSlider : React.FC = () => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [intervalId, setIntervalId] = useProperty<NodeJS.Timeout | undefined>(undefined);
  const ttNextSlideInMs = 3000;

  const prevSlide = useCallback(() => {
    if(intervalId) clearInterval(intervalId);
    setActiveSlideIdx(prevActiveSlideIdx => ((prevActiveSlideIdx - 1 >= 0) ? prevActiveSlideIdx - 1 : 2));
  }, [intervalId]);

  const nextSlide = useCallback(() => {
    if(intervalId) clearInterval(intervalId);
    setActiveSlideIdx(prevActiveSlideIdx => (prevActiveSlideIdx + 1) % 3);
  }, [intervalId]);

  const setActiveSlideClick = useCallback((idx : number ) => {
    if(intervalId) clearInterval(intervalId);
    setActiveSlideIdx(idx);
  },[intervalId]);

  useEffect(() => {
    const intervalId : NodeJS.Timeout = setInterval(() => {
      nextSlide();
    }, ttNextSlideInMs);

    setIntervalId(intervalId);

    return () => clearInterval(intervalId);

  }, []);

  const slides : React.ReactElement[] = [], slideBtns : React.ReactElement[] = [];
    
  slides.push(buildSlide("Jake was an exceptional team member, recognized for his extensive knowledge, patience, and proficiency in teaching. He was my primary contact for assistance with areas outside my expertise. Jake consistently pursued improvements and sought more efficient methods. I thoroughly enjoyed working with him and look forward to seeing his future accomplishments!", 'Kim Pollard, Senior Frontend Engineer at Aeroflow Health', activeSlideIdx == 0));
  slideBtns.push(<SlideBtn setActiveSlide={() => {setActiveSlideClick(0)}} active={`${(0 == activeSlideIdx) ? 'active' : ''}`} key={0} />)
  slides.push(buildSlide("Jake is one of the best developers I have worked with. A great frontend and backend developer who can be trusted to handle any task given to him. " + 
   "Always architected the best solutions to whatever requirements the client had. He's a great asset for any company.", 'Patrick Clouse, Principal Software Engineer at Kadro Solutions', activeSlideIdx == 1));
  slideBtns.push(<SlideBtn setActiveSlide={() => {setActiveSlideClick(1)}} active={(1 == activeSlideIdx) ? 'active' : ''} key={1} />)
  slides.push(buildSlide("I had the pleasure of working with Jake on several projects. He is an outstanding software engineer who always delivers high-quality code no matter how complicated the task. Not only does he approach every challenge with a solutions-oriented mindset, but he's also a joy to collaborate with, always bringing a positive and engaging spirit to the team.", 'Will James, Senior Frontend Engineer', activeSlideIdx == 2));
  slideBtns.push(<SlideBtn setActiveSlide={() => {setActiveSlideClick(2)}} active={(2 == activeSlideIdx) ? 'active' : ''} key={2} />)
  return <div className='testimonial-slider flex items-center gap-8'>
          <button onClick={prevSlide} className='testimonial-arrow bg-transparent mb-8 p-0 prev'><SideArrow/></button>
          <div className='slides'>{slides}<div className='slide-btns text-center mt-4'>{slideBtns}</div></div>
          <button onClick={nextSlide} className='testimonial-arrow bg-transparent mb-8 p-0 next'><SideArrow/></button>
        </div>;
}

export default TestimonialSlider;