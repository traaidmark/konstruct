// PART [ NOTIFICATION ] #######################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React, { useCallback } from 'react';
import propTypes from 'prop-types';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import './stylesheet.css';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Notification  = ({
  children,
  className = '',
  icon,
  ...rest
}) => {

  // 2.1. FUNCTIONS ............................................................

  // 2.1.1. ICON

  const Icon = useCallback(() => {
    if(!icon) return null;
    const isString = typeof icon === 'string' ? true : false;
    return(
      <figure className="p-notification__icon">
        {
          isString ? <img src={ icon } alt="notification icon" /> : icon
        }
      </figure>
    );
  }, [icon]);

  // 2.1.1. END

  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <aside className={ `p-notification ${ className }` } { ...rest }>
      <Icon />
      { children }
    </aside>
  );

  // 2.2. END ..................................................................

};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Notification.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  icon: propTypes.oneOf[
    propTypes.string,
    propTypes.node
  ],
};

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Notification;

// END OF FILE #################################################################
