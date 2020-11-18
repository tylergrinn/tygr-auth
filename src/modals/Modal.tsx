import React from 'react';

interface ModalProps {
  show: boolean;
  onDismiss: () => any;
}

export default function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { show, onDismiss } = props;

  const style = { display: show ? 'flex' : 'none' };

  return (
    <div className="tygr-modal" style={style} onClick={onDismiss}>
      <div onClick={(ev) => ev.stopPropagation()}>{props.children}</div>
    </div>
  );
}
