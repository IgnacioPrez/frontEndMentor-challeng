import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
import './homeQuery.css';
import { BaseURl } from "../api";
import { Input } from "../components/Input";
import { Flags } from "../components/Flags";

const Home = ({mode}) => {
  const [flags, setFlags] = useState([]);
  const [value, setValue] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

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
    <main className={!mode ? 'theme-dark ' : 'theme-ligth'} >
      <Input mode={mode} value={value} selectRegion={selectRegion} setValue={setValue} setSelectRegion={setSelectRegion}/>
      <Flags flags={flags} value={value} mode={mode}/>
      <Outlet/>
    </main>
  );
};

export default Home;
