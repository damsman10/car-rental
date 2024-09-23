# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



RESET PASSWORD AND VERIFY ACCOUNT DOCUMENTATION
Created the reset_password_and_verify_account branch.
Created a folder forgotPasswordModals inside pages folder which contains:

- LoginPlaceholder.jsx file. This is supposed to temporarily act as the Login page, since at the time of my     cloning wasn't available. I need to test the forget password in it to link to ResetPassword route. Once Login route is up, I will take out LoginPlaceholder.
- PasswordResetFlow.jsx - this is the one that triggers the modals.
- RequestResetModal.jsx
- EmailSentModal.jsx
- ResetPasswordModal.jsx
-SuccessModal.jsx

Edited the App.jsx file to render the LoginPlaceholder route, which triggers the PasswordResetFlow, which in turn triggers the modals(pop-ups) necessary for the password reset flow.

Added custom colors to tailwind.config.js, since the color in use for this project - #FFCA08 isn't in tailwind docs. 