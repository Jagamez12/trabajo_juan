import React from 'react';
import './formulario.css';


class Formulario extends React.Component{

    handleChange = e => {
        console.log({
        name: e.target.name,
        value: e.target.value,
        });
        };
        handleClick = e => {
        console.log('Button was clicked');
        };
        handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');};
    render(){
        return <div className = "contenedor">
            
            <header>FORMULARIO 2020</header>
            <div>
                <h1>Registrate</h1>
                <hr/>
                <form>
                <div className="tipo1">
                <label >Primer Nombre</label>
                <br/>
                <input onClick={this.handleClick} className="entrada" type="text" name="Primer nombre"/>
                </div>
                <div className = "tipo1">
                        <label>Apellido</label>
                        <br/>
                        <input onClick = {this.handleClick} className="entrada" type="text" name = "Apellido"/>
                    </div>
                <div className = "tipo1">
                        <label>Usuario</label>
                        <br/>
                        <input onClick = {this.handleClick} className="entrada" type="text" name = "Usuario"/>
                </div>
                <div className = "tipo1">
                        <label>Correo</label>
                        <br/>
                        <input onClick = {this.handleClick} className="entrada" type="text" name = "correo"/>
                    </div>
                    <div className = "tipo1">
                        <label>Contraseña</label>
                        <br/>
                        <input onClick = {this.handleClick} className="entrada" type="text" name = "clave"/>
                    </div>        
                <button onClick={this.handleClick} className="boton">
                REGISTRAR
                </button>
                </form>
           
                </div>
            </div>    
}
}


export default Formulario;