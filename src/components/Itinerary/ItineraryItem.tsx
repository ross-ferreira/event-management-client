import React from "react"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"



export default function ItineraryItem({
    title,
    activities
}) {

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {title}
                </Typography>
                {
                    activities.map(act =>
                        <div key={act.title}>
                            <Typography variant="h6" component="div">
                                {act.title}
                            </Typography>
                            <Typography variant="body2">
                                {act.time}
                            </Typography>
                        </div>
                    )
                }
            </CardContent>
        </Card>
    )
}