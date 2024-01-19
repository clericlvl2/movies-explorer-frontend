import { useCallback } from "react";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { PageLayout } from "../components/PageLayout/PageLayout";

export const usePageLayout = ({ isLogged = false, headerProps = {} }) => {
  return useCallback(({ children }) => (
      <ProtectedRoute hasPermission={isLogged}>
        <PageLayout {...headerProps}>
          {children}
        </PageLayout>
      </ProtectedRoute>
    ), [isLogged, headerProps]
  )
}