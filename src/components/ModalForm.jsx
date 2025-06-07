import React, { useState } from 'react';
import './ModalForm.css';

const ModalForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    languages: [],
    email: '',
    phone: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'languages') {
      setFormData((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value),
      }));
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.gender) newErrors.gender = 'Select gender';
    if (formData.languages.length === 0) newErrors.languages = 'Select at least one';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number required';
    if (!formData.agree) newErrors.agree = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const timestamp = new Date().toLocaleString();
    setSubmittedData((prev) => [...prev, { ...formData, timestamp }]);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>

        {showThankYou ? (
          <div className="thank-you">
            <h3>Thank you for your interest!</h3>
            <p>We’ll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2>Get Started Today!</h2>
            <form onSubmit={handleSubmit} className="form-style">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && <p className="error">{errors.firstName}</p>}
              {errors.lastName && <p className="error">{errors.lastName}</p>}

              <label>Gender</label>
              <div className="radio-group">
                <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
              </div>
              {errors.gender && <p className="error">{errors.gender}</p>}

              <label>Language</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="languages" value="English" onChange={handleChange} /> English</label>
                <label><input type="checkbox" name="languages" value="Hindi" onChange={handleChange} /> Hindi</label>
                <label><input type="checkbox" name="languages" value="Marathi" onChange={handleChange} /> Marathi</label>
              </div>
              {errors.languages && <p className="error">{errors.languages}</p>}

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <div className="agree-box">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label>I agree to the <a href="#">terms and conditions</a></label>
              </div>
              {errors.agree && <p className="error">{errors.agree}</p>}

              <button className="submit-btn" type="submit">Done</button>
            </form>
          </>
        )}
      </div>
        
      {/* Data Table */}
      {submittedData.length > 0 && (
        <div className="submission-table">
          <h4>Submitted Data</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Email</th><th>Phone</th><th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, idx) => (
                <tr key={idx}>
                  <td>{`${data.firstName} ${data.lastName}`}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
