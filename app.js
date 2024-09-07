function pesquisar () {
    
    let section = document.getElementById ("resultados-pesquisa")

    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    
    if(campoPesquisa == ""){
     return
    }

campoPesquisa = campoPesquisa.toLowerCase()
     let resultados = "";
     let  titulo = "";
     let  descricao = "";
     let tags = "";
    
    for (let dado of dados)
        { 
            dado.tags.toLowerCase()
            dado.titulo.toLowerCase()
            dado.descricao.toLowerCase()
            dado.titulo.includes(campoPesquisa)
            if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
    <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
                <p>${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
    `};
            }
            if(!resultados) {
                resultados ="<p>Nada foi encontrado</p>"
            }
    section.innerHTML = resultados
            
        }