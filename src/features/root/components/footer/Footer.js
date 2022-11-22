import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <Typography variant="body2" color="text.secondary" align="center" >
                {'Copyright © '}
                <Link color="inherit" to="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
}

export default Footer;