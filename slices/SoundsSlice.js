import { createSlice } from "@reduxjs/toolkit";

/**
 * Sounds slice that contain sampler state and enable to add, edit and remove information from sounds
 * */
export const SoundsSlice = createSlice({
    name: "sounds",
    /**
     * List of sounds
     */
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
        /**
		 * Add new sound to the library
         * */
        addSound(state, action) {
			const { id, type, name, uri } = action.payload
			state.sounds.push({ id, type, name, uri })
		},
        /**
		 * edit a sound from the library
         * */
        editSound: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload }
                } else {
                    return item
                }
            })
        },
        /**
		 * Remove a sound from the library
         * */
        deleteSound: (state, action) => {
            return state.filter((item) => item.id != action.payload);
        },
    },
});

export const { addSound, editSound, deleteSound } = SoundsSlice.actions; //reducer methods
export default SoundsSlice.reducer; //reducer

export const soundsSelector = (state) => state.sounds; //selector
export const defaultSelector = (state) => state.sounds.filter((sound) => sound.type === "default");