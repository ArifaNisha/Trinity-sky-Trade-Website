// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Home, Grid, Clock, Users } from 'lucide-react';

// export default function Sidebar() {
//   return (
//     <Navbar bg="light" expand="lg" className="d-flex flex-column vh-100">
//       <Container fluid className="p-0">
//         <Navbar.Brand className="text-center py-3 px-4">
//           <img
//             src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//             alt="Logo"
//           />
//           <span className="ml-2">Sidebar</span>
//         </Navbar.Brand>
//         <Nav className="flex-column w-100">
//           <Nav.Link href="#home" className="d-flex align-items-center py-2 px-4">
//             <Home className="me-3" /> Home
//           </Nav.Link>
//           <Nav.Link href="#dashboard" className="d-flex align-items-center py-2 px-4">
//             <Clock className="me-3" /> Dashboard
//           </Nav.Link>
//           <Nav.Link href="#orders" className="d-flex align-items-center py-2 px-4">
//             <Grid className="me-3" /> Orders
//           </Nav.Link>
//           <Nav.Link href="#products" className="d-flex align-items-center py-2 px-4">
//             <Grid className="me-3" /> Products
//           </Nav.Link>
//           <Nav.Link href="#customers" className="d-flex align-items-center py-2 px-4">
//             <Users className="me-3" /> Customers
//           </Nav.Link>
//         </Nav>
//       </Container>
//       <div className="mt-auto p-3 d-flex align-items-center">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="User avatar"
//           className="rounded-circle me-2"
//           width="40"
//           height="40"
//         />
//         <span>mdo</span>
//       </div>
//     </Navbar>
//   );
// }

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
