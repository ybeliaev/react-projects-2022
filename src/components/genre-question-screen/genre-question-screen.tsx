import {ChangeEvent, FormEvent, useState} from "react";
import Logo from "../logo/logo";
import {QuestionGenre, UserGenreQuestionAnswer} from "../../types/question";

type GenreQuestionScreenProps = {
    question: QuestionGenre;
    onAnswer: (question: QuestionGenre, answers: UserGenreQuestionAnswer) => void;
};

function GenreQuestionScreen(props: GenreQuestionScreenProps) : JSX.Element {
    const {question, onAnswer} = props;
    const {answers, genre} = question;

    const [userAnswers, setUserAnswers] = useState([false, false, false, false]);

    return (
        <section className="game game--genre">
            <header className="game__header">
                <Logo />

                <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
                    <circle className="timer__line" cx="390" cy="390" r="370"
                            style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}
                    />
                </svg>

                <div className="game__mistakes">
                    <div className="wrong"/>
                    <div className="wrong"/>
                    <div className="wrong"/>
                </div>
            </header>

            <section className="game__screen">
                <h2 className="game__title">Выберите {genre} треки</h2>
                <form
                    className="game__tracks"
                    onSubmit={(event: FormEvent<HTMLFormElement>)=>{
                        event.preventDefault()
                        onAnswer(question, userAnswers);
                    }}
                >
                    {
                        answers.map((answer, idx) => {
                            const keyValue = `${idx}-${answer.src}`
                            return(
                                <div key={keyValue} className="track">
                                    <button className="track__button track__button--play" type="button"/>
                                    <div className="track__status">
                                        <audio
                                            src={answer.src}
                                        />
                                    </div>
                                    <div className="game__answer">
                                        <input className="game__input visually-hidden" type="checkbox"
                                               name="answer"
                                               value={`answer-${idx}`}
                                               id={`answer-${idx}`}
                                               checked={userAnswers[idx]}
                                               onChange={({target}: ChangeEvent<HTMLInputElement>)=>{
                                                    const value = target.checked
                                                   setUserAnswers([...userAnswers.slice(0, idx), value, ...userAnswers.slice(idx + 1)]);
                                               }}
                                        />
                                        <label className="game__check" htmlFor={`answer-${idx}`}>Отметить</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button className="game__submit button" type="submit">Ответить</button>
                </form>
            </section>
        </section>
    )
}
export default GenreQuestionScreen