import { NextResponse } from "next/server";

export const listaDeCarros = [
    {
        id: 1,
        modelo: "Golf GTI",
        fabricante: "VW",
        ano: 2018,
        cor: "Vermelho",
        linkImg:"https://i.ytimg.com/vi/amdAArbiMtw/maxresdefault.jpg"
    },
    {
        id: 2,
        modelo: "Civic",
        fabricante: "Honda",
        ano: 2020,
        cor: "prata",
        linkImg: "https://cdn.motor1.com/images/mgl/KqZVA/s3/comparativo-novo-corolla-x-civic-x-cruze-2020.jpg"
    },
    {
        id: 3,
        modelo: "Zafira",
        fabricante: "Chevrolet",
        ano: 2012,
        cor: "preta",
        linkImg: "https://s2-autoesporte.glbimg.com/cYK8l7P3NnoU2YSky3ZIWfmx7tM=/0x0:620x465/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/F/i/OavQp0RG6KKeIp8ZDfog/2016-04-12-chevrolet-zafira.jpg"
    },
    {
        id: 4,
        modelo: "Astra",
        fabricante: "Opel",
        ano: 2020,
        cor: "amarelo",
        linkImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/07/Opel-Astra-2022-2.jpg?quality=70&strip=info&w=720&crop=1"
    },
    {
        id: 5,
        modelo: "Audi a3",
        fabricante: "Audi",
        ano: 2020,
        cor: "Preto",
        linkImg: "https://cdn.motor1.com/images/mgl/pPpzP/s1/2021-audi-a3-sedan-debut.jpg",
    },
    {
        id: 6,
        modelo: "Mercedes-Benz Gt-r",
        fabricante: "Mercedes-Benz",
        ano: 2020,
        cor: "Roxa",
        linkImg:"https://pbs.twimg.com/media/F99NeR6WEAAEb59?format=jpg&name=large"
    },
    {
        id: 7,
        modelo: "BMW M4 Competition",
        fabricante: "BMW",
        ano: 2024,
        cor: "Vermelho",
        linkImg: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2020/10/23/p90403310lowresbmw-m4-design-study.jpg"
    },
    {
        id: 8,
        modelo: "Porsche 911 Carrera S",
        fabricante: "Porsche",
        ano: 2022,
        cor: "Vermelho",
        linkImg: "https://static.wixstatic.com/media/ce3e3a_cf871bc9018a4e6bbbbda617786440bb~mv2.jpg/v1/fill/w_640,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ce3e3a_cf871bc9018a4e6bbbbda617786440bb~mv2.jpg"
    },
    {
        id: 9,
        modelo: "Porsche Panamera",
        fabricante: "Porsche",
        ano: 2022,
        cor: "Preto",
        linkImg: "https://presskit.porsche.de/models/assets/images/7/Slider_SEHybr_02_summary-98ce0cb7.jpg"
    },  
      {
        id: 10,
        modelo: "Mercedes G63 ",
        fabricante: "Mercedes-Benz",
        ano: 2022,
        cor: "Preto",
        linkImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/Inkas-Mercedes-AMG-G63-Limo-8-e1597943948778.jpg?quality=70&strip=info&w=720&crop=1   "
    },
];

export async function GET(){
    return NextResponse.json(listaDeCarros)
}