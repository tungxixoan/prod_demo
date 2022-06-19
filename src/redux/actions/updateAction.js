import { CAP_NHAP_EMAIL, UPDATE_INFO, EDIT_INFO, DELETE_INFO } from './../reducers/infoReducers';
import {UPDATE_INPUT} from './../reducers/infoReducers';
export const updateEmail = email => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    dispatch({
      type: CAP_NHAP_EMAIL,
      email: email,
    });
  } catch (error) {}
};

export const updateInput = (email, name) => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    dispatch({
      type: UPDATE_INPUT,
      email: email,
      name: name,
    });
  } catch (error) {}
};

export const updateInfo = (email, name, address, phone) => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    dispatch({
      type: UPDATE_INFO,
      email: email,
      name: name,
      address: address,
      phone: phone,
    });
  } catch (error) {}
};

export const editInfo = (index, email, name, address, phone) => async dispatch =>{
    try {
        await new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 500);
            // console.log('edit info: ', index, email, name, address, phone )
        });
        dispatch({
            type: EDIT_INFO,
            index: index,
            email: email,
            name: name,
            address: address,
            phone: phone,
        })
    } catch (error) {
        
    }
}

export const deleteInfo = (index) => async dispatch => {
  try {
await new Promise ((resolve, reject)=> {
  setTimeout(() => {
    resolve();
  },500);
  console.log('delete info: ' , index)
});
dispatch({
  type: DELETE_INFO,
  index: index,
})
  } catch (error) {
    
  }
}