import { useState } from 'react';

function ContactInfo({ formData, onInputChange, onSubmit, onPrev }) {
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || formData.rating === 0) {
      alert('Please fill in all fields');
      return;
    }
    
    onSubmit();
  };

  const handleStarClick = (rating) => {
    onInputChange('rating', rating);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rating
        </label>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className="focus:outline-none transition-transform transform hover:scale-110"
            >
              <svg
                className={`w-10 h-10 ${
                  star <= (hoveredStar || formData.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 fill-current'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
          <span className="ml-4 text-gray-600 font-medium">
            {formData.rating > 0 ? `${formData.rating} / 5` : 'Not rated'}
          </span>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactInfo;
