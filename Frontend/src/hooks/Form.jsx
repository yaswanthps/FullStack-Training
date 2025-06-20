import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))

    }
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

    return (
        <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <br />

        <label htmlFor="department">Department:</label>
        <input type="text"  name="department" value={formData.department} onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>  
  );
};

export default Form
