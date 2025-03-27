import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from './QrCodeGen.module.scss';
import { GENERATE_DATA } from "../../constans";

export const QrcodeGenerator =() => {
    const [value, setValue] = useState("");
    const [res, setRes] = useState("");

    const onClickHandler = () => {
        if (value.trim() !== "") {
            setRes(value);
            setValue("");
        }
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setRes("");
    };

    return (
        <div className={s.container}>
            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                placeholder="Enter text"
                className={s.input}
            />
            <button type="button" 
            onClick={onClickHandler}
            className={s.button}
            >
                Create QR Code
            </button>
            
            {res !== '' && (
                <div className={s.qrWrapper}>

                    <QRCodeSVG value={res} size={260} />
                </div>
            )}

        </div>
    );
};
