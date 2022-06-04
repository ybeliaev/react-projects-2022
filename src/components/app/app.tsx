import WelcomeScreen from "../wellcome-screeen/wellcome-screeen";

type AppScreenProps = {
    errorsCount: number
}

function App({errorsCount}: AppScreenProps): JSX.Element{
    return (
        <WelcomeScreen errorsCount={errorsCount} />
    )
}
export default App