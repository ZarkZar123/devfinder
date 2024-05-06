import './App.css'
import CardDetails from './components/CardDetails'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const {theme}=useContext(ThemeContext)

  return (
  <div className={`${ theme==='light'?'bg-light-bg':'bg-d-dark' }  flex flex-col justify-center items-center p-[1rem] `}>
    <Header/>
    <SearchBar/>
    <CardDetails/>
    
  </div>
  
  )
}

export default App
