import React from "react";
import CrudTableFilaUsers from "./CrudTableFilaUsers";
import '../css/table.css'
//props
const CrudTableUsers = ({data, setDatoEditar, borrarRegistro})=>{
     return(
        <div class="wrapTable">
            <h3>Tabla de Datos</h3>
            <table id="usuarios">
                    <tr>
                        <th>Usuarios</th>
                        <th>Emails</th>
                        <th>Contraseñas</th>
                    </tr>
                <tbody>
                    {data.length >0?

                        (data.map((el)=> (<CrudTableFilaUsers 
                            key={el.id} 
                            el={el}
                            setDatoEditar={setDatoEditar}
                            borrarRegistro={borrarRegistro}
                            />
                            ))
               
                    ):(

                        <tr><td colSpan="3">Sin datos</td>
                        </tr>

                        ) }
                </tbody>
            </table>
        </div>
     );
};

export default CrudTableUsers;