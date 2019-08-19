import React from 'react';
import styles from './Navbar.module.scss';

const style = {
  stylecontent: ` flex items-center ${styles.margin}`,
};

const UserComponent = () => {
  const nombreUser = 'Fulvia Buonanno';
  const correoUser = 'fb@bitada.com';

  return (
    <div className={style.stylecontent}>
      <img className={styles.avatar} alt="." />
      <div>
        <div className="text-electricalblue">{nombreUser}</div>
        <div>{correoUser}</div>
      </div>
    </div>
  );
};

export default UserComponent;
