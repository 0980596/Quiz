import style from "../styles/quiz.module.css";

import { useState } from "react";

const perguntas = [
    {
        pergunta: "Qual é a principal característica da programação orientada a objetos?",
        opcoes: [
            "Reutilização de código",
            "Uso de funções globais",
            "Estruturas de controle de fluxo",
            "Manipulação de arrays de forma eficiente",
            "Divisão do código em módulos independentes"
        ],
        respostaCorreta: "Reutilização de código"
    },
    {
        pergunta: "O que significa \"HTTP\" no contexto da web?",
        opcoes: [
            "Hyper Text Transfer Protocol",
            "Hyper Text Transmission Protocol",
            "Hyper Transfer Transmission Protocol",
            "Hyperlink Text Transfer Protocol",
            "Hyper Text Technology Protocol"
        ],
        respostaCorreta: "Hyper Text Transfer Protocol"
    },
    {
        pergunta: "Qual é a complexidade de tempo do algoritmo de ordenação Bubble Sort no pior caso?",
        opcoes: ["O(n)", "O(n log n)", "O(log n)", "O(n²)", "O(1)"],
        respostaCorreta: "O(n²)"
    },
    {
        pergunta: "Em JavaScript, qual dessas funções é usada para adicionar um item ao final de um array?",
        opcoes: ["push()", "unshift()", "pop()", "splice()", "shift()"],
        respostaCorreta: "push()"
    },
    {
        pergunta: "Qual é o principal benefício do uso de \"Promises\" em JavaScript?",
        opcoes: [
            "Permite executar código de forma síncrona",
            "Facilita o tratamento de erros assíncronos",
            "Aumenta a velocidade do código",
            "Permite manipular arrays de forma eficiente",
            "Faz a conexão direta com o banco de dados"
        ],
        respostaCorreta: "Facilita o tratamento de erros assíncronos"
    },
    {
        pergunta: "O que o operador === faz em JavaScript?",
        opcoes: [
            "Compara apenas o valor",
            "Compara o valor e o tipo",
            "Realiza uma atribuição de valor",
            "Compara o valor e ignora o tipo",
            "Verifica se dois objetos são os mesmos"
        ],
        respostaCorreta: "Compara o valor e o tipo"
    },
    {
        pergunta: "Qual comando do Git é usado para adicionar arquivos ao stage antes de um commit?",
        opcoes: ["git commit", "git push", "git add", "git pull", "git merge"],
        respostaCorreta: "git add"
    },
    {
        pergunta: "Em Python, qual é o tipo de dado retornado pela função input()?",
        opcoes: ["Integer", "String", "Float", "List", "Boolean"],
        respostaCorreta: "String"
    },
    {
        pergunta: "Em SQL, qual comando é usado para excluir dados de uma tabela?",
        opcoes: ["DROP", "DELETE", "REMOVE", "CLEAR", "REMOVE FROM"],
        respostaCorreta: "DELETE"
    },
    {
        pergunta: "Em Java, o que significa o modificador de acesso private?",
        opcoes: [
            "O membro é acessível apenas dentro da classe onde é definido",
            "O membro é acessível dentro do pacote",
            "O membro é acessível em todas as classes do projeto",
            "O membro é acessível apenas em subclasses",
            "O membro é acessível apenas no arquivo onde é definido"
        ],
        respostaCorreta: "O membro é acessível apenas dentro da classe onde é definido"
    },
    {
        pergunta: "Qual dessas opções é um tipo de loop em Python?",
        opcoes: ["while", "when", "for", "repeat", "A e C"],
        respostaCorreta: "A e C"
    },
    {
        pergunta: "Qual das alternativas abaixo é um exemplo de uma função recursiva?",
        opcoes: [
            "Função que chama a si mesma",
            "Função que chama outra função dentro dela",
            "Função que não retorna valor",
            "Função que é chamada apenas uma vez",
            "Função que sempre termina com um loop infinito"
        ],
        respostaCorreta: "Função que chama a si mesma"
    },
    {
        pergunta: "Qual é o comando correto para clonar um repositório Git?",
        opcoes: ["git copy", "git fetch", "git clone", "git pull", "git init"],
        respostaCorreta: "git clone"
    },
    {
        pergunta: "No CSS, o que a propriedade position: absolute; faz?",
        opcoes: [
            "Posiciona o elemento em relação ao seu elemento pai",
            "Posiciona o elemento em relação ao topo da página",
            "Faz com que o elemento fique fixo no topo da tela",
            "Posiciona o elemento em relação ao navegador",
            "Faz o elemento flutuar em qualquer lugar da página"
        ],
        respostaCorreta: "Posiciona o elemento em relação ao seu elemento pai"
    },
    {
        pergunta: "No contexto de bancos de dados, o que é normalização?",
        opcoes: [
            "Ação de criar múltiplas cópias dos dados",
            "Ação de dividir dados para reduzir redundâncias",
            "Ação de criar índices para acelerar consultas",
            "Ação de compactar os dados armazenados",
            "Ação de criptografar dados sensíveis"
        ],
        respostaCorreta: "Ação de dividir dados para reduzir redundâncias"
    }
];


export default function Quiz() {

    const [indexAtual, setIndexAtual] = useState(0); 
    const [respostaSelecionada, setRespostaSelecionada] = useState(null); 
    const [acertos, setAcertos] = useState(0);
    const total = perguntas.length;
    const perguntaAtual = perguntas[indexAtual];

    const handleSelecionar = (opcao) => {
        setRespostaSelecionada(opcao);
    }; 

    const handleEnviar = () => {
        if (!respostaSelecionada) return; 

        if (respostaSelecionada === perguntaAtual.respostaCorreta) {
            setAcertos(acertos + 1);
        }

        if (indexAtual < total - 1) {
            setIndexAtual(indexAtual + 1);
            setRespostaSelecionada(null); 
        } else {
            alert(`Fim do quiz! Você acertou ${acertos + 0} de ${total}` );
        }
    };

    return (
        <>
            <div className={style.containerQuiz}>

                <div className={style.fristparte}>

                    <p>Questão {indexAtual + 1} de {total}</p>

                    <h2>{perguntaAtual.pergunta}</h2>

                    <progress value={indexAtual + 0} max={total} ></progress>

                </div>

                <div className={style.twoparte}>

                    <div className={style.btsperguntas}>
                        {perguntaAtual.opcoes.map((opcao, i) => (
                            <button
                                key={i}
                                className={style.resposta}
                                onClick={() => handleSelecionar(opcao)}
                            >
                                <span className={style.letraquest}>
                                    {String.fromCharCode(65 + i)} 
                                </span>
                                {opcao}
                            </button>
                        ))}
                    </div>


                    <div className={style.enviar}>
                        <button onClick={handleEnviar}>Enviar Resposta</button>
                    </div>

                </div>

            </div>
        </>
    )
}