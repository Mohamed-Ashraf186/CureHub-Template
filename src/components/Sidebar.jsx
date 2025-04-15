import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import { Sun } from "lucide-react";

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

const StaticItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1em 2.5em;
  border-radius: 0.5rem;
  color: #999a9d;
  font-size: 1.25rem;
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

        <li>
          <StaticItem>
            <NavIcon icon="settings" isActive={false} />
            Settings
          </StaticItem>
        </li>
      </NavList>

      <div className="p-7.5 mt-auto">
        <div className="flex bg-[#f6f8fa] rounded-sm p-1">
          <button className="flex items-center justify-center gap-2 py-2 flex-1 text-sm font-medium bg-white">
            <img src="/light-mode.svg" alt="light-mode" />
            Light
          </button>
          <button className="flex items-center justify-center gap-2 py-2 flex-1 text-sm text-[#999a9d]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7553 2.29085L12.531 3.57467C12.2099 3.99267 12.1452 4.25 12 4.25V2.75Z"
                fill="currentColor"
              />
            </svg>
            Dark
          </button>
        </div>
      </div>
    </Aside>
  );
}

export default Sidebar;
