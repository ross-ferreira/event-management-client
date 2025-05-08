import React from "react"

import ItineraryItem from "./ItineraryItem"
import { Stack } from "@mui/material"



export default function Itinerary() {

    const itineraryItems = [
        {
            title: "Day 1",
            activities: [
                {
                    title: "Base Jumping",
                    time: "0900"
                }, {
                    title: "Base Jumping",
                    time: "1200"
                },
                {
                    title: "Base Jumping",
                    time: "1700"
                }, {
                    title: "Base Jumping",
                    time: "1900"
                }
            ]
        },
        {
            title: "Day 2",
            activities: [
                {
                    title: "Base Jumping",
                    time: "0900"
                }
            ]
        },
        {
            title: "Day 3",
            activities: [
                {
                    title: "Base Jumping",
                    time: "0900"
                }
            ]
        },
        {
            title: "Day 4",
            activities: [
                {
                    title: "Base Jumping",
                    time: "0900"
                }
            ]
        }

    ]


    return (
        <Stack direction="row" spacing={2}>
            {
                itineraryItems.map(item =>
                    <ItineraryItem key={item.title} activities={item.activities} title={item.title} />
                )
            }
        </Stack>

    )
}