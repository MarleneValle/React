import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        padding: '7%'
    },
    media: {
        height: 500,
        width: '100%',
        marginBottom: '3%'
    },
  
    text: {
        alignItems: 'center',
    },
   
    productDetails: {
        display: 'flex',
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