'use client'
import Image from "next/image";
import "./styles.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

  const [listaDeCarros, setListaDeCarros] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);
  const [Error, setError] = useState  (false);

  useEffect(() => {
    const getCarros = async() => {
      try{
        const objeto = await fetch('https://localhost:3000/api');
        const data = await objeto.json();
        setListaDeCarros(data);
        setListaCompleta(data);
      }
      catch{
        setError(true);
      }
    }
    getCarros();
  },[]);

  if (Error == true){
    return <ErrorGetFetch/>
  }

if (listaCompleta[0] == null){
  return
}

return (
  <main className={styles.main}>
    {listaDeCarros.map((carro) => (
      <div className={styles.card} key={carro.id}>
        {<div className={styles.titulo}>{carro.titulo.slice(5, 50)}...</div>}

        <Image className={styles.img} width={300} height={400} src={carro.linkImg} />

        {<div className={styles.propriedades}>{carro.modelo}</div>}

        {<div className={styles.propriedades}><strong>Fabricante:</strong> {carro.fabricante}</div>}

        {<div className={styles.propriedades}><strong>Ano</strong> {carro.ano}</div>}

        {<div className={styles.ultimaProp}><strong>Cor</strong> {carro.cor}</div>}

        <Link href={'/carros/' + carro.id}>
        <button className={styles.button}>Saiba mais</button>
        </Link>

      </div>
    ))}
  </main>
);
}