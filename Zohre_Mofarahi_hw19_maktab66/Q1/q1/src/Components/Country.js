import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link,useParams} from 'react-router-dom';
import Spinner from './spinner/Spinner';



export default function Country(props) {

    function getalph(code) {
        return props.infoCountry.find(
          (item) => item.alpha3Code === code
        );
      }
    const params=useParams()
    let idcountry=getalph(params.alpha3Code)
    console.log(idcountry)

   
    
  return (
      <>
    { idcountry?<div className='infoCountry'>
        <div>
          <div className='py-3 bt'><FontAwesomeIcon icon={faArrowLeft} className='px-2' />
          <Link to='/' style={{textDecoration:"none", color:'black'}} 
          >back</Link></div>
        </div>

        <div className='infobox'>
            <div className='flag'>
              <img src={idcountry.flag}></img>
               
            </div>

           
                
                <div id='flist1'>
                <h1 className='my-4'>{idcountry.name}</h1>
                    <ul className='grid-list'>
                   
                        <li className='my-2'><b>NativeName: </b>{idcountry.nativeName}</li>
                        <li className='my-2'><b>Population: </b>{idcountry.population}</li>
                        <li className='my-2'><b>Region: </b>{idcountry.region}</li>
                        <li className='my-2'><b>Subregion: </b>{idcountry.subregion}</li>
                        <li className='my-2'><b>Capital: </b>{idcountry.capital}</li>
                        <li className='my-2' ><b>TopLevelDomain: </b>{idcountry.topLevelDomain}</li>
                        <li className='my-2' ><b>Currencies: </b>{idcountry.currencies[0].name}</li>
                        <li className='my-2' ><b>Languages: </b>{idcountry.languages[0].name}</li>
                      

                    </ul>

                    <div className='neighbor'>
                       <div > <h5>BorderCountry:</h5></div>
                      {idcountry.borders?.map(item => <div className='nameneighbor'>
                      <Link to={`/country/${item}`} >{item}</Link>
                        </div> )}
                        
                    </div>
                </div>
            
            
            
            

        </div>


      </div>
       : <Spinner/>}
   
     
      
      
      </>
   
  )
}
