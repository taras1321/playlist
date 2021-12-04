import notification from './img/notification.svg'
import settigns from './img/settings.svg'
import avater from './img/avatar.png'
import logo from './img/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="info">
        <img src={notification} alt="notificatoin" />
        <img src={settigns} alt="settigns" className="settigns" />
        <img src={avater} alt="avater" className="avater" />
      </div>
    </div>
  )
}

export default Header
