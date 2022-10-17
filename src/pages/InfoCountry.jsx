import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseURl } from "../api";
import { BsArrowLeft } from "react-icons/bs";
import "./info.css";
import './infoQuery.css';
const InfoCountry = ({mode}) => {
  const { country } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    infoCountry();
  }, []);

  const infoCountry = () => {
    fetch(`${BaseURl}name/${country.toLocaleLowerCase()}?fullText=true`)
      .then((result) => result.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className={!mode ? 'country-container info-theme-dark ' : 'country-container info-theme-ligth'}>
      <div className={!mode? 'link-back ': 'link-back link-back-ligth'}>
        <BsArrowLeft />
        <Link to={"/"}>Back</Link>
      </div>
      <section className="container">
        {info.map((inf, index) => {
          return (
            <div key={index} className="card-info-country">
              <img src={inf.flag} alt={inf.name} />
              <div className={!mode? 'info-container': ' info-container info-theme-ligth-elements'}>
                <h3>{inf.name}</h3>
                <div className="info-container-one">
                  <div>
                    <p><span>Native Name:</span> {inf.nativeName}</p>
                    <p><span>Population:</span> {inf.population}</p>
                    <p><span>Region:</span> {inf.region}</p>
                    <p><span>Sub Region:</span> {inf.subregion}</p>
                    <p><span>Capital:</span> {inf.capital}</p>
                  </div>
                  <div>
                    <p><span>Top Level Domain:</span> {inf.topLevelDomain}</p>
                    <p><span>Currencies:</span> {inf.currencies[0].name}</p>
                    <p><span>Lenguages:</span> {inf.languages[0].name}</p>
                  </div>
                </div>
                {inf.borders? <div className="border-countries">
                  <p><span>Border Countries:</span></p>
                  <div className='border-countries-country'>
                  <p>{inf.borders[0]}</p>
                  <p>{inf.borders[1]}</p>
                  <p>{inf.borders[2]}</p>
                  </div>
                </div>:
                <div className="border-countries">
                <p><span>Border Countries: 0</span></p>
                </div>
                }
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default InfoCountry;
