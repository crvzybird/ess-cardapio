import React from "react";
import Item from './Item';

const Menu = ({isMenu, showItems, setShowItems}) => {

    return (
        <div className="MenuItems">

            {typeof showItems !== "undefined" && showItems.map((item) => {
                return(
                    <Item
                        key={item.id} 
                        showItems={showItems} 
                        setShowItems={setShowItems}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                );
            })}

        </div>
    );

}

export default Menu; 