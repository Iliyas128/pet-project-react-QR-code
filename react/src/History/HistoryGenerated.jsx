import { GENERATE_DATA } from "../constans";
import { useEffect, useState } from "react";
import s from './history.module.scss';

export const HistoryGenerated = () => {
const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
        setData(storedData);
    }, []);
    return(
        <div className={s.hisGen}>
            {
                data.length >0 ?( data.map((element, index) => (
                    <p key={index}>{element}</p>
                ))): <p>No generated QR</p>
            }
        </div>
    )
}