import React from "react";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = ({isMenu, id, description, name, price, showItems, setShowItems,  }) => {
    const ShowEditButton = () => {
        if(!isMenu){
            return(
                <CardActions>
                    <Button size="small" variant="outlined">Edit</Button>
                </CardActions>
            );
        }
    }

    return ( 
        <div className="Item">
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
                < ShowEditButton />
            </Card>
        </div>

    );
};

export default Item; 