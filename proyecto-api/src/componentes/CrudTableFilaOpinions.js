import React from "react";

//props
const CrudTableFilaOpinions=({el, setDatoEditar, borrarRegistro})=>{
     let{usuario, calificacion, comentario, id} = el;
     return (
               <div class = "caja">
                              <i class = "fas fa-number">{el.calificacion}</i>
                              <div class = "user">
                                   <img src = "https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png" alt=""></img>
                                   <h3>{el.usuario}</h3>
                                   <div class = " comentario">
                                        {el.comentario}
                                   </div>
                              </div>
                    <div class="d-grid gap-2 d-md-block">
                         <button style={{width: '30rem'},{margin:10}} class=" btn btn-info" onClick={()=>setDatoEditar(el)}>Editar</button>
                         <button style={{width: '30rem'},{margin:10}} class="btn btn-danger" onClick={()=>borrarRegistro(id)}>Eliminar</button>
                    </div>
               </div>
     );
};

export default CrudTableFilaOpinions;