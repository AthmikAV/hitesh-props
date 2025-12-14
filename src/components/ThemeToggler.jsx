import { useTheme } from '../contexts/ThemeContext'

const ThemeToggler = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className='bg-white mt-4 rounded-sm p-3'>
      <div className='flex justify-end'>
        <button onClick={toggleTheme} className='p-2 bg-blue-500 rounded-sm text-white'>{isDark ? 'dark' : 'light'}</button>
      </div>

      <button className={`rounded-sm p-2 ${isDark ? 'bg-orange-300 text-white' : 'bg-black text-white'}`}>Sign In</button>
      <p className={ `${isDark?'text-orange-300':'text-black'}`}>welcome to {isDark?'dark Mode':'light Mode' }</p>
      <div></div>
    </div>
  )
}

export default ThemeToggler