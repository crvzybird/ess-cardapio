import React from 'react';
import {useNavigate} from "react-router-dom";

import Button from '@mui/material/Button';

import logo from "./brigadeiro.png";

const Home = () => {

    let navigate = useNavigate ();

    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <div className="section"> 
                <div className="title">
                    <img src={logo} className="logo" />
                    <h2> TortiLet Patisserie </h2>
                    <div className="underline"></div>
                </div>

                <div className="navigation">
                    <Button variant="contained" onClick={() => {navigate("/");}}>Home</Button>
                    <Button variant="contained" onClick={() => setOpen(true)}>Add</Button>
                </div>
            
            </div>

        </div>
    );

};

export default Home;