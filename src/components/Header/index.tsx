import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import logoIgnite from '../../assets/Header/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Logotipo Rocket Seat Ignite, dois triângulos sobrepostos verdes"
      />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" end title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
