import dynamic from "next/dynamic";
import { PAGE_LIST } from "../../constants/PageConstants";
import DefaultLayout from "@/components/DefaultLayout";
import React from 'react';

const TestimonialSlider: React.ComponentType<{}>  = dynamic(() => import('../../components/TestimonialSlider'), {});

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