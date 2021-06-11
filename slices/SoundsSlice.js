import { createSlice } from "@reduxjs/toolkit";

export const SoundsSlice = createSlice({
    name: "sounds",
    initialState: [
        {
            id: 0,
            name: "Cymbal",
            download: require("../assets/Sound/cymbal.wav"),
            type: "default"
        },
        {
            id: 1,
            name: "Daibyoshi",
            download: require("../assets/Sound/daibyoshi.wav"),
            type: "default"
        },
        {
            id: 2,
            name: "Med Taiko",
            download: require("../assets/Sound/med_taiko.wav"),
            type: "default"
        },
        {
            id: 3,
            name: "Miyadaiko",
            download: require("../assets/Sound/miyadaiko.wav"),
            type: "default"
        },
        {
            id: 4,
            name: "Tsuzumi",
            download: require("../assets/Sound/tsuzumi.wav"),
            type: "default"
        },
        {
            id: 5,
            name: "Taiko",
            download: require("../assets/Sound/taiko.wav"),
            type: "default"
        },
        {
            id: 6,
            name: "Daibyoshi",
            download: require("../assets/Sound/daibyoshi.wav"),
            type: "default"
        },
        {
            id: 7,
            name: "Taiko",
            download: require("../assets/Sound/taiko.wav"),
            type: "default"
        },
        {
            id: 8,
            name: "Miyadaiko",
            download: require("../assets/Sound/miyadaiko.wav"),
            type: "default"
        },
        {
            id: 9,
            name: "Cymbal",
            download: require("../assets/Sound/cymbal.wav"),
            type: "default"
        },
        {
            id: 10,
            name: "Taiko",
            download: require("../assets/Sound/taiko.wav"),
            type: "default"
        },
        {
            id: 11,
            name: "Miyadaiko",
            download: require("../assets/Sound/miyadaiko.wav"),
            type: "default"
        },
        {
            id: 12,
            name: "Taiko",
            download: require("../assets/Sound/taiko.wav"),
            type: "default"
        },
        {
            id: 13,
            name: "Daibyoshi",
            download: require("../assets/Sound/daibyoshi.wav"),
            type: "default"
        },
        {
            id: 14,
            name: "Daibyoshi",
            download: require("../assets/Sound/daibyoshi.wav"),
            type: "default"
        },
        {
            id: 15,
            name: "Miyadaiko",
            download: require("../assets/Sound/miyadaiko.wav"),
            type: "default"
        },
    ],

    reducers: {
        addSound (state, action) {
            state.push(action.payload)
        },
        editSound (state,action) {
            state.sounds = state.sounds.map((sound) => sound.id === action.payload.id ? sound = action.payload : true);
        },
        deleteSound(state, action) {
            state.sounds = state.sounds.filter((sound) => sound.id !== action.payload.id);
        }
    },
});
  
export const { addSound, editSound, deleteSound } = SoundsSlice.actions;
export default SoundsSlice.reducer;
export const soundsSelector = (state) => state.sounds;
export const defaultSelector = (state) => state.sounds.filter((sound) => sound.type === "default");