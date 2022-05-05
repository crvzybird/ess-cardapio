import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const EditBox = ({id, description, name, price, open, setOpen, showItems, setShowItems}) => {

    const [editValues, setEditValues] = useState({
        id: id,
        name: name,
        price: price,
        description: description,
    });

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditItem = () => {
        console.log(editValues);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>

                <DialogContent>

                    <TextField
                        autoFocus
                        fullWidth
                        required
                        id="outlined-required"
                        label="Name"
                        margin="dense"
                        type="text"
                        defaultValue={name}
                        onChange={handleChangeValues}
                    />

                    <TextField
                        autoFocus
                        fullWidth
                        required
                        id="outlined-required"
                        label="Price"
                        defaultValue={price}
                        onChange={handleChangeValues}
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
                        defaultValue={description}
                        onChange={handleChangeValues}
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                    <Button color="primary" onClick={() => handleEditItem()}>Save</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default EditBox; 