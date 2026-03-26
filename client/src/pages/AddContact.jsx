import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactAPI } from '../services/api';
import ContactForm from '../components/ContactForm';
import toast from 'react-hot-toast';

const AddContact = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await contactAPI.createContact(formData);
      toast.success('Contact created successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create contact');
      console.error('Error creating contact:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Add New Contact</h1>
            <p className="mt-1 text-sm text-gray-600">
              Fill in the details below to create a new contact
            </p>
          </div>
          <div className="px-6 py-6">
            <ContactForm onSubmit={handleSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
