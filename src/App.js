import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Stack, Typography, Card, Paper } from "@mui/material";

import Atome from "./Atome/Atome";
import Languages from "./Languages";
import Experiences from './Experiences';
import Canvas from "./Canvas";
import "./App.css";
import Nav from "./Nav";


function App() {
  const [animateHeader, setAnimateHeader] = useState(true);
  const [isHeaderPage, setIsHeaderPage] = useState(true);
  const timeAnimationHeader = 0.8;

  return (
    <div className="App">
      <Nav
        isHeaderPage={isHeaderPage}
        setIsHeaderPage={setIsHeaderPage}
        setAnimateHeader={setAnimateHeader}
        animateHeader={animateHeader}
        timeAnimationHeader={timeAnimationHeader}
      />

      {isHeaderPage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animateHeader ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: timeAnimationHeader }}
        >
          <header className="header">
            <Typography variant="h1">Fougerolle Alain</Typography>
            <Typography variant="h2">Développeur Full Stack</Typography>
            <Atome />
          </header>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: !animateHeader ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: timeAnimationHeader }}
        >
          <main>
            <Canvas />
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
        </motion.div>
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
