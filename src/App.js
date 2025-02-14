import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import "./styles.css"
import PersonProfile from "./pages/PersonProfile"
import Dashboard from "./pages/Dashboard/index"
import PersonProfileEdit from './pages/PersonProfile/components/PersonProfileEdit'

const API_URL = "https://randomuser.me/api/?results=50"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  useEffect(()=>{
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {setPeople(data.results)
      console.log("data", data.results)})
  }, [])

 
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/"
          element={<Dashboard 
            hiredPeople={hiredPeople}
            // setHiredPeople={setHiredPeople}
            // setPeople={setPeople}
            people={people}/>}/>
        <Route
          path="/people/:id" 
            element={<PersonProfile 
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople}/>} />
            
        <Route path='/people/:id/edit' element={
          <PersonProfileEdit
            setHiredPeople={setHiredPeople}
            hiredPeople={hiredPeople}
          />}
        />
      </Routes>
    </>
  )
}
