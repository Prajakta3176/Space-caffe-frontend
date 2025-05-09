import React from 'react';

const AboutUs = () => {
  return (
    // from-black to-[#0a0f1c]
    <div className="min-h-screen bg-gradient-to-b text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">About Cafe Cosmos</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Welcome to <span className="text-white font-semibold">Cafe Cosmos</span> – where the flavors are out of this world 🚀. Inspired by the wonders of space and the joy of tasty food, we’re here to take your taste buds on an intergalactic journey.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">🌌 Our Mission</h2>
            <p className="text-gray-400">
              To serve delicious, comforting, and cosmic-themed food that makes you feel at home while giving space to your cravings. Whether you’re craving a classic burger or something unique like our galaxy fries, we got you!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">👨‍🚀 Our Story</h2>
            <p className="text-gray-400">
              Cafe Cosmos started as a small dream by foodies who were also stargazers. We blended the love for stars, planets, and space travel with the thrill of crafting mouth-watering meals – and that’s how Cafe Cosmos was born.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">🪐 What Makes Us Different</h2>
            <p className="text-gray-400">
              From our space-themed interiors to the creatively named dishes and cosmic vibes, everything at Cafe Cosmos is built to offer an experience you won’t forget. Our team is here to serve you warmth, creativity, and lots of tasty surprises!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">📍 Visit Us</h2>
            <p className="text-gray-400">
              Located in the heart of the city, our cafe is a cozy spaceship waiting to welcome hungry astronauts. Come chill, eat, and vibe with the stars!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-400 italic">“Your Hunger, Our Mission!” – Team Cafe Cosmos 🌠</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
