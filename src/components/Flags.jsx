import { Skeleton } from '@mui/material'
import{ useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import '../pages/home.css'
import '../pages/homeQuery.css'

export const Flags = ({value,flags,mode}) => {
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])


    let results = []
    if(!value){
      results = flags
    }
    else {
      results = flags.filter((dato) => 
        dato.name.toLowerCase().includes(value.toLowerCase())
      )
    }


    const loader = () => {
        return(
          <section className="flags-container"> 
          {results.map((flag, index) => {
            return (
              <div className={'card '} >
                <Skeleton variant='rectangular' width={280} height={150}/>
                <p><Skeleton/></p>
                <p><Skeleton/></p>
                <p><Skeleton/></p>
                <p><Skeleton/></p>
              </div>
            );
          })}
        </section>
        )
    }
    if(loading){
      return(
        loader()
      )
    }
    else {
      return (
        <section className="flags-container"> 
        {results.map((flag, index) => {
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
      )
    }

}
