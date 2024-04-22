import React from 'react';
import { Link } from 'react-router-dom';

const AccommodationTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.host.name + " " + props.term.host.surname}</td>
            <td>{props.term.host.country.name + ", " + props.term.host.country.continent}</td>
            <td>{props.term.numRooms}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/accommodation/edit/${props.term.id}`}>
                    Edit
                </Link>
                <button className={"btn btn-success ml-2"} onClick={() => props.onRent(props.term.id)}>Rent</button>

            </td>
        </tr>
    );
};

export default AccommodationTerm;
