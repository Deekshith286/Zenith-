import React from 'react';
import './Sidebar.css';

const Sidebar = ({ pages, activePage, setActivePage }) => (
  <nav className="sidebar" aria-label="Main Navigation">
    <ul>
      {pages.map(page => (
        <li
          key={page}
          className={activePage === page ? "nav-active" : "nav-item"}
          onClick={() => setActivePage(page)}
          aria-current={activePage === page ? "page" : undefined}
          tabIndex={0}
        >
          {page}
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
