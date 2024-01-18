import { useEffect, useMemo } from "react";
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
import { getRoutePath, handleError } from "../../utils/helpers";
import { LOCAL_STORAGE_KEY, PATH, ROUTE } from "../../utils/constants";
import { useLocalStorageState } from "../../hooks/useLocalStorage";
import mainApi from "../../utils/api/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();
  const [user, setUser] = useLocalStorageState(LOCAL_STORAGE_KEY.USER, null);

  const isLogged = Boolean(user);

  useEffect(() => {
    checkUserAuthorization();
  }, []);

  const checkUserAuthorization = async () => {
    if (!user) {
      return false;
    }

    try {
      const { data } = await mainApi.getUser();
      const isUserLogged = Boolean(data);

      if (isUserLogged) {
        setUser(data);
      }

    } catch (err) {
      handleError(err);
    }
  };

  const onLogin = (data) => {
    setUser(data);
    navigate(getRoutePath(ROUTE.MOVIES), { replace: true });
  }

  const onUpdateUser = (data) => {
    setUser(data);
  }

  const onLogOut = () => {
    localStorage.clear();
    setUser(null);
    navigate(getRoutePath(ROUTE.MAIN), { replace: true });
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
    <UserContext.Provider value={{ user, isLogged }}>
      <Routes>
        <Route
          path={ROUTE.MAIN}
          element={
            <PageLayout onNavMenuOpen={open}>
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
              <Movies isSavedMovies />
            </ProtectedPageLayout>
          }
        />
        <Route
          path={ROUTE.PROFILE}
          element={
            <ProtectedPageLayout>
              <Profile onUpdateUser={onUpdateUser} onLogOut={onLogOut} />
            </ProtectedPageLayout>
          }
        />
        <Route
          path={ROUTE.SIGN_IN}
          element={
            <ProtectedRoute hasPermission={!isLogged}>
              <Login onLogin={onLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTE.SIGN_UP}
          element={
            <ProtectedRoute hasPermission={!isLogged}>
              <Register onRegister={onLogin} />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={PATH.NOT_FOUND} replace />} />
      </Routes>
      <Modal isOpen={isOpen} onClose={close} />
    </UserContext.Provider>
  );
}

export default App;
