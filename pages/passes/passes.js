import React,{ useState , useEffect} from "react";
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Passe from "../components/Passe.js"
import { passemodelDelete } from "../components/Passe.js";
import { eliminaPasse } from "../api/index.js";


export default function Passes(props){

    const [passes, setPasses] = useState([]);

    
    useEffect( () => {
        
        if(isLoggedIn() === 0)
        {
            window.location.href = "/";
            return;
        }

        //set user using local storage "users"
        var temp = JSON.parse(localStorage.getItem("passes"));
        if(temp != null){
            setPasses( temp );
        }

    }, []);


    function isLoggedIn()
    {
      var utilizador = localStorage.getItem('sessionUser');
      if(utilizador == null){return 0;}
      //return loginUser(user.email,user.password).status;
      return 1;
    }

    useEffect( () => {      
        if(isLoggedIn() === 0)
        {
            window.location.href = "/";
            return;
        }
    }, []);


    const info = (id) => {
      window.location.href = `/passes/${id}`;

    }

    const apagarPasse = (id) => {
      eliminaPasse(id);
      window.location.reload();
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
                <h1 className="block py-2 pr-4 pl-3 text-black text-xl">Tipo</h1>
                <h1 className="block py-2 pr-4 pl-10 text-black text-xl">Quantidade</h1>
                <h1 className="block py-2 pr-4 pl-15 text-black text-xl">Preço</h1>
                <h1 className="block py-2 pr-4 pl-20 text-black text-xl">Ações</h1>

              </ul>

              {passes && passes.map( (passe, index) => 
                            {
                                return (
                                    <div key={index} className="items-center">
                                        <span className="text-base mr-20 items-center">{passe.tipopasse}</span>
                                        <span className="text-base mr-20 items-center">{passe.qtd} Uni</span>
                                        <span className="text-base mr-20 items-center">{passe.preco} €</span>

                                        <span><button className="pl-10 font-bold text-lg underline text-black hover:text-yellow-400" onClick={() => verPasse(props.id)}> Ver</button></span>
                                        <span><button className="pl-10 font-bold text-lg underline text-black hover:text-yellow-400" onClick={() => apagarPasse(passe.id)}> Apagar</button></span>


                                        
                                        
                                    </div>
                                )
                            })}

            </div>

          </div>

        </nav>

        <Link href="\passes\criarpasse"><a className="mt-5 items-center border-2 border-yellow-400 text-yellow-400 rounded-full px-10 py-1 inline-block font-semibold hover:bg-yellow-400 hover:text-white">Criar</a></Link>

        </div>

       </div>
      </main>
    </div>
  )
}

