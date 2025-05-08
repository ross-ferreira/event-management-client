import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";
import EventActions from "../components/EventActions";
import Itinerary from "../components/Itinerary/Itinerary";

export default function GuestScreen() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Guest Screen
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Welcome to Our Wedding
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            From the moment our paths crossed, we've shared laughter, adventure, and the quiet comfort of knowing we are right where we belong—together.

            We believe in love that grows with patience, deepens with understanding, and flourishes with kindness. On this beautiful day, we are choosing each other—again and again—with joy and with gratitude.

            This celebration is not just about the two of us; it’s about the journey that brought us here, and the incredible family and friends who supported and shaped us along the way. Each of you has been a meaningful part of our lives, and we wouldn’t be who we are without your love and encouragement.

            With full hearts and immense excitement,
            we, Emma Grace Williams & Liam Alexander Bennett,
            invite you to join us in a day filled with love, laughter, and unforgettable memories
            as we begin this new chapter together.
          </Typography>
        </Paper>
      </Box>
      <EventActions />
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Itinerary
      </Typography>
      <Itinerary/>
    </Container>
  );
}
