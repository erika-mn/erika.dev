import React from 'react';
type TabProps = {
  label: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Tab;
