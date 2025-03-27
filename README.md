# React QR Code Project

This is a React-based project for generating and scanning QR codes. It also includes a history feature to track generated and scanned QR codes.

## Features

- **Generate QR Codes**: Create QR codes from user input.
- **Scan QR Codes**: Scan QR codes using a camera.
- **History Tracking**: View the history of generated and scanned QR codes.
- **Responsive Design**: Optimized for mobile devices (320px width).
- **Deployed**: https://pet-project-react-qr-code.vercel.app/


## Technologies Used

- **React**: Frontend framework.
- **React Router**: For navigation between pages.
- **SCSS**: For styling and responsive design.
- **LocalStorage**: To store history of generated and scanned QR codes.
- **Hooks**:Was used hooks such useState and useEffect.

## Project Structure
reactQR/ ├── src/ │ ├── Components/ │ │ ├── Navigation/ │ │ │ └── Navigation.jsx │ │ ├── Generate/ │ │ │ ├── QrCodeGen.jsx │ │ │ └── QrCodeGen.module.scss │ │ ├── Scanner/ │ │ │ └── QrCodeScanner.jsx │ ├── History/ │ │ ├── HistoryGenerated.jsx │ │ ├── HistoryScanned.jsx │ │ └── history.module.scss │ ├── layout.jsx │ ├── layout.module.scss │ └── constans.js
