import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import styled from "styled-components";

const Main = styled.main`
  background-color: #f7f7f7;
`;

function Layout() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <Header />
        <Main className="flex-1 p-4 ">
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default Layout;
