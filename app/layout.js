// import localFont from "next/font/local";


import "./globals.css";


import Header from './components/header.jsx'
// import Footer from './components/footer.jsx'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <Poppins/> */}
      <Header/>
      {/* <Footer/> */}
        {children}
      </body>
    </html>
  );
}
