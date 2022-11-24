import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <Typography variant="body2" color="text.secondary" align="center" >
                {'Copyright © '}
                <a href="https://github.com/rtahabas">
                    R.Taha BAS
                </a>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
}

export default Footer;