import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { removeJob } from "@features/home/homeSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DeleteModal({ openDeleteModal, setOpenDeleteModal, selectedJob }) {

    const dispatch = useDispatch();

    const handleOpen = () => setOpenDeleteModal(true);

    const handleClose = () => {
        setOpenDeleteModal(false);
        dispatch(removeJob(selectedJob?.id));
    }

    return (
        <div>
            <Modal
                open={openDeleteModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete this job?
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', mt: 2 }}>
                        <Button variant='contained' color='primary' onClick={() => setOpenDeleteModal(false)}>Cancel</Button>
                        <Button variant='contained' color="error" onClick={handleClose}>Delete</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
