import React, {useEffect, useState} from "react";

import Axios from "axios";

import ConfimationBox from "./ConfimationBox";
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

const Item = ({
    isMenu, 
    id, 
    description, 
    name, 
    price,
    openPopUp, setOpenPopUp,
    showItems, setShowItems, 
    toDelete, setToDelete
}) => {
    
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [tempList, setTempList] = useState([]);

    const handleCheckbox = (event) => {
        setChecked(event.target.checked);
    };

    const handleSingleDelete = () => {
        setTempList([...toDelete]);

        setToDelete([id]);

        setOpenPopUp(true);
    }
    
    useEffect(() => {
        if(checked){
            setToDelete(arr => [...arr, id]);
        }
        else{
            setToDelete(toDelete.filter(item => item !== id));
        }
    }, [checked]);

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

            <ConfimationBox
                dataList={toDelete}
                tempList={tempList}
                setTempList={setTempList}
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}
                setShowItems={setShowItems}
                setToDelete={setToDelete}
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
                            <Button size="small" variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => handleSingleDelete()}>Delete</Button>
                        </CardActions>
                        : null
                    }
                    
                </Card>
            </div>
        </div>

    );
};

export default Item; 