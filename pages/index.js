import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setNome(""); 
        setEmail(""); 
      } else {
        console.error("Falha ao enviar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo à minha página de apresentação!
        </h1>

        <p className={styles.description}>
          Esta é uma página simples criada com React e Next.js
        </p>

        {/* Formulário para nome e e-mail */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
  function teste (params) {
           console.log(params); 
  }
}
