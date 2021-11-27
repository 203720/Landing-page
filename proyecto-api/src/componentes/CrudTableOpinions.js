import React from "react";
import CrudTableFilaOpinions from "./CrudTableFilaOpinions";

//props
const CrudTableOpinions = ({data, setDatoEditar, borrarRegistro})=>{
     return(
          <section class = "opiniones" id="opiniones">
               <h1 class = "heading">Reseña de clientes</h1>
                    <div class = "caja-contenedor">
                         {data.length >0?
                         (data.map((el)=>(<CrudTableFilaOpinions
                               key={el.id} 
                               el={el}
                         setDatoEditar = {setDatoEditar}
                         borrarRegistro = {borrarRegistro}
                         />
                         ))
                         ):(
                         <tr>
                              <td class = "heading" colSpan="5">No hay comentarios aún</td>
                         </tr>
                         )}
                    </div>
          </section>
     );
};

export default CrudTableOpinions;