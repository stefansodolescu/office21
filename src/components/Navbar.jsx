import React, {useState} from 'react'
import { Link, Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Avatar } from '@mui/material';   
import { Hidden } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"
import { SwipeableDrawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import Hamburger from 'hamburger-react'


const navigationLinks = [
    {name: 'Home', href: './index'},
    {name: 'Galerie', href: './photos'},
    {name: 'Servicii', href: './prices'},
    {name: 'Contact', href: './contact'},
];



export default function Navbar() { 
const [isOpen, setOpen] = useState(false)
  return (
      <AppBar position = 'sticky' sx={{bgcolor: 'black'}} >
          <Toolbar>
            <Avatar sx={{
                zIndex: 1,
                mr:'auto',
                bgcolor: 'transparent',
                borderRadius: 0,
                height: 80,
                width: 150,
            }}  >
                <StaticImage alt="logo" src ='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/logooffice.png'/>
            </Avatar> 
            <Hidden smDown>
            {navigationLinks.map((item) => (
                <Link sx={{
                    mr: 3,
                }}
                    color="white"
                    variant="button"
                    underline="hover"
                    href={item.href}
                    >
                    <Typography
                    variant='h6'>
                    {item.name}
                    </Typography>
                    </Link>
            ))}
            </Hidden>
            <Hidden smUp>
                <Hamburger toggled={isOpen} toggle={setOpen} 
                    onToggle={toggled => {
                        if (toggled) {
                            setOpen(true)
                        } else {
                            setOpen(false)
                        }
                        }}/>
            </Hidden>
            </Toolbar>

            <SwipeableDrawer
                sx={{zIndex:0, width:'xs'}}
                color='transparent' 
                anchor="top"
                open={isOpen} 
                onOpen={() => setOpen(true)} 
                onClose={()=> setOpen(false)}
            >
                <List sx={{bgcolor: "black", pt:11}}>
                    {navigationLinks.map((item) => (
                   <ListItem>    
                        <Link sx={{margin: 'auto'}}
                            color="white"
                            variant="button"
                            underline="hover"
                            href={item.href}
                            >
                            <Typography
                            variant='h5'
                            align='center'>
                            {item.name}
                            </Typography>
                        </Link>
                    </ListItem> 
                ))}
                </List>
            </SwipeableDrawer>
      </AppBar>
  )
}

