// Função genérica que monta qualquer tabela em HTML
const carregarTabelaGenerica = (
    itens,
    id = "cervejasDiv",
    headers = ["Nome", "Tipo", "Cidade"],
    props = ["name", "brewery_type", "city"]
) => {
    const div = document.getElementById(id)

    const itensHtml = itens.map(item => `<tr>
        ${props.map(prop => `<td>${item[prop]}</td>`).join("")}
    </tr>`)

    div.innerHTML = `<table>
        <thead>
            <tr>
                ${headers.map(header => `<th>${header}</th>`).join("")}
            </tr>
        </thead>
        <tbody>
            ${itensHtml.join("\n")}
        </tbody>
    </table>`
}
