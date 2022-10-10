import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import '../pages/home.css'
import '../pages/homeQuery.css'

export const Input = ({mode,value,selectRegion,setValue,setSelectRegion}) => {
    const country = (e) => {
        setValue(e.target.value);
      };
    
      const filterRegion = (e) => {
        setSelectRegion(e.target.value);
      };
  return (
    <div className="input-container">
        <div className={!mode? 'input-search-container dark-elements': 'input-search-container ligth-elemets ligth-input'}>
          <AiOutlineSearch />
          <input
            placeholder="Search for a country..."
            onChange={country}
            value={value}
          />
        </div>
        <div className={!mode? 'select-country-container dark-elements ': 'select-country-container ligth-elemets ligth-input'}>
          <select value={selectRegion} name="select" onChange={filterRegion}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <i></i>
        </div>
      </div>
  )
}
