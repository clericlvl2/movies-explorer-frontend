import { useMemo, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import { PageLayout } from "../PageLayout/PageLayout";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import UserContext from "../../contexts/UserContext";
import { useModal } from "../../hooks/useModal";
import { usePageLayout } from "../../hooks/usePageLayout";
import { getPath } from "../../utils/helpers";
import { PATH, ROUTE } from "../../utils/constants";

const App = () => {
  const { isOpen, open, close } = useModal();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true);

  const logOut = () => {
    setIsLogged(false);
    navigate(getPath(ROUTE.MAIN), { replace: true });
  }

  const logIn= () => {
    setIsLogged(true);
    navigate(getPath(ROUTE.MAIN), { replace: true });
  }

  const layoutProps = useMemo(() => ({
    isLogged,
    headerProps: {
      onNavMenuOpen: open,
      isLogged
    }
  }), [isLogged, open])

  const ProtectedPageLayout = usePageLayout(layoutProps)

  return (
    <UserContext.Provider value={{ isLogged, logIn }}>
      <Routes>
        <Route
          path={ROUTE.MAIN}
          element={
            <PageLayout onNavMenuOpen={open} isLogged={isLogged}>
              <Main />
            </PageLayout>
          }
        />
        <Route
          path={ROUTE.MOVIES}
          element={
            <ProtectedPageLayout>
              <Movies />
            </ProtectedPageLayout>
          }
        />
        <Route
          path={ROUTE.SAVED_MOVIES}
          element={
            <ProtectedPageLayout>
              <Movies isFavoriteView />
            </ProtectedPageLayout>
          }
        />
        <Route
          path={ROUTE.PROFILE}
          element={
            <ProtectedPageLayout>
              <Profile onLogOut={logOut} />
            </ProtectedPageLayout>
          }
        />
        <Route path={ROUTE.SIGN_IN} element={<Login />} />
        <Route path={ROUTE.SIGN_UP} element={<Register />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={PATH.NOT_FOUND} replace />} />
      </Routes>
      <Modal isOpen={isOpen} isLogged={isLogged} onClose={close} />
    </UserContext.Provider>
  );
}

/**
 * 4. роутинг (проставить ссылки)
 */

export default App;
