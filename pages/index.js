import React,{ useState , useEffect} from "react";
import Link from 'next/link'
import Head from 'next/head'
import { loginUser } from "./api"
import Image from 'next/image'

export default function Home(){


  const [email, setEmail] = useState('');
  const [palavrapasse, setPalavrapasse] = useState('');
  const authLogin = () => 
  {

    var response = loginUser(email,palavrapasse);
    window.location.reload();


  };

  function isLoggedIn()
  {
    return localStorage.getItem('sessionUser') != null;
  }
  //create use effect and check if session = "sessionUser" exist and if exist redirect to dashboard
  useEffect(() => {
    if(isLoggedIn() == true){window.location.href = "/dashboard";}
  }, []);


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TransTuc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      
       <div className="bg-white	rounded-2xl shadow-2xl shadow-yellow-400 text-3xl flex w-2/3 max-w-4xl font-bold underlined">

        {/* ENTRAR NA CONTA*/}

        <div className="w-3/5 p-5">
          <div className="text-center text-xl">
            <span className="text-yellow-400">Trans</span>Tuc
          </div>

          <div className="py-10">
            <h4 className="text-3xl mb-3">Bem-Vindo!</h4>
            <div className="border-2 w-24 border-yellow-400 inline-block mb-2"></div>
          </div>

          <div className="flex flex-col items-center mb-3">
            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}   className="bg-gray-100 outline-none text-sm flex-1 "></input>
            </div>

            <div className="bg-gray-100 w-64 p-2 flex items-center mb-5">
              <input type="password" name="password" placeholder='Palavra-passe' value={palavrapasse} onChange={(e) => setPalavrapasse(e.target.value)}  className="bg-gray-100 outline-none text-sm flex-1 "></input>
            </div>


          <div className="flex justify-between w-64 mb-5">
            <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"></input>Lembrar-me</label>
            <a href="#" className="text-xs text-black hover:text-yellow-400">Esqueci-me da palavra-passe</a>
          </div>
        </div>

        <button onClick={authLogin} className="items-center border-2 border-yellow-400 text-yellow-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-400 hover:text-white">Entrar</button>       


        </div>

        {/* REGISTAR CONTA*/}

        <div className="w-2/5 bg-yellow-400 text- rounded-tr-2xl rounded-br-2xl py-36 px-12">

           <h3 className="text-3xl mb-3 text-white font-italic">Registar</h3>

           <div className="border-2 w-24 border-white inline-block mb-2"></div>

           <p className="text-white">
             Clique <Link href="/register"><a className="underline text-white hover:text-black">aqui</a></Link> para registar novo utilizador
            </p>


        </div>


       </div>
      </main>
    </div>
  )
  
  }

