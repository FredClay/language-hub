import { useNavigate } from 'react-router-dom';
import style from '../../css/Header.module.css';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className={style.Header}>
            <div className={style.HeaderLogo}>
                <img alt='logo' src='./HUBL Diamond Design White Small.png' onClick={() => navigator('/')}/>
            </div>
            <div className={style.ButtonArea}>
                <button onClick={() => navigator("/quickVerb")}>Quick Verb</button>
                <button onClick={() => navigator("/lessonZone")}>Lesson Zone</button>
                <button onClick={() => navigator("/aboutUs")}>About HUBL</button>
                <button onClick={() => navigator("/unspecified")}>FourthButton</button>

            </div>
        </div>
    )

}

export default Header;