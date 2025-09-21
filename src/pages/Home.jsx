import { Braces, ChevronRight, Rocket, User } from "lucide-react";

import style from "../styles/home.module.css";

import project from "../images/projectQuiz.png";

export default function Home() {
    return (
        <>

            <div className={style.intr}>

                <div className={style.tittleHome}>
                    <Braces className={style.iconeBraces} />
                    <h2>CODE QUEST</h2>
                    <Braces className={style.iconeBraces} />
                </div>

                <p>Um desafio criado para quem gosta de ir além. Cada pergunta é um passo para testar seus limites e descobrir até onde você consegue chegar. A cada rodada, a tensão aumenta e a conquista fica mais próxima.</p>

                <img src={project} alt="projeto" />

            </div>

            <div className={style.containercolocacao}>

                <div className={style.tittlecard}>
                    <h2>COMPEÕES ATUAIS</h2>
                </div>

                <div className={style.cardspessoas}>

                    <div className={style.card}>
                        <div className={style.iconWrapper}>
                            <Rocket />
                        </div>
                        <h3>App Developer</h3>
                        <p>2 St</p>

                        <div className={style.usuario}>
                            <User />
                        </div>

                        <div className={style.progressoPessoa}>
                            <span>Progress</span>
                            <p>75%</p>
                        </div>

                        <progress value="75" max="100"></progress>
                    </div>


                    <div className={style.card}>
                        <div className={style.iconWrapper}>
                            <Rocket />
                        </div>
                        <h3>App Developer</h3>
                        <p>1 St</p>

                        <div className={style.usuario}>
                            <User />
                        </div>

                        <div className={style.progressoPessoa}>
                            <span>Progress</span>
                            <p>100%</p>
                        </div>

                        <progress value="100" max="100"></progress>
                    </div>

                    <div className={style.card}>
                        <div className={style.iconWrapper}>
                            <Rocket />
                        </div>
                        <h3>App Developer</h3>
                        <p>3 St</p>

                        <div className={style.usuario}>
                            <User />
                        </div>

                        <div className={style.progressoPessoa}>
                            <span>Progress</span>
                            <p>55%</p>
                        </div>

                        <progress value="55" max="100"></progress>

                    </div>

                </div>

            </div>


            <a href="/quiz" className={style.btn}>
                <div className={style.iniciar} >
                    <a href="/quiz">Iniciar</a>
                    <ChevronRight size={20} color="#fff" />
                </div >
            </a>

        </>
    )
}