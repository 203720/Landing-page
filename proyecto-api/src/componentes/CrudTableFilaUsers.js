import React from "react";
import '../css/table.css'

//props
const CrudTableFilaUsers=({el, setDatoEditar, borrarRegistro})=>{
     let{user, email, password, id} = el;
     return (
               <tr>
            <td>{user}</td>
            <td>{email}</td>
            <td>{password}</td>
             <td>
                <button  class="buttons" onClick={() => setDatoEditar(el) }>Editar</button>
                <button  class="buttons" onClick={() => borrarRegistro(id) }>Eliminar</button>
             </td>
        </tr>
     );
};

export default CrudTableFilaUsers;