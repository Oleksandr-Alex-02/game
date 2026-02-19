
import css from './Header.module.css';
import NavLinks from './NavLinks';

const DesktopHeader = ({ user, isLinkActive, handleLogout }: any) => {
     
    return (
        <>
        <nav className={css.nav} aria-label="Main Navigation">
    <NavLinks user={user} isActive={isLinkActive} logout={handleLogout} />
  </nav>
</>
    )
};

export default DesktopHeader;