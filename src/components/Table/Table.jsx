import React from "react";
import intera from "../../assets/interra.png";
import architect from "../../assets/architect.png";
import banner from "../../assets/banner.png";
import chair from "../../assets/chair.png";
import TableCorousel from "../../components/TableCorousel/Tablecorousel";

export default function ComparisonTable() {
  // Each company's data
  const data = [
    {
      image: intera,
      headerColor: "bg-teal-400",
      columnColor: "bg-teal-200",
      textColor: "text-red-500",
      team: "Yes",
      // Company data fields
      deliveryTimelines: "3 Months",
      completedProjects: "234",
      reviews: 4, // Number of stars (out of 5)
      companyAge: "10 years",
      price: "5 - 6 L",
      // Product images for carousel
      chairImages: [
        chair,
        chair,
        chair, // Replace with actual different images
      ]
    },
    {
      image: architect,
      headerColor: "bg-orange-400",
      columnColor: "bg-orange-200",
      textColor: "text-orange-600",
      team: "Yes",
      deliveryTimelines: "2 Months",
      completedProjects: "45",
      reviews: 2, // Number of stars (out of 5)
      companyAge: "2 years",
      price: "8 to 10 L",
      chairImages: [
        chair,
        chair,
        chair, // Replace with actual different images
      ]
    },
    {
      image: banner,
      headerColor: "bg-blue-400",
      columnColor: "bg-blue-200",
      textColor: "text-blue-600",
      team: "No",
      deliveryTimelines: "2.5 months",
      completedProjects: "356",
      reviews: 5, // Number of stars (out of 5)
      companyAge: "15 years",
      price: "12 - 15 L",
      chairImages: [
        chair,
        chair,
        chair, // Replace with actual different images
      ]
    },
  ];

  // Define all comparison fields
  const details = [
    { label: "Delivery timelines", key: "deliveryTimelines" },
    { label: "Number of completed projects", key: "completedProjects" },
    { label: "Reviews", key: "reviews" },
    { label: "Age of company", key: "companyAge" },
    { label: "Price", key: "price" },
    { label: "Work in teams", key: "team" },
    { label: "Images", key: "chair", isCarousel: true },
  ];

  return (
    <div className="max-w-6xl h-auto mx-auto p-4">
      {/* Header Row */}
      <div className="grid grid-cols-4 text-center gap-[19px]">
        <div className="p-4 bg-white font-bold"></div>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 ${item.headerColor} flex items-center justify-center h-20 rounded-md`}
          >
            <img src={item.image} alt="Company Logo" className="h-16 w-auto" />
          </div>
        ))}
      </div>
      
      {/* Data Rows */}
      {details.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-4 gap-[19px] ${
            rowIndex === 0 ? "" : "border-t-2 border-teal-800"
          }`}
        >
          <div className="bg-white font-bold flex items-center justify-start">
            {row.label}
          </div>
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 ${
                item.columnColor
              } flex items-center justify-center font-semibold ${
                rowIndex === details.length - 1 ? "rounded-b-md" : ""
              }`}
            >
              {row.isCarousel ? (
                <TableCorousel images={item.chairImages} />
              ) : row.key === "reviews" ? (
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < item.reviews ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              ) : (
                item[row.key]
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}