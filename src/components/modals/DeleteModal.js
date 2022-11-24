import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { useDispatch } from 'react-redux';
import { removeJob } from "@features/home/homeSlice";

const style = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',   
    bgcolor: '#d5d5d5',
    border: '2px solid #000',
    borderRadius: '15px',
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
                    <FeedbackOutlinedIcon sx={{ fontSize: 50 }} />
                    <Typography id="modal-modal-title" variant="h5" component="h2" textAlign="center" >
                        Are you sure you want to delete this job?
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, gap:2 }}>
                        <Button variant='contained' color='primary' onClick={() => setOpenDeleteModal(false)}>Cancel</Button>
                        <Button variant='contained' color="error" onClick={handleClose}>Delete</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
