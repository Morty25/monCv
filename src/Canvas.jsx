import React, { useRef, useEffect, useMemo, useState } from "react";

const Canvas = ({ numberOfBalls = 7 }) => {
  const canvasRef = useRef(null);
  const balls = useRef([]);
  const ballSpeed = 2.5; // Vitesse de base des balles
  const ballRadius = 4;
  const distanceToTurn = 50; // Distance à parcourir avant de tourner
  const [pageHeigthInView, setPageHeigthInView] = useState(null);

  useEffect(() => {
    setPageHeigthInView(document.body.scrollHeight);
  }, []);

  const directions = useMemo(
    () => ({
      d90: Math.PI / 2,
      d30: Math.PI / 6,
      d150: (Math.PI * 5) / 6,
      d330: (Math.PI * 11) / 6,
      d210: (Math.PI * 7) / 6,
      d270: (Math.PI * 3) / 2,
    }),
    []
  );

  useEffect(() => {
    if (pageHeigthInView) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const startX = canvasWidth / 2; // Position horizontale de départ
      const startY = ballRadius; // Position verticale de départ
      // Créer les balles seulement lors de la première exécution
      if (balls.current.length === 0) {
        for (let i = 0; i < numberOfBalls; i++) {
          const ball = {
            x: startX,
            y: startY,
            lastPosition: [],
            angle: directions.d90, // Angle initial (90 degrés)
            distanceTraveled: 0, // Distance parcourue par la balle
          };
          balls.current.push(ball);
        }
      }

      const drawBalls = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.0)"; // 0.1 ou 0.05 donne de belle trainé asser cool
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.globalAlpha = 0.1; // Définit la transparence comme ca cela créer plusieur "couche" 0.1 = 10 couche de balle possible.

        balls.current.forEach((ball) => {
          // Dessiner la balle
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();

          ball.lastPosition.forEach((p, index) => {
            // Dessiner la balle
            ctx.beginPath();

            if (index < ball.lastPosition.length / 4) {
              ctx.arc(p.x, p.y, ballRadius / 2, 0, Math.PI * 2);
              ctx.fillStyle = "white";
            } else {
              ctx.arc(p.x, p.y, ballRadius, 0, Math.PI * 2);
              ctx.fillStyle = "#333";
            }

            ctx.fill();
          });

          if (ball.lastPosition.length > 20) {
            ball.lastPosition.pop();
          }
          ball.lastPosition = [{ y: ball.y, x: ball.x }, ...ball.lastPosition];
          // Mettre à jour la position de la balle en fonction de la vitesse constante
          const deltaX = Math.cos(ball.angle) * ballSpeed; // Calculer la variation horizontale
          const deltaY = Math.sin(ball.angle) * ballSpeed; // Calculer la variation verticale
          ball.x += deltaX;
          ball.y += deltaY;

          // Mettre à jour la distance parcourue par la balle
          ball.distanceTraveled += Math.sqrt(deltaX ** 2 + deltaY ** 2);

          // Vérifier si la balle est sortie du canvas
          if (
            ball.x - ballRadius < 0 || // Gauche
            ball.x + ballRadius > canvasWidth || // Droite
            ball.y - ballRadius < 0 || // Haut
            ball.y + ballRadius > canvasHeight // Bas
          ) {
            ball.x = startX; // Réinitialiser la position de la balle
            ball.y = startY;
            ball.angle = directions.d90; // Réinitialiser l'angle
            ball.distanceTraveled = 0; // Réinitialiser la distance parcourue
          }

          // Vérifier si la balle a parcouru la distance pour tourner
          if (ball.distanceTraveled >= distanceToTurn) {
            // Changer la direction de la balle en tournant de 60 degrés
            if (ball.angle === directions.d90) {
              ball.angle =
                Math.random() < 0.5 ? directions.d30 : directions.d150;
            } else if (ball.angle === directions.d30) {
              ball.angle =
                Math.random() < 0.5 ? directions.d90 : directions.d330;
            } else if (ball.angle === directions.d150) {
              ball.angle =
                Math.random() < 0.5 ? directions.d90 : directions.d210;
            } else if (ball.angle === directions.d210) {
              ball.angle =
                Math.random() < 0.5 ? directions.d270 : directions.d150;
            } else if (ball.angle === directions.d330) {
              ball.angle =
                Math.random() < 0.5 ? directions.d270 : directions.d30;
            } else if (ball.angle === directions.d270) {
              ball.angle =
                Math.random() < 0.5 ? directions.d330 : directions.d210;
            }
            // Réinitialiser la distance parcourue
            ball.distanceTraveled = 0;
          }
        });
      };

      const animate = () => {
        drawBalls();
        requestAnimationFrame(animate);
      };

      animate(); // Commencer l'animation
    }
  }, [numberOfBalls, directions, pageHeigthInView]);

  return pageHeigthInView ? (
    <canvas
      ref={canvasRef}
      width={window.innerWidth - 20}
      height={pageHeigthInView}
      style={{
        position: "absolute",
        top: 0, // Définir le top à 100vh si on veut les header au dessus
        left: 0,
        zIndex: 1,
      }}
    />
  ) : null;
};

export default Canvas;
