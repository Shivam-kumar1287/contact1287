import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ContactCard = ({ contact, onDelete, onEdit }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      await onDelete(contact._id);
      toast.success('Contact deleted successfully');
    } catch (error) {
      toast.error('Failed to delete contact');
    }
    setShowDeleteConfirm(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 animate-slide-in">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {contact.name}
            </h3>
            {contact.email && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {contact.email}
              </p>
            )}
            {contact.phone && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Phone:</span> {contact.phone}
              </p>
            )}
            {contact.address && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Address:</span> {contact.address}
              </p>
            )}
            {contact.notes && (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Notes:</span> {contact.notes}
              </p>
            )}
          </div>
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => onEdit(contact)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
              title="Edit contact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="text-red-600 hover:text-red-800 transition-colors"
              title="Delete contact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
          Created: {formatDate(contact.createdAt)}
          {contact.updatedAt !== contact.createdAt && (
            <span className="ml-2">
              • Updated: {formatDate(contact.updatedAt)}
            </span>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Delete Contact
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{contact.name}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
