import Joi from 'joi'
import { useState } from 'react';
import { Contact } from '../../Types/types';
import { getLabelError, validateSquemas } from '../../Utils/Validations';

const contactSquema = Joi.object({
  name: Joi.string().required().min(5).label("Name"),
  email: Joi.string().email({tlds: {allow: false}}).required().min(5).label("Email"),
  message: Joi.string().required().min(5).label("Message"),
})

export default function ContactMessage() {

  const [contact, setContact] = useState<Contact>({email: '', message: '', name: ''})
  const [errors, setErrors] = useState({})

  const save = () => {
    const errors_ = validateSquemas(contactSquema, contact);
    setErrors(errors_);
    if (Object.keys(errors_).length > 0) return;    
  }

  const handleInputsChange = (name: string, value: string) => {
    const contact_ = {...contact, [name]: value};
     setContact(contact_)
  } 

    return (
      <div>
        <h1>Contact</h1>  
        <div className="blog-title col-6 mb-3 mt-4">
          <h4>Name</h4>
          <input onChange={(e)=> handleInputsChange('name', e.target.value)} className="form-control col-6" />
          {getLabelError('name', errors)}
        </div>
        <div className="blog-title col-6 mb-3 mt-4">
          <h4>Email</h4>
          <input onChange={(e)=> handleInputsChange('email', e.target.value)} className="form-control col-6" />
          {getLabelError('email', errors)}
        </div>
        <div className="blog-title col-6 mb-3 mt-4">
          <h4>Message</h4>
          <textarea onChange={(e)=> handleInputsChange('message', e.target.value)} className="form-control col-6" />
          {getLabelError('message', errors)}
        </div>
        <button onClick={save} className="btn btn-success">Send</button>
      </div>
    );
  }
  