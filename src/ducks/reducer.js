const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const HANDLE_IMG = 'HANDLE_IMG'
const HANDLE_MORTGAGE = 'HANDLE_MORTGAGE'
const HANDLE_RENT = 'HANDLE_RENT'


const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mortgage: 0,
  rent: 0

}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {...state, name: action.payload}
    case UPDATE_ADDRESS:
      return {...state, address: action.payload}
    case UPDATE_CITY:
      return {...state, city: action.payload}
    case UPDATE_STATE:
      return {...state, state: action.payload}
    case UPDATE_ZIP:
      return {...state, zip: action.payload}
    case HANDLE_IMG:
      return {...state, img: action.payload}
      case HANDLE_MORTGAGE:
      return {...state, mortgage: action.payload}
      case HANDLE_RENT:
      return {...state, rent: action.payload}
    default: 
      return state;
  }
}

export function updateName (name) {
  return {
    type: UPDATE_NAME,
    payload: name
  }
}
export function updateAddress (address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}
export function updateCity (city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}
export function updateState (state) {
  return {
    type: UPDATE_STATE,
    payload: state
  }
}
export function updateZip (zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  }
}
export function handleImg (img) {
  return {
    type: HANDLE_IMG,
    payload: img
  }
}
export function handleMortgage (mortgage) {
  return {
    type: HANDLE_MORTGAGE,
    payload: mortgage
  }
}
export function handleRent (rent) {
  return {
    type: HANDLE_RENT,
    payload: rent
  }
}

export default reducer;