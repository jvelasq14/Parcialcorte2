import React from 'react'
import {firebase} from "../firebase"

const Modal = () => {
  const [nombre,setNombre]=React.useState('')
  const [apellido,setApellido]=React.useState('')
  const [nitname, setNitName] = React.useState('')
  const [celular, setCelular] = React.useState('')
  const [direccion, setDireccion] = React.useState('')
  const [ciudad, setCiudad] =React.useState('')
  const [pais, setPais] =React.useState('')
  const [id,setId]=React.useState('')
  const [lista,setLista]=React.useState([])
  const [modoEdicion,setModoEdicion]=React.useState(false)
  const [error,setError]=React.useState(null)
  
  const guardarDatos=async(e)=>{
    e.preventDefault()
    //validaciones
    if(!nitname.trim()){
      setError('Ingrese el nit name')
      return
    }
    if(!nombre.trim()){
      setError('Ingrese el nombre')
      return
    }
    if(!apellido.trim()){
      setError('Ingrese el apellido')
      return
    }
    if(!celular.trim()){
      setError('Ingrese el celular')
      return
    }
    if(!ciudad.trim()){
      setError('Ingrese una ciudad')
      return
    }
    if(!direccion.trim()){
      setError('Ingrese una direccion')
      return
    }
    if(!pais.trim()){
      setError('Ingrese un pais')
      return
    }
     try {
       const db = firebase.firestore()
       const nuevoUsuario = {nombre,apellido,nitname,celular,ciudad,pais,direccion}
       const dato = await db.collection('usuarios').add(nuevoUsuario)
        setLista([
          ...lista,{...nuevoUsuario,id: dato.id}
        ])
     } catch (error) {
       console.log(error)
     }
    
     console.log(lista)
    //limpiar estados
    setNombre('')
    setApellido('')
    setCelular('')
    setDireccion('')
    setPais('')
    setCiudad('')
    setNitName('')
    setError(null)
  }


  
  return (
<>
<h3 className='text-center'>Ingresar Usuario</h3>

<div className='container'>
<button type="button" className="btn btn-dark mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Insertar
</button>
</div>

<form onSubmit={guardarDatos}>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Insertar Usuario</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {
              error ? (
                <div className="alert alert-danger" role="alert">
              {error}
            </div>
              ):
              null
            }

        <div className='row pb-2'>
        <div className="col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Nit Name:</label>
                <input type="text" 
                className="form-control" 
                onChange={(e)=>{setNitName(e.target.value)}}
                 value={nitname}
                />
          </div>
            <div className=" col-md-6 mb-3">
              <label for="recipient-name" className="col-form-label">Nombre:</label>
               <input type="text" 
               className="form-control" 
               onChange={(e)=>{setNombre(e.target.value)}}
               value={nombre}
               />
              </div>
        </div>
           <div className='row pb-2'>
           <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Apellido:</label>
            <input type="text" 
            className="form-control"
            onChange={(e)=>{setApellido(e.target.value)}}
            value={apellido}
             />
          </div>
          <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Celular:</label>
            <input type="number"
             className="form-control"
             onChange={(e)=>{setCelular(e.target.value)}}
            value={celular}
             />
          </div>
           </div>

           <div className='row pb-2'>
           <div className=" col-md-6  mb-3">
            <label for="recipient-name" className="col-form-label">Direccion:</label>
            <input type="text"
             className="form-control"
             onChange={(e)=>{setDireccion(e.target.value)}}
            value={direccion}
             />
          </div>
          <div className=" col-md-6 mb-3">
            <label for="recipient-name" className="col-form-label">Ciudad:</label>
            <input type="text" 
            className="form-control"
            onChange={(e)=>{setCiudad(e.target.value)}}
            value={ciudad} 
            />
          </div>
           </div>
           <div className='row pb-2'>
           <div className=" col-md-12 mb-3">
            <label for="recipient-name" className="col-form-label">Pais:</label>
            <input type="text" 
            className="form-control" 
            onChange={(e)=>{setPais(e.target.value)}}
            value={pais}
            />
          </div>
         
           </div>
           

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{
          setError(null)
          setNombre('')
          setApellido('')
          setCelular('')
          setDireccion('')
          setPais('')
          setCiudad('')
          setNitName('')
        }}>Cerrar</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>
</form>
</>

  )
}

export default Modal