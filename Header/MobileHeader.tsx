
import Link from "next/link";
import css from "./Header.module.css"

import NavLinks from "./NavLinks";

interface MobileProps {
    user: { name: string } | null;
    isActive: (href: string) => boolean;
    menuOpen: boolean;
    toggleMenu: () => void;
    handleLogout: () => void;
}

const MobileHeader = ({user, isActive, handleLogout, menuOpen, toggleMenu}: MobileProps) => {

    return (
        <>
            {/* <button className={menuOpen ? css.burgerOpen : css.burgerButton} onClick={toggleMenu} aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}>
      {menuOpen ? (
        <svg width="24" height="24" aria-hidden="true"><use href="/sprite.svg#close" /></svg>
      ) : (
        <svg width="19" height="13" aria-hidden="true"><use href="/sprite.svg#menu" /></svg>
      )}
    </button>

    <nav className={`${css.nav} ${menuOpen ? css.navOpen : ''}`} aria-label="Main Navigation">
      <div className={css.menuHeader}>
        <Link href="/" aria-label="Home" className={css.menuLogo}>
          <svg width="83" height="15" aria-hidden="true"><use href="/sprite.svg#icon-logo" /></svg>
        </Link>
        <button onClick={toggleMenu} aria-label="Закрити меню">
          <svg className={css.closeButton} width="24" height="24" aria-hidden="true"><use href="/sprite.svg#close" /></svg>
        </button>
      </div>
      <NavLinks user={user} isActive={isActive} onClick={toggleMenu} handleLogout={handleLogout} />
    </nav> */}

        </>
    )
};

export default MobileHeader;