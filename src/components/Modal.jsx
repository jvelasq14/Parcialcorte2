import React from 'react'
const Modal = () => {
  return (
<>
<div className='container'>
<button type="button" className="btn btn-dark mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Insertar
</button>
</div>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Insertar Usuario</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
        <div className='row pb-2'>
        <div className="col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Nit Name:</label>
                <input type="text" 
                className="form-control" 
                />
          </div>
            <div className=" col-md-6 mb-3">
              <label for="recipient-name" className="col-form-label">Nombre:</label>
               <input type="text" 
               className="form-control" 
               />
              </div>
        </div>
           <div className='row pb-2'>
           <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Apellido:</label>
            <input type="text" 
            className="form-control"
             />
          </div>
          <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Celular:</label>
            <input type="text"
             className="form-control"
             />
          </div>
           </div>

           <div className='row pb-2'>
           <div className=" col-md-6  mb-3">
            <label for="recipient-name" className="col-form-label">Direccion:</label>
            <input type="text"
             className="form-control"
             />
          </div>
          <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Ciudad:</label>
            <input type="text" 
            className="form-control" 
            />
          </div>
           </div>
           <div className='row pb-2'>
           <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Pais:</label>
            <input type="text" 
            className="form-control" 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Foto:</label>
            <input  type="file" 
            className="form-control"
            />
          </div>
           </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default Modal