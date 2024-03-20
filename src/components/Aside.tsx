
const Aside = () => {
  return (
    <aside>
      <div className='profile'><img src='/profile.png' alt='Profile picture' /></div>
      <h2><span>full-stack software engineer</span><span>problem solver</span><span>fun at parties</span></h2>
      <ul className='contact'>
        <li>
          <a href='https://www.linkedin.com/in/thalles-sales/' target='_blank'>
            <img src='/linkedin.svg' alt='LinkedIn' />
          </a>
        </li>
        <li>
          <a href='https://github.com/pud1m/personal-site' target='_blank'>
            <img src='/github.svg' alt='Github' />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Aside;
