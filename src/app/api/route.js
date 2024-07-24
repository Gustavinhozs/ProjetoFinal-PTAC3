import { NextResponse } from "next/server";

export const listaDeCarros = [
    {
        id: 1,
        modelo: "Golf GTI",
        fabricante: "VW",
        ano: 2018,
        cor: "Vermelho"
    },
    {
        id: 2,
        modelo: "Civic",
        fabricante: "Honda",
        ano: 2020,
        cor: "prata"
    },
    {
        id: 3,
        modelo: "Zafira",
        fabricante: "Chevrolet",
        ano: 2012,
        cor: "preta"
    },
    {
        id: 4,
        modelo: "Astra",
        fabricante: "Opel",
        ano: 2020,
        cor: "amarelo"
    },
    {
        id: 5,
        modelo: "Audi a3",
        fabricante: "Audi",
        ano: 2020,
        cor: "verde"
    },
    {
        id: 6,
        modelo: "Mercedes-Benz Gt-r",
        fabricante: "Mercedes-Benz",
        ano: 2020,
        cor: "Branco"
    },
    {
        id: 7,
        modelo: "BMW M4 Competition",
        fabricante: "BMW",
        ano: 2024,
        cor: "Vermelho"
    },
    {
        id: 8,
        modelo: "Porsche 911 Carrera S",
        fabricante: "Porsche",
        ano: 2022,
        cor: "Prata"
    },
    {
        id: 9,
        modelo: "Porsche Panamera",
        fabricante: "Porsche",
        ano: 2022,
        cor: "Preto"
    },  
      {
        id: 10,
        modelo: "Mercedes G63 ",
        fabricante: "Mercedes-Benz",
        ano: 2022,
        cor: "Branco"
    },
];

export async function GET(){
    return NextResponse.json(listaDeCarros)
}