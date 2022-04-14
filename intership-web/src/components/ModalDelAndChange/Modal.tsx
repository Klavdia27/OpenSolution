import React, { useState } from 'react';
import { OrgModal, OrgModalContent } from 'Src/pages/Home/orgModal';
import cs from 'classnames';
import styles from './styles.module.scss';

export const Modal: React.FC = () => {
  const namePage = 'Organization';
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={cs(styles.modal_change)}>
      {showModal && (
        <OrgModal title="Add Organization" onClose={() => setShowModal(false)}>
          <OrgModalContent onClose={() => setShowModal(false)} />
        </OrgModal>
      )}
    </div>
  );
};
