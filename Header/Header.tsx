// пароль== sahsa1234
// 'use client';

// import Link from 'next/link';
// import css from './Header.module.css';
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';

// import AuthHeader from '../AuthHeader/AuthHeader';

// const Header = ({ user }: { user?: { id: string; name?: string } }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);
//   const pathname = usePathname();
//   const isAuthPage = pathname.startsWith('/auth');
//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
//   }, [menuOpen]);

//   useEffect(() => {
//     const mq = window.matchMedia('(min-width: 1440px)');
//     const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
//     setIsDesktop(mq.matches);
//     mq.addEventListener('change', handler);
//     return () => mq.removeEventListener('change', handler);
//   }, []);

//     const isLinkActive = (href: string) => {
//       if (!pathname) return false;
//       if (href === '/') return pathname === '/';
//       return pathname === href || pathname.startsWith(href);
//     };

//   if (isAuthPage) return null;

//   return (
//     <>
//     <header className={css.header}>
//       <div className={`container ${css.headerContainer}`}>
       
//          <Link href="/" aria-label="Home" className={css.logoLink}>
//            <svg width="83" height="15" aria-hidden="true">
//              <use href="/sprite.svg#icon-logo" />
//            </svg>
//           </Link>
        
//            <nav className={css.nav} aria-label="Main Navigation">
//             {!user ? (
//               <AuthHeader />
//                 ) : (
//   <ul className={css.navList}>
//     <li className={css.navItem}>
//       <Link href="/" className={css.navLink}>Головна</Link>
//     </li>
//     <li className={css.navItem}>
//       <Link href="/tools" className={css.navLink}>Інструменти</Link>
//     </li>
//     <li className={css.navItem}>
//       <Link href="/auth/login" className={css.navLink}>Увійти</Link>
//     </li>
//     <li className={css.navItem}>
//       <Link href="/auth/register" className={`${css.navLink} ${css.registerButton}`}>
//         Зареєструватися
//       </Link>
//     </li>
//   </ul>
//     )}
//           </nav>
          
//          <button
//           className={css.burgerButton}
//           onClick={toggleMenu}
//           aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
//         >
//           {menuOpen ? (
//               <svg width="24" height="24" aria-hidden="true">
//                 <use href="/sprite.svg#close" />
//               </svg>
//               ) : (
//               <svg width="24" height="24" aria-hidden="true">
//                 <use href="/sprite.svg#menu" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;






// 'use client';

// import Link from 'next/link';
// import css from './Header.module.css';
// import { useState, useEffect } from 'react';
// import { RxCross2 } from 'react-icons/rx';
// import { usePathname } from 'next/navigation';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);
//   const pathname = usePathname();
//   const isAuthPage = pathname.startsWith('/auth');

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
//     document.documentElement.style.overflow = menuOpen ? 'hidden' : 'auto';
//   }, [menuOpen]);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const mq = window.matchMedia('(min-width: 1440px)');
//     const handler = (e: MediaQueryListEvent | MediaQueryList) => {
//       const matches =
//         'matches' in e ? e.matches : (e as MediaQueryList).matches;
//       setIsDesktop(matches);
//     };
//     handler(mq);
//     if (mq.addEventListener)
//       mq.addEventListener('change', handler as EventListener);
//     else mq.addListener(handler as any);
//     return () => {
//       if (mq.removeEventListener)
//         mq.removeEventListener('change', handler as EventListener);
//       else mq.removeListener(handler as any);
//     };
//   }, []);

//   useEffect(() => {
//     if (isDesktop && menuOpen) setMenuOpen(false);
//   }, [isDesktop, menuOpen]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const isLinkActive = (href: string) => {
//     if (!pathname) return false;
//     if (href === '/') return pathname === '/';
//     return pathname === href || pathname.startsWith(href);
//   };

