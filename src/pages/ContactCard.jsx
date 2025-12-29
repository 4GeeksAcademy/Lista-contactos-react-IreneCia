import simpsonImg from "../assets/img/descarga.png";
export default function ContactCard({ name, address, phone, email, onDelete }) {

    return (

        <>
            <div className="card mb-3" style={{ maxWidth: "800px" }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-3 d-flex justify-content-center p-3">
                        <img src={simpsonImg} alt="profile" className="rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid black" }}
                        />

                    </div>
                    <div className="col-md-7 ps-4">
                        <div className="card-body p-0">
                            <h5 className="card-text fw-bold mb-1">{name}</h5>
                            <p className="card-text mb-1">{address}</p>
                            <p className="card-text mb-1">{phone}</p>
                            <p className="card-text mb-1">{email}</p>

                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end align-self-start p-3">
                        <button className="btn btn-link text-dark p-2"><i className="fas fa-pencil-alt"></i></button>
                        <button className="btn btn-link" onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>

                    </div>
                </div>
            </div>



        </>
    )
}