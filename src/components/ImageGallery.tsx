import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useImageContext } from '../contexts/ImageContext';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const ImageGallery = () => {
  const { images, loading, error, addImage, updateImage, deleteImage } = useImageContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: '', alt: '', category: '' });

  // Filter images based on search term
  const filteredImages = images.filter(image =>
    image.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (image: any) => {
    setEditingId(image.id);
    setEditForm({
      title: image.title || '',
      alt: image.alt || '',
      category: image.category || ''
    });
  };

  const handleSaveEdit = async () => {
    if (editingId) {
      await updateImage(editingId, editForm);
      setEditingId(null);
      setEditForm({ title: '', alt: '', category: '' });
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: '', alt: '', category: '' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading images...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Image Gallery</h2>
        
        {/* Search Bar */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(image)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => deleteImage(image.id)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              {editingId === image.id ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    placeholder="Title"
                    className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
                  />
                  <input
                    type="text"
                    value={editForm.alt}
                    onChange={(e) => setEditForm({ ...editForm, alt: e.target.value })}
                    placeholder="Alt text"
                    className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
                  />
                  <input
                    type="text"
                    value={editForm.category}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    placeholder="Category"
                    className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveEdit}
                      className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {image.title || 'Untitled'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{image.alt}</p>
                  {image.category && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            {searchTerm ? 'No images found matching your search.' : 'No images available.'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 