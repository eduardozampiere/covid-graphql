# Dados técnicos

- Usando Graphql no backend e no frontend
- Feito com Next.js

# Acompanhamento de casos da Covid-19

O projeto faz uma análise dos dados da Covid-19 no Brasil. Casos e óbitos por dia, por uf e por região do país.
Os dados sao obtidos atraves do github do wesley cota pela url:https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv .
Foi o melhor compilado de dados que encontrei.

## Prints

![print1](https://github.com/eduardozampiere/covid-graphql/blob/master/prints/home1.png)
![print2](https://github.com/eduardozampiere/covid-graphql/blob/master/prints/home2.png)
![print3](https://github.com/eduardozampiere/covid-graphql/blob/master/prints/home3.png)
![print4](https://github.com/eduardozampiere/covid-graphql/blob/master/prints/home4.png)

### Como o sistema realiza a projeção de casos ?

O sistema usa o crescimento exponencial para realizar a projeção.
Uma função exponencial f(x, y, z)
onde x é o numero de dias que devem ser projetados. Ou seja, x >= 1.
y é o numero de casos confirmados mais recente.
z é o numero de dias após o ultimo.

O retorno é o numero de casos projetados para aquele dia (ultimo_dia + z).

```
f(x, y, z) = (y) * 2^(x/z)
```
