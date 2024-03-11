import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import data from '../data.json';
import Carousel from '../components/Carousel';

const DetailsPage = () => {
    const { id } = useParams();
    const navigation = useNavigate();
    const listing = data.listings[Number(id)];

    if (!listing) {
        return <div>Listing not found</div>;
    }

    const goBack = () => {
        navigation(-1);
    };

    return (
        <div className='flex flex-col items-center p-12 text-center sm:text-left'>
            <div className='absolute top-0 left-0 m-4 cursor-pointer' onClick={goBack}>
                <FaArrowAltCircleLeft className='text-xl h-8 w-8' />
            </div>
            
            <h1 className='text-2xl font-bold p-4'>{listing.title}</h1>
            <Carousel images={listing.img} className="hidden sm:block w-full sm:w-1/2 md:w-1/3 lg:w-1/4" />
            <h2 className='flex flex-row justify-center sm:justify-start space-x-4 text-xl font-semibold'>
                <FaLocationDot className='self-center mx-2 ' />
                {listing.location}
            </h2>
            <div className='border-b-2 border-gray-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-8'></div>
            <p className='text-lg my-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>{listing.description}</p>
            <p className='text-lg m-10 font-bold text-gray-800'>{listing.price} {listing.currency}</p>
            <button
                onClick={() => alert('You have successfully applied for this listing')}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mx-2 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-xl cursor-pointer active:scale-[.97]">
                Buy now !
            </button>
        </div>
    );
};

export default DetailsPage;
