import React from 'react'

const UserTabItem = ({  activeTab, tab, onTabClick }) => {
    const activeClass = tab.name === activeTab;
    const handleTabClick = () => {
        onTabClick && onTabClick(tab.name);
    }

    return (
        <div className={`tab-item ${activeClass ? 'active' : '' }`} onClick={handleTabClick}>
            {tab.label}
        </div>
    )
}

export default UserTabItem;