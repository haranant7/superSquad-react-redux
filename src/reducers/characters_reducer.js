import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

function characters(state = characters_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let character = state.filter((item) => item.id !== action.id);
            return character;
        case REMOVE_CHARACTER:
            character = [...state,createCharacter(action.id)];
            return character;
        default:
            return state;
    }
}

export default characters;