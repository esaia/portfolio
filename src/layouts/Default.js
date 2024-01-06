import './default.scss';
import { useThemeContext } from '../context/ThemeContext';

const Default = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <div className={`main-app ${theme || 'dark'} `}>
      <div className="main-app__children">{children}</div>
    </div>
  );
};

export default Default;
