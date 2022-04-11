export function criarutilizador(nome,email,palavrapasse)
{    
    var utilizadores = JSON.parse(localStorage.getItem('utilizadores'));
    if(utilizadores == null){utilizadores = [];}
    else{
      for(var i = 0; i < utilizadores.length; i++)
      {
        if(utilizadores[i].email === email){
          return  {status: 0, message: 'O email já existe'};
        }
      }
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      return {status: 0, message: 'Email inválido'};
    }
    

    if(utilizadores.length != 0){
      var lastId = utilizadores[utilizadores.length -1].id + 1;
    }else{
      var lastId = 0;
    }

    utilizadores.push({id:lastId, nome: nome, email: email, palavrapasse: palavrapasse});

    localStorage.setItem('utilizadores', JSON.stringify(utilizadores));

    return {status: 1, message: 'Conta criada com sucesso'};
}

export function loginUser(email,palavrapasse)
{
  if(email === '' || palavrapasse === ''){return StatusLoginUser.EmptyFields;}

  var utilizadores = JSON.parse(localStorage.getItem('utilizadores'));
  
  if(utilizadores == null){ return  {status: 0, message: 'Não existe nenhuma conta'};}

  for(var i = 0; i < utilizadores.length; i++)
  {
    if(utilizadores[i].email === email && utilizadores[i].palavrapasse === palavrapasse)
    {
      var utilizadores = getUserByEmail(email);
      localStorage.setItem('sessionUser', JSON.stringify(utilizadores));
      return {status: 1, message: 'Login Sucess'};
    }
  }

  return  {status: 0, message: 'Email ou palavra-passe incorreta'};
}

export function isLoggedIn()
{
  var utilizador = localStorage.getItem('sessionUser');
  if(utilizador == null){return 0;}
  return 1;
}


function getUserByEmail(email)
{
  var utilizadores = JSON.parse(localStorage.getItem('utilizadores'));
  if(utilizadores == null){return null;}
  if(utilizadores.length == 0){return null;}
  for(var i = 0; i < utilizadores.length; i++)
  {
    if(utilizadores[i].email === email){
      return utilizadores[i];
    }
  }
}

//------------------------------------PASSES----------------------------------------------

export function criarpasse(tipopasse,qtd,preco)
{
    var passes =  JSON.parse(localStorage.getItem('passes'));
    if(passes == null){passes = [];}
    else{
      for(var i= 0; i< passes.length; i++)
      {
        if(passes[i].tipopasse === tipopasse)
        {
          return alert("ja existe");
        }
      }
    }

    if(passes.length > 0)
    {
      lastId = passes[passes.length - 1].id + 1;
    }
    else
    {
      var lastId = 0;
    }

    passes.push({id:lastId, tipopasse: tipopasse, qtd: qtd, preco: preco});

    localStorage.setItem('passes', JSON.stringify(passes));

    return  {status: 1, message: "Criado!"};
}

export function eliminaPasse(id){
  var pa =  JSON.parse(localStorage.getItem('passe'));
  if(pa == null){return;}
  for(var i = 0; i < pa.length; i++)
  {
    if(pa[i].id === id){
      pa.splice(i,1);
    }
  }

  localStorage.setItem('passe', JSON.stringify(pa));
}

export function editarPasse(id,tipopasse,qtd,preco)
{
  var passes =  JSON.parse(localStorage.getItem('passes'));
  if(passes == null){return;}
  for(var i = 0; i < passes.length; i++)
  {
    if(passes[i].id == id)
    {
      passes[i].tipopasse = tipopasse;
      passes[i].qtd = qtd;
      passes[i].preco = preco;
    }
  }
  
  localStorage.setItem('passes', JSON.stringify(passes));
}


export function apagarPasse(id)
{
  //if id == sessionUser
  var session = JSON.parse(localStorage.getItem('sessionUser'));
  if(session != null && session.id == id){return;}
  var passes = JSON.parse(localStorage.getItem('passes'));

  for(var i = 0; i < passes.length; i++)
  {
    if(passes[i].id === id){
      passes.splice(i,1);
    }
  }
  
  localStorage.setItem('passes', JSON.stringify(passes));

}

export function passemodelGetById(id){
  var passes = JSON.parse(localStorage.getItem('passes'));
  if(passes == null){return null;}
  if(passes.length == 0){return null;}




  for(var i = 0; i < passes.length; i++)
  {
    if(passes[i].id == id){
      return passes[i];
    }
  }
}