import React from "react";

import Item from './Item';

const Menu = ({isMenu, showItems, setShowItems}) => {

    return (
        <div className="MenuItems">

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
                        
                        
                        
                        
                    />
                );
            })}

        </div>
    );

}

export default Menu; 