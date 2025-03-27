import {Link} from 'react-router-dom';
import s from '../../layout.module.scss';

export const Navigation = () => {
    return(
        <nav className={s.nav}>
            <div className={s.logo}>
                <img src='../../../vite.svg' alt="audi logo" />
            </div>
            <h1>Pet-project made by Iliyas</h1>
            <Link to={'/generate'}>generate Qr code</Link>
            <Link to={'/scan'}>scan the Qr code</Link>
            <Link to={'/historygen'}>history of generate</Link>
            <Link to={'/historyscan'}>history of scans</Link>
        </nav>
    )

}