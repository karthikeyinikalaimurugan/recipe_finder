import React,{useEffect, useState} from 'react'
import './index.css';

const Searchbar = ({categories=[],btnClass="searchBtn",placeHolder='Search recipes...', onFilter=()=>{},onSearch}) => {
  const [category,setCategory] = useState('');
  const [searchTxt,setSearchTxt] = useState('');
  useEffect(()=>{
    if(categories.length){
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      if(params.category) setCategory(params.category);
      if(params.search) setSearchTxt(params.search);
    }
  },[]);

  return (
      <div className="searchbar">
          {
            categories.length ? <select className='categories' onChange={(e)=>setCategory(e.target.value)} value={category}>
              <option value="">All Categories</option>
              {
                categories.map((c,i)=><option key={i} value={c}>{c}</option>)
              }
            </select> : ''
          }
          <input
            type="text"
            className="searchInput"
            value={searchTxt}
            onChange={(e)=>setSearchTxt(e.target.value)}
            placeholder={placeHolder}
          ></input>
          <button className={`btn ${btnClass}`} onClick={()=>onSearch({category,searchTxt})}>
            <i className='fa fa-search'/>
          </button>
          <button className='btn filterBtn' onClick={()=>onFilter()}>
            <i className='fa fa-filter'/>
          </button>
      </div>
    );
  };
  
  export default Searchbar;
  
