// import  { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
//   MDBRipple,
//   MDBBadge,
// //   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem
// } from 'mdb-react-ui-kit';
// import logoText from '../assets/images/logoText.png'; // Adjust the path as necessary

// export default function Collapsed() {
//   const [showShow, setShowShow] = useState(false);
//   const [collapse1, setCollapse1] = useState(true); // Controls main menu
//   const [dashboardSubmenu, setDashboardSubmenu] = useState(false); // Controls dashboard submenu

//   const toggleShow = () => setShowShow(!showShow);

//   return (
//     <>
//       <MDBCollapse open={showShow} tag="nav" className="d-lg-block bg-white sidebar">
//         <div className="position-sticky">
//           <MDBListGroup flush className="mx-3 mt-4">
//             <MDBRipple rippleTag="span">
//               <MDBListGroupItem
//                 tag="a"
//                 href="#"
//                 action
//                 className="border-0 border-bottom rounded"
//                 onClick={() => setCollapse1(!collapse1)}
//               >
//                 <MDBIcon fas icon="tachometer-alt me-3" />
//                 Menu
//               </MDBListGroupItem>
//             </MDBRipple>

//             <div className={`submenu-collapse ${collapse1 ? 'open' : ''}`}>
//               <MDBListGroup flush>
//                 <MDBListGroupItem
//                   tag="a"
//                   href="#"
//                   action
//                   onClick={() => setDashboardSubmenu(!dashboardSubmenu)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   Dashboard
//                   <MDBIcon
//                     fas
//                     icon={dashboardSubmenu ? 'chevron-up' : 'chevron-down'}
//                     className="float-end"
//                   />
//                 </MDBListGroupItem>

//                 {/* Nested submenu for Dashboard */}
//                 <div className={`submenu-collapse nested ${dashboardSubmenu ? 'open' : ''}`} style={{ paddingLeft: '20px' }}>
//                   <MDBListGroup flush>
//                     <MDBListGroupItem className="py-1" tag="a" action href="#">
//                       Submenu 1
//                     </MDBListGroupItem>
//                     <MDBListGroupItem className="py-1" tag="a" action href="#">
//                       Submenu 2
//                     </MDBListGroupItem>
//                   </MDBListGroup>
//                 </div>

//                 <MDBListGroupItem className="py-1" tag="a" action href="#">
//                   Setting
//                 </MDBListGroupItem>
//                 <MDBListGroupItem className="py-1" tag="a" action href="#">
//                   Report
//                 </MDBListGroupItem>
//                 <MDBListGroupItem className="py-1" tag="a" action href="#">
//                   Contact
//                 </MDBListGroupItem>
//               </MDBListGroup>
//             </div>
//           </MDBListGroup>
//         </div>
//       </MDBCollapse>

//       <MDBNavbar expand='lg' light bgColor='light'>
//         <MDBContainer fluid>
//           <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
//             <MDBNavbarToggler
//               type='button'
//               aria-label='Toggle navigation'
//               onClick={toggleShow}
//             >
//               <MDBIcon icon='bars' fas />
//             </MDBNavbarToggler>
//             <MDBNavbarBrand href='#'>
//                <img
//                             src={logoText}
//                             alt="Logo"
//                             height="40"
//                              className='rounded'
//                         />
//             </MDBNavbarBrand>

//             {/* <MDBCollapse navbar>
//               <MDBNavbarItem className="d-flex align-items-center">
//                 <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
//                 <MDBIcon fas icon="search mx-2" />
//               </MDBNavbarItem>
//             </MDBCollapse> */}
//           </MDBNavbarNav>
//           <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
//             <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
//                   <MDBIcon fas icon="bell" />
//                   <MDBBadge color='danger' notification pill>
//                     1
//                   </MDBBadge>
//                 </MDBDropdownToggle>

//                 <MDBDropdownMenu>
//                     <MDBDropdownItem link href="#">A</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">B</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">C</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">D</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">E</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">F</MDBDropdownItem> 


//                  {/* <MDBDropdownItem>
//   <MDBDropdownLink href="#">My profile</MDBDropdownLink>
// </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink href="#">Another news</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
//                   </MDBDropdownItem> */}
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem className='me-3 me-lg-0'>
//               <MDBNavbarLink href='#'>
//                 <MDBIcon fas icon='fill-drip' />
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem className='me-3 me-lg-0'>
//               <MDBNavbarLink href='#'>
//                 <MDBIcon fab icon='github' />
//               </MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
//                   <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
//                 </MDBDropdownToggle>

//                 <MDBDropdownMenu>
                  

//                   <MDBDropdownItem>
//                       <MDBDropdownItem link href="#">My profile</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">Settings</MDBDropdownItem>
//                     <MDBDropdownItem link href="#">Logout</MDBDropdownItem>
//                     {/* <MDBDropdownLink link href="#">My profile</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink link href="#">Settings</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink link href="#">Logout</MDBDropdownLink> */}
//                   </MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }