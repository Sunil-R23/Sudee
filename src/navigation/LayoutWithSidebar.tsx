// LayoutWithSidebar.tsx
import SideBArtwo from '../components/SideBArtwo';
import { Outlet } from 'react-router-dom';

const LayoutWithSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBArtwo />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
