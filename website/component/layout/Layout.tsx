import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

interface LayoutProps {
  children: any;
  InterViewexpireDate?: any;
}

const Layout: React.FC<LayoutProps> = ({ children, InterViewexpireDate }) => {
  return (
    <>
      <Header addClass='mv-container' />
      <div className='header_fix_space'>{children}</div>
      <Footer InterViewexpireDate={InterViewexpireDate} />
    </>
  );
};

export default Layout;
