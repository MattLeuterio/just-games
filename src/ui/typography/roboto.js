import React from 'react';
import PropTypes from 'prop-types';
import Typeface, { TypefaceInterface } from './index';
import { FontBase } from '../../const';
import theme from '../theme';

const baseConfig = {
  color: 'unset',
  fontFamily: theme.fontset.roboto,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1.3,
  letterSpacing: 'unset',
  fontSize: FontBase
};

const types = {
  italic: {
    fontStyle: 'italic'
  },
  bold: {
    fontWeight: 700
  },
  boldItalic: {
    fontStyle: 'italic',
    fontWeight: 700
  },
  h1: {
    fontSize: 21,
    fontWeight: 400
  },
  h2: {
    fontSize: 18,
    fontWeight: 400
  },
  h3: {
    fontSize: 14,
    lineHeight: 1.14
  },
  headerMenuElements: {
    fontSize: 16
  },
  footerMenuElements: {
    fontSize: 28
  },
  mobileMenuElements: {
    fontSize: 24,
    fontWeight: 700
  },
  carouselTitle: {
    fontSize: 27,
    letterSpacing: '5px'
  },
  pageTitle: {
    fontSize: 42,
    fontWeight: 700
  },
  pageTitleSub: {
    fontSize: 16,
    color: `${theme.colors.primary.green}`
  },
  slogan: {
    fontSize: 36,
    lineHeight: 1.30,
    fontWeight: 700
  },
  pageSubtitleLarge: {
    fontSize: 24,
    lineHeight: 1.30,
    color: `${theme.colors.primary.green}`
  },
  label: {
    fontSize: 12,
    lineHeight: 1.17,
    letterSpacing: 'normal',
    textTransform: 'capitalize'
  },
  label1: {
    fontSize: 12,
    letterSpacing: '0.5px',
    fontWeight: 400,
    color: theme.colors.primary.gray
  },
  boldLabel: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.14
  },
  regularBold: {
    fontSize: 16,
    fontWeight: 700
  },
  labelUppercase: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  gameUppercase: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: theme.colors.primary.green
  },
  resultGame: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: theme.colors.primary.green
  },
  resultText: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: theme.colors.primary.lightGray
  },
  resultNumbers: {
    fontSize: 16,
    fontWeight: 400,
  },
  emailSuccessHead: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.colors.primary.green
  },
  emailSuccessBody: {
    fontSize: 14,
    fontWeight: 400
  },
  menuPeopleTitle: {
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  peopleSectionTitle: {
    fontSize: 28,
    fontWeight: 700,
    textTransform: 'capitalize'
  },
  peopleGameTitle: {
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'capitalize'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: theme.colors.primary.gray
  },
  cardNotifyTitle: {
    fontSize: 17,
    fontWeight: 700
  },
  cardNotifyDescription: {
    fontSize: 12,
    fontWeight: 400
  }
}  


const Roboto = ({
  type, configuration, children, htmlAttribute, onClick
}) => <Typeface htmlAttribute={htmlAttribute} configuration={{ ...baseConfig, ...types[type], ...configuration }} onClick={onClick}>{children}</Typeface>;

Roboto.propTypes = {
  htmlAttribute: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(types)),
  configuration: TypefaceInterface,
  onClick: PropTypes.func
};

export default Roboto;