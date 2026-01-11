
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContactServices from "../services/ContactServices";


export default function Form() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
        const fetchDataContact = async () => {
            // Llamamos a la API
            const data = await ContactServices.getContacts(); 
            
            const contactToEdit = data.find(c => Number(c.id) === Number(id));

            console.log("ID buscado:", id);
            console.log("Lista de contactos:", data);
            console.log("Contacto encontrado:", contactToEdit);

            if (contactToEdit) {
                setName(contactToEdit.name);
                setPhone(contactToEdit.phone);
                setEmail(contactToEdit.email);
                setAddress(contactToEdit.address);
            }
        };
        fetchDataContact();
    }
}, [id]);


  async function handleSubmit(e) {
    e.preventDefault();

    const contactData = { name, phone, email, address };

    let response;
    if (id) {
      // Si hay ID, llamamos a editar (PUT)
      response = await ContactServices.updateContact(id, contactData);
    } else {
      // Si no hay ID, llamamos a crear (POST)
      response = await ContactServices.createContact(contactData);
    }

    if (response) {
      navigate("/");
    }
  }


return (

  <>
    <div className="container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">{id ? "Edit Contact" : "Add a new contact"}</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" value={name} onChange={(e) => setName(e.target.value)} required />

        </div>

        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} required />

        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="inputPhone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>



        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>

    </div>

    <div className="mt-3 text-center">
      <Link to="/" className="text-primary text-decoration-none">
        Or get back to contacts
      </Link>
    </div>

  </>


)
}