
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactServices from "../services/ContactServices.js"
import ContactCard from "./ContactCard.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


export const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idToDelete, setIdToDelete] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await ContactServices.getContacts();


                setContacts(data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando contactos:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const confirmDelete = async () => {
        const success = await ContactServices.deleteContact(idToDelete);
        if (success) {

            setContacts(contacts.filter(item => item.id !== idToDelete));

            setIdToDelete(null);
        }
    };
      const handleEdit = (id) => {
    
        window.location.pathname = `/edit/${id}`;
    };

    if (loading) return <h1 className="text-center mt-5">Cargando contactos...</h1>;

    return (

        <div className="container px-5 mt-5">

            <div className="d-flex justify-content-end mb-4">
                <Link to="/form" className="btn btn-success">
                    Add new contact
                </Link>
            </div>


            <div className="list-group mx-auto">
                {contacts.length > 0 ? (
                    contacts.map((item) => (
                        <ContactCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            address={item.address}
                            phone={item.phone}
                            email={item.email}
                            onDelete={() => setIdToDelete(item.id)}
                            onEdit={handleEdit}
                        />
                    ))
                ) : (
                    <div className="text-center mt-5">
                        <h3>La agenda está vacía</h3>
                        <p>Usa el botón superior para añadir tu primer contacto.</p>
                    </div>
                )}
            </div>

            {idToDelete && (
                <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">¿Estás seguro?</h5>
                                <button type="button" className="btn-close" onClick={() => setIdToDelete(null)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Si eliminas este contacto, no podrás recuperarlo.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setIdToDelete(null)}>Oh no!</button>
                                <button type="button" className="btn btn-primary" onClick={() => confirmDelete()}>Sí, borrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};