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
               agregarRegistro(form);
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
           <div className="contact-wrapper-login">
                <div class = "login">
                              <h1>Registrate</h1>
                              <form onSubmit={handleSubmit}>
                                   <input type="text" name = "user" placeholder="Usuario" onChange={handleChange} value={form.user}/>
                                   <input type="email" name = "email" placeholder="user@gmail.com" onChange={handleChange} value={form.email}/>
                                   <input type="password" name = "password" placeholder="password" onChange={handleChange} value={form.password}/>
                                   <div class="d-grid gap-2 d-md-block">
                                        <button id="signin" className="btn btn-primary btn-block btn-large" type="submit">Registrarse</button>
                                        <button id="signin" className="btn btn-primary btn-block btn-large"  type="reset" onClick={handleReset}>Limpiar</button>
                                   </div>
                              </form>
                         </div>
           </div>

     );
};

export default CrudFormUsers