import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import SideBar from './component/SideBar';
import DashBoardCategory from './assets/dashboardCategory.json';

const App = () => {

  const [sidebarShow, setSidebarShow] = useState(false)

  const [categoryWidgets, setCategoryWidgets] = useState(
    DashBoardCategory.map(category =>
      category.widgets.map(widget => ({ ...widget, show: true }))
    )
  );

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryChange = (index) => {
    setSelectedCategory(index);
  };

  const toggleWidgetSelection = (categoryIndex, widgetIndex) => {
    const updatedWidgets = categoryWidgets[categoryIndex].map((widget, index) =>
      index === widgetIndex ? { ...widget, show: !widget.show } : widget
    );

    setCategoryWidgets(prevState =>
      prevState.map((widgets, index) =>
        index === categoryIndex ? updatedWidgets : widgets
      )
    );
  };

  return (
    <div className="flex">
      {sidebarShow ?
        <SideBar
          categoryWidgets={categoryWidgets}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onToggleWidget={toggleWidgetSelection}
          setSidebarShow={setSidebarShow}
        />
        : null
      }
      <Dashboard
        categoryWidgets={categoryWidgets}
        selectedCategory={selectedCategory}
        setSidebarShow={setSidebarShow}

      />
    </div>
  );
};

export default App;
