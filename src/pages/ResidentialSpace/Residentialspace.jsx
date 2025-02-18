import { Button } from "../../components/ui/Button";
import backgroundImage from "../../assets/background.png";
import lock from "../../assets/lock.png";
import CompanyCard from "../../components/Cards/Cards";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

// Sample company data
const companies = [
  {
    id: 1,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 2,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 3,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 4,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 5,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
  {
    id: 6,
    reviews: 23,
    name: "INTERIOR COMPANY",
    projects: 250,
    experience: 10,
    branches: 20,
  },
];

export default function ResidentailSpace() {
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
        <div className="bg-white p-4 shadow-md rounded-md">
          <Search />
        </div>

        {/* Login Section */}
        <div 
  className="absolute inset-x-0 mt-[1340px] md:mt-[420px] mb-0 h-[1340px] md:h-[496px] backdrop-blur-sm flex flex-col items-center justify-center text-white py-8" 
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

        {/* Company Cards Section */}
        <div className="flex justify-evenly mt-4 flex-wrap gap-14 md:gap-16 ml-[20px] mr-[20px] md:ml-[139px] md:mr-[139px]">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
