import { configureStore } from "@reduxjs/toolkit"
import SoundsSliceReducer from "../slices/SoundsSlice"

import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default configureStore({
	reducer: {
		sounds: SoundsSliceReducer,
		middleware : [ thunk , logger ] , 	},
})
