import Image from "next/image";
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700'] });

export default function contactPage() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
      }}
    >
      {/* Frase en la parte superior con fuente cuadrada y moderna */}
      <h1
        className={orbitron.className}
        style={{
          position: "fixed",
          top: "0px",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "500",
          zIndex: 1001,
          marginTop: '100px'
        }}
      >
        Contacta a nuestro soporte tecnico! 
      </h1>

      <h2 
      className={orbitron.className}
        style={{
          position: "fixed",
          top: "50px",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "500",
          zIndex: 1001,
          marginTop: '100px'
        }}
      > 
      Correo: </h2>

      <h3
      className={orbitron.className}
        style={{
          position: "fixed",
          top: "90px",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "500",
          zIndex: 1001,
          marginTop: '100px'
        }}
      >
        johanalbertoqf169@gmail.com
      </h3>
    </div>
  );
}
