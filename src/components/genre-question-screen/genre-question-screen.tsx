import Logo from "../logo/logo";

function GenreQuestionScreen() : JSX.Element {
    return (
        <section className="game game--genre">
            <header className="game__header">
                <Logo />

                <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
                    <circle className="timer__line" cx="390" cy="390" r="370"
                            style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}
                    />
                </svg>

                {/*{children}*/}
            </header>

            <section className="game__screen">
                <h2 className="game__title">Выберите {1} треки</h2>
                {/*<GenreQuestionList*/}
                {/*    question={question}*/}
                {/*    onAnswer={onAnswer}*/}
                {/*    renderPlayer={renderPlayer}*/}
                {/*/>*/}
            </section>
        </section>
    )
}
export default GenreQuestionScreen