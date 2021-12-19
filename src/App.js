import { useEffect, useState } from 'react';
import Header from './components/header';
import Stripe from './components/stripe';
import MenuBar from './components/menuBar';
import SideBar from './components/sideBar';
import Modal from './components/modal';
import Grid from './components/grid';
import Main from './components/main';
import Card from './components/card';
import {appData, allProducts} from './Data';
import './App.css';

function App() {
  const [isFilterOpen,setFilterOpen] = useState(false);
  const [filters, setFilters] = useState(appData.filters);
  const [productsList,setProductList] = useState(allProducts);
  const [filteredProduct,setFilteredProduct] = useState([]);
  let urlSearchParams,params;

  const updateResults = ()=>{
    urlSearchParams = new URLSearchParams(window.location.search);
    params = Object.fromEntries(urlSearchParams.entries());
    if(params.category) setFilters({[params.category]: appData.filters[params.category]});
    let allFilters = Object.keys(appData.filters);
    let appliedfilters = {},queries=[];
    Object.keys(params).forEach(filter=>{
      if(allFilters.includes(filter)){
        appliedfilters= {...appliedfilters,[filter]:params[filter].split(',')};
      }else{
        queries = [...queries,filter];
      }
    });
    let filterCat = Object.keys(appliedfilters);
    setProductList( Object.keys(params).length ? allProducts.filter(p=>{
      let isMatching = 0;
      if(params.category && p.attributes[params.category].length){
        isMatching++;
      }
      if(params.search && p.title.toLowerCase().includes(params.search)){
        isMatching++;
      }
      let filteredResult = filterCat.filter(f=>p.attributes[f].filter(fo=>appliedfilters[f].includes(fo)).length);
      
      return (filterCat.length ? (isMatching===queries.length) && filteredResult.length : (isMatching===queries.length));
    }) : allProducts);
  };

  useEffect(()=>{
    updateResults();
  });

  const updateProducts= ({isFilter,selectedFilters,category,searchTxt,localFilter})=>{
    if(localFilter && searchTxt.length){
      setFilteredProduct(productsList.filter(p=>p.title.toLowerCase().includes(searchTxt)));
    }else{
      setFilteredProduct([]);
      let query='?';
      urlSearchParams = new URLSearchParams(window.location.search);
      params = Object.fromEntries(urlSearchParams.entries());
      if(!isFilter){
        params = {
          category,
          search:searchTxt
        }
        Object.keys(params).map((e,i)=>params[e] ? query+=`${query.length>1?'&':''}${e}=${params[e]}` : '');
        window.history.pushState('', '', query);
        setFilters(category ? {
          [category]: appData.filters[category]
        }:appData.filters);
      }else{
        let sort = {};
        Object.keys(selectedFilters).forEach(s=>{
          if(selectedFilters[s]) sort = {
            ...sort,
            [s]:selectedFilters[s].join(',')
          }
        });
        params = {
          ...params,
          ...sort
        }
        Object.keys(params).map((e,i)=>params[e] ? query+=`${query.length>1?'&':''}${e}=${params[e]}` : '');
        window.history.pushState('', '', query);
        if(!category) setFilters(appData.filters);
      }
      updateResults();
    }
  }

  return (
    <div className='App'>
      <Stripe leftMenus={appData.stripMenus}/>
      <Header 
        logo={appData.header.logo}
        categories={Object.keys(appData.filters)} 
        onFilter={()=>setFilterOpen(!isFilterOpen)}
        updateProducts={updateProducts}
      />
      <hr className='seperator'/>
      <MenuBar menuList={appData.menuBar} socialLinks={appData.socialLinks}/>
      <hr className='seperator'/>
      <Main>
        <SideBar filters={filters} onUpdateFilter={updateProducts}/>
        <Grid items={filteredProduct.length ? filteredProduct : productsList} Component={Card}/>
      </Main>
      {isFilterOpen && <Modal onBack={()=>setFilterOpen(!isFilterOpen)}>
        <SideBar filters={filters} onUpdateFilter={updateProducts}/>
      </Modal>}
    </div>
  );
}

export default App;
