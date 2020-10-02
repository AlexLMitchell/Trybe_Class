import React from 'react';
import PropTypes from 'prop-types'

const Pictures = (props) => {
  const { height, src, alt, legenda, style } = props;
  return (
    <div>
      <img height={height} src={src} alt={alt} legenda={legenda} style={style} />
      {props.children}
    </div>
  )
}

Pictures.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  children: PropTypes.string.isRequired,
}

Pictures.defaultProps = {
  height: 100,
}

export default Pictures;