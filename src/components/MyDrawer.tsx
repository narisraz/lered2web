import { Divider, Drawer, IconButton } from "@material-ui/core"
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from "clsx"

const useStyles = (props: any): any => makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: props.width,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: props.width,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
  }),
);

const MyDrawer = (props: any) => {
  const classes = useStyles(props)();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.opened,
        [classes.drawerClose]: !props.opened,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.opened,
          [classes.drawerClose]: !props.opened,
        }),
      }}
    >
      <div className={props.toolbar}>
        <IconButton onClick={props.close}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {props.children}
    </Drawer>
  )
}

export default MyDrawer