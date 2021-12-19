import React from 'react'
import Searchbar from '../searchBar';
import './index.css';

const Header = ({logo=false,brandName=false, categories=[], onFilter, cartTotal=0.00, updateProducts=()=>{}}) => {
    return (
        <header className="container header">
            <div className="logoWrapper">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <div className="searchBarWrapper">
                <Searchbar categories={categories} onFilter={onFilter} onSearch={(searchData)=>updateProducts(searchData)}/>
            </div>
            <div className="actionsWrapper">
                <button>
                    <i className="fa fa-bookmark-o"/>
                    <span>Favorites</span>
                </button>
                <button>
                    <i className="fa fa-shopping-basket"/>
                    <span>Cart ({cartTotal.toFixed(2)})</span>
                </button>
            </div>
        </header>
    )
}

export default Header
