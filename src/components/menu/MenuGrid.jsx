import React from 'react'

export default function MenuGrid() {
  return (
    <div className="text-white grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 p-4 w-full max-w-full md:max-w-[80%] mx-auto">
      
      <div className="bg-gray-700 rounded-lg h-50 lg:h-auto lg:row-span-2 flex items-center justify-center">
        1
      </div>

      <div className="bg-gray-700 rounded-lg h-50 lg:col-span-2 flex items-center justify-center">
        2
      </div>

      <div className="bg-gray-700 rounded-lg h-50 flex items-center justify-center">
        3
      </div>

      <div className="bg-gray-700 rounded-lg h-50 flex items-center justify-center">
        4
      </div>
    </div>
  )
}
