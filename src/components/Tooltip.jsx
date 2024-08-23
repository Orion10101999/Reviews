import { useRef, useEffect } from "react";

const Tooltip = ({ children, tooltip }) => {
  const container = useRef();
  const tooltipRef = useRef();

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (tooltipRef.current && container.current) {
          const tooltipElement = tooltipRef.current;
          const containerElement = container.current;

          // Optional: Calculate tooltip position if needed
          const containerRect = containerElement.getBoundingClientRect();
          const tooltipRect = tooltipElement.getBoundingClientRect();

          // For example, you might want to adjust the tooltip's position based on cursor
          tooltipElement.style.left = `${clientX - containerRect.left}px`;
          tooltipElement.style.top = `${containerRect.height}px`; // 8px gap
        }
      }}

      className="group relative inline-block"
    >
      {children}
      {tooltip && (
        <span
          ref={tooltipRef}
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-500 text-white rounded absolute"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
