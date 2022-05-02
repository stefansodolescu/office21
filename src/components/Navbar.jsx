import React, {useState} from 'react'
import { ListItemButton, Typography, ListItem } from '@mui/material';
import { AppBar, Button } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Avatar } from '@mui/material';   
import { Hidden } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"
import { SwipeableDrawer } from '@mui/material';
import { List } from '@mui/material';
import Hamburger from 'hamburger-react'
import { Container } from '@mui/material';
import { Link } from 'react-scroll'
import { makeStyles } from '@mui/styles';



const navigationLinks = [
    {name: 'Home', href: 'home'},
    {name: 'Despre', href:'about'},
    {name: 'Servicii', href:'services'},
    {name: 'Galerie', href: 'gallery'},
    {name: 'Echipa', href:'team'},
    {name: 'Preturi', href:'prices'},
    {name: 'Contact', href: 'contact'},
];

const useStyles = makeStyles(() => ({
    
    link: {
        marginRight: '12px',
        textTransform: 'uppercase',
    },

    mobilelink: {
        margin:'auto',
        textTransform: 'uppercase',       
    },

  }));




export default function Navbar() { 
const [isOpen, setOpen] = useState(false)
const styles = useStyles()
  return (
      <AppBar position = 'sticky' sx={{bgcolor: 'black'}} >
          <Container maxWidth='xl'>
            <Toolbar>
                <Avatar sx={{
                    zIndex: 1,
                    mr:'auto',
                    bgcolor: 'transparent',
                    borderRadius: 0,
                    height: 80,
                    width: 150,
                }}  >
                    <Button>
                        <Link to='home' spy={true} smooth={true} offset={-80} duration={500}>
                            <StaticImage alt="logo" src ='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/logooffice.png'/>
                        </Link>
                    </Button>
                </Avatar> 
                <Hidden mdDown>
                {navigationLinks.map((item) => (
                    <Button sx={{color: 'white'}}>
                        <Link className={styles.link} to={item.href} spy={true} smooth={true} offset={-80} duration={500}>
                            <Typography
                            variant='h6'>
                            {item.name}
                            </Typography>
                        </Link>
                    </Button>
                ))}
                </Hidden>
                <Hidden mdUp>
                    <Button sx={{color:'white', underline:'hover'}}>
                        <Hamburger toggled={isOpen} toggle={setOpen} 
                            onToggle={toggled => {
                                if (toggled) {
                                    setOpen(true)
                                } else {
                                    setOpen(false)
                                }
                                }}/>
                    </Button>
                </Hidden>
                </Toolbar>
            </Container>
            <Container maxWidth='xl'>               
                <SwipeableDrawer
                    sx={{zIndex:0, width:'xs', 
                    display:'flex', flexDirection:'column',
                    justifyContent:'center', alignItems:'center'}}
                    color='transparent' 
                    anchor="top"
                    open={isOpen} 
                    onOpen={() => setOpen(true)} 
                    onClose={()=> setOpen(false)}
                >
                    <List sx={{bgcolor: "black", pt:11}}>
                        {navigationLinks.map((item) => (
                        <ListItemButton alignItems='center' variant="contained">    
                            <Link className={styles.mobilelink} to={item.href} spy={true} smooth={true} offset={-80} duration={500}>
                                <Typography
                                variant='h4'
                                sx={{color:'white'}}>
                                {item.name}
                                </Typography>
                            </Link>
                        </ListItemButton> 
                    ))}
                        <ListItem>
                            <Button
                                href='https://wa.me/767921555' variant="contained" size="large" color="error" 
                                sx={{color:'white', fontSize:'16px', margin:'auto'}}>
                                Programeaza-te!
                            </Button>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </Container> 
      </AppBar>
  )
}

