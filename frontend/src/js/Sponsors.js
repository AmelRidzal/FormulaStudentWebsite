import { useState } from 'react';
import Style from '../css/Sponsors.css';
import SponsorScroll from './SponsorScroller';

import ansys from '../assets/ansys.png';
import matlab from '../assets/matlab.png';

import '../css/Collors.css';

export default function Sponsors() {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const handleModalClose = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={`Background ${showModal ? 'Blurred' : ''}`}>
            <div className="SponsorsTitle">
                <h1>Our Sponsors</h1>
            </div>
            <SponsorScroll />

            <div className="SponsorsAbout">
                <div id="SponsorsTxt">
                    <p>
                        Formula Student projects require significant funding. We are fortunate to be able to count on many passionate companies that trust us by supporting us in this project, and without whom none of this would be possible. These professionals, through their involvement in the ESTACA Formula Team, support the development of our engineering training.
                        <br /><br />We would like to sincerely thank each of these companies, and invite you to discover them.
                    </p>
                </div>
                <div id="SponsorsSupportUs">
                    <p>
                        Tempted by this great project? Former ESTACA student? Want to help us realize our dream?
                        <br /><br /><br /><br />
                        If you too would like to become a partner of the EFT, don’t wait and join the Formula Student adventure with us now!
                    </p>
                    <button id="SponsorsSupportUsBtn" onClick={handleModalOpen}>Support us</button>
                </div>
            </div>

            <div className="SponsorsDisplay">
                <div className="Sponsors-grid-container">
                    <div className="Sponsors-grid-item">
                        <img src="https://racingarena.ba/wp-content/uploads/2024/03/racing-arena-logo-FINAL-02.png" className="Sponsors-logo" alt='racing arena' />
                        <div className="Sponsor-overlay"><p>Racing arena<br />Main sponsor</p></div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src="https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg" className="Sponsors-logo" alt='3ds' />
                        <div className="Sponsor-overlay"><p>3DS<br />Main sponsor</p></div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={ansys} className="Sponsors-logo" alt='ansys' />
                        <div className="Sponsor-overlay"><p>ansys<br />Main sponsors</p></div>
                    </div>
                    <div className="Sponsors-grid-item">
                        <img src={matlab} className="Sponsors-logo" alt='matlab' />
                        <div className="Sponsor-overlay"><p>MatLab<br />Main sponsor</p></div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="ModalOverlay" onClick={handleModalClose}>
                    <div className="ModalContent" onClick={e => e.stopPropagation()}>
                        <h2>Contact Us</h2>
                        <p>Email: support@unsaracing.com</p>
                        <p>Phone: +33 1 23 45 67 89</p>
                        <button className="ModalCloseBtn" onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
