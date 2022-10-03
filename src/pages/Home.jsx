import { useEffect, useState } from "react";
import { Link,Outlet } from "react-router-dom";
import "./home.css";
import './homeQuery.css';
import { AiOutlineSearch } from "react-icons/ai";
import { BaseURl } from "../api";

const Home = ({mode}) => {
  const [flags, setFlags] = useState([]);
  const [value, setValue] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [selected,setSelected] = useState([])

  const getFlags = async () => {
    /* Puedo filtrar por nombre lo que quiero, ya que estoy trayendo todos los datos */
    const name = (await !value) ? "all" : "name/" + value;
    fetch(BaseURl+name)
      .then((result) => result.json())
      .then((data) => {
        setFlags(data);
        setSelected(data[0])
      })
      .catch((error) => console.log(error));
  };

  const getRegion = async () => {
    const region = (await !selectRegion) ? "all" : "region/" + selectRegion;
    fetch(BaseURl+region)
      .then((result) => result.json())
      .then((data) => {
        setFlags(data);

      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
/*     if (!selectRegion) {
      getFlags();
    } else if (selectRegion && value === "") {
      getRegion();
    } */
    getRegion()
  }, [selectRegion, value]);

  const country = (e) => {
    setValue(e.target.value);
  };

  const filterRegion = (e) => {
    setSelectRegion(e.target.value);
  };
  return (
    <main className={!mode ? 'theme-dark ' : 'theme-ligth'} >
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
      <section className="flags-container"> 
        {flags.map((flag, index) => {
          return (
            <Link to={`/info/${flag.name}`}  key={index} className={!mode? 'card dark-elements ': 'card ligth-elemets '} >
              <img src={flag.flags.svg} alt={flag.name} />
              <p>{flag.name}</p>
              <p>{`Population: ${flag.population}`}</p>
              <p>{`Region: ${flag.region}`}</p>
              <p>{`Capital: ${flag.capital}`}</p>
            </Link>
          );
        })}
      </section>
      <Outlet/>
    </main>
  );
};

export default Home;
