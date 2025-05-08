import React from "react"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"



export default function EventActions() {

    return (
        <Card  variant="outlined">
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Please select Starter
                </Typography>
                <Typography variant="h5" component="div">
                    Selected: Fish
                </Typography>
                <Typography variant="body2">
                    Status: Complete
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}