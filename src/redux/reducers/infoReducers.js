export const CAP_NHAP_EMAIL = 'CAP_NHAP_EMAIL';
export const CAP_NHAP_NAME = 'CAP_NHAP_NAME';
export const CAP_NHAP_ADDRESS = 'CAP_NHAP_ADDRESS';
export const CAP_NHAP_PHOME = 'CAP_NHAP_PHOME';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_INFO = 'UPDATE_INFO';
export const EDIT_INFO = 'EDIT_INFO';
export const DELETE_INFO = 'DELETE_INFO'
const initialState = [];

export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case CAP_NHAP_EMAIL:
      return {...state, email: payload.email};
    case UPDATE_INPUT:
      return [...state, {email: payload.email, name: payload.name}];
    case UPDATE_INFO:
      return [
        ...state,
        {
          email: payload.email,
          name: payload.name,
          address: payload.address,
          phone: payload.phone,
        },
      ];
    case EDIT_INFO: {
      // console.log('state: ', state);
      // console.log('stateIndex: ', state[payload.index]);
      state[payload.index].email = payload.email;
      state[payload.index].name = payload.name;
      state[payload.index].address = payload.address;
      state[payload.index].phone = payload.phone;
      return [
        ...state,
      ];
      
    }
    case DELETE_INFO:{
    //   console.log('stateIndex: ', state[payload.index]);
    //   console.log(state);
      state.splice(payload.index,1);
     
    }
    return [...state, ]
    default:
      return state;
  }
}
