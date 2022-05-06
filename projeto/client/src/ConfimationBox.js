import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfimationBox = ({confirmSingleDelete, setConfirmSingleDelete, openPopUp, setOpenPopUp}) => {

    const handleClose = () => {
        setOpenPopUp(false);
    };

    const handleDeleteItem = () => {
        setConfirmSingleDelete(true);
        setOpenPopUp(false);
    }

    return (
        <div>
            <Dialog open={openPopUp} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Attention!</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="primary" onClick={() => handleDeleteItem()}>Yes</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default ConfimationBox; 