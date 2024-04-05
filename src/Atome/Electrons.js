import React, { useEffect, useState } from "react";

// Angle comprsi entre 0 et 2
const Electrons = ({
    id = 1,
    nbrElectrons = 8,
    angle = 2,
    largeurOval = 2.2,
    longueurOval = 6.6,
    stopAnimation = false
}) => {
    const [electrons, setElectrons] = useState([]);

    useEffect(() => {
        const newElectrons = document.querySelectorAll(`.electron-${id}`);
        setElectrons(Array.from(newElectrons));
    }, [id]);

    useEffect(() => {
        let ovalWidth = 0;
        let ovalHeight = 0;
        let frameId = null;

        // Gestion de toute les tailles d'écrans
        if (window.innerHeight <= window.innerWidth) {
            ovalWidth = window.innerHeight / largeurOval;
            ovalHeight = window.innerHeight / longueurOval;
        } else {
            ovalWidth = window.innerWidth / largeurOval;
            ovalHeight = window.innerWidth / longueurOval;
        }

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Fonction pour calculer la position de l'électron à chaque trame d'animation
        const animateElectron = () => {
            const currentTime = Date.now() * 0.001;
            const vitesse = stopAnimation ? 0 : 2.2;

            electrons.forEach((electron, index) => {
                // Calculer la position de l'électron en fonction du temps
                const placementCercle =
                    (index * (2 * Math.PI)) / electrons.length + currentTime * vitesse;

                // Calculer les coordonnées x et y en fonction de l'angle et de l'inclinaison de l'ovale
                const x =
                    centerX +
                    ovalWidth * Math.cos(placementCercle) * Math.cos(angle) -
                    ovalHeight * Math.sin(placementCercle) * Math.sin(angle);
                const y =
                    centerY +
                    ovalWidth * Math.cos(placementCercle) * Math.sin(angle) +
                    ovalHeight * Math.sin(placementCercle) * Math.cos(angle);

                electron.style.left = `${x}px`;
                electron.style.top = `${y}px`;
            });

            // Planifier la prochaine trame d'animation
            frameId = requestAnimationFrame(animateElectron);
        };

        // Commencer l'animation
        animateElectron();

        // Nettoyer l'animation lors du démontage du composant
        return () => cancelAnimationFrame(frameId);
    }, [electrons, angle, largeurOval, longueurOval, stopAnimation]);

    return (
        <>
            {Array.from({ length: nbrElectrons }).map((_, index) => (
                <div key={index} className={`electron-${id} electron`}></div>
            ))}
        </>
    );
}

export default Electrons;
