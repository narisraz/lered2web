import { Container, CssBaseline } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import MyAppBar from '../MyAppBar';
import MyAppDrawer from '../MyDrawer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const drawerWidth = 240

const DefaultLayout = ({ children }: any) => {
    const [ drawerOpened, setOpen ] = useState(false)
    const classes = useStyles();

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
          <div className={classes.root}>
            <CssBaseline />
            <MyAppBar drawerOpened={drawerOpened} drawerWidth={drawerWidth} openDrawer={handleDrawerOpen} />
            <MyAppDrawer toolbar={classes.toolbar} opened={drawerOpened} close={handleDrawerClose} width={drawerWidth} />
            
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container>{children}</Container>
            </main>
            </div>
        </React.Fragment>
    );
};
export default DefaultLayout;