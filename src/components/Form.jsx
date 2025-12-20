export default function Form() {

    return(

        <>
        
        <form>
  
  <div className="mb-3">
    <label htmlFor="exampleFullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="Nombre y Apellidos" />
    
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="InputEmail1"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="examplePhone" className="form-label">Phone</label>
    <input type="number" className="form-control" id="inputPhone"/>
  </div>
 
<div className= "mb-3">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" />
  </div>



  <button type="submit" className="btn btn-primary- w-100">Save</button>
</form>

<p>Or get back to contacts</p>
        
        
        
        
        </>


    )
}