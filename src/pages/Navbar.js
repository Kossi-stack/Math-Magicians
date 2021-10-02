import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [{
    key: 1,
    path: '/',
    title: 'Home',
  },
  {
    key: 2,
    path: '/calculator',
    title: 'Calculator',
  },
  {
    key: 3,
    path: '/quote',
    title: 'Quote',
  },
  ];

  const createLinks = () => links.map((link) => (
    <li key={link.key}>
      <NavLink
        to={link.path}
        className="link"
        activeClassName="link-active"
        exact
      >
        { ' ' }
        {' '}
        { link.title }
        {' '}
        { ' ' }

      </NavLink>
      {' '}
      { ' ' }

    </li>
  ));

  return (
    <nav>
      <div className="nav-container">
        <NavLink to={links[0].path}>
          <h1>
            {' '}
            { ' ' }
            Math Magicians
            {' '}
            { ' ' }
            {' '}

          </h1>
          {' '}
          { ' ' }

        </NavLink>
        {' '}
        { ' ' }
        {' '}
        <ul>
          {' '}
          { ' ' }
          {' '}
          { createLinks() }
          {' '}
          { ' ' }

        </ul>
        {' '}
        { ' ' }

      </div>
      {' '}
      { ' ' }

    </nav>
  );
};

export default Navbar;
