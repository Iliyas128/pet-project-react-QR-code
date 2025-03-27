import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { SCAN_DATA } from '../../constans';
import s from './QrCodeScanner.module.scss';

export const QrCodeScanner = ()=>{
    const [scanned, SetScanned] = useState(null);

    const scanHandler = (result) =>{
        SetScanned(result[0].rawValue);
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));

    }
    const settings = {
    audio: false,
    finder: false  
    }
    return(
        <div className={s.container}>
            <div className={s.scannerWrapper}>
            <Scanner
            allowMultiple={false}
            components={settings}
            onScan={scanHandler} />
            </div>
            <p>{scanned}</p>
        </div>
    );
}