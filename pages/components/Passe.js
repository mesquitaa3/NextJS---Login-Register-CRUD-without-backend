import React, { Component } from 'react';

export default function Passe(props)
{

    

    const editarPasse = (id) =>
    {
        window.location.href = "/passes/" + id;
    }


    return (
        <div className='post-container'>

            <div className='mid-col'>
                <div className='header-post'>
                    <span>{props.tipopasse}</span>
                    <span>{props.qtd}</span>
                    <span>{props.preco}</span>

                </div>
                
            </div>

        </div>
    );
}

export function passemodelDelete(id){
    var passe =  JSON.parse(localStorage.getItem('passe'));
    if(passe == null){return;}
    for(var i = 0; i < passe.length; i++)
    {
      if(passe[i].id === id){
        passe.splice(i,1);
      }
    }
    
    localStorage.setItem('passe', JSON.stringify(passe));
  }
  const apagarPasse = (id) =>
  {
    
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                  ).then(() => {
                      passemodelDelete(id);
                      window.location.reload();
                  })
          }
        })
  }

