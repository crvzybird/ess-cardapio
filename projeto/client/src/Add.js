import React from "react";


const Add = (props) => {

    const handleClose = () => {
        props.setOpen(false);
    };

    return (

        <div>
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <form>
                    <DialogContent>
                        <TextField
                            autoFocus
                            fullWidth
                            required
                            id="outlined-required"
                            label="Name"
                            margin="dense"
                            type="text"

                        />

                        <TextField
                            autoFocus
                            fullWidth
                            required
                            id="outlined-required"
                            label="Price"
                         />

                        <TextField
                            autoFocus
                            fullWidth
                            multiline
                            id="outlined-multiline-static"
                            label="Description"
                            margin="dense"
                            rows={4}
                            type="text"
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
      );
} 