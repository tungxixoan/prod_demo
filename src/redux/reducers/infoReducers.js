export const CAP_NHAP_EMAIL ="CAP_NHAP_EMAIL"
export const CAP_NHAP_NAME ="CAP_NHAP_NAME"
export const CAP_NHAP_ADDRESS = "CAP_NHAP_ADDRESS"
export const CAP_NHAP_PHOME= "CAP_NHAP_PHOME"

const initialState = {
  email: '',
  name: '',
  address: '',
  phone: 0,
};

export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case CAP_NHAP_EMAIL:
      return {...state, email: payload.email}
    case CAP_NHAP_NAME:
      return {...state, name: payload.name}
    case CAP_NHAP_ADDRESS:
        return {...state, address: payload.address}
    case CAP_NHAP_PHOME: 
        return {...state, phone: payload.phone}
    default:
      return state;
  }
}
