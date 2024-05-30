import TestimonialWrapper from "./TestimonialWrapper";
import { TESTIMONIALS } from "./constants";

export default function WhatOurClientSays() {
  return (
    <div className="flex flex-col lg:px-40 md:px-24 sm:px-16 px-4 sm:py-24 py-8 text-black bg-rz-lightblue">
      <h3 className="playfair-display text-2xl sm:text-3xl font-semibold mb-8">
        What Our Client Say About Us
      </h3>

      <div className="grid lg:grid-cols-7 md:grid-cols-2 grid-col-1 gap-4 sm:gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialWrapper
            key={`TESIMONY_${i}`}
            img={testimonial.img}
            name={testimonial.name}
            profession={testimonial.profession}
            testimony={testimonial.testimony}
            span={testimonial.span}
          />
        ))}
      </div>
    </div>
  );
}
