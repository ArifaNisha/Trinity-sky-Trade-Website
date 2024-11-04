import React, { useState } from 'react';
import axios from 'axios';

const Productsupdate = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // For image preview
  const [uploadStatus, setUploadStatus] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !productDescription || !productImage) {
      setUploadStatus('Please fill all fields and upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('image', productImage);

    try {
      const response = await axios.post('http://localhost:4000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadStatus('Product uploaded successfully!');
      onSubmit(response.data.product);
      
      // Reset form fields
      setProductName('');
      setProductDescription('');
      setProductImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error('Error uploading product:', error);
      setUploadStatus('Error uploading product');
    }
  };

  return (
    <div className="product-upload-form m-5 position-relative bottom-0 end-0">
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded p-5 m-5">
        <div className="card-title">
          <h2>Upload Product</h2>
          <span className="float-end text-danger">
            * Please select Category:
            <select className="w-75 border-1 float-end" id="sort">
              <option>Oil & Gas</option>
              <option>Animal Feed</option>
              <option>Agri Products</option>
            </select>
          </span>
        </div>
        <div className="card-body p-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="pb-2">Product Name</label>
              <input
                type="text"
                className="form-control"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="form-group pt-3">
              <label className="pb-2">Product Description</label>
              <textarea
                className="form-control"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group pt-3">
              <label className="pb-2">Upload Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
              {previewImage && (
                <div className="image-preview">
                  <p>Image Preview:</p>
                  <img src={previewImage} alt="Preview" style={{ width: '200px', height: 'auto' }} />
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
          {uploadStatus && <p>{uploadStatus}</p>} {/* Display upload status */}
        </div>
      </div>
    </div>
  );
};

export default Productsupdate;
