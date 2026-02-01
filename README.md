# Multi-Step Form with Redux State Management

A beautiful, responsive multi-step form built with React, Tailwind CSS, and Redux Toolkit.

## Features

- **3-Step Form Process**:
  - Step 1: Personal Information (Name, Age, Gender)
  - Step 2: Additional Information (Image Upload, Address, Phone Number)
  - Step 3: Contact Information (Email, Rating)

- **Redux State Management**: Centralized state management for all form data
- **Progress Indicator**: Visual progress bar showing current step
- **Form Validation**: Client-side validation for all fields
- **Image Upload & Preview**: Upload profile image with instant preview
- **Star Rating Component**: Interactive 5-star rating system
- **Responsive Design**: Mobile-friendly interface
- **Smooth Transitions**: Polished animations and transitions

## Technologies Used

- **React 18.3**: Modern React with hooks
- **Redux Toolkit**: Simplified Redux state management
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server

## Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## Project Structure

```
multi-step-form/
├── src/
│   ├── components/
│   │   ├── PersonalInfo.jsx      # Step 1 component
│   │   ├── AdditionalInfo.jsx    # Step 2 component
│   │   ├── ContactInfo.jsx       # Step 3 component
│   │   └── ProgressBar.jsx       # Progress indicator
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   └── formSlice.js          # Form state slice
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Redux State Structure

The form state is managed in a single Redux slice:

```javascript
{
  currentStep: 1,
  formData: {
    // Step 1
    name: '',
    age: '',
    gender: '',
    
    // Step 2
    image: null,
    imagePreview: null,
    address: '',
    phoneNumber: '',
    
    // Step 3
    email: '',
    rating: 0
  }
}
```

## Redux Actions

- `setFormData(data)`: Update form fields
- `nextStep()`: Navigate to next step
- `prevStep()`: Navigate to previous step
- `resetForm()`: Reset all form data

## How It Works

### State Management Flow

1. **User Input**: User enters data in form fields
2. **Dispatch Action**: Component dispatches `setFormData` action
3. **Redux Update**: Redux updates the centralized state
4. **Re-render**: Components re-render with updated data
5. **Navigation**: User clicks Continue/Back to navigate steps
6. **Submit**: On final step, form data is submitted and state is reset

### Component Communication

- All components receive state via `useSelector` hook
- All components dispatch actions via `useDispatch` hook
- No prop drilling - direct access to Redux store
- Single source of truth for all form data

## Validation Rules

- **Step 1**: All fields (name, age, gender) are required
- **Step 2**: Address and phone number are required
- **Step 3**: Email and rating are required

## Customization

### Change Step Count
Modify `totalSteps` in `App.jsx` and add new step components.

### Modify Form Fields
Update `formSlice.js` initial state and create corresponding components.

### Style Customization
Edit Tailwind classes in components or modify `tailwind.config.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
