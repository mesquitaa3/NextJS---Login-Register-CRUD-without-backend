import React,{ useState , useEffect} from "react";
import Head from 'next/head'
import {useRouter} from "next/router"
import { passemodelGetById } from "../api/index.js"


export default function Home(){

  const router = useRouter();

  const [passe, setPasse] = useState({});

  const [tipopasse, setTipopasse] = useState('');

  const [qtd, setQtd] = useState('');

  const [preco, setPreco] = useState('');


  useEffect(()=>{
      if(!router.isReady) return;
      var p = passemodelGetById(router.query.id);
      setTipopasse(p.tipopasse);
      setQtd(p.qtd);
      setPreco(p.preco);

  }, [router.isReady]);

  function updateP()
  {
      postmodelUpdate(router.query.id,tipopasse,qtd,preco);

      window.location.href = "/dashboard";
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TransTuc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      
       <div className="bg-white	rounded-2xl shadow-2xl shadow-yellow-400 text-3xl w-5/5 max-w-4xl font-bold underlined">

        <div className="w-5/5 p-5 text-center items-center">
          <div className="text-center text-xxl mb-5">
            <span className="text-yellow-400 text-center">Trans</span>Tuc
            <p className="text-sm text-black hover:text-yellow-400"><a href="/dashboard">Voltar</a></p>
        </div>



          <nav className="text-center">

            <div className="container flex flex-wrap justify-items-center items-center mx-auto">

            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">

              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                <li>
                    
                    <h1 className="block py-2 pr-4 pl-3 text-black text-xl">Tipo de Passe</h1>

                </li>

                <li>

                    <h1 className="block py-2 pr-4 pl-3 text-black text-xl">Quantidade</h1>

                </li>

                <li>
                  
                    <h1 className="block py-2 pr-4 pl-3 text-black text-xl">Preço</h1>

                </li>

              </ul>

              <div className='mid-col'>
                    <div>
                        <input className="text-base mr-20 items-center w-15 ml-5" placeholder='Tipo de Passe' value={tipopasse} onChange={(e) => setQtd(e.target.value)}></input>
                        <input className="text-base mr-20 items-center w-2" placeholder='Quantidade'  value={qtd}  onChange={(e) => setQtd(e.target.value)} ></input>
                        <input className="text-base mr-20 items-center w-2" placeholder='Preço'  value={preco}  onChange={(e) => setPreco(e.target.value)} ></input>

                    </div>


                  <button className="mt-5 items-center border-2 border-yellow-400 text-yellow-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-400 hover:text-white">Editar</button>       

               </div>

            </div>

          </div>

        </nav>
                </div>

       </div>
      </main>
    </div>
  )
}

