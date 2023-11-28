import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (option) => {
    setFormData({
      ...formData,
      userType: option.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:6060/api/v1/user/register',
        formData
      );
      if (response && response.status === 201) {
        toast.success('Registration Successful  !!!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const options = [
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'admin', label: 'Admin' },
  ];

  return (
    <div className='register__page__container'>
      <h1>C🌏deHERS</h1>
      <div className='register__page__body'>
        <h2 className='register__heading'>
          Create your free account to upskill in tech
        </h2>
        <div className='register__form'>
          <p>Full Name</p>
          <input
            type='text'
            name='name'
            placeholder='Enter Name'
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
          <p>E-mail Address</p>
          <input
            type='text'
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <p>Password</p>
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <p>User Type</p>
          <Select options={options} onChange={handleSelectChange} />
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
      <div className='register__page__body'>
        <p>
          Already have an account? <Link to='/'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