//   return (
//     <header className={css.header}>
//       <div className={`container ${css.headerContainer}`}>
//         <Link href="/" aria-label="Home" className={css.logoLink}>
//           <svg
//             width="83"
//             height="15"
//             viewBox="0 0 177 32"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <use href="/sprite.svg#icon-logo" xlinkHref="/sprite.svg#icon-logo" />
//           </svg>
//         </Link>
//         {!isAuthPage &&
//           (isDesktop ? (
//             <nav className={css.nav} aria-label="Main Navigation">
//               <ul className={css.navList}>
//                 <li className={css.navItem}>
//                   <Link
//                     href="/"
//                     className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/') ? css.navLinkActive : ''}`}
//                   >
//                     Головна
//                   </Link>
//                 </li>
//                 <li className={css.navItem}>
//                   <Link
//                     href="/tools"
//                     className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/tools') ? css.navLinkActive : ''}`}
//                   >
//                     Інструменти
//                   </Link>
//                 </li>
//                 <li className={css.navItem}>
//                   <Link
//                     href="/auth/login"
//                     className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/auth/login') ? css.navLinkActive : ''}`}
//                   >
//                     Увійти
//                   </Link>
//                 </li>
//                 <li className={css.navItem}>
//                   <Link
//                     href="/auth/register"
//                     className={`${css.navLink} ${css.registerButton} ${isLinkActive('/auth/register') ? css.navLinkActive : ''}`}
//                   >
//                     Зареєструватися
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           ) : (
//             <>
//               <button
//                 className={` ${menuOpen ? css.burgerOpen : ''}`}
//                 onClick={toggleMenu}
//                 aria-label={menuOpen ? 'Close menu' : 'Toggle menu'}
//               >
//                 {menuOpen ? (
//                   <RxCross2 size={24} className={css.crossIcon} />
//                 ) : (
//                   <svg
//                     className={css.burgerButton}
//                     width="19"
//                     height="13"
//                     aria-hidden="true"
//                   >
//                     <use href="/sprite.svg#menu" xlinkHref="/sprite.svg#menu" />
//                   </svg>
//                 )}
//               </button>
//               <nav
//                 className={`${css.nav} ${menuOpen ? css.navOpen : ''}`}
//                 aria-label="Main Navigation"
//               >
//                 <div className={css.menuHeader}>
//                   <Link href="/" aria-label="Home" className={css.menuLogo}>
//                     <svg width="83" height="15" aria-hidden="true">
//                       <use href="/sprite.svg#icon-logo" xlinkHref="/sprite.svg#icon-logo" />
//                     </svg>
//                   </Link>
//                   <button onClick={toggleMenu} aria-label="Close menu">
//                     <svg
//                       className={css.closeButton}
//                       width="24"
//                       height="24"
//                       aria-hidden="true"
//                     >
//                       <use href="/sprite.svg#close" xlinkHref="/sprite.svg#close" />
//                     </svg>
//                   </button>
//                 </div>
//                 <ul className={css.navList}>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/"
//                       className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Головна
//                     </Link>
//                   </li>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/tools"
//                       className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/tools') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Інструменти
//                     </Link>
//                   </li>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/auth/login"
//                       className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/auth/login') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Увійти
//                     </Link>
//                   </li>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/auth/register"
//                       className={`${css.navLink} ${css.registerButton} ${isLinkActive('/auth/register') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Зареєструватися
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </>
//           ))}
//       </div>
//     </header>
//   );
// };

// export default Header;
'use client';

// import Link from 'next/link';
// import css from './Header.module.css';
// import { useState, useEffect } from 'react';
// import { RxCross2 } from 'react-icons/rx';
// import { usePathname } from 'next/navigation';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [user, setUser] = useState<{ name: string } | null>(null);
//   const pathname = usePathname();
//   const isAuthPage = pathname.startsWith('/auth');

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
//     document.documentElement.style.overflow = menuOpen ? 'hidden' : 'auto';
//   }, [menuOpen]);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const mq = window.matchMedia('(min-width: 1440px)');
//     const handler = (e: MediaQueryListEvent | MediaQueryList) => {
//       const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
//       setIsDesktop(matches);
//     };
//     handler(mq);
//     if (mq.addEventListener) mq.addEventListener('change', handler as EventListener);
//     else mq.addListener(handler as any);
//     return () => {
//       if (mq.removeEventListener) mq.removeEventListener('change', handler as EventListener);
//       else mq.removeListener(handler as any);
//     };
//   }, []);

//   useEffect(() => {
//     if (isDesktop && menuOpen) setMenuOpen(false);
//   }, [isDesktop, menuOpen]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const isLinkActive = (href: string) => {
//     if (!pathname) return false;
//     if (href === '/') return pathname === '/';
//     return pathname === href || pathname.startsWith(href);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     // токен / session
//   };

//   return (
//     <header className={css.header}>
//       <div className={`container ${css.headerContainer}`}>
//         <Link href="/" aria-label="Home" className={css.logoLink}>
//           <svg width="83" height="15" viewBox="0 0 177 32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
//             <use href="/sprite.svg#icon-logo" xlinkHref="/sprite.svg#icon-logo" />
//           </svg>
//         </Link>

//         {!isAuthPage &&
//           (isDesktop ? (
//             <nav className={css.nav} aria-label="Main Navigation">
//               <ul className={css.navList}>
//                 <li className={css.navItem}>
//                   <Link
//                     href="/"
//                     className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/') ? css.navLinkActive : ''}`}
//                   >
//                     Головна
//                   </Link>
//                 </li>
//                 <li className={css.navItem}>
//                   <Link
//                     href="/tools"
//                     className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/tools') ? css.navLinkActive : ''}`}
//                   >
//                     Інструменти
//                   </Link>
//                 </li>

//                 {!user ? (
//                   <>
//                     <li className={css.navItem}>
//                       <Link href="/profile" className={`${css.navLink} ${css.centeredNavLink}`}>
//                         Мій профіль
//                       </Link>
//                     </li>
//                     <li className={css.navItem}>
//                       <button onClick={handleLogout} className={css.navLink}>
//                         Вийти
//                       </button>
//                     </li>
//                   </>
//                 ) : (
//                   <>
//                     <li className={css.navItem}>
//                       <Link
//                         href="/auth/login"
//                         className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/auth/login') ? css.navLinkActive : ''}`}
//                       >
//                         Увійти
//                       </Link>
//                     </li>
//                     <li className={css.navItem}>
//                       <Link
//                         href="/auth/register"
//                         className={`${css.navLink} ${css.registerButton} ${isLinkActive('/auth/register') ? css.navLinkActive : ''}`}
//                       >
//                         Зареєструватися
//                       </Link>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </nav>
//           ) : (
//             <>
//               <button
//                 className={` ${menuOpen ? css.burgerOpen : ''}`}
//                 onClick={toggleMenu}
//                 aria-label={menuOpen ? 'Close menu' : 'Toggle menu'}
//               >
//                 {menuOpen ? (
//                   <RxCross2 size={24} className={css.crossIcon} />
//                 ) : (
//                   <svg
//                     className={css.burgerButton}
//                     width="19"
//                     height="13"
//                     aria-hidden="true"
//                   >
//                     <use href="/sprite.svg#menu" xlinkHref="/sprite.svg#menu" />
//                   </svg>
//                 )}
//               </button>
//               <nav
//                 className={`${css.nav} ${menuOpen ? css.navOpen : ''}`}
//                 aria-label="Main Navigation"
//               >
//                 <div className={css.menuHeader}>
//                   <Link href="/" aria-label="Home" className={css.menuLogo}>
//                     <svg width="83" height="15" aria-hidden="true">
//                       <use href="/sprite.svg#icon-logo" xlinkHref="/sprite.svg#icon-logo" />
//                     </svg>
//                   </Link>
//                   <button onClick={toggleMenu} aria-label="Close menu">
//                     <svg
//                       className={css.closeButton}
//                       width="24"
//                       height="24"
//                       aria-hidden="true"
//                     >
//                       <use href="/sprite.svg#close" xlinkHref="/sprite.svg#close" />
//                     </svg>
//                   </button>
//                 </div>
//                 <ul className={css.navList}>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/"
//                       className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Головна
//                     </Link>
//                   </li>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/tools"
//                       className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/tools') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Інструменти
//                     </Link>
//                   </li>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/auth/login"
//                       className={`${css.navLink} ${css.centeredNavLink} ${isLinkActive('/auth/login') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Увійти
//                     </Link>
//                   </li>
//                   <li className={css.navItem}>
//                     <Link
//                       href="/auth/register"
//                       className={`${css.navLink} ${css.registerButton} ${isLinkActive('/auth/register') ? css.navLinkActive : ''}`}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       Зареєструватися
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </>
//           ))}
//       </div>
//     </header>
//   );
// };

// export default Header;

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';
import Link from 'next/link';
// import Logo from './Logo';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1440px)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isDesktop && menuOpen) setMenuOpen(false);
  }, [isDesktop, menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isLinkActive = (href: string) => pathname === href || pathname.startsWith(href);

  const Logout = () => setUser(null);

  if (isAuthPage) return null;

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link href="/" aria-label="Home" className={css.logoLink}>
    <svg width="83" height="15" viewBox="0 0 177 32" aria-hidden="true">
      <use href="/sprite.svg#icon-logo" />
    </svg>
  </Link>

        {isDesktop ? (
          <DesktopHeader user={user} isActive={isLinkActive} handleLogout={Logout} />
        ) : (
          <MobileHeader menuOpen={menuOpen} toggleMenu={toggleMenu} user={user} isActive={isLinkActive} handleLogout={Logout} />
        )}
      </div>
    </header>
  );
};

export default Header;