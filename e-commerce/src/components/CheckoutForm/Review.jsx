import React from 'react';
import { Typography, List, ListItem, ListItemText} from '@material-ui/core';

const Review = ({ checkoutToken}) => {
    return (
        <>
            <Typography variant="h5" gutterBottom>Order summary</Typography>
            <List disablePadding>
             {checkoutToken.live.line_items.map((product) => (
                 <ListItem style={{padding: '10px 0'}} key={product.name}>
                     <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                     <Typography variant="body2">{product.line_total.formatted_with_code}</Typography>
                 </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0'}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        {checkoutToken.live.total.formatted_with_code}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
