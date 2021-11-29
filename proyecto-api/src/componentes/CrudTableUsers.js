import React from "react";
import CrudTableFilaUsers from "./CrudTableFilaUsers";
import '../css/table.css'
//props
const CrudTableUsers = ({data, setDatoEditar, borrarRegistro})=>{
     return(
        <div class="wrapTable">
            <h3>Tabla de registros</h3>
            <table id="usuarios">
                    <tr>
                        <th>Usuario</th>
                        <th>Correo electrónico</th>
                        <th>Contraseña</th>
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

                        <tr><td colSpan="5">Sin datos</td>
                        </tr>

                        ) }
                </tbody>
            </table>
            <br></br>
        </div>
     );
};

export default CrudTableUsers;