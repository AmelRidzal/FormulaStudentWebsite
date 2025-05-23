import Style from '../css/Sponsors.css'
import Logo from '../assets/R.jpg'
import SponsorScroll from './SponsorScroller'


import ansys from '../assets/ansys.png';
import matlab from '../assets/matlab.png';

import '../css/Collors.css';

export default function Sponsors() {


    return (
        <div className='Background'>
            <div className="SponsorsTitle">
                <h1>Our Sponsors</h1>
            </div>
        <SponsorScroll></SponsorScroll>

            <div className="SponsorsAbout">
                <div id="SponsorsTxt" style={Style.SponsorsAbout}>
                    <p>
                        Formula Student projects require significant funding. We are fortunate to be able to count on many passionate companies that trust us by supporting us in this project, and without whom none of this would be possible. These professionals, through their involvement in the ESTACA Formula Team, support the development of our engineering training.
                        <br /><br />We would like to sincerely thank each of these companies, and invite you to discover them.</p>
                </div>
                <div id="SponsorsSupportUs">
                    <p>
                        Tempted by this great project? Former ESTACA student? Want to help us realize our dream?
                        <br /><br /><br /><br />If you too would like to become a partner of the EFT, don’t wait and join the Formula Student adventure with us now!</p>
                    <button id="SponsorsSupportUsBtn">Support us</button>
                </div>
            </div>
            <div className="SponsorsDisplay">
                <div className="Sponsors-grid-container">
                    <div className="Sponsors-grid-item">
                        <img src="https://racingarena.ba/wp-content/uploads/2024/03/racing-arena-logo-FINAL-02.png" className="Sponsors-logo" alt='slika'></img>
                        <div className="Sponsor-overlay">
                            <p>Racing arena<br />Main sponsor</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src="https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg" className="Sponsors-logo" alt='slika'></img>
                        <div className="Sponsor-overlay">
                            <p>3DS<br />Main sponsor</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={ansys} className="Sponsors-logo" alt='slika'></img>
                        <div className="Sponsor-overlay">
                            <p>ansys<br />Main sponsors</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={matlab} className="Sponsors-logo" alt='slika'></img>
                        <div className="Sponsor-overlay">
                            <p>MatLab<br />Main sponsor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};