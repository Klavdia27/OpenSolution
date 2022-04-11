// import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
// import { ModalTitle } from './ModalTitle';
// import cs from 'classnames';
// import styles from './styles.module.scss';

// type Props = {
//   type: string,
//  };

// export const Modal: React.FC<Props> = ({ type, children, ...rest }) => {
//   switch (type) {
//     case 'organisation':
//       return (
//         <div>
//           <ModalTitle type="organisation" {...rest} />
//           <hr />
//           <div className={cs(styles.content)}> {children} </div>
//         </div>
//       );
//     case 'division':
//       return <ModalTitle type="division" {...rest} />;
//     case 'employee':
//       return <ModalTitle type="employee" {...rest} />;
//     default:
//       return null;
//   }
// };
