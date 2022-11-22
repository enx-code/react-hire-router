import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople, people, } = props

  // const [people, setPeople] = useState([])
  console.log("dashboard", people, hiredPeople)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} isHiredList={false}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isHiredList={true}/>
      </section>
    </main>
  )
}

export default Dashboard
