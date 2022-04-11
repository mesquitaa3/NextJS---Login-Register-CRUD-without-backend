import React,{ useState , useEffect} from "react";
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { criarpasse } from "../api";

export default function Home(){

  const [tipopasse, setTipopasse] = useState('');
  const [qtd, setQtd] = useState('');
  const [preco, setPreco] = useState('');
  
  const handleTipopasse = (e) => { setTipopasse(e.target.value) };
  const handleQtd = (e) => { setQtd(e.target.value) };
  const handlePreco = (e) => { setPreco(e.target.value) };


  
  
  const criarpasses = () =>
  {
    if(tipopasse === '' || qtd === '' || preco === '')
    {
      ErrorAlert('Os campos precisam de estar preenchidos');
      return;
    }

    var response = criarpasse(tipopasse,qtd,preco);

  }



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TransTuc | Registo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      
       <div className="bg-white	rounded-2xl shadow-2xl shadow-yellow-400 text-3xl flex max-w-4xl font-bold underlined">

        {/* REGISTAR A CONTA*/}

        <div className="w-5/5 p-5 items-center">
          <div className="text-center text-xl">
            <span className="text-yellow-400">Trans</span>Tuc
          </div>

          <div className="py-10">
            <h4 className="text-3xl mb-3">Criar Passes</h4>
            <p className="text-sm text-black hover:text-yellow-400"><a href="/passes/passes">Voltar</a></p>
            <div className="border-2 w-24 border-yellow-400 inline-block mb-2"></div>
          </div>

          <div className="flex flex-col items-center mb-3">

            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input type="name" name="tipodepasse" placeholder='Tipo de Passe' onChange={handleTipopasse} required className="bg-gray-100 outline-none text-sm flex-1 "></input>
            </div>

            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input type="float" name="qtd" placeholder='Quantidade' onChange={handleQtd} required className="bg-gray-100 outline-none text-sm flex-1 "></input>
            </div>

            <div className="bg-gray-100 w-64 p-2 flex items-center mb-5">
              <input type="float" name="preco" placeholder='Preço' onChange={handlePreco} required className="bg-gray-100 outline-none text-sm flex-1 "></input>
            </div>

        </div>

        <button onClick={criarpasses}><Link href="./passes"><a className="items-center border-2 border-yellow-400 text-yellow-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-400 hover:text-white">Criar</a></Link></button>       

        </div>


       </div>
      </main>
      
    </div>


  )
}