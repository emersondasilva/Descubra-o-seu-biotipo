function mostra() {
const section = document.getElementById('resultados-pesquisa');
const campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

if (campoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado. Digite o seu biotipo</p>";
    return;
}

let resultado = "";

dados.forEach(dado => {
    if (dado.nome.toLowerCase().includes(campoPesquisa) || 
        dado.descricao.toLowerCase().includes(campoPesquisa) || 
        dado.tags.toLowerCase().includes(campoPesquisa)) {
        resultado += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.nome}" class="imagem-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
    }
});

section.innerHTML = resultado || "<p>Nada foi encontrado</p>";
}

