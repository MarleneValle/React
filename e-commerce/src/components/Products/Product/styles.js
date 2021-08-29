import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'row',
        justifyContent: 'space-between',
        margin: '0 10px',
    },
    descriptionButton: {
       maxWidth: '100%',
    },
}));