import { useState } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import "./styles.css"
import PersonProfile from "./pages/PersonProfile"
import Dashboard from "./pages/Dashboard/index"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/"
        element={<Dashboard 
          hiredPeople={hiredPeople}
          people={people}/>}/>
        <Route
        path="/view/:id" element={<PersonProfile />} />
      </Routes>
    </>
  )
}
