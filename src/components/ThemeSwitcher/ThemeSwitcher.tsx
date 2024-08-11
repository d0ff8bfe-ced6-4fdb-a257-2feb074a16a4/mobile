import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "../../utils/ThemeProvider";

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();
    return (

        <button
            onClick={() => {
                toggleTheme();
            }}
            className={cls.button}>
            {
                theme === Theme.DARK ?
                    <svg version="1.1" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.996 12.882c0.022-0.233-0.038-0.476-0.188-0.681-0.325-0.446-0.951-0.544-1.397-0.219-0.95 0.693-2.060 1.086-3.188 1.162-1.368 0.092-2.765-0.283-3.95-1.158-1.333-0.985-2.139-2.415-2.367-3.935s0.124-3.124 1.109-4.456c0.142-0.191 0.216-0.435 0.191-0.691-0.053-0.55-0.542-0.952-1.092-0.898-2.258 0.22-4.314 1.18-5.895 2.651-1.736 1.615-2.902 3.847-3.137 6.386-0.254 2.749 0.631 5.343 2.266 7.311s4.022 3.313 6.772 3.567 5.343-0.631 7.311-2.266 3.313-4.022 3.567-6.772zM19.567 14.674c-0.49 1.363-1.335 2.543-2.416 3.441-1.576 1.309-3.648 2.016-5.848 1.813s-4.108-1.278-5.417-2.854-2.016-3.648-1.813-5.848c0.187-2.032 1.117-3.814 2.507-5.106 0.782-0.728 1.71-1.3 2.731-1.672-0.456 1.264-0.577 2.606-0.384 3.899 0.303 2.023 1.38 3.934 3.156 5.247 1.578 1.167 3.448 1.668 5.272 1.545 0.752-0.050 1.496-0.207 2.21-0.465z"></path>
                    </svg>
                    :
                    <svg version="1.1" fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M10 14c-2.209 0-4-1.791-4-4s1.791-4 4-4v0c2.209 0 4 1.791 4 4s-1.791 4-4 4v0zM9 1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 2c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-2zM15.65 2.94c0.184-0.215 0.456-0.35 0.76-0.35 0.552 0 1 0.448 1 1 0 0.303-0.135 0.575-0.348 0.758l-0.001 0.001-1.4 1.4c-0.184 0.215-0.456 0.35-0.76 0.35-0.552 0-1-0.448-1-1 0-0.303 0.135-0.575 0.348-0.758l0.001-0.001 1.4-1.4zM18.99 9c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1.98c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.98zM17.060 15.65c0.215 0.184 0.35 0.456 0.35 0.76 0 0.552-0.448 1-1 1-0.303 0-0.575-0.135-0.758-0.348l-0.001-0.001-1.4-1.4c-0.215-0.184-0.35-0.456-0.35-0.76 0-0.552 0.448-1 1-1 0.303 0 0.575 0.135 0.758 0.348l0.001 0.001 1.4 1.4zM11 18.99c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1.98c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1.98zM4.35 17.060c-0.184 0.215-0.456 0.35-0.76 0.35-0.552 0-1-0.448-1-1 0-0.303 0.135-0.575 0.348-0.758l0.001-0.001 1.4-1.4c0.184-0.215 0.456-0.35 0.76-0.35 0.552 0 1 0.448 1 1 0 0.303-0.135 0.575-0.348 0.758l-0.001 0.001-1.4 1.4zM1.010 11c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.98c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-1.98zM2.94 4.35c-0.215-0.184-0.35-0.456-0.35-0.76 0-0.552 0.448-1 1-1 0.303 0 0.575 0.135 0.758 0.348l0.001 0.001 1.4 1.4c0.215 0.184 0.35 0.456 0.35 0.76 0 0.552-0.448 1-1 1-0.303 0-0.575-0.135-0.758-0.348l-0.001-0.001-1.4-1.4z"></path>
                    </svg>}
        </button>
    );
};

