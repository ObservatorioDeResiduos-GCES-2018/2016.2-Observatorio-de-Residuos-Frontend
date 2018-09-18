# Observatório de Resíduos

[![Build Status](https://travis-ci.com/ObservatorioDeResiduos-GCES-2018/2016.2-Observatorio-de-Residuos-Frontend.svg?branch=devel)](https://travis-ci.com/ObservatorioDeResiduos-GCES-2018/2016.2-Observatorio-de-Residuos-Frontend)

[![Code Climate](https://codeclimate.com/github/fga-eps-mds/2016.2-Observatorio-de-Residuos-Frontend/badges/gpa.svg)](https://codeclimate.com/github/fga-eps-mds/2016.2-Observatorio-de-Residuos-Frontend)

[![Test Coverage](https://codeclimate.com/github/fga-eps-mds/2016.2-Observatorio-de-Residuos-Frontend/badges/coverage.svg)](https://codeclimate.com/github/fga-eps-mds/2016.2-Observatorio-de-Residuos-Frontend/coverage)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)


A aplicação mobile do Observatório de Resíduos surgiu do projeto da Universidade de Brasília voltado para gestão responsável dos resíduos sólidos, servindo de ferramenta de auxílio à sociedade na tarefa de registro, controle e correção de focos de irregularidade ambiental, assim como divulgar pontos registrados de coleta de resíduos, e projetos relacionados ao tema de preservação ambiental.

### Desenvolvimento

Software desenvolvido na liguangem Ruby On Rails e framework Ionic.

Link do repositório da parte frontend da aplicação: [backend](https://github.com/fga-eps-mds/2016.2-Observatorio-de-Residuos-Backend)

### Contribuindo

Para contribuir com o projeto, por favor, leia o [CONTRIBUTING](https://github.com/ObservatorioDeResiduos-GCES-2018/2016.2-Observatorio-de-Residuos-Backend/blob/master/.github/CONTRIBUTING.MD), nele contém algumas informações importantes de como contribuir, um link para o nosso código de conduta e alguns dos nossos padrões!

### Licença

Licenciado sob AGPL V3. Ver [LICENSE](https://github.com/fga-eps-mds/2016.2-Observatorio-de-Residuos/blob/master/LICENSE)

### Ambiente de Desenvolvimento

O primeiro passo é fazer o clone do projeto pelo GitHub (tenha certeza de ter o ``git`` instalado em sua máquina):
```git clone https://github.com/ObservatorioDeResiduos-GCES-2018/2016.2-Observatorio-de-Residuos-Frontend.git```

```cd 2016.2-Observatorio-de-Residuos-Frontend```

```sudo docker build -t obs . ```

```sudo docker run -p 8100:8100 -v $(pwd):/code obs```
