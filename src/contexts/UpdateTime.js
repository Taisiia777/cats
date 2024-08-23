import axios from 'axios';
import config from '../config';
import infoStore from "../stores/infoStore";
import { createContext, useEffect, useRef, useState } from "react";

export const UpdateContext = createContext();

export const UpdateProvider = ({ children }) => {
    const [tapsCount, setTapsCount] = useState(0);

    const tapsTimer = useRef(0);
    const updateTimer = useRef(0);

    useEffect(() => {
        if (updateTimer.current) clearTimeout(updateTimer);

        updateTimer.current = setInterval(updateData, 1000);

        return () => clearInterval(updateTimer.current);
    }, []);

    useEffect(() => {
        clearTimeout(tapsTimer.current);

        const timer = setTimeout(async () => {
            if (tapsCount !== 0) {
                setTapsCount(0);
            }
        }, 350);

        tapsTimer.current = timer;

        return () => clearTimeout(tapsTimer.current);
    }, [tapsCount])

    return (
        <UpdateContext.Provider value={{ tapsCount, setTapsCount }}>
            {children}
        </UpdateContext.Provider>
    );
};
