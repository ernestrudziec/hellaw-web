import React from 'react';
import { createStore } from "redux";

const initialState = {

    notes: [],
};

//if typeof state === undefined ->> initialState

const myReducer = (state = initialState, {payload, type}) => {

    if (type === 'ADD_NOTE'){
        return { notes: [...state.notes, payload] }
    }

};



const noteAction = {
                    type: 'ADD_NOTE',
                     payload: {title: 'Prawnik', content: 'dobry prawnik to jest'}
                   };

const noteAction2 = {
    type: 'ADD_NOTE',
    payload: {title: 'Prawnikes', content: 'dobry' +
            ' w ciul prawnik' +
            ' to jest'}
};

const store = createStore(myReducer);

const addNote = note => ({ type: 'ADD_NOTE', payload: note});

store.dispatch(addNote({user: 'hehehe', password: 'hehe'}));

console.log(store.getState());