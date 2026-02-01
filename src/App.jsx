import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormData, nextStep, prevStep, resetForm } from './redux/formSlice';
import PersonalInfo from './components/PersonalInfo';
import AdditionalInfo from './components/AdditionalInfo';
import ContactInfo from './components/ContactInfo';
import ProgressBar from './components/ProgressBar';

function App() {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector((state) => state.form);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleInputChange = (field, value) => {
    dispatch(setFormData({ [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    dispatch(resetForm());
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            onInputChange={handleInputChange}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <AdditionalInfo
            formData={formData}
            onInputChange={handleInputChange}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <ContactInfo
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onPrev={handlePrev}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Multi-Step Form
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Step {currentStep} of 3
        </p>
        
        <ProgressBar currentStep={currentStep} totalSteps={3} />
        
        <div className="mt-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;
