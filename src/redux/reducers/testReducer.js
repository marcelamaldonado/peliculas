import tipo from '../actions/tipo'
const initialState = {
    test:"Hola Mundo",
    fecha: new Date()
}
// los ESTADOS con una aplicacion con redux se considera inmutable
export default (state = initialState,action) =>{
    switch (action.type) {
        case tipo.UPDATE_FECHA:
            return Object.assign({},state,{   // parametros: objeto vacio, objeto inicial,propiedades q tendra el objeto nuevo
                fecha:action.payload
            }) 
                                    //metodo para que la clase object q nos permite hacer una copia
                                    // de un objeto basandonos de un objeto ya existente, al mismo tiempo nos da la posibilidad
                                    //agregarle o modificarles nuevas propiedades a la copia

        default:
            return state
    }
}