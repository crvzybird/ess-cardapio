import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = (props) => {
    return ( 
        <div className="Item">
            <Card sx={{ maxWidth: 345 }} key={props.id}>
                <CardMedia
                    component="img"
                    height="140"
                    image=" "
                    alt={props.name}
                />
                <CardContent>
                    <div className="ItemHeader">
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            R${props.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
};

export default Item; 