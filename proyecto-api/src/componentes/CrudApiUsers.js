import React from 'react'
import {helpHttp} from "../helpers/helpHTTP";
import  CrudFormUsers  from './CrudFormUsers';
import CrudTableUsers from "./CrudTableUsers";


const CrudApiUsers = () => {
     const [db, setDb]=useState(null);
     const [datoEditar, setDatoEditar]=useState(null);
     const [error, setError]=useState(null);
     //const [loading, setLoading]= useState(false);


     let api=helpHttp();

     let url= "http://localhost:5000/users";

    useEffect(()=> {
        helpHttp().get(url).then((res)=>{
            //setLoading(true);
            console.log(res);

            if(!res.err){
                setDb(res);
                setError(null);
            }           
            else{setDb(null);
                setError(res);
            }

            //setLoading(false);

        });
    },[url]);

    const agregarRegistro=(data)=>{
       
        data.id=Date.now();
        let options={
            body:data,
            headers:{"content-type":"application/json"}
        };

        api.post(url,options).then((res)=>{
            console.log(res);
            if(!res.err){
                setDb([...db,res]);
            }else{
                setDb(res);
            }

        });
        setDb([...db,data]);
    };

    const actualizarRegistro=(data)=>{
        let endpoint=`${url}/${data.id}`;
        console.log(endpoint);
    
        let options={
            body:data,
            headers:{"content-type":"application/json"}
        };

        api.put(endpoint,options).then((res)=>{

            if(!res.err){
                let nuevoDato=db.map((el)=> (el.id=== data.id? data : el));
                setDb(nuevoDato);
            }else{
                setDb(res);
            }
        });
      
    };

    const borrarRegistro=(id)=>{
        let borrar =window.confirm(
            `¿Estas seguro de eliminar el registro '$(id)'?`
        );

        if(borrar){
            let endpoint = `${url}/${id}`;
            let options = {
                headers:{"content-type":"application/json"}
            };

            api.del(endpoint,options).then((res)=>{
                if(!res.err){
                    let nuevoDato=db.filter((el)=>el.id !== id);
                    setDb(nuevoDato);
                }else{
                    setDb(res);
                }
            });
            
        }else{
            return;
        }
    };

    return(
        <div>
            <CrudFormUsers 
                agregarRegistro={agregarRegistro}
                actualizarRegistro={actualizarRegistro}
                datoEditar={datoEditar}
                setDatoEditar={setDatoEditar}
            />

            {db&& <CrudTableUsers 
            data={db}
            setDatoEditar={setDatoEditar}
            borrarRegistro={borrarRegistro}    
          />}
        </div>
    )
}
