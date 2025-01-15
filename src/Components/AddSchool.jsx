import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
      console.log('Selected File:', acceptedFiles[0]);
    } else {
      console.error('No file selected or file type not accepted.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    console.log('Image File:', image);

    if (!image) {
      alert('Please upload an image.');
      return;
    }

    
    console.log('Name:', data.name); 
    console.log('Address:', data.address);
    console.log('City:', data.city);
    console.log('State:', data.state); 
    console.log('Contact:', data.contact); 
    console.log('Email:', data.email_id);
    console.log('Image:', image);
    

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', image);

    try {
      const response = await axios.post('https://schools-eyck.onrender.com/api/addSchool', formData);
      alert('School added successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Error adding school:', error.response.data);
        alert(error.response.data.error || 'Failed to add school.');
      } else {
        console.error('Error adding school:', error.message);
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('name', { required: 'School name is required' })}
          type="text"
          placeholder="School Name"
          className="input w-full p-2 border border-gray-300 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          {...register('address', { required: 'Address is required' })}
          type="text"
          placeholder="Address"
          className="input w-full p-2 border border-gray-300 rounded"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

        <input
          {...register('city', { required: 'City is required' })}
          type="text"
          placeholder="City"
          className="input w-full p-2 border border-gray-300 rounded"
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}

        <input
          {...register('state', { required: 'State is required' })}
          type="text"
          placeholder="State"
          className="input w-full p-2 border border-gray-300 rounded"
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}

        <input
          {...register('contact', {
            required: 'Contact is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Invalid contact number'
            }
          })}
          type="text"
          placeholder="Contact"
          className="input w-full p-2 border border-gray-300 rounded"
        />
        {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}

        <input
          {...register('email_id', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address'
            }
          })}
          type="email"
          placeholder="Email"
          className="input w-full p-2 border border-gray-300 rounded"
        />
        {errors.email_id && <p className="text-red-500 text-sm">{errors.email_id.message}</p>}

        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
          <input {...getInputProps()} />
          <p>{image ? image.name : 'Drag & drop an image or click to select'}</p>
        </div>

        <button type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded w-full">
          Add School
        </button>
      </form>
    </div>
  );
};

export default AddSchool;
