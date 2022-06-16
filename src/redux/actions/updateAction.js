
import { CAP_NHAP_EMAIL } from './../reducers/infoReducers';
import { UPDATE_INPUT } from './../reducers/infoReducers';
export const updateEmail = (email) => async dispatch =>{
    try {
        await new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve()
            }, 1000)
        });
        dispatch({
            type: CAP_NHAP_EMAIL,
            email: email
        })
    } catch (error) {
       
    }
}

export const updateInput = (email, name) => async dispatch => {
    try {
        await new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve()
            }, 1000)
        });
        dispatch({
            type: UPDATE_INPUT,
            email: email,
            name: name
        })
    } catch (error) {
        
    }
}