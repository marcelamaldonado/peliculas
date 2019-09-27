import tipo from './tipo'

// FUNCION GENERADORA DE ACCION: cada vez que se emita la accion update_fecha se va a enviar un
// objeto de tipo update_fecha, acompañado de la propiedad payload
// que sera un nuevo objeto de fecha de javascript, conteniedo la fecha y hora actualizada

export const updateFecha = ()=>{
    return{
        type:tipo.UPDATE_FECHA,
        payload: new Date()
    }
}