import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, isHiredList } = props;

  return (
    <li>
      <h3>
        <Link to={`/people/${person.id.value}`} state={{person}}>
          {person.name.first} {person.name.last}
        </Link>
          {person.wage && <p>Wage: £{person.wage}</p>}
        { isHiredList && <Link to={`/people/${person.id.value}/edit`} state={{ person }}>
          Edit
        </Link>}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;
