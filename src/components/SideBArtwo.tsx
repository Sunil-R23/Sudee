// import React, { useEffect, useRef, useState } from 'react';
// import logo from '../assets/newimg.png';
// import '../shared/styles/sidebar/Sidebar.css';

// const SideBArtwo: React.FC = () => {
//   const sidebarRef = useRef<HTMLElement>(null);
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [isMenuActive, setIsMenuActive] = useState(false);

//   const collapsedSidebarHeight = '56px';
//   const fullSidebarHeight = 'calc(100vh - 32px)';

//   const toggleMenu = (active: boolean) => {
//     if (sidebarRef.current) {
//       sidebarRef.current.style.height = active
//         ? `${sidebarRef.current.scrollHeight}px`
//         : collapsedSidebarHeight;
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (sidebarRef.current) {
//         if (window.innerWidth >= 1024) {
//           sidebarRef.current.style.height = fullSidebarHeight;
//         } else {
//           setIsCollapsed(false);
//           sidebarRef.current.style.height = 'auto';
//           toggleMenu(isMenuActive);
//         }
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // initial run

//     return () => window.removeEventListener('resize', handleResize);
//   }, [isMenuActive]);

//   return (
//     <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMenuActive ? 'menu-active' : ''}`} ref={sidebarRef}>
//       <header className="sidebar-header">
//         <a href="#" className="header-logo">
//           <img src={logo} alt="Logo" />
//         </a>
//         <button className="toggler sidebar-toggler" onClick={() => setIsCollapsed(!isCollapsed)}>
//           <span className="material-symbols-rounded">chevron_left</span>
//         </button>
//         <button
//           className="toggler menu-toggler"
//           onClick={() => {
//             const newMenuState = !isMenuActive;
//             setIsMenuActive(newMenuState);
//             toggleMenu(newMenuState);
//           }}
//         >
//           <span className="material-symbols-rounded">{isMenuActive ? 'close' : 'menu'}</span>
//         </button>
//       </header>

//       <nav className="sidebar-nav">
//         <ul className="nav-list primary-nav">
//           {[
//             ['dashboard', 'Dashboard'],
//             ['calendar_today', 'Calendar'],
//             ['notifications', 'Notifications'],
//             ['group', 'Team'],
//             ['insert_chart', 'Analytics'],
//             ['star', 'Bookmarks'],
//             ['settings', 'Settings'],
//           ].map(([icon, label]) => (
//             <li className="nav-item" key={label}>
//               <a href="#" className="nav-link">
//                 <span className="nav-icon material-symbols-rounded">{icon}</span>
//                 <span className="nav-label">{label}</span>
//               </a>
//               <span className="nav-tooltip">{label}</span>
//             </li>
//           ))}
//         </ul>

//         <ul className="nav-list secondary-nav">
//           {[
//             ['account_circle', 'Profile'],
//             ['logout', 'Logout'],
//           ].map(([icon, label]) => (
//             <li className="nav-item" key={label}>
//               <a href="#" className="nav-link">
//                 <span className="nav-icon material-symbols-rounded">{icon}</span>
//                 <span className="nav-label">{label}</span>
//               </a>
//               <span className="nav-tooltip">{label}</span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default SideBArtwo;


import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/newimg.png';
import '../shared/styles/sidebar/Sidebar.css';
import { logoutFirebase } from '../logout/logoutFirebase';

const SideBArtwo: React.FC = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const collapsedSidebarHeight = '56px';
  const fullSidebarHeight = 'calc(100vh - 32px)';

  const toggleMenu = (active: boolean) => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = active
        ? `${sidebarRef.current.scrollHeight}px`
        : collapsedSidebarHeight;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (sidebarRef.current) {
        if (window.innerWidth >= 1024) {
          sidebarRef.current.style.height = fullSidebarHeight;
        } else {
          setIsCollapsed(false);
          sidebarRef.current.style.height = 'auto';
          toggleMenu(isMenuActive);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial run

    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuActive]);

  // 🧠 Unified nav structure
  const navItems = [
    // Primary nav
    { icon: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { icon: 'calendar_today', label: 'Calendar', href: '/calendar' },
    { icon: 'notifications', label: 'Notifications', href: '/notifications' },
    { icon: 'group', label: 'Team', href: '/team' },
    { icon: 'insert_chart', label: 'Analytics', href: '/analytics' },
    { icon: 'star', label: 'Bookmarks', href: '/bookmarks' },
    { icon: 'settings', label: 'Settings', href: '/settings' },

    // Divider between primary and secondary nav
    { divider: true },

    // Secondary nav
    { icon: 'account_circle', label: 'Profile', href: '/profile' },
    { icon: 'logout', label: 'Logout', onClick: logoutFirebase },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMenuActive ? 'menu-active' : ''}`} ref={sidebarRef}>
      <header className="sidebar-header">
        <a href="#" className="header-logo">
          <img src={logo} alt="Logo" />
        </a>
        <button className="toggler sidebar-toggler" onClick={() => setIsCollapsed(!isCollapsed)}>
          <span className="material-symbols-rounded">chevron_left</span>
        </button>
        <button
          className="toggler menu-toggler"
          onClick={() => {
            const newMenuState = !isMenuActive;
            setIsMenuActive(newMenuState);
            toggleMenu(newMenuState);
          }}
        >
          <span className="material-symbols-rounded">{isMenuActive ? 'close' : 'menu'}</span>
        </button>
      </header>

      <nav className="sidebar-nav pt-3">
        <ul className="nav-list">
          {navItems.map((item, index) =>
            item.divider ? (
              <hr key={`divider-${index}`} className="nav-divider" />
            ) : (
              <li className="nav-item" key={item.label}>
                {item.onClick ? (
                  <button className="nav-link" onClick={item.onClick}>
                    <span className="nav-icon material-symbols-rounded">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </button>
                ) : (
                  <a href={item.href || '#'} className="nav-link">
                    <span className="nav-icon material-symbols-rounded">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </a>
                )}
                <span className="nav-tooltip">{item.label}</span>
              </li>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBArtwo;


