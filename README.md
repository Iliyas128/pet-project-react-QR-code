<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# React QR Code Project

This is a React-based project for generating and scanning QR codes. It also includes a history feature to track generated and scanned QR codes.

## Features

- **Generate QR Codes**: Create QR codes from user input.
  ![image](https://github.com/user-attachments/assets/e6598484-24ae-4ac1-9fa4-fa9f7c7e071f)
- **Scan QR Codes**: Scan QR codes using a camera.
 ![image](https://github.com/user-attachments/assets/dfc51dc1-a57a-45c8-a23c-00b781fd0dd0)
- **History Tracking**: View the history of generated and scanned QR codes.
  ![image](https://github.com/user-attachments/assets/94ad696c-d392-4c7e-8b32-8f387efd138e)
- **Responsive Design**: Optimized for mobile devices (320px width).
 ![image](https://github.com/user-attachments/assets/6804e600-84fe-44f4-84d1-a6b95b800369)


## Technologies Used

- **React**: Frontend framework.
- **React Router**: For navigation between pages.
- **SCSS**: For styling and responsive design.
- **LocalStorage**: To store history of generated and scanned QR codes.
- **Hooks**:Was used hooks such useState and useEffect.

## Project Structure
reactQR/ ├── src/ │ ├── Components/ │ │ ├── Navigation/ │ │ │ └── Navigation.jsx │ │ ├── Generate/ │ │ │ ├── QrCodeGen.jsx │ │ │ └── QrCodeGen.module.scss │ │ ├── Scanner/ │ │ │ └── QrCodeScanner.jsx │ ├── History/ │ │ ├── HistoryGenerated.jsx │ │ ├── HistoryScanned.jsx │ │ └── history.module.scss │ ├── layout.jsx │ ├── layout.module.scss │ └── constans.js
>>>>>>> 412fbff48f279b672f28271a426892871bb005f3
