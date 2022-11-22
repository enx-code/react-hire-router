import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people, isHiredList } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} isHiredList={isHiredList} />
      ))}
    </ul>
  )
}

export default PeopleList
