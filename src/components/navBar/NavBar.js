import {  NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul style={{display: 'flex', listStyleType: 'none' }}>
        <li style={{marginRight: '15px'}}>
            <NavLink to='/' 
              className="link">
                Main page
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className="link">Main page</NavLink>
        </li>
        <li style={{ marginLeft: '25px'}}>
            <NavLink to='/blogs' className="link">Blogs page</NavLink>
        </li>
    </ul>
  )
}

export default NavBar