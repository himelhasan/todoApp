import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        // console.error(error);
      });
  };

  return <>swweet header</>;
};

export default Header;
