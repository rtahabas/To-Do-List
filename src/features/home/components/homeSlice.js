import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [
        {
            id: 1,
            jobName: "Job 1",
            jobPriority: "Urgent",
            jobStatus: "In Progress",
            jobDescription: "This is a job description",
            jobDate: "2021-10-10",
            jobTime: "10:00",
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