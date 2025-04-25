# Deafio Técino AIQFome/Magalu

Um aplicativo React Native para visualização de "produtos" usando a API FakeStore, com simulação de compra de itens.

## 📌 Features

- 🖼️ Listagem de produtos
- 📱 Três telas principais: Listagem de produtos, Detalhes de produto e Favoritos
- 💳 Simulação de compra com preços fictícios
- 🚀 Performance otimizada com cache e lazy loading
- ⭐ Simulação de review do produto

## 🛠️ Tecnologias

**App:**

- React Native
- Expo Go
- TypeScript

**Bibliotecas Principais:**

- Axios - Cliente HTTP
- React Query - Gerenciamento de estado e cache
- React Navigation - Navegação entre telas
- FlashList - Listagem performática
- Expo Image - Exibição otimizada de imagens
- Styled Components - Estilização

**Testes:**

- Jest - Testes unitários

## ⚙️ Configuração do Ambiente

1. **Pré-requisitos**

    - Node.js v22.2.0
    - Expo CLI
    - Yarn ou npm

2. **Instalação**

    ```bash
    git clone https://github.com/KauaLibrelato/testeTecnicoAiQFome.git
    cd testeTecnicoAiQFome
    yarn
    # Ou
    npm install
    ```

3. **Variáveis de ambiente**
  ```bash
    API_URL=https://fakestoreapi.com/
 ```

## ⚙️ Executando o projeto

1. Iniciar o servidor de desenvolvimento
    ```bash
    yarn start
    # Ou após colocar a .env pode rodar o comando abaixo para executar um clear no bundle
    yarn start -c
    ```
2. Executar o projeto

    - Com o uso do expo é necessário ou escanear o QRCode com seu dispositivo Android ou Ios, ou clicar nas teclas abaixo para executar pelo emulador

    ```bash
    a # Clicar na tecla "A" do teclado dentro do terminal faz abrir diretamente pelo emulador Android
    i # Clicar na tecla "I" do teclado dentro do terminal faz abrir diretamente pelo emulador Ios
    ```

## 🧪 Testes (x% de cobertura)

1. Para executar testes com e sem relatório de cobertura
    ```bash
    yarn test
    # Para ver cobertura dos testes
    yarn test --coverage
    ```

## 📂 Estrutura do Projeto

1. Estrutura principal

    ```bash
    src/
    ├── @types/          # Definições de tipos de imagens e svgs
    ├── assets/          # Arquivos estáticos (imagens, fonts, etc.)
    ├── components/      # Componentes reutilizáveis
    ├── infra/           # Infraestrutura e configurações base
    ├── routes/          # Configuração de navegação e rotas
    ├── screens/         # Telas/páginas do aplicativo
    ├── services/        # Integrações com API e serviços externos
    ├── theme/           # Estilos globais, temas e configurações de design
    ├── utils/           # Utilitários, helpers e funções auxiliares
    ```

2. Outros diretórios importantes

    ```bash
    __mocks__/               # Dados mockados para testes
    __tests__/               # Testes automatizados
    node_modules/            # Dependências do projeto
    ```

3. Arquivos principais
    ```bash
    App.tsx              # Ponto de entrada do aplicativo
    package.json         # Configurações e dependências do projeto
    .env                 # Variáveis de ambiente
    README.md            # Documentação do projeto
    ```

## 📱 Telas

#### 1. Tela de listagem

- Logo da empresa
- Listagem de produtos
- Exibição de imagens e informações básicas

#### 2. Tela de Detalhes

- Imagem em alta resolução
- Metadados completos
- Botão de compra com preço fictício

#### 3. Tela de Favoritos

- Listagem de produtos favoritos
- Opção de navageção para detalhes ou tela inicial

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

## ✉️ Contato

Kauã Librelato da Costa - kaualibrelatodacosta@gmail.com

Link do Projeto: https://github.com/KauaLibrelato/testeTecnicoAiQFome
