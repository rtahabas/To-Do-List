import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Styles from "./List.module.scss";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 60),
    createData('Ice cream sandwich', 237, 90),
    createData('Eclair', 262, 160),
    createData('Cupcake', 305, 37),
    createData('Gingerbread', 356, 160),

];

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
            <Box className={Styles.table}>
                <TableContainer className={Styles.table_container} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> Name</TableCell>
                                <TableCell align="right">Priority&nbsp;(g)</TableCell>
                                <TableCell align="right">Action&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="warning">
                                            {row.calories}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant='contained'>
                                            <ModeEditOutlinedIcon />
                                        </Button>
                                        <Button variant='contained' color="secondary">
                                            <DeleteForeverIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
        ;
}

export default List;