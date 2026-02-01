import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  formData: {
    // Step 1 - Personal Info
    name: '',
    age: '',
    gender: '',
    
    // Step 2 - Additional Info
    image: null,
    imagePreview: null,
    address: '',
    phoneNumber: '',
    
    // Step 3 - Contact Info
    email: '',
    rating: 0,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    nextStep: (state) => {
      if (state.currentStep < 3) {
        state.currentStep += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    resetForm: (state) => {
      state.currentStep = 1;
      state.formData = initialState.formData;
    },
  },
});

export const { setFormData, nextStep, prevStep, resetForm } = formSlice.actions;
export default formSlice.reducer;
