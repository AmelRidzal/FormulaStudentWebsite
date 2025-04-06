import Style from '../css/SponsorScroller.css'
import Logo from '../assets/R.jpg'
import SponsorScroll from '../js/SponsorScroller'

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
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div><div className="Sponsors-grid-item">
                        <img src={Logo} className="Sponsors-logo"></img>
                        <div className="Sponsor-overlay">
                            <p>Company name<br />Sponsor type</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};