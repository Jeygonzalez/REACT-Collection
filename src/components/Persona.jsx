import { getImageUrl } from '../Help/utils';
import { people } from "../database/data";

export default function ListPersona(props) {
    let filtro = props.prof
    const desarrollador = people.filter(person =>
        person.profession == filtro
    );
    const listItems = desarrollador.map(person =>
        <li>
            <img
                src={person.imageId}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {'' + person.profession + ''}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}