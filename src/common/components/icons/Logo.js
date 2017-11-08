import React, {PropTypes} from 'react'
import cn from 'classnames'
import theme from 'common/theme'
import Icon from './Icon'

const defaultColors = {
  strokeColor: 'transparent',
  backgroundColor: 'transparent',
  textColor: 'transparent'
}

const standartColors = {
  ...defaultColors,
  strokeColor: '#000',
  backgroundColor: theme.color,
  textColor: '#000'
}

const inverseColors = {
  ...defaultColors,
  strokeColor: theme.textColorInverse,
  backgroundColor: 'transparent',
  textColor: theme.textColorInverseActive
}

const Logo = ({className, strokeColor, backgroundColor, textColor, inverse}) => {
  let colors = standartColors
  if (inverse) colors = inverseColors
  // If there are custom colors - apply whem above other othes
  if (strokeColor || backgroundColor || textColor) {
    colors = {
      strokeColor: strokeColor || defaultColors.strokeColor,
      backgroundColor: backgroundColor || defaultColors.backgroundColor,
      textColor: textColor || defaultColors.textColor
    }
  }

  return (
    <Icon>
      {({classes}) => (
        <svg
          className={cn(classes.icon, className)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
        >
          <path fill={colors.backgroundColor} d="M0 13h95v94H0z" />
          <path fill={colors.strokeColor} d="M96,107.5H0v-95h96V107.5z M1.803,105.705h92.393v-91.41H1.803C1.803,14.295,1.803,105.705,1.803,105.705z" />
          <path fill={colors.textColor} d="M64.294 86.574c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951c7.544 3.235 11.803 6.533 11.803 13.948 0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079 0-.002 7.215-4.194 7.215-4.194zm32.029 0c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951C115.741 76.76 120 80.058 120 87.473c0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079l7.216-4.193zm-63.393.77c1.395 2.475 2.664 4.567 5.714 4.567 2.917 0 4.757-1.141 4.757-5.579V56.141h8.878v30.31c0 9.193-5.39 13.378-13.258 13.378-7.109 0-11.226-3.679-13.32-8.11l7.229-4.375c0-.001 0 0 0 0z" />
        </svg>
      )}
    </Icon>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  strokeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  inverse: PropTypes.bool
}

Logo.defaultProps = {
  className: null,
  strokeColor: null,
  backgroundColor: null,
  textColor: null,
  inverse: false
}

export default Logo
