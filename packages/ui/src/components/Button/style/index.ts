import { css, type SerializedStyles } from '@emotion/react'
import { presetColor } from '../../style'
import type { IButtonPropsType } from '../index'

type NotUndefined<T> = Exclude<T, null | undefined>

export const buttonBaseCss = css({
  outline: 'none',
  border: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  touchAction: 'manipulation',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 0.7,
  },
})

const genStyleByTypeAndFill = (
  type: NotUndefined<IButtonPropsType['type']>,
  fill: NotUndefined<IButtonPropsType['fill']>
): SerializedStyles => {
  const baseColor = presetColor[type]
  const textColor = fill !== 'solid' ? baseColor : presetColor.white100
  const backgroundColor = fill !== 'solid' ? 'transparent' : baseColor
  const borderColor = fill !== 'none' ? baseColor : 'transparent'

  return css({
    backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
  })
}

const genStyleBySize = (size: NotUndefined<IButtonPropsType['size']>): SerializedStyles => {
  const sizeStyleMap = {
    mini: {
      borderRadius: '2px',
      padding: '0px 7px',
      fontSize: 12,
      height: 20,
      lineHeight: '20px',
    },
    small: {
      borderRadius: '2px',
      padding: '0px 10px',
      fontSize: 12,
      height: 24,
      lineHeight: '24px',
    },
    middle: {
      borderRadius: '4px',
      padding: '0px 10px',
      height: '30px',
      lineHeight: '30px',
      fontSize: 14,
    },
    large: {
      borderRadius: '6px',
      padding: '0px 14px',
      height: '34px',
      lineHeight: '34px',
      fontSize: 16,
    },
  }
  return css(sizeStyleMap[size])
}

const genStyleByBlock = (block: NotUndefined<IButtonPropsType['block']>): SerializedStyles => {
  if (block) {
    return css({
      display: 'flex',
      width: '100%',
    })
  }

  return css({
    display: 'inline-flex',
  })
}

const genStyleByDisabled = (disabled: NotUndefined<IButtonPropsType['disabled']>) => {
  return css({
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  })
}

export const genStyleByProps = (payload: IButtonPropsType): SerializedStyles => {
  const {
    block = false,
    size = 'middle',
    fill = 'solid',
    type = 'primary',
    disabled = false,
  } = payload

  return css([
    buttonBaseCss,
    genStyleByBlock(block),
    genStyleBySize(size),
    genStyleByTypeAndFill(type, fill),
    genStyleByDisabled(disabled),
  ])
}