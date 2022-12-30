import React, { createContext } from 'react';

const ThemeContext =createContext ( {
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
});

export default ThemeContext;