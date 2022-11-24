import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { addJob } from "./homeSlice";


import List from './components/list/List';
import Styles from "./Home.module.scss";

const theme = createTheme();


const Home = () => {

    const [jobPriority, setJobpriority] = React.useState("");

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setJobpriority(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(addJob({
            id: Math.floor(Math.random() * 1000),
            jobName: data.get('jobName'),
            jobPriority: jobPriority,
        }));

    };

    const CssTextField = {
        '& label.Mui': {
            color: '#1976d2',
        },
        '& label.Mui-focused': {
            color: '#1976d2',
        },
        '& .MuiOutlinedInput-root': {
            borderColor: '#b8b8b8',
            '& fieldset': {
                borderColor: '#b8b8b8',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#b8b8b8',
            },
        },
        '& .MuiOutlinedInput': {
            color: '#1976d2',
            borderColor: '#b8b8b8',
            '& fieldset': {
                borderColor: '#b8b8b8',
            }

        },

    };

    const CssSelect = {
        color: "white",
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#b8b8b8'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b8b8b8'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b8b8b8'
        },
        '.MuiSvgIcon-root ': {
            fill: "white !important",
        }

    }



    return (
        <>
            <div className={Styles.home}>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xl">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'start',
                            }}
                        >

                            <Typography component="h1" variant="h5" color="white">
                                Create New Job
                            </Typography>
                            <Box component="form" className={Styles.form} onSubmit={handleSubmit} sx={{ mt: 3, color: 'text.light' }}>
                                <Box className={Styles.form_wrapper}>
                                    <TextField
                                        InputProps={{
                                            style: {
                                                color: "#fff"
                                            }
                                        }}
                                        sx={CssTextField}
                                        color="warning"
                                        focused
                                        required
                                        fullWidth
                                        id="jobName"
                                        label="Job Name"
                                        name="jobName"
                                        autoComplete="job"
                                    />

                                    <FormControl fullWidth>
                                        <InputLabel id="Job Priority">Job Priority</InputLabel>
                                        <Select
                                            focused
                                            color="warning"
                                            required
                                            labelId="Job Priority"
                                            id="jobPriority"
                                            value={jobPriority}
                                            label="jobPriority"
                                            onChange={(event) => handleChange(event)}
                                            sx={CssSelect}

                                        >
                                            <MenuItem value={"Urgent"}>Urgent</MenuItem>
                                            <MenuItem value={"Regular"}>Regular</MenuItem>
                                            <MenuItem value={"Trivial"}>Trivial</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button
                                        fullWidth
                                        className={Styles.create_button}
                                        type="submit"
                                        variant="contained"
                                    >
                                        Create
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <List />
                    </Container>
                </ThemeProvider>
            </div >
        </>
    );
}

export default Home;

