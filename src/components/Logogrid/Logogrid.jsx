import React from "react";
import banner1 from "../../assets/103_logo 1.png";
import banner2 from "../../assets/logo2.png";

import banner3 from "../../assets/143_logo 3.png";

import banner4 from "../../assets/141_logo 4.png";


const logos = [
    [banner1, banner1],
    [banner1],
    [banner2, banner2],
    [banner3],
    [banner3, banner3],
    [banner2],
    [banner4, banner4]
];

const LogoGrid = () => {
    return (
        <div className=" w-full flex justify-center gap-3 p-6">
            {logos.map((column, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col  h-40 md:h-96 ${column.length === 1 ? 'justify-center' : 'justify-between'}`}
                >
                    {column.map((logo, i) => (
                        <img key={i} src={logo} alt={`Banner ${index + 1}-${i + 1}`} className="md:w-32 md:mb-5 w-6xl md:h-auto h-6" />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;
