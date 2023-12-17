import { useState } from 'react';

import '../styles/add-property.css'

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: ''
    }
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = event => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = event => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <div className='title-field'>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="2 bed flat"
          />
        </div>
        <div className='city-field'>
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </div>
        <div className='type-field'>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>
        <div className='bedrooms-field'>
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </div>
        <div className='bathrooms-field'>
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="1"
          />
        </div>
        <div className='price-field'>          
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="£1000"
          />
        </div>
        <div className='email-field'>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="john.doe@mail.com"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
  
export default AddProperty;
