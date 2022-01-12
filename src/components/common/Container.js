import clsx from "clsx";
import PropTypes from "prop-types";

const Container = ({ children, fluid = false, className }) => {
  return (
    <div
      className={clsx(
        fluid ? "container-fluid" : "container",
        className && className,
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.any,
};

export default Container;
