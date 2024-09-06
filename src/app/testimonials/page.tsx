import TestimonialSlider from "../../components/TestimonialSlider";
import { PAGE_LIST } from "../../constants/PageConstants";
import DefaultLayout from "@/components/DefaultLayout";
import React from 'react';

export default function Testimonials() {
  
  return (
        <DefaultLayout className="testimonials">
            <h2>{PAGE_LIST.TESTIMONIALS_PAGE}</h2>
            <div className='content-wrapper'> 
                <TestimonialSlider />
            </div>
        </DefaultLayout>
      );
  }