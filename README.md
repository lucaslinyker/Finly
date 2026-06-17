# Finly

<div align="center">

<h3>💸 Gestão Financeira Inteligente na Palma da Sua Mão</h3>

<p>
  <a href="https://lucaslinyker.github.io/Finly/"><strong>🌐 Live Demo</strong></a>
</p>

<p>
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18%2B-green" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4.3-38B2AC" />
</p>

<div align="center">
  <img src="./dist/images/preview.png" alt="Preview do Finly" width="900" />
</div>

</div>

---

## 📋 Sobre

**Finly** é uma plataforma de código aberto para gerenciamento financeiro pessoal, desenvolvida com o objetivo de democratizar o acesso a ferramentas de controle financeiro. O projeto oferece uma solução intuitiva e acessível para usuários de todos os níveis de conhecimento financeiro.

### Principais Características

- 💰 **Rastreamento de Receitas e Despesas** - Controle total de suas transações financeiras
- 📊 **Análise de Investimentos** - Monitore o desempenho de seus investimentos
- 🎯 **Metas Financeiras** - Defina e acompanhe suas metas de forma visual
- 🌙 **Dark Mode** - Interface adaptável com suporte a tema escuro
- 📱 **Responsivo** - Funciona perfeitamente em desktop, tablet e celular
- ♿ **Acessível** - Desenvolvido com padrões WCAG de acessibilidade
- 🔒 **Seguro** - Seu dados permanecem com você

---

## 🚀 Quick Start

### Pré-requisitos

- **Node.js** 18+ instalado
- **npm** ou **yarn** como gerenciador de pacotes

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucaslinyker/Finly.git
cd Finly

# Instale as dependências
npm install

# Compile o Tailwind CSS
npm run build

# Abra index.html no navegador
open dist/index.html
```

---

## 💻 Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **HTML5** | - | Markup semântico |
| **Tailwind CSS** | ^4.3.0 | Estilização e responsividade |
| **JavaScript** | ES6+ | Interatividade |
| **Husky** | ^9.1.7 | Git hooks |
| **CommitLint** | ^21.0.2 | Validação de commits |

---

## 📁 Estrutura do Projeto

```
Finly/
├── dist/                   # Arquivos compilados
│   ├── index.html          # Página principal
│   ├── css/
│   │   └── style.css       # Estilos Tailwind compilados
│   ├── js/
│   │   └── script.js       # Scripts da aplicação
│   └── images/             # Imagens do projeto
├── src/
│   └── input.css           # Arquivo Tailwind base
├── .github/
│   └── workflows/          # CI/CD workflows
├── .husky/                 # Git hooks
├── package.json            # Dependências do projeto
└── README.md               # Este arquivo
```

---

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
# Compila o Tailwind CSS (watch mode)
npm run build

# Inicializa o Husky (git hooks)
npm run prepare
```

### Padrões de Código

O projeto utiliza **Conventional Commits** para mensagens de commit:

```
feat(scope): descrição
fix(scope): descrição
docs(scope): descrição
```

Exemplo:
```bash
git commit -m "feat(nav): adicionar menu responsivo"
git commit -m "fix(footer): corrigir alinhamento dos ícones"
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um **Fork** do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Guia de Contribuição

- Mantenha o código limpo e bem documentado
- Siga o padrão de commits Conventional Commits
- Teste suas mudanças antes de submeter
- Adicione testes quando possível

---

## 📝 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👥 Autores

- **Lucas Linyker** - Desenvolvedor Principal
  - GitHub: [@lucaslinyker](https://github.com/lucaslinyker)
  - LinkedIn: [@Lucas Linyker](https://www.linkedin.com/in/lucaslinyker/)

---

## 📞 Suporte

Se encontrar algum problema ou tiver dúvidas:

- 🐛 [Abra uma Issue](https://github.com/lucaslinyker/Finly/issues)
- 📧 [Entre em contato via email](mailto:lucaslinyker@outlook.com)

---

## 🗺️ Roadmap

- [ ] Dashboard com gráficos de análise
- [ ] Autenticação de usuários
- [ ] Integração com APIs de bancos
- [ ] Sistema de categorias customizáveis
- [ ] Relatórios financeiros em PDF
- [ ] Aplicativo mobile (React Native)

---

## 🙏 Agradecimentos

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Ícones
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [Commitlint](https://commitlint.js.org/) - Padronização de commits
- Comunidade de código aberto

---

<div align="center">

**[⬆ Voltar ao Topo](#finly)**

Feito com ❤️ por [Lucas Linyker](https://github.com/lucaslinyker)

</div>