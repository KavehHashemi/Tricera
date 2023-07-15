import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Popover from "@mui/material/Popover";

// type props = {
//   user: string | undefined;
// };

const Account = () => {
  const { user, logout, loginWithRedirect } = useAuth0();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  if (user)
    return (
      <>
        <button onClick={handleClick}>{user.nickname}</button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div onClick={() => logout()}>Logout from {user.nickname}</div>
        </Popover>
      </>
    );
  else {
    return <div onClick={() => loginWithRedirect()}>login</div>;
  }
};

export default Account;
