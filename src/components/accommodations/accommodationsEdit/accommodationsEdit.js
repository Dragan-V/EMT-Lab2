import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccommodationEdit = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
            name: "",
            category: 1,
            host: {
                id: 0
            },
            numRooms: 0
        }
    )



    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({
            ...formData,
            [name]: name === "host" ? { id: parseInt(value) } : value
        });
    }



    const onFormSubmit = (e) => {
        e.preventDefault();
        const { name, category, host, numRooms } = formData;
        props.onEditAccommodation(props.accommodation.id,name, category, host, numRooms);
        navigate("/accommodation");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Accommodation Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter Accommodation Name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term.id}>{term}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="host">Host ID</label>
                        <input type="text"
                               className="form-control"
                               id="hostId"
                               name="host"
                               placeholder="Host ID"
                               required
                               onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="numRooms">Available Rooms</label>
                        <input type="text"
                               className="form-control"
                               id="numRooms"
                               name="numRooms"
                               placeholder="Number Of Rooms"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AccommodationEdit;