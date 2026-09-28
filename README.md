# DCT1109 - PROGRAMAÇÃO WEB

Repositório contendo as receitas práticas desenvolvidas para a disciplina **DCT1109 - Programação Web**.

---

## GitHub Pages

Acesse a página principal com a navegação interativa de todas as receitas diretamente pelo navegador:

### 🔗 **[Portal de Receitas no GitHub Pages](https://jefwill.github.io/DCT1109-PROGRAMACAO-WEB/)**

---

## Estrutura de Diretórios e Receitas

| Receita              | Descrição                                                                                                                        |             Link do Código             |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------: |
| **Página Principal** | Portal com links e interface para todas as receitas                                                                              |       [index.html](./index.html)       |
| **Receita 3**        | Introdução à manipulação da árvore DOM e eventos no navegador                                                                    | [receita 3/](./receita%203/index.html) |
| **Receita 4**        | Estruturação e invocação de funções JavaScript                                                                                   | [Receita 4/](./Receita%204/index.html) |
| **Receita 5**        | Utilização de Arrow Functions, manipulação de arrays (`map`) e JSON                                                              | [Receita 5/](./Receita%205/index.html) |
| **Receita 6**        | Construção de tabelas dinâmicas com parâmetros default para ID, cabeçalhos e propriedades                                        | [Receita 6/](./Receita%206/index.html) |
| **Receita 7**        | Requisições assíncronas com `fetch`, `async/await`, tratamento de erros com `try/catch` e modularização em arquivo `.js` externo | [Receita 7/](./Receita%207/index.html) |

---

## Destaques

### Receita 6
- Renderização dinâmica em formato de tabela HTML com estilos CSS personalizados.
- Função `carregarDiv` genérica com valores default para:
  - Elemento destino: `"cervejasDiv"`
  - Cabeçalhos: `["Nome", "Álcool", "Estilo", "Amargor"]`
  - Propriedades do objeto: `["name", "alcohol", "style", "ibu"]`

### Receita 7
- Substituição da API original fora do ar pelas APIs ativas:
  - **Open Brewery DB API**: `https://api.openbrewerydb.org/v1/breweries?per_page=5` (dados de cervejarias).
  - **JSONPlaceholder API**: `https://jsonplaceholder.typicode.com/users` (dados de usuários).
- **Módulo JS externo**: A função de montagem de tabelas genéricas foi extraída para o arquivo `tabela.js` e importada no HTML.
- **Tratamento de Exceções**: Implementação de bloco `try / catch` com simulação dinâmica (50% de probabilidade de erro na URL) para demonstrar a captura de falhas de rede com feedback visual estilizado (`ferroulhes`).

---

## 👤 Autor

- **Jefferson Willame**
- GitHub: [@JefWill](https://github.com/JefWill)
