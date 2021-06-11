import {ADD, CHECK, EDIT, REMOVE,} from './actions';

const initialState = {
    samples: [
        {
            name: "Cymbal",
            type: "default",
            uri: "cymbal.wav",
            id: 1,
        },
        {
            name: "Daibyoshi",
            type: "default",
            uri: "daibyoshi.wav",
            id: 2,
        },
        {
            name: "Med_Taiko",
            type: "default",
            uri: "med_taiko.wav",
            id: 3,
        },
        {
            name: "Taiko",
            type: "default",
            uri: "taiko.wav",
            id: 4,
        },
        {
            name: "Tsuzumi",
            type: "default",
            uri: "tsuzumi.wav",
            id: 5,
        },
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            console.log(action);
            let idFreesound = [state.length - 1].id + 1;
            let nameFreesound = action.payload.name;
            let urlFreesound = action.payload.previews['preview-lq-mp3'];
            const sample = {id: idFreesound, name: nameFreesound, url: urlFreesound}
            return { ...state, samples: [...state.samples, sample] };
        case REMOVE:
            return {
                ...state,
                samples: state.samples.filter(sample => sample.id !== action.payload.id)
            };
        case EDIT:
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload.object }
                    : item
            );
        case CHECK:
            return state.filter((item) => item.id === action.payload.id);
        default:
            return state;
    }
}

export default reducer;
