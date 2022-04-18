import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFormStep } from "../../redux/actions/formStepActions";
import { clearFormState } from "../../redux/actions/formStateActions";

import "./Header.css";

const Header = (props) => {
  //Redux
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.formStep);

  //Functions
  const resetHandler = () => {
    dispatch(clearFormState());
    dispatch(resetFormStep());
  };
  return (
    <header className={currentStep !== 0 && "active"}>
      <div className="header-inner-wrapper">
        <div onClick={resetHandler} className="logo-wrapper">
          {logo}
        </div>
      </div>
    </header>
  );
};
export default Header;
const logo = (
  <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 954.9 172.49">
    <path
      d="M230.94,137.51c3.76,0,6.64,.83,8.65,2.5,2.01,1.67,3.01,4.03,3.01,7.1,0,1.68-.47,3.16-1.4,4.46-.93,1.3-2.27,2.32-4.01,3.06,1.88,.62,3.24,1.62,4.06,3.01s1.24,3.1,1.24,5.14v2.77c0,1.06,.13,1.84,.4,2.35,.27,.51,.71,.81,1.33,.9l1.14,.14v3.06h-2.51c-1.82,0-3.11-.63-3.87-1.9-.77-1.26-1.15-2.8-1.15-4.6v-2.68c0-1.88-.55-3.39-1.64-4.53-1.09-1.14-2.55-1.71-4.38-1.71h-7.49v11.75l3.86,.66v2.99h-12.39v-2.99l3.86-.66v-27.18l-3.86-.66v-2.99h15.14Zm-6.61,15.41h6.14c2.61,0,4.5-.5,5.69-1.49,1.18-1,1.78-2.45,1.78-4.36s-.57-3.25-1.71-4.31-2.9-1.59-5.28-1.59h-6.61v11.76Zm50.04,19.08v-2.99l3.86-.66v-27.18l-3.86-.66v-3.01h26.5v8.29h-4l-.38-4.62h-13.58v11.16h13.2v3.67h-13.2v12.35h13.86l.38-4.62h3.98v8.27h-26.76Zm56.29-2.99l2.56-.36,12.06-31.16h4.01l11.85,31.16,2.54,.36v2.99h-9.91v-2.99l2.61-.45-2.28-6.35h-13.82l-2.35,6.35,2.61,.45v2.99h-9.88v-2.99Zm11.07-10.71h10.95l-5.36-14.81h-.14l-5.45,14.81Zm50.58,13.7v-2.99l3.86-.66v-27.18l-3.86-.66v-3.01h12.39v3.01l-3.86,.66v27.18h11.99l.36-3.96h3.98v7.61h-24.86Zm75.49-34.51v7.63h-3.98l-.36-3.96h-7.66v27.18l3.86,.66v2.99h-12.39v-2.99l3.86-.66v-27.18h-7.68l-.33,3.96h-4v-7.63h28.68Zm40.13,3.01l-3.72,.45,7.23,14.08,7.23-14.08-3.7-.45v-3.01h11.85v3.01l-2.92,.45-10.24,18.91v8.48l3.86,.66v2.99h-12.37v-2.99l3.86-.66v-8.84l-10.05-18.56-2.89-.45v-3.01h11.85v3.01Zm119.43,7.58h-3.29l-.88-4.88c-.76-.74-1.69-1.35-2.8-1.82-1.11-.47-2.43-.71-3.96-.71-3.59,0-6.34,1.3-8.27,3.9s-2.89,5.9-2.89,9.89v.54c0,4,.94,7.3,2.83,9.92,1.89,2.61,4.51,3.92,7.86,3.92,1.56,0,2.99-.24,4.27-.73,1.28-.49,2.27-1.09,2.96-1.8l.88-4.88h3.29v6.14c-1,1.28-2.49,2.42-4.48,3.42-1.99,1-4.3,1.5-6.92,1.5-4.49,0-8.17-1.66-11.04-4.98-2.88-3.32-4.31-7.49-4.31-12.51v-.5c0-5.06,1.41-9.24,4.24-12.55,2.83-3.31,6.53-4.96,11.11-4.96,2.62,0,4.93,.51,6.92,1.53,1.99,1.02,3.48,2.16,4.48,3.42v6.14Zm29.89,20.93l2.56-.36,12.06-31.16h4l11.85,31.16,2.54,.36v2.99h-9.91v-2.99l2.61-.45-2.28-6.35h-13.82l-2.35,6.35,2.61,.45v2.99h-9.88v-2.99Zm11.07-10.71h10.95l-5.36-14.81h-.14l-5.45,14.81Zm66.44-20.81c3.68,0,6.54,.95,8.59,2.84,2.05,1.9,3.07,4.39,3.07,7.49s-1.02,5.63-3.07,7.51c-2.05,1.88-4.91,2.82-8.59,2.82h-7.32v10.19l3.86,.66v2.99h-12.4v-2.99l3.86-.66v-27.18l-3.86-.66v-3.01h15.85Zm-7.32,17.02h7.32c2.34,0,4.09-.63,5.25-1.88,1.16-1.26,1.74-2.84,1.74-4.75s-.58-3.51-1.74-4.79c-1.16-1.28-2.91-1.92-5.25-1.92h-7.32v13.34Zm48-14.01v-3.01h12.39v3.01l-3.86,.66v27.18l3.86,.66v2.99h-12.39v-2.99l3.86-.66v-27.18l-3.86-.66Zm69.31-3.01v7.63h-3.98l-.36-3.96h-7.65v27.18l3.86,.66v2.99h-12.39v-2.99l3.86-.66v-27.18h-7.68l-.33,3.96h-4v-7.63h28.68Zm23.64,31.52l2.56-.36,12.06-31.16h4l11.85,31.16,2.54,.36v2.99h-9.91v-2.99l2.61-.45-2.28-6.35h-13.82l-2.35,6.35,2.61,.45v2.99h-9.88v-2.99Zm11.07-10.71h10.95l-5.35-14.81h-.14l-5.45,14.81Zm50.58,13.7v-2.99l3.86-.66v-27.18l-3.86-.66v-3.01h12.39v3.01l-3.86,.66v27.18h11.99l.36-3.96h3.98v7.61h-24.86ZM240.88,20.7v26.96h47.22v18.95h-47.22v37.16h-23.61V1.75h77.1V20.7h-53.49Zm230.9,61.21h-47.37l-9.04,21.86h-24.19L436.65,1.75h23.32l45.62,102.02h-24.78l-9.04-21.86Zm-7.43-17.93l-16.18-39.06-16.18,39.06h32.35ZM309.06,1.75h23.61V84.53h51.15v19.24h-74.76V1.75Zm215.23,19.24h-32.64V1.75h88.9V20.99h-32.64V103.77h-23.61V20.99ZM590.57,1.75h23.61V103.77h-23.61V1.75Zm103.51,102.02l-19.67-28.42h-21.71v28.42h-23.61V1.75h44.16c27.25,0,44.3,14.14,44.3,37.02,0,15.3-7.72,26.52-20.99,32.21l22.88,32.79h-25.36Zm-22.15-82.78h-19.24V56.55h19.24c14.43,0,21.71-6.7,21.71-17.78s-7.29-17.78-21.71-17.78Zm57.48,31.77c0-30.31,23.61-52.76,55.82-52.76s55.82,22.3,55.82,52.76-23.76,52.76-55.82,52.76-55.82-22.44-55.82-52.76Zm87.73,0c0-19.38-13.7-32.65-31.92-32.65s-31.92,13.26-31.92,32.65,13.7,32.65,31.92,32.65,31.92-13.26,31.92-32.65ZM952.04,1.75V103.77h-19.38l-50.86-61.94v61.94h-23.32V1.75h19.53l50.72,61.94V1.75h23.32Z"
      style={{ fill: "#003a70" }}
    />
    <g>
      <rect
        x="113.13"
        y="61.44"
        width="45.39"
        height="109.07"
        style={{ fill: "#14a800" }}
      />
      <polygon
        points="43.19 45.18 43.19 60.8 100.09 60.8 100.09 104 43.19 104 43.19 170.5 0 170.5 0 1.98 158.53 1.98 158.53 45.18 43.19 45.18"
        style={{ fill: "#003a70" }}
      />
    </g>
  </svg>
);