import React from "react"
import { Link, NavLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from '../assets/images/noon-logo.svg'
import SearchInput from "./SerachInput";

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    const handleSearch = (searchValue) => {
        // Perform search with the searchValue
        console.log('Search:', searchValue);
        // Add your search logic here
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src={logo} alt="Logo" width={100} />
                </Typography>
                <SearchInput onSearch={handleSearch} />

                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
        // <header>
        //     <Link className="site-logo" to="/">#VanLife</Link>
        //     <nav>
        //         <NavLink 
        //             to="host"
        //             style={({isActive}) => isActive ? activeStyles : null}
        //         >
        //             Host
        //         </NavLink>
        //         <NavLink 
        //             to="about"
        //             style={({isActive}) => isActive ? activeStyles : null}
        //         >
        //             About
        //         </NavLink>
        //         <NavLink 
        //             to="vans"
        //             style={({isActive}) => isActive ? activeStyles : null}
        //         >
        //             Vans
        //         </NavLink>
        //         <Link to="login" className="login-link">
        //             <img 
        //                 src="/assets/images/avatar-icon.png" 
        //                 className="login-icon"
        //             />
        //         </Link>
        //         <button onClick={fakeLogOut}>X</button>
        //     </nav>
        // </header>
    )
}