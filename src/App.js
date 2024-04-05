import React, { useState } from "react";
import "./App.css";
import { Container, Stack, Typography, Card, Paper, IconButton } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Atome from "./Atome/Atome";
import Languages from "./Languages";
import Experiences from './Experiences';
import Canvas from "./Canvas";

function App() {
  const [headerPage, setHeaderPage] = useState(true);
  const toggleHeader = () => {
    setHeaderPage(e => !e);
  }

  return (
    <div className="App">
      {headerPage ? (
        <header className="header">
          <Typography variant="h1">Fougerolle Alain</Typography>
          <Typography variant="h2">Développeur Full Stack</Typography>
          <IconButton aria-label="next" color="primary" onClick={toggleHeader} sx={{
            position: "absolute",
            bottom: "100px",
            zIndex: 10,
            left: "100px"
          }} >
            <ArrowDownwardIcon sx={{ fontSize: '80px' }} />
          </IconButton>
          <Atome />
        </header>
      ) : (
        <main>
          <Canvas />
          <IconButton aria-label="next" color="primary" onClick={toggleHeader} sx={{
            position: "absolute",
            top: "100px",
            zIndex: 10,
            left: "100px"
          }} >
            <ArrowUpwardIcon sx={{ fontSize: '80px' }} />
          </IconButton>
          <Stack spacing={12} alignItems="center" justifyContent='center' sx={{ paddingTop: 6, marginBottom: 3 }}>
            <Container maxWidth="xl">
              <Stack spacing={6} alignItems="center" justifyContent='center'>
                <Typography variant="h3" className="typo">À propos de moi</Typography>
                <Card className="card" sx={{ width: "90%" }}>
                  <Paper variant="outlined" sx={{ padding: 2 }}>
                    Passionné de développement et autodidacte depuis plus de 5 ans, mes expériences professionnelles m'ont forgé une solide expertise dans diverses technologies.<br /><br />
                    Capable de jongler avec aisance entre différentes technologies, ma soif d'apprendre, et ma passion pour ce domaine font de moi un candidat idéal pour contribuer pleinement à un projet d'envergure où je pourrais m'épanouir professionnellement.<br /><br />
                    Pour toute question, n'hésitez pas à me contacter via email ou téléphone.
                  </Paper>
                </Card>
              </Stack>
            </Container>

            <Languages />
            <Experiences />
          </Stack>
        </main>
      )}

      <footer>
        <Container maxWidth="md">
          Contactez-moi par mail : fougerollealain@gmail.com ou par téléphone : 06 08 55 72 61
        </Container>
      </footer>
    </div>
  );
}

export default App;
