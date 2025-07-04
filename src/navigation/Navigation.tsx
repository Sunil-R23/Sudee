import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Dashboard from '../pages/dashboard/Dashbaord';
import LayoutWithSidebar from './LayoutWithSidebar';
// import OtpVerfication from '../otp/OtpVerfication';
// import UnAuthorized from '../auth/UnAuthorized';
// import ProtectedRoute from './ProtectedRoute';
// import Dashboard from '../pages/Dashboard';
// import Prizes from '../pages/Prizes';
// import Advertisers from '../pages/Advertisers';
// import Cards from '../pages/Cards';
// import Analytics from '../pages/Analytics';

const Navigation = () => {
  return (
    // <AuthProvider>
    <Routes>
      <Route path="/" element={<Login />} />

       <Route element={<LayoutWithSidebar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* You can add more here like prizes, analytics, etc. */}
        {/* <Route path="/prizes" element={<Prizes />} /> */}
      </Route>
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/otpVerification" element={<OtpVerfication />} />
      <Route path="/unAuthorized" element={<UnAuthorized />} /> */}

      {/* Protected Routes */}
      {/* <Route element={<ProtectedRoute />}> */}
      {/*   <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/analytics" element={<Analytics />} /> */}
      {/* </Route> */}
    </Routes>
    // </AuthProvider>
  );
};

export default Navigation;
