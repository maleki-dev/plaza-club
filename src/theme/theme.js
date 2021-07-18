const color = {
  error: '#ff4a6d',
  success: '#00B5B5',
  primary: '#f89a01',
  secondary: '#03a9f4',
  onSurface: '#2b273c',
  subtitle: '#757280',
  unselected: '#bbbac0',
  stroke: '#d8d8d8',
  strokeVariant: '#f3f3f3',
  surface: '#f7f7f7',
  background: '#ffffff',
  newBackground: '#f5f9fe',
  newBackgroundVariant: '#deedff',
  placeholder: '#a2bad5',
};

const fontFamily = 'IranYekan';

const fonts = {
  xxBigBold: `bold 40px/53px ${fontFamily}`,
  xBigBold: `bold 32px/43px ${fontFamily}`,
  bigBold: `bold 24px/32px ${fontFamily}`,
  lgBold: `bold 18px/24px ${fontFamily}`,
  mdBold: `bold 16px/21px ${fontFamily}`,
  mdNormal: `normal 16px/21px ${fontFamily}`,
  smNormal: `normal 14px/19px ${fontFamily}`,
  smNormalHighLine: `normal 14px/24px ${fontFamily}`,
  xsNormal: `normal 12px/16px ${fontFamily}`,
  xxsNormal: `normal 10px/14px ${fontFamily}`,
};

const border = {
  solidStroke: '1px solid ' + color.stroke,
  solidStrokeVariant: '1px solid ' + color.strokeVariant,
  solidPrimaryThick: '4px solid ' + color.primary,
  solidPrimaryMedium: '2px solid ' + color.primary,
  solidNewBackgroundMedium: '2px solid ' + color.newBackground,
  dashedStroke: '1px dashed ' + color.stroke,
};

const boxShadow = {
  insetStroke: 'inset 0 0 0.5px 0.5px ' + color.stroke,
  outsetBlack: '0 0 24px rgba(0, 0, 0, 0.16)',
  outsetBlackLight: '0 12px 24px rgba(0, 0, 0, 0.04)',
  outsetBlackLighter: '0 3px 24px rgba(0, 0, 0, 0.06)',
};

const theme = {
  htmlFontSize: 16,
  color,
  fonts,
  border,
  boxShadow,

  pxToRem(input) {
    const reference = this.htmlFontSize;
    if (typeof input === 'string') {
      return input
        .split(' ')
        .map(value => (value !== '0' ? value / reference + 'rem' : 0))
        .join(' ');
    } else if (typeof input === 'number') {
      return input / reference + 'rem';
    }
  },
};

export default theme;
