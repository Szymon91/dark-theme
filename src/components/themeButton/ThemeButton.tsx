import './ThemeButton.scss';
import useDarkMode from 'use-dark-mode';
import { useTheme } from '../../utils/useTheme';

export const ThemeButton = () => {
  const darkMode = useDarkMode(false);
  const theme = useTheme();
  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" checked={theme === 'dark-mode'} onChange={darkMode.toggle} />
        <div className="slider round" />
      </label>
      <span>{theme === 'dark-mode' ? 'Lightmode' : 'Darkmode'}</span>
    </div>
  );
};
