import React from "react";
import {useForm} from "react-hook-form";

import Axios from 'axios';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import variables from './variables.json';

const Add = ({open, setOpen, showItems, setShowItems}) => {

    const {register, handleSubmit, reset} = useForm();

    const [toDelete, setToDelete] = React.useState('');
    const [category, setCategory] = React.useState();
    
    React.useEffect(() => {
        Axios.get(variables.URL + "category").then((response) => {
           setCategory(response.data);
        }, [category]);
    });

    const handleChange = (event) => {
        setToDelete(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onAddCategory = (values) => {
        console.log(values)
        Axios.post(variables.URL + "category", {
            name: values.name,
        }).then((response) => {
                console.log(response);
                handleClose();
                reset();
            });
    }
    const onDeleteCategory = (values) => {
        console.log("deleting")
        console.log(values)
        Axios.delete(variables.URL + "category/" + toDelete, {
            id: toDelete,
        }).then((response) => {
                console.log(response);
                handleClose();
                reset();
            });
    }

    return (

        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <form onSubmit={handleSubmit(onAddCategory)}>
                    <DialogContent>

                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Name"
                            margin="dense"
                            type="text"

                            {...register("name")}
                        />

                    </DialogContent>
                    
                    <DialogActions>
                        <Button variant="contained" type="submit">Add</Button>
                    </DialogActions>
                    
                </form>
                <DialogTitle id="form-dialog-title">Delete</DialogTitle>
                <form onSubmit={handleSubmit(onDeleteCategory)}>
                    <DialogContent>

                    <Select
                    required
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={toDelete}
                    label="id"
                    onChange={handleChange}
                    >

                    
                    {typeof category !== "undefined" && category.map((item) => {
                        return(<MenuItem value={item.id}>{item.name}</MenuItem>)
                    })}
                    </Select>

                    </DialogContent>

                    <DialogActions>
                        <Button variant="contained" type="submit">Delete</Button>
                    </DialogActions>
                    
                </form>
                

                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
      );
} 


export default Add; 
