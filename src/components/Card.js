import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ title, description, price, currency, location, img, index }) => {
    return (
        <div className="block rounded-lg bg-gray-200 w-72 mt-32">
            <Link to={`/details/${index}`} key={index} className="flex flex-col justify-between h-full">
                <div>
                    <div
                        className="relative overflow-hidden bg-cover bg-no-repeat"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <img
                            className="rounded-lg sm:m-h-64 md:h-64 max-w-96"
                            src={img}
                            alt=""
                        />
                        <a href="#!">
                            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>

                    <div className="p-2 flex flex-col items-center">
                        <p className="text-base text-center text-black line-clamp-2 font-semibold">
                            {title}
                        </p>
                        
                    </div>
                </div>
                <div className="mt-auto p-2">
                    <p className="mb-4 text-md text-black line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex items-row justify-center">
                            <FaLocationDot className="h-4 w-4"/>
                            <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-black mx-1">
                                {location}
                            </h5>
                            
                        </div>
                <p className="mb-2 text-md font-semibold self-center leading-tight:text-black">
                    Cena: {price} {currency}
                </p>
            </Link>
        </div>
    );
};

export default Card;