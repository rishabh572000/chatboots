const initialstate = [];
export const MessageData = (state=initialstate, action) =>{
    
    switch(action.type){
        case 'PUBLICM':
            state.push(action.payload)
            return state;
        case 'BOOT':
            state.push(action.payload)
            return state;
        default: return state
    }
}
const istate = false;
export const ChatTrueFalse = (state=istate, action) =>{
    switch(action.type){
        case 'CHATTF':
            return state?false:true;
        default: return state
    }
}
// export {MessageData, ChatTrueFalse};

