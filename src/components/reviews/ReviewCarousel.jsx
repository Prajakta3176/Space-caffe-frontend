import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import avatar from '../../assets/avatar.png'

const reviews = [
  {
    name: 'Rushah Nandanwar',
     // Replace with actual path
    rating: 3,
    review:
      'Space Café is a perfect chill spot with cosmic vibes, delicious burgers, and dreamy drinks. Great ambience, good music, and Insta-worthy setup make it a must-visit for food and vibe lovers!',
  },
  {
    name: 'Prajakta Mondhe',
     // Replace with actual path
    rating: 3,
    review:
      'Space Café is a perfect chill spot with cosmic vibes, delicious burgers, and dreamy drinks. Great ambience, good music, and Insta-worthy setup make it a must-visit for food and vibe lovers!',
  },
  {
    name: 'Nita Nandanwar',
     // Replace with actual path
    rating: 4,
    review:
      'Space Café is a perfect chill spot with cosmic vibes, delicious burgers, and dreamy drinks. Great ambience, good music, and Insta-worthy setup make it a must-visit for food and vibe lovers!',
  },
  {
    name: 'Penguin kumar',
     // Replace with actual path
    rating: 5,
    review:
      'Space Café is a perfect chill spot with cosmic vibes, delicious burgers, and dreamy drinks. Great ambience, good music, and Insta-worthy setup make it a must-visit for food and vibe lovers!',
  },
  // Add more reviews as needed
];

export default function ReviewCarousel() {
  return (
    <div className="w-full px-4 py-10">
        <h1 className='text-white reviewHead max-w-[90%] sm:max-w-[70%] md:max-w-[40%] mx-auto text-4xl text-center mb-10 font-semibold'>Here’s what people say about Space Cafe</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full max-w-xl mx-auto"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/5 backdrop-blur-md  p-6 rounded-2xl shadow-lg text-white flex flex-col gap-4 items-center text-center">
              <div className="flex items-center gap-3">
                <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                <span className="bg-slate-600/60 px-4 py-1 rounded-full text-sm">{item.name}</span>
              </div>
              <div className="flex gap-1 text-amber-400 text-xl">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < item.rating ? '★' : '☆'}</span>
                ))}
              </div>
              <p className="bg-slate-600/60 p-4 rounded-xl text-sm font-light max-w-md">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
