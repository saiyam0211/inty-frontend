import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Original fields
    name: "",
    projects: "",
    experience: "",
    branches: "",
    logo: null,
    // New fields from screenshots
    registeredCompanyName: "",
    nameDisplay: "",
    description: "",
    ageOfCompany: "",
    availableCities: [],
    officialWebsite: "",
    fullName: "",
    designation: "",
    phoneNumber: "",
    minMaxBudget: "",
    type: "",
    bannerImages: Array(10).fill(null),
    discountsOfferTimeline: "",
    numberOfProjectsCompleted: "",
    digitalBrochure: null,
    testimonialsAttachment: null,
    contactEmail: "",
    googleRating: "",
    googleReviews: "",
    googleLocation: "",
    anyAwardWon: "",
    categoryType: "",
    paymentType: "",
    assured: ""
  });
  const navigate = useNavigate();

  // Cities options based on the screenshots
  const citiesOptions = ["Bengaluru", "Indore", "Nagpur"];
  
  // Age of company options
  const ageOptions = ["0-1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"];
  
  // Budget options
  const budgetOptions = ["Under ₹5 Lakh", "₹5-10 Lakh", "₹10-20 Lakh", "₹20-50 Lakh", "Above ₹50 Lakh"];
  
  // Type options
  const typeOptions = ["Residential", "Commercial", "Institutional", "Other"];
  
  // Category type options
  const categoryOptions = ["Interior Designer", "Architect", "Contractor", "Home Decor"];
  
  // Payment type options
  const paymentOptions = ["Full Payment", "Installments", "Milestone-based"];
  
  // Assured options
  const assuredOptions = ["Yes", "No"];

  // Set API_URL
  const API_URL = "https://inty-backend-2.onrender.com/api";
  // const API_URL = "http://localhost:5000/api";

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, index = null) => {
    const { name, files } = e.target;
    
    if (name.startsWith('bannerImage')) {
      const newBannerImages = [...formData.bannerImages];
      newBannerImages[index] = files[0];
      setFormData({ ...formData, bannerImages: newBannerImages });
    } else {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleMultiSelectChange = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    
    setFormData({ ...formData, availableCities: selectedValues });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const data = new FormData();

    // Required fields validation
    if (!formData.name || !formData.projects || !formData.experience || !formData.branches || !formData.logo) {
      setError("Please fill all required fields");
      setLoading(false);
      return;
    }

    // Detailed logging of form data for debugging
    console.log("Form data being submitted:");
    Object.keys(formData).forEach((key) => {
      if (key === 'bannerImages') {
        formData.bannerImages.forEach((file, index) => {
          if (file) {
            console.log(`bannerImage${index}: ${file.name}`);
            data.append(`bannerImage${index}`, file);
          }
        });
      } else if (key === 'availableCities') {
        formData.availableCities.forEach((city) => {
          console.log(`availableCities: ${city}`);
          data.append('availableCities', city);
        });
      } else if (formData[key] !== null && formData[key] !== '') {
        if (formData[key] instanceof File) {
          console.log(`${key}: ${formData[key].name}`);
        } else {
          console.log(`${key}: ${formData[key]}`);
        }
        data.append(key, formData[key]);
      }
    });

    try {
      console.log("Submitting to URL:", `${API_URL}/companies`);
      
      const token = localStorage.getItem("adminToken");
      console.log("Using token:", token ? "Token exists" : "No token");

      const response = await axios.post(`${API_URL}/companies`, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000, // 30 second timeout
      });

      console.log("Response received:", response);

      // Reset form after successful submission
      setFormData({
        name: "",
        projects: "",
        experience: "",
        branches: "",
        logo: null,
        registeredCompanyName: "",
        nameDisplay: "",
        description: "",
        ageOfCompany: "",
        availableCities: [],
        officialWebsite: "",
        fullName: "",
        designation: "",
        phoneNumber: "",
        minMaxBudget: "",
        type: "",
        bannerImages: Array(10).fill(null),
        discountsOfferTimeline: "",
        numberOfProjectsCompleted: "",
        digitalBrochure: null,
        testimonialsAttachment: null,
        contactEmail: "",
        googleRating: "",
        googleReviews: "",
        googleLocation: "",
        anyAwardWon: "",
        categoryType: "",
        paymentType: "",
        assured: ""
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      window.scrollTo(0, 0);
      console.log("Company added successfully:", response.data);
    } catch (error) {
      console.error("Error creating company:", error);
      console.error("Error details:", error.response?.data);
      
      // Use the detailed error from the server if available
      let errorMessage = "Failed to create company";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
        // If there are validation errors, list them
        if (error.response.data.validation) {
          const validationErrors = error.response.data.validation
            .map(err => `${err.field}: ${err.message}`)
            .join(', ');
          errorMessage += ` - ${validationErrors}`;
        }
      }
      
      setError(errorMessage);
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Company Registration Dashboard</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex justify-between items-center">
            <div>
              <span className="font-bold">Success!</span> Company data submitted successfully.
            </div>
            <button onClick={() => setSuccess(false)} className="text-green-700">
              &times;
            </button>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Add Company Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Company</h2>
          <div className="text-sm text-gray-600 mb-4">Fields marked with <span className="text-red-500">*</span> are required</div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Original fields */}
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Company Name"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Number of Projects <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="projects"
                  placeholder="Number of Projects"
                  className="w-full p-2 border rounded"
                  value={formData.projects}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Years of Experience <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="experience"
                  placeholder="Years of Experience"
                  className="w-full p-2 border rounded"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Number of Branches <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="branches"
                  placeholder="Number of Branches"
                  className="w-full p-2 border rounded"
                  value={formData.branches}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Company Logo <span className="text-red-500">*</span></label>
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  className="w-full p-2 border rounded"
                  onChange={(e) => handleFileChange(e)}
                  required
                />
                <p className="text-xs text-red-500">Image Size Should Be 200x200 PX</p>
              </div>

              {/* New fields from screenshots */}
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Registered Company Name</label>
                <input
                  type="text"
                  name="registeredCompanyName"
                  placeholder="Registered Company Name"
                  className="w-full p-2 border rounded"
                  value={formData.registeredCompanyName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Name Display</label>
                <input
                  type="text"
                  name="nameDisplay"
                  placeholder="Display Name"
                  className="w-full p-2 border rounded"
                  value={formData.nameDisplay}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-3">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  placeholder="Description"
                  className="w-full p-2 border rounded"
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Age of Company</label>
                <select
                  name="ageOfCompany"
                  className="w-full p-2 border rounded"
                  value={formData.ageOfCompany}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Age of Company</option>
                  {ageOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Available Cities/Locations</label>
                <select
                  name="availableCities"
                  multiple
                  className="w-full p-2 border rounded"
                  value={formData.availableCities}
                  onChange={handleMultiSelectChange}
                >
                  {citiesOptions.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
                <p className="text-xs text-gray-500">Hold Ctrl/Cmd to select multiple</p>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Link to Official Website</label>
                <input
                  type="url"
                  name="officialWebsite"
                  placeholder="https://example.com"
                  className="w-full p-2 border rounded"
                  value={formData.officialWebsite}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Designation</label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  className="w-full p-2 border rounded"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Min-Max Budget</label>
                <select
                  name="minMaxBudget"
                  className="w-full p-2 border rounded"
                  value={formData.minMaxBudget}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Min-Max Budget</option>
                  {budgetOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Type</label>
                <select
                  name="type"
                  className="w-full p-2 border rounded"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Type</option>
                  {typeOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Banner Images */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Banner Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="col-span-1">
                    <label className="block text-gray-700 mb-2">Banner Image ({index + 1})</label>
                    <input
                      type="file"
                      name={`bannerImage${index}`}
                      accept="image/*"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleFileChange(e, index)}
                    />
                    <p className="text-xs text-red-500">Image Size Should Be 1350x400 PX</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Discounts/Offer/Timeline</label>
                <textarea
                  name="discountsOfferTimeline"
                  placeholder="Discounts/Offer"
                  className="w-full p-2 border rounded"
                  value={formData.discountsOfferTimeline}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">No. of Projects Completed/Awards</label>
                <textarea
                  name="numberOfProjectsCompleted"
                  placeholder="No. of Projects Completed/Awards"
                  className="w-full p-2 border rounded"
                  value={formData.numberOfProjectsCompleted}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Digital Brochure (PDF only)</label>
                <input
                  type="file"
                  name="digitalBrochure"
                  accept=".pdf"
                  className="w-full p-2 border rounded"
                  onChange={(e) => handleFileChange(e)}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Testimonials Attachment (PDF only)</label>
                <input
                  type="file"
                  name="testimonialsAttachment"
                  accept=".pdf"
                  className="w-full p-2 border rounded"
                  onChange={(e) => handleFileChange(e)}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Contact Email Address</label>
                <input
                  type="email"
                  name="contactEmail"
                  placeholder="Contact Email Address"
                  className="w-full p-2 border rounded"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Google Rating</label>
                <input
                  type="text"
                  name="googleRating"
                  placeholder="Google Rating"
                  className="w-full p-2 border rounded"
                  value={formData.googleRating}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Google Reviews</label>
                <textarea
                  name="googleReviews"
                  placeholder="Google Reviews"
                  className="w-full p-2 border rounded"
                  value={formData.googleReviews}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Google Location</label>
                <input
                  type="text"
                  name="googleLocation"
                  placeholder="Google Location"
                  className="w-full p-2 border rounded"
                  value={formData.googleLocation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Any Award Won</label>
                <input
                  type="text"
                  name="anyAwardWon"
                  placeholder="Any Award Won"
                  className="w-full p-2 border rounded"
                  value={formData.anyAwardWon}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Category Type</label>
                <select
                  name="categoryType"
                  className="w-full p-2 border rounded"
                  value={formData.categoryType}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Type</option>
                  {categoryOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Payment Type</label>
                <select
                  name="paymentType"
                  className="w-full p-2 border rounded"
                  value={formData.paymentType}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Type</option>
                  {paymentOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 mb-2">Assured</label>
                <select
                  name="assured"
                  className="w-full p-2 border rounded"
                  value={formData.assured}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Assured</option>
                  {assuredOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        {/* Form Instructions */}
        <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded-md mb-8">
          <h3 className="font-bold mb-2">Registration Instructions</h3>
          <p>Fill out all relevant details in the form above to register a company. Fields marked with * are required.</p>
          <p className="mt-2">For best results:</p>
          <ul className="list-disc ml-6 mt-1">
            <li>Upload company logo at 200x200px</li>
            <li>Banner images should be 1350x400px</li>
            <li>Brochure and testimonials must be in PDF format</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;