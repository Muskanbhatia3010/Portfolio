import '../assets/styles/component/_footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
           <span>&copy; {new Date().getFullYear()} Muskan Bhatia</span>
        </footer>
    );
};

export default Footer;