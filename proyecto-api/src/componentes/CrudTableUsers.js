import React from "react";
import CrudTableFilaUsers from "./CrudTableFilaUsers";

//props
const CrudTableUsers = ({data, setDatoEditar, borrarRegistro})=>{
     return(
          <section class = "opiniones" id="opiniones">
               <h1 class = "heading">Registros</h1>
                    <div class = "caja-contenedor">
                         {data.length >0?
                         (data.map((el)=>(<CrudTableFilaUsers
                               key={el.id} 
                               el={el}
                         setDatoEditar = {setDatoEditar}
                         borrarRegistro = {borrarRegistro}
                         />
                         ))
                         ):(
                         <tr>
                              <td class = "heading" colSpan="5">No hay registros aún</td>
                         </tr>
                         )}
                    </div>
          </section>
     );
};

export default CrudTableUsers;