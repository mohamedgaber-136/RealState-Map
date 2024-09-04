import React, { useEffect, useState } from "react";
import "./App.css";
import CarouselModal from "./components/CarouselModal/CarouselModal";
import informationList from "./assets/script.json";
import SvgCircles from "./components/SvgCircles/SvgCircles";
import imagePng from "./assets/Tuba-s-map.png";
import fixedImg from './assets/Asset 9Edit.png';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showTolTip, setShowTolTip] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    title: "",
    images: [],
  });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    detectSquarePoints();
  }, []);

  const detectSquarePoints = () => {
    const svgImage = window.document.getElementById("Layer_2");
    const pointsList = svgImage.querySelectorAll("rect.cls-rect");
    pointsList?.forEach((item, index) => {
      item.classList.add("square-point");
      item.style.cursor = "pointer";
      item.addEventListener("click", (e) => onMouseClickEvent(item, index));
      item.addEventListener("mouseover", (e) => onMouseOver(item));
      item.addEventListener("mouseleave", (e) => onMouseLeave());
    });
  };

  const onMouseClickEvent = (element, index) => {
    const itemId = element.getAttribute("id");
    const infoList = informationList;
    if (infoList.hasOwnProperty(itemId)) {
      setCurrentSelected({ title: itemId, images: infoList[itemId] });
    }
  };

  const onMouseOver = (element) => {
    const itemId = element.getAttribute("id");
    setTooltipContent(itemId);
    document.addEventListener("mouseover", handleMouseMove);
  };

  const onMouseLeave = () => {
    setTooltipContent("");
    document.removeEventListener("mouseover", handleMouseMove);
  };

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (currentSelected.title) {
      setModalShow(true);
    }
  }, [currentSelected]);

  useEffect(() => {
    if (tooltipContent) {
      setShowTolTip(true);
    } else {
      setShowTolTip(false);
    }
  }, [tooltipContent]);

  // Handle image loading
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="min-vh-100 w-100 parent">
      <div className="fixedImg"><img src={fixedImg} alt="Fixed" /></div>
      <div className={`toolTipContent ${showTolTip ? 'opacity-1' : 'opacity-0'}`} 
        style={{ top: tooltipPosition.y - 40 + "px", left: tooltipPosition.x + 10 + "px" }}>
        {tooltipContent.toUpperCase()}
      </div>
      <CarouselModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        info={currentSelected}
      />
      <div className="w-100 min-vh-100 position-relative">
        {!imageLoaded && (
          <div className="loader">Loading...</div> // Display a loader until the image is loaded
        )}
        <div
          className="min-vh-100 w-100 position-absolute"
          style={{ top: "0.4%", left: "0.0%" }}
        >
          <SvgCircles />
        </div>
        <img
          src={imagePng}
          width={"100%"}
          height={"auto"}
          className=""
          onLoad={handleImageLoad} // Trigger the loading handler
          alt="Main"
          style={{ display: imageLoaded ? 'block' : 'none' }} // Hide the image until it is loaded
        />
      </div>
    </div>
  );
};

export default App;
