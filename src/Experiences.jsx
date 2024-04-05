import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Stack,
  Card,
  Avatar,
  Paper,
} from "@mui/material";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Experiences = () => {
  const expes = [
    {
      id: 2,
      entreprise: "VAULTIA",
      contrat: "CDI",
      titre: " Developpeur Front-End",
      lieux: "Villers-le-Lac",
      duree: "Du 05/2020 au 05/2021",
      logo: "/Img/Logo/vaultia.png",
      competences: [
        "Créer des composants réutilisables en React/JS - Next/JS - TypeScript.",
        "Intégrer une maquette en respectant une charte graphique.",
        "Faire des appels API en gérant le cycle de vie des données.",
        "Créer une documentation claire.",
        "Cryptographie des données.",
        "Protection contre les attaques XSS et CSRF",
        "Compréhension des normes et des bonnes pratiques en matière de développement mobile",
      ],
    },
    {
      id: 3,
      entreprise: "MAESPIRIT",
      contrat: "CDI",
      titre: "Developpeur Full-Stack",
      lieux: "Montigny-le-bretonneux",
      duree: "Du 05/2022 au 09/2023",
      logo: "/Img/Logo/maespirit.png",
      competences: [
        "Appeler des données en base de données et créer des API REST pour les transmettre.",
        "Garder le code à jour en termes de sécurité.",
        "Configuration et formatage du code via Prettier/ESLint.",
        "Création et maintenance de bases de données SQL ou NoSQL.",
        "Optimisation des performances et de la vitesse de chargement des applications.",
        "Visualiser les données sous forme de graphiques.",
        "L'automatisation de tâches via des webhooks",
      ],
    },
    {
      id: 1,
      entreprise: "ACS",
      contrat: "Formation",
      titre: "Développeur Web",
      lieux: "Belfort",
      duree: "Du 09/2018 au 06/2019",
      logo: "/Img/Logo/acs.png",
      competences: [
        "Conception d'un modèle MVC.",
        "Créer du code orienté objet.",
        "Gestion des animations CSS / Javascript / Canvas",
        "Installation et utilisation des bibliothèques NPM/Yarn.",
        "Maîtrise de HTML, CSS et jQuery pour simplifier la manipulation du DOM",
        "Maitrise des environnements Windows Server et Linux.",
        "Expérience avec les bases de données relationnelles et non relationnelles",
      ],
    },
  ];

  const [expeSelect, setExpeSelect] = useState(1);
  const [IconeLarge, setIconLarge] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconLarge((prevIconeLarge) => !prevIconeLarge);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack justifyContent="center" alignItems="center" spacing={6}>
        <Typography variant="h3" className="typo">
          Expériences professionnelles / Compétences
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          direction="row"
          spacing={3}
        >
          {expes
            .sort((a, b) => a.id - b.id)
            .map((expe) => (
              <Card
                key={expe.titre}
                className="card"
                sx={{
                  width: "300px",
                  position: "relative",
                  transition: "background-color 0.5s ease-in-out", // Transition pour le changement de couleur
                  "&:hover": {
                    backgroundColor: (theme) =>
                      expe.id !== expeSelect
                        ? "#535b72"
                        : theme.palette.background.default,
                  },
                }}
                onClick={() => setExpeSelect(expe.id)}
              >
                <Stack spacing={1}>
                  <Typography variant="h5">{expe.titre}</Typography>

                  <Stack flexDirection="row" alignItems="center">
                    <Avatar
                      alt={expe.entreprise}
                      src={expe.logo}
                      sx={{ width: 30, height: 30, marginRight: "10px" }}
                    />
                    <Typography>
                      {expe.contrat} à {expe.entreprise}
                    </Typography>
                  </Stack>

                  <Stack flexDirection="row" alignItems="center">
                    <LocationOnOutlinedIcon
                      color="primary"
                      sx={{ fontSize: 30, marginRight: "10px" }}
                    />
                    <Typography>{expe.lieux} </Typography>
                  </Stack>

                  <Stack flexDirection="row" alignItems="center">
                    <QueryBuilderRoundedIcon
                      color="primary"
                      sx={{ fontSize: 30, marginRight: "10px" }}
                    />
                    <Typography>{expe.duree} </Typography>
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    width: 30,
                    height: 30,
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  {expe.id !== expeSelect ? (
                    <ArrowDownwardIcon
                      color="primary"
                      sx={{
                        fontSize: `${IconeLarge ? 25 : 20}px`,
                        transition: "font-size 0.8s",
                      }}
                    />
                  ) : (
                    <CheckOutlinedIcon fontSize="25px" color="primary" />
                  )}
                </Stack>
              </Card>
            ))}
        </Stack>

        <Card className="card" sx={{ width: "max-content" }}>
          <Paper variant="outlined" sx={{ padding: 1, width: "max-content" }}>
            {expes
              .find((f) => f.id === expeSelect)
              .competences.map((c) => (
                <Stack
                  sx={{ padding: "5px" }}
                  justifyContent="flex-start"
                  direction="row"
                >
                  <ArrowForwardOutlinedIcon
                    fontSize="small"
                    color="primary"
                    sx={{ margin: "0px 20px 0px 10px" }}
                  />
                  {c}
                </Stack>
              ))}
          </Paper>
        </Card>
      </Stack>
    </Container>
  );
};

export default Experiences;
