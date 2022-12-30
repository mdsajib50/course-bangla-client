import React from 'react';

const ThemeContext = () => {
    const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
    return (
        <div>
            
        </div>
    );
};

export default ThemeContext;