// src/components/Dashboard.js

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeWidget } from "../redux/actions/widgetActions"; // Import removeWidget action
import "../styles/Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Fetch widgets from Redux store
  const widgets = useSelector((state) => state.widgetReducer.widgets);

  // Filter widgets by category
  const cspmWidgets = widgets.filter(
    (widget) =>
      widget.category === "CSPM Executive Dashboard" &&
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
  );

  const cwppWidgets = widgets.filter(
    (widget) =>
      widget.category === "CWPP Dashboard" &&
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
  );

  // Handler to remove widget
  const handleRemoveWidget = (index) => {
    dispatch(removeWidget(index));
  };

  return (
    <div className="dashboard-page">
      <div className="header">
        <h2>Dashboard</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Widgets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/add-widget" className="add-widget-button">
          + Add Widget
        </Link>
      </div>

      {/* CSPM Executive Dashboard Widgets */}
      <div className="category-section">
        <h3 className="category-title">CSPM Executive Dashboard</h3>
        <div className="widget-list">
          {cspmWidgets.length > 0 ? (
            cspmWidgets.map((widget, index) => (
              <div className="widget-item" key={index}>
                <h4>{widget.name}</h4>
                <p>{widget.info}</p>
                {widget.image && (
                  <img
                    src={widget.image}
                    alt={`${widget.name} preview`}
                    className="widget-image"
                  />
                )}
                <button
                  className="remove-button"
                  onClick={() => handleRemoveWidget(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No widgets available in this category.</p>
          )}
        </div>
      </div>

      {/* CWPP Dashboard Widgets */}
      <div className="category-section">
        <h3 className="category-title">CWPP Dashboard</h3>
        <div className="widget-list">
          {cwppWidgets.length > 0 ? (
            cwppWidgets.map((widget, index) => (
              <div className="widget-item" key={index}>
                <h4>{widget.name}</h4>
                <p>{widget.info}</p>
                {widget.image && (
                  <img
                    src={widget.image}
                    alt={`${widget.name} preview`}
                    className="widget-image"
                  />
                )}
                <button
                  className="remove-button"
                  onClick={() => handleRemoveWidget(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No widgets available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


