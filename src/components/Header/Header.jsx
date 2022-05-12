import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__menu'>
          <ul className='menu'>
            <li><a href="">Features</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">About</a></li>
          </ul>
        </div>
        <div className='header__toolbar'>
          <ul className='menu'>
            <li><a href="">Login</a></li>
            <li><a className='cta' href="">Register</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header