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
            let id = action.payload.id;
            let name = action.payload.name;
            let url = action.payload.previews['preview-lq-mp3'];
            const sample = {id: id, name: name, url: url}
            return { ...state, samples: [...state.samples, sample] };
        case REMOVE:
            console.log(action.payload.id);
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
