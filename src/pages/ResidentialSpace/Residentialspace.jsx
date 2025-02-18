import { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import { Button } from "../../components/ui/Button";
import backgroundImage from "../../assets/background.png";
import lock from "../../assets/lock.png";
import CompanyCard from "../../components/Cards/Cards";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import axios from 'axios';

// Define the API URL - make sure this matches your backend URL
const API_URL = 'http://localhost:5000/api';

export default function ResidentialSpace() {
  const { isSignedIn } = useUser();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch companies data
  const fetchCompanies = async (page = 1) => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors

      console.log('Fetching from:', `${API_URL}/companies?page=${page}&limit=9`); // Debug log

      const response = await axios.get(`${API_URL}/companies`, {
        params: {
          page,
          limit: 9
        }
      });

      console.log('API Response:', response.data); // Debug log

      if (response.data && Array.isArray(response.data.companies)) {
        setCompanies(response.data.companies);
        setTotalPages(response.data.totalPages || 1);
        setCurrentPage(response.data.currentPage || 1);
      } else {
        throw new Error('Invalid data format received from server');
      }
    } catch (err) {
      console.error('Detailed error:', err); // Debug log
      setError(
        err.response?.data?.message || 
        err.message || 
        'Failed to fetch companies. Please try again later.'
      );
      setCompanies([]); // Clear companies on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies(currentPage);
  }, [currentPage]);

  // Pagination component remains the same
  const Pagination = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex justify-center items-center space-x-4 mt-8 mb-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md bg-[#006452] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-[#006452] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md bg-[#006452] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full bg-transparent z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[515px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
        <h2 className="z-50 font-inter font-black text-4xl md:text-[64px] leading-[77.45px] tracking-normal text-white">
          Residential Space
        </h2>
      </section>

      {/* Search Section */}
      <div className="p-4">
        <div className="bg-white p-4">
          <Search />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center my-4 p-4 bg-red-50 rounded">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center my-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#006452]"></div>
          </div>
        )}

        {/* Content Section */}
        {!loading && !error && (
          <>
            {/* Content based on authentication */}
            {isSignedIn ? (
              <div>
                {/* Company Cards Section */}
                <div className="flex justify-evenly mt-4 flex-wrap gap-14 md:gap-16 ml-[20px] mr-[20px] md:ml-[139px] md:mr-[139px]">
                  {companies.map((company) => (
                    <CompanyCard key={company._id} company={company} />
                  ))}
                </div>
                
                {/* Show Pagination only if we have companies */}
                {companies.length > 0 && <Pagination />}
              </div>
            ) : (
              <div>
                {/* Login Section */}
                <div 
                  className="absolute w-full inset-x-0 mt-[1340px] md:mt-[420px] mb-0 h-[1340px] md:h-[496px] backdrop-blur-sm flex flex-col items-center justify-center text-white py-8" 
                  style={{
                    background: `linear-gradient(180deg, rgba(250, 250, 250, 0.85) 0%, rgba(0, 0, 0, 0.50) 100%),
                                linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`
                  }}
                >
                  <img className="w-16 h-16" src={lock} alt="Lock" />
                  <h3 className="text-2xl font-semibold mb-4">Login to see all...</h3>
                  <Button
                    onClick={() => (window.location.href = "/login")}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Login
                  </Button>
                </div>

                {/* Blurred Company Cards Section */}
                <div className="flex justify-evenly mt-4 flex-wrap gap-14 md:gap-16 ml-[20px] mr-[20px] md:ml-[139px] md:mr-[139px]">
                  {companies.slice(0, 6).map((company) => (
                    <CompanyCard key={company._id} company={company} />
                  ))}
                </div>

              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}