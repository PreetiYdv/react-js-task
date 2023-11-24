import React, { useState } from 'react'
import { HalfStar, BlankStar, FillStar } from './common/Icons';

const StarProgress = () => {
  const [number, setNumber] = useState(0)
  const StarsFill = (rating) => {
    const stars = []
    const roundedRating = Math.floor(rating);
    const isHalfStar = rating % 1 !== 0;

    for (let i = 0; i < roundedRating; i++) {
      stars.push(<FillStar key={i} />);
    }
    if (isHalfStar) {
      stars.push(<HalfStar />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<BlankStar key={i} />);
    }
    return stars;
  }

  return (
    <>
      <div className="h-screen bg-[#10111A]">
        <div className="container mx-auto flex justify-center flex-col items-center h-full">
          <form>
            <div className="flex flex-col justify-center rounded-md border bg-white/5 backdrop-blur-md  gap-5 px-20 py-10">
              <div className="flex gap-5">
                <input
                  type="number"
                  value={number}
                  placeholder="number..."
                  onChange={(e) => setNumber(e.target.value)}
                  className="py-1 px-2 bg-transparent text-white border-b outline-none"
                />
              </div>
              <div className='flex gap-2'>
                {StarsFill(number)}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default StarProgress