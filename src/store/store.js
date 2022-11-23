import { configureStore } from '@reduxjs/toolkit'

import jobsReducer from '../features/home/components/homeSlice'

export const store = configureStore({
    reducer: {
        jobs: jobsReducer
    },
});


export default store;