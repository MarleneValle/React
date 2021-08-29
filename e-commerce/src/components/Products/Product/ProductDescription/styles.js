import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        margin: '30px',
        padding: '3% 5%',
        display: 'flex',
        justifyContent: 'center',
    },
    media: {
        height: '100',
        width: '100%',
        
        // height: 500,
        // width: '100%',
        // marginBottom: '3%'
    },
  
    text: {
        display: 'flex',
    },
   
    productDetails: {
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