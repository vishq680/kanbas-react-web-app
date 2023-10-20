import { Link, useLocation } from "react-router-dom";
import './index.css'
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaHistory, FaLaptop, FaArrowAltCircleRight, FaQuestionCircle } from 'react-icons/fa';
const sidebarLinks = [
    {
      href: '/Kanbas/Account',
      icon: FaUserCircle ,
      text: 'Account',
    },
    {
      href: '/Kanbas/Dashboard',
      icon: FaTachometerAlt,
      text: 'Dashboard',
    },
    {
      href: '/Kanbas/Courses',
      icon: FaBook,
      text: 'Courses',
    },
    {
      href: '/Kanbas/Calendar',
      icon: FaCalendarAlt,
      text: 'Calendar',
    },
    {
      href: '/Kanbas/Inbox',
      icon: FaInbox,
      text: 'Inbox',
    },
    {
      href: '/Kanbas/History',
      icon: FaHistory,
      text: 'History',
    },
    {
      href: '/Kanbas/Studio',
      icon: FaLaptop,
      text: 'Studio',
    },
    {
      href: '/Kanbas/Commons',
      icon: FaArrowAltCircleRight,
      text: 'Commons',
    },
    {
      href: '/Kanbas/Help',
      icon: FaQuestionCircle,
      text: 'Help',
    },
  ];
  

function KanbasNavigation() {
//   const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const { pathname } = useLocation();
  return (
    <div className="wd-grid-row">
      <div className="wd-grid-col-left-sidebar">
        <ul className="navbar-nav first-ul">
          <li className="first-li">
            <Link to={`/Kanbas/Dashboard`}>
            <a href="{}" className="d-flex flex-column align-items-center no-underline nav-link color-white">
              <img src="../images/NU.png" alt="Northeastern" className="img-fluid" />
            </a>
            </Link>
          </li>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="nav-item first-li">
                <Link to={link.href} className={`d-flex flex-column align-items-center no-underline ${pathname.includes(link.text) && "active"}`}>
              {/* <a href={link.href} className={`d-flex flex-column align-items-center no-underline ${pathname.includes(link.text) && "active"}`}> */}
                <link.icon style={{color:"red", fontSize:30, margin:10}} to/>
                <div className="color-white">{link.text}</div>
              {/* </a> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default KanbasNavigation;




  


// import { Link, useLocation } from "react-router-dom";
// import "./index.css"
// import {FaUser, FaGaugeHigh, FaBook, FaCalendarDays, FaEnvelopeOpenText, FaClock, FaTv, FaArrowRight, } from "react-icons/fa6"
// import {FaQuestionCircle} from "react-icons/fa"


// function KanbasNavigation() {

//   const { pathname } = useLocation();


// const navItems = [
//     {
//         "name": "Account",
//         "icon-url": FaUser,
//     },
//     {
//         "name": "Dashboard",
//         "icon-url": FaGaugeHigh,
//     },
//     {
//         "name": "Courses",
//         "icon-url": FaBook,
//     },
//     {
//         "name": "Calendar",
//         "icon-url": FaCalendarDays,
//     },
//     {
//         "name": "Inbox",
//         "icon-url": FaClock,
//     },
//     {
//         "name": "History",
//         "icon-url": FaEnvelopeOpenText,
//     },
//     {
//         "name": "Studio",
//         "icon-url": FaTv,
//     },
//     {
//         "name": "Commons",
//         "icon-url": FaArrowRight,
//     },
    
//     {
//         "name": "Help",
//         "icon-url": FaQuestionCircle,
//     },
// ]
//   return (

//         <div className="sidebar" >
        
//             <Link 
//                 key={"logo"}
//                 to={"/Kanbas/Dashboard"}
//                 className= "sidebar-item">
//                 <img src={process.env.PUBLIC_URL + '/images/NEU.png'} alt="NEU Logo" width="80px" height="80px"/>
//             </Link>
//             {
//                 navItems.map((item, index) => 
//                     {

                        
//                         let Url = item["icon-url"];
//                         return(
//                                 <Link
//                                 key={index}
//                                 to={`/Kanbas/${item.name}`}
//                                 className={`sidebar-item ${pathname.includes(item.name) && "active"}`}>
//                                 <div>
//                                     <Url style={{color:"red", fontSize: 27}}/>
//                                 </div>
                                
//                                 {item.name}
//                                 </Link>
                        

                                
//                             )
//                     }
//                 )
//             }
//         </div>
              
            

    



//   );
// }
// export default KanbasNavigation; 