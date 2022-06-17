import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AppRoute, AuthorizationStatus} from "../../const";

import WelcomeScreen from "../wellcome-screeen/wellcome-screeen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import WinScreen from "../win-screen/win-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

import PrivateRoute from "../private-route/private-route";
import {Questions, QuestionGenre, QuestionArtist} from "../../types/question";



type AppScreenProps = {
    errorsCount: number,
    questions: Questions;
}

function App({errorsCount, questions}: AppScreenProps): JSX.Element{

    const [firstQuestion, secondQuestion] = questions; //{type: 'genre', genre: 'rock', answers: Array(4)}
    console.log(firstQuestion)
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Root}
                    element={<WelcomeScreen errorsCount={errorsCount} />}
                />
                <Route
                    path={AppRoute.DevArtist}
                    element={
                        <ArtistQuestionScreen
                            question={secondQuestion as QuestionArtist}
                            onAnswer={() => {
                                throw new Error('Function \'onAnswer\' isn\'t implemented.');
                            }}
                        />
                    }

                />
                <Route
                    path={AppRoute.DevGenre}
                    element={<GenreQuestionScreen
                        question={firstQuestion as QuestionGenre}
                        onAnswer={()=>{
                            throw new Error('Function \'onAnswer\' isn\'t implemented.')
                        }}
                    />}
                />
                <Route
                    path={AppRoute.Login}
                    element={<AuthScreen />}
                />
                <Route
                    path={AppRoute.Result}
                    element={
                        <PrivateRoute
                            authorizationStatus={AuthorizationStatus.NoAuth}
                        >
                            <WinScreen />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={AppRoute.Lose}
                    element={<GameOverScreen />}
                />
                <Route
                    path="*"
                    element={<NotFoundScreen />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default App