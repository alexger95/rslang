import React from 'react';
import './NavItem.scss';
import { Translation } from 'react-i18next';
import { Link } from "react-router-dom";

export const NavItem = (props) => {
  return (
    <li className="nav-item w-100 mt-2">
      <Link className="nav-link w-100 text-center" to={props.href}>
        {<Translation>
          {
            (t) => <>{t(props.title)}</>
          }
        </Translation>}
      </Link>
    </li>
  )
}
