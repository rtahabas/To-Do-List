import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import Styles from "../Home.module.scss";


const List = () => {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            }}
        >
            <Typography component="h1" variant="h5">
                Job List
            </Typography>
            <Box component="form" className={Styles.form} noValidate onSubmit={"handleSubmit"} sx={{ mt: 3, color: 'text.light' }}>
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
    )
        ;
}

export default List;