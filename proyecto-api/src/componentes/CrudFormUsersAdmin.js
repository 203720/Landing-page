import React, {useState, useEffect} from 'react';

const initialForm={
     user:"",
     email:"",
     password:"",
     id:null,
};

const CrudFormUsers =({agregarRegistro, actualizarRegistro, datoEditar, setDatoEditar})=>{
     const [form, setForm]=useState(initialForm);//state

     useEffect(()=>{
          if (datoEditar) {
               setForm(datoEditar);//state
          }else {
               setForm(initialForm);//state
          }
     }, [datoEditar]);

     const handleChange = (e)=>{//props
          setForm({... form,[e.target.name]:e.target.value,});
     };
     
     const handleSubmit = (e)=>{//props
          e.preventDefault();
          if(!form.user || !form.email || !form.password){
               alert("Datos incompletos");
               return;
          }

          if (form.id===null) {
               //agregarRegistro(form);
          }else{
               actualizarRegistro(form);
          }

          handleReset();
     };

     const handleReset = (e)=>{//props
          setForm(initialForm);
          setDatoEditar(null);
     };

     return(        
          <div class="container">
               <div class="wrapper">
                    <div className="contact-wrapper-signin">
                         <div class = "signin">
                              <h1>Configurar</h1>
                              <form onSubmit={handleSubmit}>
                                   <input type="text" name = "user" placeholder="Usuario" onChange={handleChange} value={form.user}/>
                                   <input type="email" name = "email" placeholder="Correo electrónico" onChange={handleChange} value={form.email}/>
                                  <input type="password" name = "password" placeholder="Contraseña" onChange={handleChange} value={form.password}/>
                                   <button  id="signin" className="btn btn-primary btn-block btn-large" type="submit" >Modificar</button>
                                   <button  id="signin" className="btn btn-primary btn-block btn-large"  type="reset" onClick={handleReset}>Limpiar</button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CrudFormUsers