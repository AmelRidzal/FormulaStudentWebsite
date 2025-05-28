import { useState } from 'react';
import '../css/Sponsors.css';
import SponsorScroll from './SponsorScroller';

import ansys from '../assets/sponzors/ansys.png';
import matlab from '../assets/sponzors/matlab.png';
import racingarena from '../assets/sponzors/racingarena.png';
import solidworks from '../assets/sponzors/solidworks.svg';

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
                <h1></h1>
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
                        Tempted by this great project? Former UNSA student? Want to help us realize our dream?
                        <br /><br /><br /><br />
                        If you too would like to become a partner of the Unsa Racing Team, don’t wait and join the Formula Student adventure with us now!
                    </p>
                    <button id="SponsorsSupportUsBtn" onClick={handleModalOpen}>Support us</button>
                </div>
            </div>

            <div className="SponsorsDisplay">
                <div className="Sponsors-grid-container">
                    <a href="https://racingarena.ba/" target="_blank" rel="noopener noreferrer">
                        <div className="Sponsors-grid-item">
                            <img
                                src={racingarena}
                                className="Sponsors-logo"
                                alt="racing arena"
                            />
                            <div className="Sponsor-overlay">
                                <p>Racing arena<br />Main sponsor</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer">
                        <div className="Sponsors-grid-item">
                            <img
                                src={solidworks}
                                className="Sponsors-logo"
                                alt="racing arena"
                            />
                            <div className="Sponsor-overlay">
                                <p>Solidworks<br />Main sponsor</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.ansys.com/" target="_blank" rel="noopener noreferrer">
                        <div className="Sponsors-grid-item">
                            <img
                                src={ansys}
                                className="Sponsors-logo"
                                alt="racing arena"
                            />
                            <div className="Sponsor-overlay">
                                <p>Ansys<br />Main sponsor</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer">
                        <div className="Sponsors-grid-item">
                            <img
                                src={matlab}
                                className="Sponsors-logo"
                                alt="racing arena"
                            />
                            <div className="Sponsor-overlay">
                                <p>MatLab<br />Main sponsor</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {showModal && (
                <div className="ModalOverlay" onClick={handleModalClose}>
                    <div className="ModalContent" onClick={e => e.stopPropagation()}>
                        <h2>Contact Us</h2>
                        <p>Email: support@unsaracing.com</p>
                        <p>Phone: +387 61 123 456</p>
                        <button className="ModalCloseBtn" onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
