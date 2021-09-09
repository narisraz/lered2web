import { Container, CssBaseline } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Router } from 'react-router';
import MyAdminRoutes from '../MyAdminRoutes';
import MyAppBar from '../MyAppBar';
import MyAppDrawer from '../MyDrawer';
import MyMenu from '../MyMenu';
import MyMenuAdmin from '../MyMenuAdmin';
import { createBrowserHistory } from "history";


const history = createBrowserHistory();


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

const DefaultLayout = (props: any) => {
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
        <Router history={history}>
          <div className={classes.root}>
            <CssBaseline />
            <MyAppBar drawerOpened={drawerOpened} drawerWidth={drawerWidth} openDrawer={handleDrawerOpen} />
            <MyAppDrawer toolbar={classes.toolbar} opened={drawerOpened} close={handleDrawerClose} width={drawerWidth} >
            { props.admin ? <MyMenuAdmin /> : <MyMenu /> }
            </MyAppDrawer>
            
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Container>
                { props.admin ? <MyAdminRoutes /> : <MyAdminRoutes /> }
              </Container>
            </main>
          </div>
        </Router>
      </React.Fragment>
    );
};
export default DefaultLayout;