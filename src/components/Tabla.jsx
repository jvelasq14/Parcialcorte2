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
  const [modoEdicion,setModoEdicion]=React.useState(false)
  const [error,setError]=React.useState(null)
  React.useEffect(()=>{
    const obtenerDatos= async()=>{
      try {
        const db = firebase.firestore()
        const data = await db.collection('usuarios').get()
        
        const ArryData = data.docs.map(doc=>({
          id: doc.id, ...doc.data()}))
    
          setLista(ArryData)
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
              <td></td>
              <td><button className="btn btn-danger">Editar</button></td>
              <td><button className="btn btn-primary" onClick={()=>eliminarDato(elemento.id)}>Eliminar</button></td>
            </tr>
          ))
        }
          
        
      </tbody>
    </table>
    </div>   
  )
}

export default Tabla