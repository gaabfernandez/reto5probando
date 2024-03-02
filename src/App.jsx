import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [validacion, setValidacion] = useState(false)
  
  const validar = () =>{
    if(usuario == "gabo" && password =="summerhack"){setValidacion(true) }
    else{setValidacion(false)}
}
  
const handleChange = (e) =>{
    if(e.target.getAttribute("name") == "user") {setUsuario(e.target.value)}
    if(e.target.getAttribute("name") == "password") {setPassword(e.target.value)}
 }
  
 return (
    <>
    <header className='Appheader'></header>
    <section className='AppsectionSignIn'>
    <div className="AppDivSignIn">
    <h1 id='h1'>{usuario}</h1>
    <input type="text" name='user' onChange={handleChange} placeholder='Ingrese su Usuario:'/>
    <input type="password"  name='password' onChange={handleChange} placeholder='Ingrese su contraseña:'/><br />
    <button onClick={validar}>Entrar</button>
    <h2>{validacion ? `Bienvenido: ${usuario}` : ""}</h2>
    </div>
    </section>
    <footer className="Appfooter"></footer>
    </>
  )
  }
export default App
