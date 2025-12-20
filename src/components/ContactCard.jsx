export default function ContactCard() {

    return (

        <>
            <div className="card mb-3 d-flex">
                <div className="row g-0">
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img src="..." alt="profile" className="rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />

                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-text fw-bold mb-1">Full Name</h5>
                            <p className="card-text mb-1">Address</p>
                            <p className="card-text mb-1">Phone</p>
                            <p className="card-text mb-1">email</p>

                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end align-items-start p-2">
                        <button className="btn btn-link text-dark p-2"><i className="fas fa-pencil-alt"></i></button>
                        <button className="btn btn-link text-dark p-2"><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>



        </>
    )
}