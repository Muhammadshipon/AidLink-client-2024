
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NeedVolunteerTable from '../components/NeedVolunteerTable';
import { ScrollRestoration } from 'react-router-dom';
import NeedVolunteerCard from '../components/NeedVolunteerCard';
import { Helmet } from 'react-helmet-async';



const NeedVolunteer = () => {
  const [posts,setPosts] = useState([]);
  const [itemsPerPage,setItemPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [view, setView] = useState('card');


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:9000/all-post?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      )
      setPosts(data)
    }
    getData()
  }, [currentPage, filter, itemsPerPage, search, sort])

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `http://localhost:9000/posts-count?filter=${filter}&search=${search}`
      )

      setCount(data.count)
    }
    getCount()
  }, [filter, search])

  console.log(count)
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

  //  handle pagination button
  const handlePaginationButton = value => {
   
    setCurrentPage(value)
  }
  const handleReset = () => {
    setFilter('')
    setSort('')
    setSearch('')
    setSearchText('')
  }

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }

  console.log(search)




  const handleChange = (event, nextView) => {
    setView(nextView);
  };



return(
  <div className='my-16'>
     <Helmet>
      <title>AidLink || Need Volunteer</title>
      </Helmet>
     <h1 className="text-4xl font-bold text-center my-10 text-yellow-400">All Need Volunteer Posts</h1>
  <div>
    <div className='flex  flex-col md:flex-row justify-center items-center gap-5 '>

       {/* layout change button  */}
       <div>
   <ToggleButtonGroup
    
    value={view}
    exclusive
    onChange={handleChange}
  >
   
    <ToggleButton value="card" aria-label="module">
      <ViewModuleIcon />
    </ToggleButton>
    <ToggleButton value="table" aria-label="list">
    <FormatAlignJustifyIcon/>
    </ToggleButton>
  </ToggleButtonGroup>
   </div>

       <div>
        <select
          onChange={e => {
            setFilter(e.target.value)
            setCurrentPage(1)
          }}
          value={filter}
          name='category'
          id='category'
          className='border p-4 rounded-lg'
        >
          <option value=''>Filter By Category</option>
          <option value='Healthcare'>Healthcare</option>
          <option value='Social Service'>Social Service</option>
          <option value='Education'>Education</option>
          <option value='Animal Welfare'>Animal Welfare</option>
        </select>
      </div>

      <form onSubmit={handleSearch}>
        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
          <input
            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
            type='text'
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
            name='search'
            placeholder='Enter Post Title'
            aria-label='Enter Post Title'
          />

          <button className='btn text-white bg-cyan-400 hover:bg-cyan-300'>
            Search
          </button>
        </div>
      </form>
      <div>
        <select
          onChange={e => {
            setSort(e.target.value)
            setCurrentPage(1)
          }}
          value={sort}
          name='sort'
          id='sort'
          className='border p-4 rounded-md'
        >
          <option value=''>Sort By Deadline</option>
          <option value='dsc'>Descending Order</option>
          <option value='asc'>Ascending Order</option>
        </select>
      </div>
      <button onClick={handleReset} className='btn bg-orange-500 text-white'>
        Reset
      </button>
    </div>
    
    
    {view ==='card'?
      <div>
         <div className="grid mx-auto mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 my-10">
    {
      posts.map(post=><NeedVolunteerCard key={post._id} post={post}></NeedVolunteerCard>)
    }
  </div>
      </div>
      :
      <div>
         <table className="table mb-32 overflow-x-auto mt-10">
  
  <thead>
    <tr>
      
      <th>Post Title</th>
      <th>DeadLine</th>
      <th>Location</th>
      <th>Num of volunteer</th>
      <th>Post Details</th>
      <th>Request</th>
     
    </tr>
  </thead>
  <tbody>
   

    {
    posts.map(post=><NeedVolunteerTable
       post={post}
      key={post._id}></NeedVolunteerTable>)
  }
   
  </tbody>
 
 

</table>
      </div>
} 


    
  </div>

  {/* Pagination Section */}
  <div className='flex justify-center mt-12'>
    {/* Previous Button */}
    <button
      disabled={currentPage === 1}
      onClick={() => handlePaginationButton(currentPage - 1)}
      className='rounded-full px-2 py-3 mx-5 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200  disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500  hover:bg-orange-500   hover:text-white'
    >
      <div className='flex items-center -mx-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 mx-1 rtl:-scale-x-100'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M7 16l-4-4m0 0l4-4m-4 4h18'
          />
        </svg>

        <span className='mx-1'></span>
      </div>
    </button>
    {/* Numbers */}
    {pages.map(btnNum => (
      <button
        onClick={() => handlePaginationButton(btnNum)}
        key={btnNum}
        className={`hidden ${
          currentPage === btnNum ? 'bg-cyan-500 text-white' : ''
        } px-5 py-3 rounded-full mx-1 transition-colors duration-300 transform   sm:inline hover:bg-blue-500  hover:text-white`}
      >
        {btnNum}
      </button>
    ))}
    {/* Next Button */}
    <button
      disabled={currentPage === numberOfPages}
      onClick={() => handlePaginationButton(currentPage + 1)}
      className='rounded-full px-2 py-3 mx-5 text-gray-700 transition-colors duration-300 transform bg-gray-200  hover:bg-orange-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
    >
      <div className='flex items-center -mx-1'>
      <span className='mx-1'></span>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 mx-1 rtl:-scale-x-100'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17 8l4 4m0 0l-4 4m4-4H3'
          />
        </svg>
      </div>
    </button>
  </div>
  <ScrollRestoration></ScrollRestoration>
</div>
)
}

export default NeedVolunteer;