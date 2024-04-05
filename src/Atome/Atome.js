import React, { useEffect, useState } from "react";
import Electrons from "./Electrons";
import "./Atome.css";

const Atomes = () => {
    const [electronsPlace, setelectronsPlace] = useState([0.1, 2.1, 1.1]);
    const [longueurOval, setLongueurOval] = useState(6.6);
    const [moveEnRond, setMoveEnRond] = useState(false);
    const [stopAnimation, setStopAnimation] = useState(false);

    useEffect(() => {
        // Incrementé les positions toute les 30ms pour faire tourner les cercles avec tous les electrons
        const interval = setInterval(() => {
            if (!stopAnimation) {
                setelectronsPlace((prevPlace) => prevPlace.map((place) => place + 0.01));
            }
        }, 60);
        return () => clearInterval(interval);
    }, [stopAnimation]);


    useEffect(() => {
        const passerEnRond = document.querySelector('.passerEnRond');

        // Gestion de toute les tailles d'écran et init taille et placement de la zone passerEnRond
        let size = 0;
        if (window.innerHeight <= window.innerWidth) {
            size = window.innerHeight / 100 * 90;
            passerEnRond.style.width = `${size}px`;
            passerEnRond.style.height = `${size}px`;
        } else {
            size = window.innerWidth / 100 * 90;
            passerEnRond.style.width = `${size}px`;
            passerEnRond.style.height = `${size}px`;
        }
        passerEnRond.style.top = `${(window.innerHeight / 2) - (size / 2)}px`;
        passerEnRond.style.left = `${(window.innerWidth / 2) - (size / 2)}px`;

    }, []);

    useEffect(() => {
        // L'atome reprend toujours sa forme originel
        const interval = setInterval(() => {
            if (!moveEnRond) {
                setLongueurOval(e => e < 6.6 ? e + 0.1 : e);
            }
        }, 60);
        return () => clearInterval(interval);
    }, [moveEnRond]);

    const moveRond = e => {
        if (e.target.className === 'passerEnRond') {
            // Dans la zone prévue on casse la formation des ovales en rond.
            setLongueurOval(e => e > 2.2 ? e - 0.04 : e);
            setMoveEnRond(true);
        } else {
            setMoveEnRond(false);
        }
    };

    return (
        <div className="containerAtome" onMouseMove={moveRond}>
            {electronsPlace.map((a, index) => (
                <Electrons angle={a} id={index} nbrElectrons={10} longueurOval={longueurOval} stopAnimation={stopAnimation} />
            ))}
            <div className="passerEnRond" onClick={() => setStopAnimation(e => !e)}></div>
        </div>
    );
}

export default Atomes;
