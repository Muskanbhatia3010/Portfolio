import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="#home">
                            <FaHome /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <FaProjectDiagram /> Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <FaInfoCircle /> About
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <FaEnvelope /> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;