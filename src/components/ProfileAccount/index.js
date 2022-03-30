import React from 'react';
import './styles.scss';

const ProfileAccount = ({ className }) => (
  <a href="https://github.com/dilysbi" className={`${className || ''} profile-account`}>
    <div className="account-name">
      <span>Dilys Ngo</span>
    </div>
    <div className="account-cover">
      <img
        className="image-avatar"
        src="/images/account.png"
        alt="alt"
        title="title"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/logo/nonAvatar.svg';
        }}
      />
    </div>
  </a>
);

export default ProfileAccount;
