import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'row',
    margin: 10,
  },
  cardActions: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    margin: 4,
  },
  icons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
}));