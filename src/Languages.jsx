import React from "react";
import {
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Stack,
  Typography,
  Box,
} from "@mui/material";

const competences = [
  {
    name: "Javascript",
    icon: "/Img/Logo/js.png",
    type: "Front-end",
  },
  {
    name: "React-Js",
    icon: "/Img/Logo/react.png",
    type: "Front-end",
  },
  {
    name: "Next-Js",
    icon: "/Img/Logo/next.png",
    type: "Front-end",
  },
  {
    name: "Node.js",
    icon: "/Img/logo/node.png",
    type: "Back-end",
  },
  {
    name: "Express.js",
    icon: "/Img/Logo/express.jpg",
    type: "Back-end",
  },
  {
    name: "SQL",
    icon: "/Img/Logo/sql.png",
    type: "Base de données",
  },
  {
    name: "MongoDB",
    icon: "/Img/Logo/mongodb.svg",
    type: "Base de données",
  },
  {
    name: "Elastic Search",
    icon: "/Img/Logo/elastic.png",
    type: "Base de données",
  },
  {
    name: "Git",
    icon: "/Img/Logo/git.png",
    type: "Développement",
  },
  {
    name: "Redux",
    icon: "/Img/logo/redux.png",
    type: "Front-end",
  },
  {
    name: "SASS",
    icon: "/Img/logo/sass.png",
    type: "Front-end",
  },
  {
    name: "TypeScript",
    icon: "/Img/logo/ts.png",
    type: "Front-end",
  },
  {
    name: "Docker",
    icon: "/Img/logo/docker.jfif",
    type: "Back-end",
  },
  {
    name: "Nginx",
    icon: "/Img/logo/nginx.png",
    type: "Back-end",
  },
  {
    name: "PHP",
    icon: "/Img/logo/php.png",
    type: "Back-end",
  },
  {
    name: "Doctrine",
    icon: "/Img/logo/doctrine.svg",
    type: "Back-end",
  },
  {
    name: "VSC",
    icon: "/Img/logo/vsc.png",
    type: "Développement",
  },
  {
    name: "ESLint",
    icon: "/Img/logo/eslint.jpg",
    type: "Développement",
  },
  {
    name: "Babel",
    icon: "/Img/logo/babel.png",
    type: "Développement",
  },
  {
    name: "Prettier",
    icon: "/Img/logo/prettier.png",
    type: "Développement",
  },
  {
    name: "Webpack",
    icon: "/Img/logo/webpack.png",
    type: "Développement",
  },
];

const MyListItem = ({ type }) => (
  <Stack
    direction="column"
    justifyContent="center"
    flexWrap="wrap"
    alignItems="center"
    sx={{
      backgroundColor: "#3f3f3f",
      zIndex: 2,
      borderRadius: "10px",
      marginBottom: type === "Développement" ? "0px" : "40px",
    }}
  >
    <Typography variant="h4" className="typo">
      {type}
    </Typography>
    <Stack
      direction="row"
      justifyContent="space-around"
      flexWrap="wrap"
      sx={{
        maxWidth: "750px",
      }}
    >
      {competences
        .filter((c) => c.type === type)
        .map((c) => (
          <ListItem className="ListItem" key={c.name}>
            <ListItemAvatar>
              <Avatar alt={c.name} src={c.icon} />
            </ListItemAvatar>
            <ListItemText
              primary={<Box sx={{ fontWeight: "bold" }}>{c.name}</Box>}
            />
          </ListItem>
        ))}
    </Stack>
  </Stack>
);

const Languages = () => (
  <Stack
    justifyContent="center"
    alignItems="center"
    spacing={6}
    sx={{ width: "90%" }}
  >
    <Typography variant="h3" className="typo">
      Languages informatiques / logiciels
    </Typography>

    <Stack spacing={1} sx={{ width: "100% " }}>
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="space-evenly"
        sx={{ width: "100%" }}
      >
        <MyListItem type="Front-end" />
        <MyListItem type="Back-end" />
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="space-evenly"
        sx={{ width: "100%" }}
      >
        <MyListItem type="Bases de données" />
        <MyListItem type="Développement" />
      </Stack>
    </Stack>
  </Stack>
);

export default Languages;
