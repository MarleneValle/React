import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        marginTop: '7%',
        padding: '3% 5%',
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
            display: 'row',
        }
    },
    media: {
        height: '700px',
        width: '100%',
    },
  
    description: {
        display: 'row',
        alignItems: 'center',
        margin: '10',
    },
   
    productDetails: {
        display: 'row',
        alignItems: 'center',
        marginBottom: '5%',
        marginTop: 90,
        width: '100%',
        justifyContent: 'space-around',
      },
      buttons: {
        display: 'flex',
        margin: '1%',
        justifyContent: 'space-between',
      },
}));