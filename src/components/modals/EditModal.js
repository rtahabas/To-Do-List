import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateJob } from "@features/home/homeSlice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#d5d5d5',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ open, setOpen, selectedJob }) {

  const dispatch = useDispatch();

  const [jobPriority, setJobpriority] = React.useState();

  const handleChange = (event) => {
    setJobpriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(updateJob({
      id: selectedJob?.id,
      jobName: data.get('jobName'),
      jobPriority: jobPriority || selectedJob?.jobPriority,
    }));
    setOpen(false);

  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, color: 'text.light' }}>
            <Box>
              <TextField
                fullWidth
                id="jobName"
                label="Job Name"
                name="jobName"
                defaultValue={selectedJob?.jobName}
                disabled
              />

              <FormControl
                sx={{ mt: 3, mb: 3 }}
                fullWidth>
                <InputLabel
                  id="Job Priority">Job Priority</InputLabel>
                <Select
                  id="jobPriority"
                  label="jobPriority"
                  labelId="Job Priority"
                  defaultValue={selectedJob?.jobPriority}
                  onChange={(event) => handleChange(event)}
                >
                  <MenuItem value={"Urgent"}>Urgent</MenuItem>
                  <MenuItem value={"Regular"}>Regular</MenuItem>
                  <MenuItem value={"Trivial"}>Trivial</MenuItem>
                </Select>
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 2,
                }}
              >
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="error"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Edit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div >
  );
}
