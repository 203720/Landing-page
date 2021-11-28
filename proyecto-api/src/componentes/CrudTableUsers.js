import React from "react";
import CrudTableFilaUsers from "./CrudTableFilaUsers";

//props
const CrudTableUsers = ({data, setDatoEditar, borrarRegistro})=>{
     return(
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thread>
                    <tr>
                        <th>Usuarios</th>
                        <th>Emails</th>
                        <th>Contraseñas</th>
                    </tr>
                </thread>
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