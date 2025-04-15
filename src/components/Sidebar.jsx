import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavIcon from "./NavIcon";

const Aside = styled.aside`
  flex-basis: 18%;
  padding: 1.5em 0em;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  margin-top: 3.5em;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1em 2.5em;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  color: #999a9d;
  font-size: 1.25rem;

  &:hover {
    background-color: rgba(13, 227, 244, 0.1);
    color: #00a8b5;
  }

  &.active {
    background-color: rgba(13, 227, 244, 0.1);
    color: #00a8b5;
    font-weight: 800;
  }
`;

function Sidebar() {
  return (
    <Aside className="nav">
      <div className="logo flex justify-center items-center mx-auto">
        <div className="img-wrapper">
          <img src="/curehub-logo.svg" alt="carehub logo" />
        </div>
        <div className="title">
          <span className="text-primary text-[2rem] font-bold">Cure</span>
          <span className="text-[2rem] font-bold">Hub</span>
        </div>
      </div>
      <NavList className="flex flex-col gap-7">
        <li>
          <StyledNavLink to="/dashboard">
            {({ isActive }) => (
              <>
                <NavIcon icon="dashboard" isActive={isActive} />
                Dashboard
              </>
            )}
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/appointments">
            {({ isActive }) => (
              <>
                <NavIcon icon="appointments" isActive={isActive} />
                Appointments
              </>
            )}
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/patients">
            {({ isActive }) => (
              <>
                <NavIcon icon="patients" isActive={isActive} />
                Patients
              </>
            )}
          </StyledNavLink>
        </li>
      </NavList>
    </Aside>
  );
}

export default Sidebar;
