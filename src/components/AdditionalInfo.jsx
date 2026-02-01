function AdditionalInfo({ formData, onInputChange, onNext, onPrev }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onInputChange('image', file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        onInputChange('imagePreview', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.address || !formData.phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }
    
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profile Image
        </label>
        <div className="flex flex-col items-center space-y-4">
          {formData.imagePreview && (
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200">
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
            <span className="text-sm font-medium text-gray-700">
              {formData.image ? 'Change Image' : 'Upload Image'}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address
        </label>
        <textarea
          value={formData.address}
          onChange={(e) => onInputChange('address', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
          placeholder="Enter your address"
          rows="3"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => onInputChange('phoneNumber', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="Enter your phone number"
        />
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
          className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

export default AdditionalInfo;
