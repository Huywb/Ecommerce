import { FaSearch } from "react-icons/fa";


const Search = ({handleSearchChange}) => {
  const handleSearch = (value)=>{
    handleSearchChange(value)
  }
  return (
    <div className='flex  items-center shadow-md  rounded-md  border border-gray-500 px-2 '>
        <FaSearch  className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]"/>
        <input onChange={(e)=>handleSearch(e.target.value)} type="text" className=' outline-none px-2 py-1' placeholder="Search..." />
    </div>
  )
}

export default Search
