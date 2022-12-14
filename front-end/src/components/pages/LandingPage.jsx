import style from '../../css/LandingPage.module.css';

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigator = useNavigate();

    return (
        <div className={style.LandingPage}>
            <div className={style.IntroSection}>
                <h1>Welcome to HUBL!</h1>
                <p>This site intends to sharpen up your language skills by putting you in control of how and what you learn.</p>
            </div>
            <div className={style.OldOrNew}>
                <h2>If you're new here, the 'About HUBL' section in the header is a great place to start.<br /><br />Alternatively, if you want to dive straight into some vocab - 
                click below!</h2>
                <button onClick={() => navigator('/vocabZone')}>Let's Learn!</button>
            </div>
        </div>
    )

};

export default LandingPage;