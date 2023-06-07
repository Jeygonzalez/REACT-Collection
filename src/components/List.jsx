const people = [
    'Mateo Vasquez: Matemáticas',
    'Julio Ospina: Ingeniero de Software',
    'Ana Pérez: QA',
    'Felipe Ruíz: Diseñador',
    'Andrea González: Desarrollador'
];

export default function List () {
    const listItems = people.map(person =>
        <li>{person}</li>
        );
        return <ul>{listItems}</ul>;
}
