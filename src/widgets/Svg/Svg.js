import './styles.scss';

const Svg = ({ children, ...props }) => <svg {...props}>{children}</svg>;

Svg.defaultProps = {
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg',
  // spin: false,
};

export default Svg;
