import React from "react";

//props
const CrudTableFilaUsers=({el, setDatoEditar, borrarRegistro})=>{
     let{user, email, password, id} = el;
     return (
               <div class = "caja">
                              <div class = "user">
                                   <img src = "https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png" alt=""></img>
                                   <h3>{el.user}</h3>
                                   <div class = " comentario">
                                        {el.email}<br/>
                                        {el.password}
                                   </div>
                              </div>
                    <div class="d-grid gap-2 d-md-block">
                         <button class=" btn btn-info" type="button"onClick={()=>setDatoEditar(el)}>Editar</button>
                         <button class="btn btn-danger" type="button"onClick={()=>borrarRegistro(id)}>Eliminar</button>
                    </div>
               </div>
     );
};

export default CrudTableFilaUsers;