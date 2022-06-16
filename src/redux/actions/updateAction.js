
import { CAP_NHAP_EMAIL } from './../reducers/infoReducers';
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