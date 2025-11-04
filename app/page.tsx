import Image from "next/image";
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700'] });

export default function Home() {
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
        Todo lo que necesitas, a un clic de distancia
      </h1>

      {/* Imagen fija abajo */}
      <Image
        src="/images/fondo.png"
        alt="fondo"
        width={400}
        height={400}
        style={{
          position: "fixed",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000
        }}
      />
    </div>
  );
}
