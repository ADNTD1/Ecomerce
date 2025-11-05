"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // <-- Importa el router

const LoginPage = () => {
  const router = useRouter(); // <-- Inicializa el router

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://localhost:7192/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      console.log("Sesión iniciada correctamente");

       if (res.ok) {
      router.push("/categories"); 
      }
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Inicia Sesión con tu cuenta.
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿No tienes una? Crea una gratis
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-base font-medium text-gray-900">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-md border focus:text-black border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Contraseña
                </label>
                <a className="text-sm font-semibold text-black hover:underline" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-10 w-full rounded-md border focus:text-black border-gray-400 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <button
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                type="submit"
                disabled={loading}
              >
                {loading ? "Iniciando..." : "Iniciar Sesión"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
