import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [
        {
            id: 1,
            jobName: "Frontend Developer",
            jobPriority: "Urgent",
        },
        {
            id: 2,
            jobName: "Backend Developer",
            jobPriority: "Regular",
        },
        {
            id: 3,
            jobName: "Fullstack Developer",
            jobPriority: "Trivial",

        }
    ]
};

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },
        removeJob: (state, action) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
        },
        updateJob: (state, action) => {
            state.jobs = state.jobs.map(job => job.id === action.payload.id ? action.payload : job);
        }
    }
});

export const { addJob, removeJob, updateJob } = jobsSlice.actions;

export const selectJobs = state => state.jobs.jobs;

export default jobsSlice.reducer;