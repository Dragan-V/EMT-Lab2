import Header from '../header/header';
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import repository from "../../repository/repository";
import Accommodations from "../accommodations/accommodationsList/accommodations";
import AccommodationEdit from "../accommodations/accommodationsEdit/accommodationsEdit";
import Categories from "../categories/categories";
import AccommodationAdd from "../accommodations/accommodationAdd/accommodationAdd";

function App() {


    const [categories, setCategories] = useState([]);
    const [accommodations, setAccommodations] = useState([]);
    const [selectedAccommodation, setSelectedAccommodation] = useState({});

    useEffect(() => {
        loadAccommodations();
         loadCategories();
    }, []);

    const loadAccommodations = () => {

        repository.fetchAccommodations()
            .then((data) => {
                setAccommodations(data.data);
            });

    }

    const loadCategories = () => {
        repository.fetchCategories()
            .then((data) => {
                setCategories(data.data);
            });
    }

    const deleteAccommodation = (id) => {
        repository.deleteAccommodation(id)
            .then(() => {
                loadAccommodations();
            });
    }

    const rentAccommodation = (id) => {
        repository.rentAccommodation(id)
            .then(() => {
                loadAccommodations();
            });
    }

    const addAccommodation = (name, category, host, numRooms) => {
        repository.addAccommodation(name, category, host, numRooms)
            .then(() => {
                loadAccommodations();
            });
    }

    const getAccommodation = (id) => {
        repository.getAccommodation(id)
            .then((data) => {
                setSelectedAccommodation(data.data);
            })
    }

    const editAccommodation = (id,name, category, host, numRooms) => {
        repository.editAccommodation(id, name, category, host, numRooms)
            .then(() => {
                loadAccommodations();
            });
    }




    return (
        <Router>
            <Header/>
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/accommodation" element={<Accommodations accommodations={accommodations} onDelete={deleteAccommodation} onEdit={getAccommodation} onRent={rentAccommodation} />} />
                        <Route path="/accommodation/edit/:id" element={<AccommodationEdit accommodation={selectedAccommodation} categories={categories} onEditAccommodation={editAccommodation} />} />
                        <Route path="/categories" element={<Categories categories={categories}/>} />
                        <Route path="/accommodation/add" element={<AccommodationAdd categories={categories} onAddAccommodation={addAccommodation} />} />
                        <Route path="/*" element={<Navigate to="/accommodation"/>}/>
                    </Routes>
                </div>
            </main>
        </Router>
    );

}

export default App;
