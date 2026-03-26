import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contactAPI } from '../services/api';
import ContactForm from '../components/ContactForm';
import toast from 'react-hot-toast';

const EditContact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await contactAPI.getContacts();
        const foundContact = response.data.data.contacts.find(c => c._id === id);
        
        if (foundContact) {
          setContact(foundContact);
        } else {
          toast.error('Contact not found');
          navigate('/');
        }
      } catch (error) {
        toast.error('Failed to fetch contact');
        navigate('/');
      } finally {
        setFetchLoading(false);
      }
    };

    fetchContact();
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await contactAPI.updateContact(id, formData);
      toast.success('Contact updated successfully!');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update contact');
      console.error('Error updating contact:', error);
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Edit Contact</h1>
            <p className="mt-1 text-sm text-gray-600">
              Update the contact information below
            </p>
          </div>
          <div className="px-6 py-6">
            <ContactForm 
              contact={contact} 
              onSubmit={handleSubmit} 
              loading={loading} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
