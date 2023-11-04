import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="nav-bg">
      <div className="navbar-large-container">
        <Link to="/login">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-header-logo"
          />
        </Link>
        <div className="nav-items">
          <Link to="/" className="nav-link">
            <p className="home-item">Home</p>
          </Link>
          <Link to="/jobs" className="nav-link">
            <p>Jobs</p>
          </Link>
        </div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <div className="navbar-small-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-header-logo"
        />
        <ul className="icons">
          <Link to="/">
            <li className="nav-link-sm">
              <AiFillHome />
            </li>
          </Link>
          <Link to="/jobs">
            <li className="nav-link-sm">
              <BsFillEnvelopeFill className="jobs-icon" />
            </li>
          </Link>
          <Link to="/login">
            <li className="nav-link-sm">
              {' '}
              <FiLogOut onClick={onClickLogout} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Header)
