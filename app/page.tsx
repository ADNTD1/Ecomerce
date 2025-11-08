import Image from "next/image";
import { Orbitron } from 'next/font/google';
import amd from "../public/Images/amd.png";
import intel_logo from "../public/Images/intel_logo.png";
import logo_nvidia from "../public/Images/logo_nvidia.png";
import rog from "../public/Images/rog.png";
import msi from "../public/Images/msi.png";
import predator from "../public/Images/predator.png";
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

      <Image
        src={logo_nvidia} 
        alt="Logo Nvidia"
        width={100}
        height={100}
        style={{
          position: "absolute",
          bottom: "5px",
          right: "90px",
        }}
      />
      <Image
        src={amd} 
        alt="Logo amd"
        width={50}
        height={50}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "1100px",
        }}
      />
      <Image
        src={intel_logo} 
        alt="Logo intel"
        width={70}
        height={70}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "1300px",
        }}
      />
      <Image
        src={rog} 
        alt="Logo rog"
        width={110}
        height={110}
        style={{
          position: "absolute",
          bottom: "0px",
          right: "350px",
          filter: "invert(1)",
        }}
      />
      <Image
        src={msi} 
        alt="Logo msi"
        width={110}
        height={110}
        style={{
          position: "absolute",
          bottom: "21px",
          right: "215px",
        }}
      />
      <Image
        src={predator} 
        alt="Logo acerpredator"
        width={50}
        height={50}
        style={{
          position: "absolute",
          bottom: "21px",
          right: "1200px",
          filter: "invert(1)",
        }}
      />
    </div>
  );
}
