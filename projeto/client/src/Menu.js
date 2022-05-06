import React, {useState, useEffect} from "react";
import Axios from "axios";

import Add from "./Add";
import ConfimationBox from "./ConfimationBox";
import Item from './Item';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import variables from './variables.json';

const Menu = ({isMenu, open, setOpen, showItems, setShowItems}) => {
    const [toDelete, setToDelete] = useState([]);
    
    const [openPopUp, setOpenPopUp] = useState(false);

    const handleDeleteAll = () => {
        setOpenPopUp(toDelete.length > 0 ? true : false);     
    }

    return (
        <div className="MenuItems">
            <Add
                open={open}
                setOpen={setOpen}
                showItems={showItems} 
                setShowItems={setShowItems}
            />
            
            <ConfimationBox
                dataList={toDelete}
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}
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
                        openPopUp={openPopUp}
                        setOpenPopUp={setOpenPopUp}
                    />
                );
            })}

        </div>
    );

}

export default Menu; 