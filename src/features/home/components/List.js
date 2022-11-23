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
                        fullWidth
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                    <FormControl fullWidth>
                        <InputLabel id="Job Priority">Job Priority</InputLabel>
                        <Select
                            labelId="Job Priority"
                            id="jobPriority"
                            value={0}
                            label="jobPriority"

                        //onChange={"handleChange"}
                        >
                            <MenuItem value={0}>Priority(All)</MenuItem>
                            <MenuItem value={10}>Urgent</MenuItem>
                            <MenuItem value={20}>Regular</MenuItem>
                            <MenuItem value={30}>Trivial</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
        ;
}

export default List;