import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Styles from "./Home.module.scss";
import List from './components/List';



const theme = createTheme();


const Home = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };



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

                            <Typography component="h1" variant="h5">
                                Create New Job
                            </Typography>
                            <Box component="form" className={Styles.form} noValidate onSubmit={handleSubmit} sx={{ mt: 3, color: 'text.light' }}>
                                <Box className={Styles.form_wrapper}>
                                    <TextField
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
                                            labelId="Job Priority"
                                            id="jobPriority"
                                            value={"age"}
                                            label="jobPriority"
                                        //onChange={"handleChange"}
                                        >
                                            <MenuItem value={10}>Urgent</MenuItem>
                                            <MenuItem value={20}>Regular</MenuItem>
                                            <MenuItem value={30}>Trivial</MenuItem>
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

