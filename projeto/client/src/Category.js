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

    const [addCategory1, setAddCategory1] = React.useState();

    const handleChangeAddCategory1 = (event) => {
        setAddCategory1(event.target.value);
    };

    const [addCategory2, setAddCategory2] = React.useState();
    
    const handleChangeAddCategory2 = (event) => {
        setAddCategory2(event.target.value);
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

    const handleDeleteIC = (values) => {
        console.log("deleting")
        console.log(addCategory1)
        console.log(addCategory2)
        Axios.delete(variables.URL + "itemToCategory", {
            data: {
                itemid: addCategory2,
                categoryid: addCategory1 
            }
        }).then((response) => {
                console.log(response);
                handleClose();
                reset();
            });
    }

    const onAddItemCategory = (values) => {
        
    }

    const handleAddIC = (values) => {
        Axios.post(variables.URL + "itemToCategory", {
            itemid: addCategory2,
            categoryid: addCategory1 
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
                <DialogTitle id="form-dialog-title">Create</DialogTitle>
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
                        <Button variant="contained" type="submit">Create</Button>
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

                <DialogTitle id="form-dialog-title">Item to category</DialogTitle>
                <form onSubmit={handleSubmit(onAddItemCategory)}>
                    <DialogContent>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    required
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addCategory1}
                    label="category"
                    onChange={handleChangeAddCategory1}
                    >
                    
                    {typeof category !== "undefined" && category.map((item) => {
                        return(<MenuItem value={item.id}>{item.name}</MenuItem>)
                    })}

                    </Select>
                    <InputLabel id="demo-simple-select-label">Item</InputLabel>
                    <Select
                    required
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addCategory2}
                    label="item"
                    onChange={handleChangeAddCategory2}
                    >
                    
                    {typeof showItems !== "undefined" && Array.isArray(showItems) && showItems.map((item) => {
                        return(<MenuItem value={item.id}>{item.name}</MenuItem>)
                    })}

                    </Select>

                    </DialogContent>

                    <DialogActions>
                    <Button variant="contained" type="submit" onClick={handleDeleteIC} color="error">Remove</Button>
                    <Button variant="contained" type="submit" onClick={handleAddIC}>Add</Button>
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
