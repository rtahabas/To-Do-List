import { createSlice } from '@reduxjs/toolkit';


const initialList = () => {
    const item = window.localStorage.getItem('list');

    return item ? JSON.parse(item) : [];
}


export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: initialList(),
    },
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
            window.localStorage.setItem('list', JSON.stringify(state.jobs));
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
            window.localStorage.setItem('list', JSON.stringify(state.jobs));
        },
        updateJob: (state, action) => {
            state.jobs = state.jobs.map(job => job.id === action.payload.id ? action.payload : job);
            window.localStorage.setItem('list', JSON.stringify(state.jobs));
        }
    }
});

export const { addJob, removeJob, updateJob } = jobsSlice.actions;

export const selectJobs = state => state.jobs.jobs;

export default jobsSlice.reducer;