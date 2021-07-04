const color = {
  error: '#ff4a6d',
  success: '#42d9bb',
  primary: '#f89a01',
  secondary: '#03a9f4',
  onSurface: '#2b273c',
  subtitle: '#757280',
  unselected: '#bbbac0',
  stroke: '#d8d8d8',
  strokeVarient: '#f3f3f3',
  surface: '#f7f7f7',
  background: '#ffffff',
};

const fonts = {
  xxBigBold: 'bold 40px/53px Shabnam',
  xBigBold: 'bold 32px/43px Shabnam',
  bigBold: 'bold 24px/32px Shabnam',
  lgBold: 'bold 18px/24px Shabnam',
  mdBold: 'bold 16px/21px Shabnam',
  mdNormal: 'normal 16px/21px Shabnam',
  smNormal: 'normal 14px/19px Shabnam',
  smNormalHighLine: 'normal 14px/24px Shabnam',
  xsNormal: 'normal 12px/16px Shabnam',
  xxsNormal: 'normal 10px/14px Shabnam',
};

const border = {
  solidStroke: '1px solid ' + color.stroke,
  solidStrokeVarient: '1px solid ' + color.strokeVarient,
  solidPrimaryThick: '4px solid ' + color.primary,
  dashedStroke: '1px dashed ' + color.stroke,
};

const boxShadow = {
  insetStroke: 'inset 0 0 0.5px 0.5px ' + color.stroke,
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
