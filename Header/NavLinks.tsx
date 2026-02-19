import Link from "next/link";
import css from "./Header.module.css"

interface NavProps {
    user: { name: string } | null;
    isActive: (href: string) => boolean;
    onClick?: () => void;
    logout: () => void;
}

const NavLinks = ({user, isActive, onClick, logout}: NavProps) => {

    return (
        <>
        <ul className={css.navList}>
    <li className={css.navItem}>
      <Link href="/" className={`${css.navLink} ${css.centeredNavLink} ${isActive('/') ? css.navLinkActive : ''}`} onClick={onClick}>
        Головна
      </Link>
    </li>
    <li className={css.navItem}>
      <Link href="/tools" className={`${css.navLink} ${css.centeredNavLink} ${isActive('/tools') ? css.navLinkActive : ''}`} onClick={onClick}>
        Інструменти
      </Link>
                </li>
                
                {user ? (
                    <>
                    <li className={css.navItem}>
          <Link href="/profile" className={`${css.navLink} ${css.centeredNavLink}`} onClick={onClick}>
            Мій профіль
          </Link>
        </li>
        <li className={css.navItem}>
          <button onClick={logout} className={css.navLink}>Вийти</button>
                        </li>
                    </>
                ) : (
                        <>
                        <li className={css.navItem}>
          <Link href="/auth/login" className={`${css.navLink} ${css.centeredNavLink} ${isActive('/auth/login') ? css.navLinkActive : ''}`} onClick={onClick}>
            Увійти
          </Link>
        </li>
        <li className={css.navItem}>
          <Link href="/auth/register" className={`${css.navLink} ${css.registerButton} ${isActive('/auth/register') ? css.navLinkActive : ''}`} onClick={onClick}>
            Зареєструватися
          </Link>
        </li>
</>
                )}   
            </ul>
        </>
    );
};

export default NavLinks;