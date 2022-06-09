import {Link} from "react-router-dom";

function Logo(): JSX.Element{
    return (
        <Link className="game__back" to="/">
            <span className="visually-hidden">Сыграть ещё</span>
            <img className="game__logo" src="../../../public/img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </Link>
    )
}