import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import profiler from 'app/utils/profiler';

type Props = {
  overlay?: boolean;
  dark?: boolean;
  mini?: boolean;
  triangle?: boolean;
  finished?: boolean;
  relative?: boolean;
  hideMessage?: boolean;
  hideSpinner?: boolean;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactChildren;
};

function LoadingIndicator(props: Props) {
  const {
    hideMessage,
    mini,
    triangle,
    overlay,
    dark,
    children,
    finished,
    className,
    style,
    relative,
    size,
    hideSpinner,
  } = props;
  const cx = classNames(className, {
    overlay,
    dark,
    loading: true,
    mini,
    triangle,
  });

  const loadingCx = classNames({
    relative,
    'loading-indicator': true,
    'load-complete': finished,
  });

  let loadingStyle = {};
  if (size) {
    loadingStyle = {
      width: size,
      height: size,
    };
  }

  return (
    <div className={cx} style={style}>
      {!hideSpinner && (
        <div className={loadingCx} style={loadingStyle}>
          {finished ? <div className="checkmark draw" /> : null}
        </div>
      )}

      {!hideMessage && <div className="loading-message">{children}</div>}
    </div>
  );
}

LoadingIndicator.propTypes = {
  overlay: PropTypes.bool,
  dark: PropTypes.bool,
  mini: PropTypes.bool,
  triangle: PropTypes.bool,
  finished: PropTypes.bool,
  relative: PropTypes.bool,
  hideMessage: PropTypes.bool,
  size: PropTypes.number,
  hideSpinner: PropTypes.bool,
};

export default profiler()(LoadingIndicator);
