import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectJobs } from "../../homeSlice";
import DeleteModal from '@components/modals/DeleteModal';
import EditModal from '@components/modals/EditModal';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Styles from "./List.module.scss";



function createData(jobName, jobPriority, id,) {
    return { jobName, jobPriority, id };
}


const List = () => {

    const list = useSelector(selectJobs);

    const [search, setSearch] = React.useState("");
    const [priority, setPriority] = React.useState("");
    const [selectedJob, setSelectedJob] = React.useState({});
    const [filteredJobs, setFilteredJobs] = React.useState(list);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);


    const rows = filteredJobs.map((item) => {
        return createData(item.jobName, item.jobPriority, item.id);
    })


    const handleSearch = (event, value) => {
        value === "search" ? setSearch(event.target.value) : setPriority(event.target.value);
    }


    React.useEffect(() => {

        if (search === "" && priority === "") {
            setFilteredJobs(list);
        }
        else if (search !== "" && priority === "") {
            setFilteredJobs(list.filter(item => item.jobName.toLowerCase().includes(search.toLowerCase())));
        }
        else if (search === "" && priority !== "") {
            setFilteredJobs(list.filter(item => item.jobPriority === priority));
        }
        else {
            setFilteredJobs(list.filter(item => item.jobName.toLowerCase().includes(search.toLowerCase()) && item.jobPriority === priority));
        }

    }, [search, priority, list])

    const buttonColor = (priority) => {

        if (priority === "Urgent") {
            return "error";
        }
        else if (priority === "Regular") {
            return "warning";
        }
        else {
            return "success";
        }
    }

    const handleEditModal = (row) => {
        setOpenEditModal(!openEditModal);
        const filledJob = list.find((item) => {
            return item.id === row?.id;
        })
        setSelectedJob(filledJob)
    }

    const handleDeleteModal = (row) => {
        setOpenDeleteModal(!openDeleteModal);
        const filledJob = list.find((item) => {
            return item.id === row?.id;
        })
        setSelectedJob(filledJob)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            }}
        >
            <Typography component="h1" variant="h5">
                Job List
            </Typography>
            <Box component="form" className={Styles.form} noValidate sx={{ mt: 3, color: 'text.light' }}>
                <Box className={Styles.form_wrapper}>
                    <TextField
                        fullWidth
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        onChange={(event) => handleSearch(event, "search")}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="Job Priority">Job Priority</InputLabel>
                        <Select
                            labelId="Job Priority"
                            id="jobPriority"
                            value={priority}
                            label="jobPriority"
                            onChange={(event) => handleSearch(event, "priority")}
                        >
                            <MenuItem value={""}>Priority(All)</MenuItem>
                            <MenuItem value={"Urgent"}>Urgent</MenuItem>
                            <MenuItem value={"Regular"}>Regular</MenuItem>
                            <MenuItem value={"Trivial"}>Trivial</MenuItem>
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
                            {rows?.map((row) => (
                                <TableRow
                                    key={row?.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row?.jobName}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color={buttonColor(row?.jobPriority)} >
                                            {row?.jobPriority}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <EditModal
                                            open={openEditModal}
                                            selectedJob={selectedJob}
                                            setOpen={setOpenEditModal}
                                        />
                                        <Button variant='contained' onClick={() => handleEditModal(row)}>
                                            <ModeEditOutlinedIcon />
                                        </Button>
                                        <Button variant='contained' color="secondary" onClick={() => handleDeleteModal(row)}>
                                            <DeleteForeverIcon />
                                        </Button>
                                        <DeleteModal
                                            selectedJob={selectedJob}
                                            openDeleteModal={openDeleteModal}
                                            setOpenDeleteModal={setOpenDeleteModal}
                                        />
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