"use client";

import React, { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://localhost:7192/Categories");
        if (!res.ok) {
          console.log("Error al obtener categorías");
          return;
        }

        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error al obtener categorías:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-black p-6"
      style={{ overflowY: "auto" }} 
    >
      <h1 className="text-2xl font-bold mb-6 text-white">Categorías</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 border rounded-md shadow-md w-48 text-center bg-black hover:bg-gray-700 transition text-white"
          >
            {cat.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
