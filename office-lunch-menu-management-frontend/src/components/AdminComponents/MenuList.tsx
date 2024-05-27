import React from 'react';

interface Menu {
  date: string;
  options: string[];
}

interface MenuListProps {
  menus: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  return (
    <div className="menu-list">
      <h2>Menu List</h2>
      {menus.length === 0 ? (
        <p>No menus available.</p>
      ) : (
        <div>
          {menus.map((menu) => (
            <div key={menu.date} className="menu-item">
              <h3>{new Date(menu.date).toDateString()}</h3>
              <p style={{ marginTop: '5px' }}>{menu.options.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;
