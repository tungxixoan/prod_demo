import{combineReducers} from 'redux'
import infos from './infoReducers'
const reducers = combineReducers({
    personalInfo: infos,
});

export default (state, action) => reducers(state, action)