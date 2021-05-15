import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'row',
    padding: 10,
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
}));