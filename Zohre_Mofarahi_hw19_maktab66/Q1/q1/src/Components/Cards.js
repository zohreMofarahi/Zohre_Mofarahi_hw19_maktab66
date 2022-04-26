import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Country from './Country';
import Spinner from './spinner/Spinner';

export default function Cards(props) {

  const [question,setQuestion]=useState('')
  const [filterData,setFilterData]=useState([])
  const [filterParam, setFilterParam] = useState(["Filter by Region"]);
  const items=props.infoCountry
  
  const handlefilter= (event) => {
   const resultSearch=event.target.value;
   const resultfilter= items.filter((value)=> {
   return value.name.toLowerCase().includes(resultSearch.toLowerCase());
   });

   if (resultSearch==='') {
     setFilterData([])
   }else {
     setFilterData(resultfilter)
   };

  }

  

  return (
    
    <>

    
    <div className='boxinput mx-5 my-3'>
      <div className='boxinputs'>
      <div >
      <input className=' py-3 mx-2 inputsearch' 
      type='search' 
      placeholder='search for a country...' 
      onChange={handlefilter}
      />
      <FontAwesomeIcon icon={faSearch} className='search'/>
      </div>
      {filterData.length!= 0 && (
      <div className='dataResult'>
        {filterData.slice(0,20).map ((item,key) => {return(
         <Link to={`/country/${item.alpha3Code}`}
         key={item.alpha3Code}
         style={{textDecoration:"none", color:'black'}}><li>{item.name}</li></Link>)})}
          </div>)}
          
      </div>
      


      <select className='px-3 'onChange={e => setFilterParam(e.target.value)}>
        <option>Filter by Region</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Africa</option>
        <option>Oceania</option>
        <option>Americas</option>
        <option>Polar</option>
      </select>

    </div>

    <div className='countries m-3'>
      
      {items.map(item => {
       return (
       
       
       <div className="card m-4">
       <img src={item.flag} alt={item.name} style={{width:"100%", height:'80%'}}/>
       <div className="container">
         <h4>
        <Link to={`/country/${item.alpha3Code}`}
                key={item.alpha3Code}
                style={{textDecoration:"none", color:'black'}}>
          <b>{item.name}</b></Link></h4>
         <p>Population:{item.population}</p>
         <p>Region:{item.region}</p>
         <p>Capital:{item.capital}</p>
       </div>
     </div>
       ) } )}
     
  
  </div>
  </>
  )
}
