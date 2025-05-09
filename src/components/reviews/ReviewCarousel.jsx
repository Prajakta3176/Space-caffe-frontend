import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import avatar from '../../assets/avatar.png'

const reviews = [
  {
    name: 'Rushabh Nandanwar',
    rating: 5,
    review:
      "Walking into Cafe Cosmos honestly felt like stepping into a sci-fi dream. The lights, the decor, the music – everything just synced with my mood instantly. I tried their cosmic burger and it was insanely good – juicy, loaded, and totally worth the hype. The vibes here are unmatched, and it's officially my favorite place to escape from college chaos.",
  },
  {
    name: 'Prajakta Mondhe',
    rating: 5,
    review:
      "Cafe Cosmos is literally a hidden gem in the city. I loved how aesthetically everything is set – from the ambient lighting to the galaxy-themed walls. I ordered their iced mocha and fries and legit felt like I was in another universe. Plus, the staff is super sweet and welcoming. This café isn't just a food spot, it’s an experience.",
  },
  {
    name: 'Nita Nandanwar',
    rating: 4,
    review:
      "The moment I entered, the peaceful cosmic vibe made me smile. The café gives you those dreamy late-night chill feelings even during the day. Their sandwich and shake combo was delightful. I loved how the seating arrangement gives you privacy yet keeps the whole vibe social. Would definitely recommend this to people who want to vibe alone or with friends.",
  },
  {
    name: 'Pooja Kumar',
    rating: 5,
    review:
      "I wasn’t expecting much when I visited Cafe Cosmos, but man, it blew my mind. Their cold coffee was so refreshing, and the burger was literally out of this world. The playlist playing in the background was a chef’s kiss! It felt like my brain just unplugged from stress. Will 100% return with my entire squad.",
  },
  {
    name: 'Sarthak Sharma',
    rating: 4,
    review:
      "If you're someone who loves calm, aesthetic cafés with great food – this is your spot. I felt super relaxed and energized at the same time. The food is freshly made and the menu has a cool space twist to it. It gets a bit crowded on weekends, but trust me, it's worth the wait!",
  },
  {
    name: 'Neha Sinha',
    rating: 5,
    review:
      "I couldn’t stop taking pictures the entire time I was at Cafe Cosmos! Every corner is Instagram-worthy and the atmosphere is cozy yet super modern. The strawberry shake was thick, rich, and full of flavor. Also, the staff was very friendly and helpful in recommending what to try. It’s now my go-to place when I need creative inspiration!",
  },
  {
    name: 'Ravi Singh',
    rating: 4,
    review:
      "Loved the chill vibe of Cafe Cosmos! The space-themed interiors were amazing, especially the glowing tables and starry ceiling lights. I had their peri-peri fries and iced latte – both were fantastic. It’s a perfect escape spot for solo thinkers or for catching up with close friends without the noise of the city.",
  },
  {
    name: 'Ananya Patel',
    rating: 5,
    review:
      "From the moment I walked in, I felt like I was floating through a galaxy. This place is peaceful, cozy, and has a beautiful futuristic vibe. I tried the Meteor Shake and it was honestly the best shake I’ve had in months. Cafe Cosmos doesn’t just serve food – it serves mood, peace, and a whole vibe. Loved every second.",
  },
];



export default function ReviewCarousel() {
  return (
    <div id='testimonials' className="w-full px-4 py-10">
        <h1 className='text-amber-500 reviewHead max-w-[90%] sm:max-w-[70%] md:max-w-[40%] mx-auto text-4xl text-center mb-10 font-semibold'>Here’s what people say about Caffe Cosmos</h1>
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
