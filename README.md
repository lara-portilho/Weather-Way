<div align="center">
  <h1>Weather Way</h1>
  <p><i>Projeto introdutório para início do estágio na Way Data Solution</i></p>
</div>

## Sumário
- [Informações Gerais](#informações-gerais)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)

## Informações Gerais

Weather Way é um projeto simples de consulta do tempo em um local baseado em um CEP ou no nome de uma cidade. A busca é feita fornecendo à API externa OpenWeather uma cidade ou código postal e retorna o nome da cidade, temperatura e tempo no local.

## Tecnologias

- NextJs
- ChakraUI
- mobx-state-tree
- React Hook Forms


## Instalação

### Pré-requisitos
- Possuir Node e Yarn instalado
- Possuir conta no [OpenWeather](https://openweathermap.org/)

1. Clone o repositório
2. ```$ yarn```
3. Troque o nome do arquivo ```exemple.env.local``` para ```.env.local``` e insira sua key do [OpenWeather](https://openweathermap.org/api) - Current Weather Data
4. ```$ yarn dev```
5. Acesse http://localhost:3000
