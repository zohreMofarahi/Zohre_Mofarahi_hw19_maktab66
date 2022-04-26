import React,{useState,useEffect,useConext, createContext} from 'react';
import axios from 'axios';
import './App.css';
import './Countrydesign.css';
import Header from './Components/Header';
import { Route,Routes } from 'react-router-dom';
import Cards from './Components/Cards';
import { ThemeContext } from './Components/theme';
import {themes} from './Components/theme'
import Country from './Components/Country';




function App() {

 
  

  const [country, setCountry]=useState([])
  

  useEffect(() =>
   { axios.get('https://restcountries.com/v2/all')
     .then(function(response) { setCountry(response.data)})
},[])

  return (
   
    // <Header/>
    // {/* <Country infoCountry={country}/> */}
    // <Cards  infoCountry={country}/>
    
    <ThemeContext.Provider value={themes}>
   <Routes>
     <Route path='/' element={<Header />}>
       <Route index element={<Cards infoCountry={country} />}/>
       <Route path='country/:alpha3Code' element={<Country infoCountry={country}/>}/>
       </Route> 
     
       <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />

         </Routes>
  </ThemeContext.Provider>
  );
}

export default App;
