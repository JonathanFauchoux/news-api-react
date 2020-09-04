import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import ListNews from './components/ListNews'


// apiKey: a1d8333a47174be293f49c407731e409
function App() {
  
  const [dataNews, setDataNews] = useState([])
  const [country, setCountry] =useState('fr')

   

  console.log('outAxios', country)
  const updateData = () => {
    console.log('axios', country)
    // Axios + envoyer les données dans le state
    var urlApi = 'https://newsapi.org/v2/top-headlines?'+'country='+country+'&'+'apiKey=a1d8333a47174be293f49c407731e409'
    axios
      .get(
        urlApi
      )
      .then((response) => { 
       
       setDataNews(response.data.articles)
      // localStorage.setItem("api", JSON.stringify(response.data.articles));
        
      });
  };

  const changeCountry = (data) => {
     setCountry(data)
   }
 

  useEffect( () => {
    updateData()
  },[country]) 

  //console.log("datanews",dataNews)
  return (
    <div className="App">
      <Header 
      changeCountry={changeCountry}
      />

      <ListNews dataNews={dataNews}/>
    </div>
  );
}

export default App;
