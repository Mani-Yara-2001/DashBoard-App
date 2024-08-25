import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/actions/widgetActions";
import { useNavigate } from "react-router-dom";
import "../styles/AddWidgetPage.css";

const AddWidgetPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [widgetName, setWidgetName] = useState("");
  const [widgetInfo, setWidgetInfo] = useState("");
  const [widgetCategory, setWidgetCategory] = useState(
    "CSPM Executive Dashboard"
  );
  const [widgetImage, setWidgetImage] = useState(null); // State to hold the selected image file
  const [imagePreview, setImagePreview] = useState(null); // State to hold image preview URL

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setWidgetImage(file);

    // Generate a preview URL for the image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (widgetName && widgetInfo) {
      // Prepare widget data
      const newWidget = {
        name: widgetName,
        info: widgetInfo,
        category: widgetCategory,
        image: widgetImage ? URL.createObjectURL(widgetImage) : null, // Convert image file to a local URL
      };

      dispatch(addWidget(newWidget));
      navigate("/");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="add-widget-page">
      <div className="header">
        <h2>Add New Widget</h2>
        <button className="close-button" onClick={() => navigate("/")}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="widgetName">Widget Name</label>
          <input
            type="text"
            id="widgetName"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="widgetInfo">Widget Info</label>
          <textarea
            id="widgetInfo"
            value={widgetInfo}
            onChange={(e) => setWidgetInfo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="widgetCategory">Category</label>
          <select
            id="widgetCategory"
            value={widgetCategory}
            onChange={(e) => setWidgetCategory(e.target.value)}
          >
            <option value="CSPM Executive Dashboard">
              CSPM Executive Dashboard
            </option>
            <option value="CWPP Dashboard">CWPP Dashboard</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="widgetImage">Upload Image</label>
          <input
            type="file"
            id="widgetImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {imagePreview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={imagePreview} alt="Widget Preview" />
          </div>
        )}
        <button type="submit" className="submit-button">
          Add Widget
        </button>
      </form>
    </div>
  );
};

export default AddWidgetPage;
