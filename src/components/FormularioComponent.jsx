
import { UseForm } from '../hooks/UseForm'

export const FormularioComponent = () => {

  
const initialForm={
    username: ``,
    /*email: ``,*/
    password: ``,
}
  const{formulario,username,password,onInputChange}= UseForm(initialForm)

  
         const onSubmit= (event)=>{
            event.preventDefault()
            console.log(formulario)
            window.location.href="/clientes"
        }


  return (
    <div className='form-contenedor'>
      
      <form className='formulario' onSubmit={onSubmit}>
      <h2>Ingrese sus datos de ingreso</h2>
    <div className="mb-3">
      <label htmlFor="username" >Usuario</label>
      <input type="text" className="form-control" name="username" placeholder="Enter your Username"value={username} onChange={onInputChange}></input>
     
    </div>
    {/* <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" name="email" placeholder="Enter email"value={email} onChange={onInputChange}></input>
      </div> */}

    <div className="form-group">
      <label htmlFor="password" >Clave</label>
      <input type="password" className="form-control" name="password" placeholder="Password"value={password} onChange={onInputChange}></input>
    </div>
   
    <button type="submit" className="btn btn-primary mr">INGRESAR</button>
  </form>
    </div>

  )
}
