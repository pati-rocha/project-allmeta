import logo from '../../assets/img/logo.svg'
import './header.css'

function Header(){
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>All Meta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/_patiro/"> Pati Rocha </a>
            </p>
        </div>
    </header>
    )
}
export default Header