import React, {useEffect, useState} from "react";

import Axios from "axios";

import EditBox from "./EditBox";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import variables from './variables.json';

const Item = ({isMenu, id, description, name, price, showItems, setShowItems, toDelete, setToDelete}) => {
    
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(checked){
            setToDelete(arr => [...arr, id]);
        }
        else{
            setToDelete(toDelete.filter(item => item !== id));
        }
    }, [checked]);

    const handleDeleteItem = (id) => {
        Axios.delete(variables.URL + "delete/" + id).then(() => {
            setShowItems([]);
        });
    };

    const handleCheckbox = (event) => {
        setChecked(event.target.checked);
    };

    return ( 
        <div className="Item">
            <EditBox 
                id={id}
                description={description}
                name={name}
                price={price}
                open={open}
                setOpen={setOpen}
                showItems={showItems} 
                setShowItems={setShowItems}
            />

            <div className="item-left">
                {!isMenu
                    ? <Checkbox checked={checked} onClick={handleCheckbox}/>
                    : null
                }
            </div>

            <div className="item-body">
                <Card sx={{ maxWidth: 345 }} key={id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image=" "
                        alt={name}
                    />

                    <CardContent>
                        <div className="ItemHeader">
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                R${price}
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    
                    {!isMenu 
                        ? <CardActions>
                            <Button size="small" variant="outlined" startIcon={<Edit />} onClick={() => setOpen(true)}>Edit</Button>
                            <Button size="small" variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => handleDeleteItem(id)}>Delete</Button>
                        </CardActions>
                        : null
                    }
                    
                </Card>
            </div>
        </div>

    );
};

export default Item; 