import {createContext, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED} from 'react';

const UserContext = createContext(null);
function useContext(...args){
    return __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
}
export {UserContext, useContext};