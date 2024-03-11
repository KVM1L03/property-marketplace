import { FaSearch } from "react-icons/fa";
import { TbAdjustments } from "react-icons/tb";

const SearchBar = ({ query, onSearch, showFilters, className }) => {
    return (
        <div className={`flex rounded-full bg-gray-200 px-2 w-full max-w-[600px] ${className}`}>
            <button
                className="self-center flex p-1 cursor-pointer bg-gray-200"
                onClick={showFilters}
            >
                <TbAdjustments className="h-6 w-6" />
            </button>
            <input
                type="text"
                className="w-full bg-gray-200 flex bg-transparent pl-2 text-gray-500 outline-0"
                placeholder="Search for a house"
                value={query}
                onChange={(e) => onSearch(e)}
            />
            <button type="submit" className="relative p-2 bg-gray-200 rounded-full">
                <FaSearch className="h-6 w-6" />
            </button>
        </div>
    );
};

export default SearchBar;
