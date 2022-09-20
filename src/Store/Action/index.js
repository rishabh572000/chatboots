export const publicMessage = (props) =>{
    return {type: 'PUBLICM', payload:props}
}
export const bootMessage = (props) =>{
    return{type: 'BOOT', payload:props}
}
export const chatTF = (props) =>{
    return{type: 'CHATTF'}
}
