import { SCAN_DATA } from "../constans";
import { useState, useEffect } from "react";
import s from './history.module.scss';


export const HistoryScanned =() =>{
const [data, setData] = useState([null]);

    useEffect(() =>{
        const storedData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        setData(storedData);
    }, []);
    return(
        <div className={s.hisScan}>
            {
                data.length >0 ?( data.map((element, index) => (
                     <p key={index}>{element} </p>
                ))) : <p>No scanned QR </p>
            }
        </div>
    )
}