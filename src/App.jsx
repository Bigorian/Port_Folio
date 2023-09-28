import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experirence from './components/experience/Experience';
import Footer from './components/footer/Footer';
// import Testimonials from './components/testimonials/Testimonials';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/contact/Contact';
// Short Key 'rafce' ใช้เรียก Import React//

const _showAlert = () =>{
  alert("This Website is not Responsive without PC Devices\n")
}
const _showAlert1 = () =>{
  alert("เว็บไซต์นี้ไม่รองรับการใช้งานในอุปกรณ์อื่นๆนอกจาก Personal Computer")
}
const App = () => {
  
  return (
    
    <div>
      <_showAlert/>
      <_showAlert1/>
      <Header />
      <Nav />
      <About />
      <Experirence />
      <Certificates />
      <Contact/>
      <Footer />
      {/* <Testimonials /> */}
    </div>
  )
}



export default App;