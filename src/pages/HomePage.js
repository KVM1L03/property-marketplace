import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import data from "../data.json";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Modal from 'react-modal';
import { IoHome } from "react-icons/io5";

const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [searchText, setSearchText] = useState("");
    const [price, setPrice] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleFilter = () => {
        setIsModalOpen(false);
    };

    const filteredListings = data.listings
        .filter(
            (listing) => listing.country === selectedCountry || selectedCountry === ""
        )
        .filter((listing) =>
            listing.location.toLowerCase().includes(searchText.toLowerCase()) ||
            listing.title.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter((listing) => listing.price <= price || price === "");

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const clearFilters = () => {
        setSelectedCountry("");
        setSearchText("");
        setPrice("");
    };

    return (
        <div className="flex flex-col items-center ">
            <Link to="/" className="absolute top-4 left-4" onClick={clearFilters}>
                <div className="absolute top-4 left-4 hidden sm:block">
                    <IoHome className="h-12 w-12 text-gray-600 text-sm" />
                </div>
            </Link>
            <SearchBar query={searchText} onSearch={handleSearch} showFilters={() => setIsModalOpen(true)} className={'m-10'}/>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={customStyles}>
                <h2 >Filters</h2>
                <input
                    className="rounded-[7px] border border-blue-gray-200 bg-transparent mt-10 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black "
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="Max price"
                />
                <button
                    onClick={handleFilter}
                    className="px-3 py-1 mx-2 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
                    Apply</button>
                <button
                    onClick={clearFilters}
                    className="px-3 py-1 mx-2 shadow-lg shadow-gray-500/50 bg-red-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]">
                    Clear Filters</button>
            </Modal>
            <select
                className="mt-4 p-2 border border-gray-300 rounded text-sm"
                onChange={handleCountryChange}
            >
                <option value="">All countries</option>
                {countries.map((country, index) => (
                    <option key={index} value={country.name.common}>
                        {country.name.common}
                    </option>
                ))}
            </select>
            <p className="text-lg">Select destined location.</p>
            <div className="flex justify-center">
                {filteredListings.length === 0 ? (
                    <p className="text-2xl font-bold my-24">No results :(</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredListings.map((listing, index) => (
                            <Card
                                img={listing.img}
                                description={listing.description}
                                location={listing.location}
                                price={listing.price}
                                currency={listing.currency}
                                title={listing.title}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
