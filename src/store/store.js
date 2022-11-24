import { configureStore } from '@reduxjs/toolkit'

import jobsReducer from '../features/home/homeSlice'

export const store = configureStore({
    reducer: {
        jobs: jobsReducer
    },
});


export default store;