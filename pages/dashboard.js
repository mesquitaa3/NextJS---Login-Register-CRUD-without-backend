import React,{ useState , useEffect} from "react"
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Home(){

  function isLoggedIn()
    {
      var user = localStorage.getItem('sessionUser');
      if(user == null){return 0;}
      //return loginUser(user.email,user.password).status;
      return 1;
    }

    useEffect( () => {      
        if(isLoggedIn() === 0)
        {
            window.location.href = "./";
            return;
        }
    }, []);

  const logout = () =>  
        {
            localStorage.removeItem('sessionUser');
            window.location.href = "./";
        };

  return (



    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TransTuc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center align-top	">
      
       <div className="bg-white	rounded-2xl shadow-2xl shadow-yellow-400 text-3xl w-5/5 max-w-4xl font-bold underlined align-top	">

        <div className="w-5/5 p-5 text-center items-center">
          <div className="text-center text-xxl mb-5">
            <span className="text-yellow-400 text-center mb-10">Trans</span>Tuc
        </div>



          <nav className="text-center mb-5">

            <div className="container flex flex-wrap justify-items-center items-center mx-auto">

            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">

              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                <li>
                  
                <Link href="#"><a className="block py-2 pr-4 pl-3 text-black hover:text-yellow-400 text-xl">Inicio</a></Link>
                
                </li>

                <li>

                <Link href="passes/passes"><a className="block py-2 pr-4 pl-3 text-black hover:text-yellow-400 text-xl">Passes</a></Link>
                
                </li>

                <li>
                  
                <Link href="#"><a className="block py-2 pr-4 pl-3 text-black hover:text-yellow-400 text-xl">Utilizadores</a></Link>
                
                </li>
                <li>
                  
                  <button onClick={logout} className="block py-2 pr-4 pl-3 text-black hover:text-yellow-400 text-xl">Sair</button>
                
                </li>

              </ul> 

            </div>

          </div>

        </nav>

        
                </div>

       </div>
      </main>
    </div>
  )}
