import { generateUser } from '../static.data.js';

export default (state = generateUser() , action)=>{
    switch(action.type){
        default:
            return state;
    }
}

