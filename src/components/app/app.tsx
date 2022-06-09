import {Route, Routes} from 'react-router-dom'
import {AppRoute} from "../../../const";

import WelcomeScreen from "../wellcome-screeen/wellcome-screeen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import WinScreen from "../win-screen/win-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";



type AppScreenProps = {
    errorsCount: number
}

function App({errorsCount}: AppScreenProps): JSX.Element{
    return (
        <WelcomeScreen errorsCount={errorsCount} />
    )
}
export default App