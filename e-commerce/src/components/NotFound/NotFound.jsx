import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom"
import useStyles from './styles';

const NotFount = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.notFound}>
            <Typography>Sorry, this page can not be found</Typography>
            <Link to='/'>Back to the home...</Link>
        </div>

     );
}
 
export default NotFount;