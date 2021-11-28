import React from "react";

//props
const CrudTableFilaUsers=({el, setDatoEditar, borrarRegistro})=>{
     let{user, email, password, id} = el;
     return (
               <tr>
            <td>{user}</td>
            <td>{email}</td>
            <td>{password}</td>
             <td>
                <button onClick={() => setDatoEditar(el) }>Editar</button>
                <button onClick={() => borrarRegistro(id) }>Eliminar</button>
             </td>
        </tr>
     );
};

export default CrudTableFilaUsers;