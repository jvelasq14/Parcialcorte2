import React from 'react'
import {firebase} from "../firebase"

const Tabla = () => {
  const [nombre,setNombre]=React.useState('')
  const [apellido,setApellido]=React.useState('')
  const [nitname, setNitName] = React.useState('')
  const [celular, setCelular] = React.useState('')
  const [direccion, setDireccion] = React.useState('')
  const [ciudad, setCiudad] =React.useState('')
  const [pais, setPais] =React.useState('')
  const [id,setId]=React.useState('')
  const [lista,setLista]=React.useState([])
  const [error,setError]=React.useState(null)

  React.useEffect(()=>{
    const obtenerDatos= async()=>{
      try {
        const db = firebase.firestore()
         db.collection('usuarios').onSnapshot((querySnapshot)=>{
          setLista(querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
          console.log(lista)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
    },[])

    const eliminarDato=async(id)=>{
      const db = firebase.firestore()
      await db.collection('usuarios').doc(id).delete()
  
      const listaFiltrada=lista.filter((elemento)=>elemento.id!==id)
      setLista(listaFiltrada)
    }
   
  return (
    <div className='container'>
 <table className="table table-striped table-hover">
      <thead>
        <tr>
        <th>Nit Name</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Celular</th>
        <th>Direccion</th>
        <th>Ciudad</th>
        <th>Pais</th>
        <th>Foto</th>
        <th>Editar</th>
        <th>Eliminar</th>
        </tr>
        
      </thead>
      <tbody>    
        {
          lista.map((elemento)=>(
            <tr>
              <td>{elemento.nitname}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.apellido}</td>
              <td>{elemento.celular}</td>
              <td>{elemento.direccion}</td>
              <td>{elemento.ciudad}</td>
              <td>{elemento.pais}</td>
              <td><img src={elemento.id}/></td>
              <td><button className="btn btn-danger"  type="button" data-bs-toggle="modal" data-bs-target="#EditarModal">Editar</button></td>
              <td><button className="btn btn-primary" onClick={()=>{eliminarDato(elemento.id)}}>Eliminar</button></td>
            </tr>
          ))
        }
          
        
      </tbody>
    </table>

<form>
<div className="modal fade" id="EditarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Editar Usuario</h5>
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
            <input type="text"
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
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Editar</button>
      </div>
    </div>
  </div>
</div>
</form>
    </div>   
  )
}

export default Tabla