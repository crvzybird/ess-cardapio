import React, {useState} from "react";

import EditBox from "./EditBox";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Edit from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

const Item = ({isMenu, id, description, name, price, showItems, setShowItems}) => {
    
    const [open, setOpen] = useState(false);

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
                    </CardActions>
                    : null
                }
            </Card>
        </div>

    );
};

export default Item; 