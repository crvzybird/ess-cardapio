import React, {useState} from "react";
import Axios from "axios";

import Add from "./Add";
import Item from './Item';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import variables from './variables.json';

const Menu = ({isMenu, open, setOpen, showItems, setShowItems}) => {
    const [toDelete, setToDelete] = useState([]);

    const handleDeleteAll = () => {
        toDelete.map((item) => {
            Axios.delete(variables.URL + "delete/" + item).then(() => {
                setShowItems([]);
            });
        });
    }

    return (
        <div className="MenuItems">
            <Add
                open={open}
                setOpen={setOpen}
                showItems={showItems} 
                setShowItems={setShowItems}
            />
            {!isMenu
                ?
                <div className="navigation"> 
                    <Button variant="contained" size="small" startIcon={<AddIcon />}onClick={() => setOpen(true)}>Add</Button>
                    <Button variant="contained" size="small" startIcon={<DeleteIcon />} onClick={() => handleDeleteAll()}>Delete</Button>
                </div>
                
                : null
            }
            {typeof showItems !== "undefined" && showItems.map((item) => {
                return(
                    <Item
                        isMenu={isMenu}
                        id={item.id} 
                        description={item.description}
                        name={item.name}
                        price={item.price}
                        showItems={showItems} 
                        setShowItems={setShowItems}
                        toDelete={toDelete}
                        setToDelete={setToDelete}
                    />
                );
            })}

        </div>
    );

}

export default Menu; 