import styled from "styled-components";

const HeaderBar = styled.header`
  padding: 1.5em 2em 1.5em 1.5em;
  display: flex;
`;

const SearchBar = styled.div`
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  &:focus-within {
    border-color: #000;
    outline: none;
  }
`;

const Input = styled.input`
  padding: 0.75em 0;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Profile = styled.div``;

function Header() {
  return (
    <HeaderBar className="header justify-between">
      <SearchBar className=" flex gap-2 basis-[44.7%]">
        <div className="search-icon-wrapper flex items-center">
          <img src="/search-icon.svg" alt="Search icon" />
        </div>
        <Input type="text" placeholder="search here..." className="grow " />
      </SearchBar>

      <Profile className="flex items-center justify-between gap-4 ">
        <div className="icons-container flex gap-4">
          <div className="icon">
            <img src="/Message.svg" alt="mail" />
          </div>
          <div className="icon">
            <img src="/Notification icon.svg" alt="notifications" />
          </div>
        </div>

        <div className="profile-container flex gap-2">
          <div className="profile-image">
            <img src="/Rectangle 1119.png" alt="profile-pic" />
          </div>
          <div>
            <p className="text-[#212529] font-primary font-medium w-[176px]">
              Dr. Oliver Widson
            </p>
            <p className="text-[#999A9D] font-primary font-medium">Manager</p>
          </div>
        </div>

        <div className="arrow-btn-icon">
          <img src="/arrow.svg" alt="arrow" />
        </div>
      </Profile>
    </HeaderBar>
  );
}

export default Header;
