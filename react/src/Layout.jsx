import { Navigation } from "./Components/Navigation/Navigation";
import { QrcodeGenerator } from "./Components/Generate/QrCodeGen";
import { QrCodeScanner } from "./Components/Scanner/QrCodeScanner";
import { HistoryScanned } from "./History/HistoryScanned";
import { Routes, Route} from "react-router-dom";
import { HistoryGenerated } from "./History/HistoryGenerated";
import s from './layout.module.scss';

const Layout = () =>{
    return(
        <div className="bodypart">
    <Navigation />
      <Routes>
          <Route path="/" element={<QrcodeGenerator />} />
          <Route path="/scan" element={<QrCodeScanner />} />
          <Route path="/generate" element={<QrcodeGenerator />} />
          <Route path="/historyscan" element={<HistoryScanned />} />
          <Route path="/historygen" element={<HistoryGenerated />} />
      </Routes>
    </div>
    )
}
export {Layout}  