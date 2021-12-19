import React, {useState, useEffect} from 'react'
import Searchbar from '../searchBar';
import { allProducts } from '../../Data';
import './index.css';

const Side = ({filters={},onUpdateFilter=()=>{}}) => {
    let allFilters = Object.keys(filters);
    const [filterData,setFilterData] = useState({});

    useEffect(()=>{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        let filters = {};
        Object.keys(params).forEach(filter=>{
            if(allFilters.includes(filter)){
                filters= {...filters,[filter]:params[filter].split(',')};
            }
        });
        setFilterData(filters);
    },[window.location.search]);

    const updateFilter = (e,filter,options)=>{
        if(e.target.checked){
            filterData[filter] = filterData[filter] ? [...filterData[filter],options.slug] : [options.slug];
        }else{
            filterData[filter] = filterData[filter].filter(f=>f!==options.slug);
        }
        onUpdateFilter({isFilter:true, category:filter, selectedFilters:filterData});
        setFilterData(filterData);
    }

    const getTotal = (f,filterOption)=>{
        return allProducts.reduce((count,p)=>{
            if(p.attributes[f].includes(filterOption)){
                count++;
            }
            return count;
        }, 0);
    };

    return (
        <div className="sideBar">
            <div>
                <h3>Filter Recipes:</h3>
                {allFilters.length ?  <p>Check multiple boxes below to narrow recipe search results:</p> : <p className="noResults">No filter options found!</p>}
            </div>
            {
                allFilters.map((f,i)=>{
                    return <div className="filterWrapper" key={f}>
                        <div className='filterTitle'>{f}</div>
                        {
                            filters[f].map((filter)=>{
                                return <label key={filter.slug} className='filterOptions'>
                                    <input type="checkbox" name={f} checked={filterData[f] && filterData[f].includes(filter.slug) ? true : false} className="filterCheckBox" onChange={(e)=>updateFilter(e,f,filter)}/>
                                    <div className='filterOption'>{filter.name} ({getTotal(f,filter.slug)})</div>
                                </label>
                            })
                        }
                    </div>
                })
            }
            <div>
                <div className='filterTitle'>Search Recipe Titles:</div>
                <Searchbar placeHolder='Enter Keyword' btnClass="black-and-white" onSearch={(data)=>onUpdateFilter({...data,isFilter:true,selectedFilters:filterData,localFilter:true})}/>
            </div>
        </div>
    )
}

export default Side
