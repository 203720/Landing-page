import React, {useState, useEffect} from 'react';

const initialForm={
     usuario:"",
     calificacion:null,
     comentario:"",
     id:null,
};

const CrudFormOpinions =({agregarRegistro, actualizarRegistro, datoEditar, setDatoEditar})=>{
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
          if(!form.usuario || !form.calificacion || !form.comentario){
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
          <div class = "reseña">
                              <h1 class="h1">Cuéntanos tú experiencia</h1>
                              <form onSubmit={handleSubmit}>
                                   <input className="botones" type="text" name = "usuario" placeholder="usuario" onChange={handleChange} value={form.usuario}/>
                                   <input className="botones" type="number" name = "calificacion" min="0" max="10" placeholder="calificacion" onChange={handleChange} value={form.calificacion}/>
                                   <input className="botones" type="text" name = "comentario" placeholder="comentario" onChange={handleChange} value={form.comentario}/>
                                  <div class="d-grid gap-2 d-md-block">
                                   <button style={{width: '30rem'},{margin:10}} class=" btn btn-info" type="submit">Enviar</button>

                                   <button  style={{width: '30rem'},{margin:10}} class=" btn btn-info" type="reset" value="Limpiar" onClick={handleReset}>Limpiar</button>
                                 </div>
                              </form>
                         </div>
     );
};

export default CrudFormOpinions