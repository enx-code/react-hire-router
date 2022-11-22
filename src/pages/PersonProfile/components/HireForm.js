import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm(props) {

  const { person, hiredPeople, setHiredPeople } = props;
  const navigate = useNavigate()
  
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    const newHire = {...person, wage: wage}
    console.log("person", person)
    setHiredPeople([...hiredPeople, newHire]);
    
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
     
    </form>
  )
}

export default HireForm
