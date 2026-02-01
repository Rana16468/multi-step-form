function PersonalInfo({ formData, onInputChange, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation 
    if (!formData.name || !formData.age || !formData.gender) {
      alert('Please fill in all fields');
      return;
    }
    
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onInputChange('name', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Age
        </label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => onInputChange('age', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="Enter your age"
          min="1"
          max="120"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gender
        </label>
        <select
          value={formData.gender}
          onChange={(e) => onInputChange('gender', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>

      <div className="flex justify-end pt-4">
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

export default PersonalInfo;
