import { useEffect, useState } from 'react';
import axios from 'axios';
import avatar from '../../assets/avatar.png'
import { useSelector } from 'react-redux';


const ReviewSection = ({ foodData, foodid }) => {
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [allReviews, setAllReviews] = useState();
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);

//   console.log(foodData.reviews);

  const headers = {
    foodid: foodid,
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`
  }

  const fetch = async()=>{
    const res = await axios.get(`https://space-caffe-backend.vercel.app/api/review/get-all-reviews/${foodid}`)
  //   console.log(res.data);
  setAllReviews(res.data)
  }

  useEffect(()=>{  
    fetch();
  },[])

//   console.log(allReviews);


  const handleAddReview = async () => {
    if (!reviewText.trim()) {
      return alert("Please enter a review.");
    }
    try {
      const res = await axios.post(`https://space-caffe-backend.vercel.app/api/review/add-or-update-review`,{rating: reviewRating,comment: reviewText},{headers});
      alert(res.data.message || "Review submitted!");
      fetch();
      setReviewText('');
      setReviewRating(5);
    } catch (err) {
      console.error(err);
      alert("Error submitting review");
    }
  };

  return (
    <div className="mt-6 w-full md:max-w-[70%] mx-auto ">
      <h3 className="text-xl font-semibold text-white mb-2">Reviews</h3>
      {allReviews?.reviews && allReviews?.reviews?.length > 0 ? (
        allReviews?.reviews.map((review, index) => (
          <div key={index} className="bg-white/10 text-white  py-4 px-6 rounded-lg mb-2">
            <div className='flex items-center justify-start'>
                <img src={avatar} alt="avatar" className="w-7 rounded-full" />
                <p className='text-sm font-light italic text-blue-800'>{review.user.email}</p>
            </div>
            <p className="mt-1">{review.comment}</p>
            <div className="text-amber-400">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < review.rating ? '★' : '☆'}</span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-zinc-300">No reviews yet.</p>
      )}
      
      {/* Review form */}
      { isLoggedIn &&
        <div className="mt-4">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="4"
          className="w-full p-2 rounded-lg bg-white/10 text-white"
          placeholder="Add a review..."
        ></textarea>
        <div className="flex items-center mt-2">
          <div className="text-amber-400">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`cursor-pointer ${i < reviewRating ? 'text-yellow-400' : ''}`}
                onClick={() => setReviewRating(i + 1)}
              >
                {i < reviewRating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleAddReview}
          className="mt-3 px-4 py-2 bg-amber-400 text-black rounded-lg"
        >
          Submit Review
        </button>
      </div>
      }
    </div>
  );
};

export default ReviewSection;
