import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
import './homeQuery.css';
import { BaseURl } from "../api";
import { Input } from "../components/Input";
import { Flags } from "../components/Flags";
import Modal from "../components/Modal";
import modalImage from '../assets/img/undraw_around_the_world_re_rb1p.svg'

const Home = ({mode}) => {
  const [flags, setFlags] = useState([]);
  const [value, setValue] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [state, setState] = useState(false)

  const getRegion =  () => {
    const region =  !selectRegion ? "all" : "region/" + selectRegion;
    fetch(BaseURl+region)
      .then((result) => result.json())
      .then((data) => {
        setFlags(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getRegion()

  }, [selectRegion, value]);


  return (
    <main className={localStorage.getItem('mode') === 'true' ? 'theme-dark ' : 'theme-ligth'} >
      <Modal state={state} setState={setState}>
        <div className="contents-model">
          <p>Please only search for countries in English. Thank you!</p>
          <img src={modalImage} alt='Img modal'/>
        </div>
      </Modal>
      <Input mode={mode} value={value} selectRegion={selectRegion} setValue={setValue} setSelectRegion={setSelectRegion}/>
      <Flags flags={flags} value={value} mode={mode} />
      <Outlet/>
    </main>
  );
};

export default Home;
