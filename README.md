# 🚀 Angular Landing Page Template

Uma Landing Page moderna, performática e segura desenvolvida com as melhores práticas do ecossistema Angular. O projeto foca em alta conversão de leads, arquitetura escalável e uma experiência de usuário (UX) fluida e responsiva.

---

## 🛠️ Tecnologias Utilizadas

* **Angular 19**: Utilizando as últimas funcionalidades como **Signals** para gerenciamento de estado reativo e **Standalone Components**.
* **TypeScript**: Tipagem estrita para maior segurança e previsibilidade no desenvolvimento.
* **Zod**: Validação de esquemas de dados (Schema Validation) para garantir a integridade das informações.
* **SASS (SCSS)**: Estilização modular avançada com variáveis, mixins e funções.
* **HttpClient**: Integração nativa para consumo de APIs REST externas.
* **EmailJS**: Integração configurada para envio de formulários via API, sem necessidade de backend próprio.

---

## 📂 Arquitetura do Projeto

O projeto segue os princípios de **Clean Architecture** adaptados para a estrutura do Angular:

* **Core**: Contém modelos globais (`.schema.ts`), configurações validadas (`.config.ts`) e serviços singleton (Envio de e-mail, Controle Global de Modais).
* **Features**: Componentes de negócio e seções principais da página (Hero, Serviços, FAQ, Localização).
* **Shared**: Componentes de interface reutilizáveis (Botões, Modais de feedback) e Pipes de formatação.

---

## 🔒 Validações e UX

Implementamos uma camada de proteção e feedback de alta fidelidade:

1.  **Zod Schema**: Validação rigorosa de tipos, e-mails, comprimentos de string e formatos específicos (como documentos e endereços).
2.  **Reactive Forms**: Feedback visual em tempo real para o usuário com mensagens de erro condicionais e classes dinâmicas.
3.  **Botão Inteligente**: O botão de submissão alterna o estado visual (**Disabled/Primary**) e de cor (**Cinza/Ativo**) baseado na validade do formulário.

---

## 📦 Como rodar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/seu-usuario/seu-projeto.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    Acesse `http://localhost:4200` no seu navegador.