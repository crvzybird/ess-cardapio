import React, {useState} from "react";
import Axios from "axios";

import Item from './Item';

import Button from '@mui/material/Button';

import variables from './variables.json';

const Menu = ({isMenu, showItems, setShowItems}) => {
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
            {!isMenu
                ? <Button variant="contained" onClick={() => handleDeleteAll()}>Delete</Button>
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