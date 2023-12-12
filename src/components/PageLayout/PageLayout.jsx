import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const PageLayout = ({ children, ...headerProps }) => (
  <>
    <Header {...headerProps} />
    {children}
    <Footer />
  </>
)