import { FaTachometerAlt, FaPaintBrush, FaCalendarCheck, FaUsers, FaRegComment } from 'react-icons/fa'; 

interface SidebarProps {
  onSelectTab: (tab: string) => void;
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectTab, activeTab }) => {
  // Common style for active tab
  const activeStyle = { backgroundColor: '#f1f1f1', fontWeight: 'bold', padding: '10px', gap: '10px', borderRadius: '5px' };
  const defaultStyle = { padding: '10px', gap: '10px' };

  // Array of tab items
  const tabs = [
    { name: 'dashboard', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { name: 'designs', icon: <FaPaintBrush />, label: 'Designs' },
    { name: 'bookings', icon: <FaCalendarCheck />, label: 'Bookings' },
    { name: 'users', icon: <FaUsers />, label: 'Users' },
    { name: 'feedbacks', icon: <FaRegComment />, label: 'Feedbacks' },
  ];

  return (
    <div className="sidebar p-3 shadow-lg">
      <ul className="nav flex-column">
        {tabs.map((tab) => (
          <li key={tab.name} className="nav-item">
            <button
              className={`nav-link d-flex align-items-center ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => onSelectTab(tab.name)}
              style={activeTab === tab.name ? activeStyle : defaultStyle}
            >
              {tab.icon} {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
