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
  xxBigBold: 'bold 40px/53px',
  bigBold: 'bold 24px/32px',
  lgBold: 'bold 18px/24px',
  mdBold: 'bold 16px/21px',
  mdNormal: 'normal 16px/21px',
  smNormal: 'normal 16px/21px',
  xsNormal: 'normal 12x/16px',
};

const border = {
  solidStroke: '1px solid ' + color.stroke,
  solidStrokeVarient: '1px solid ' + color.strokeVarient,
};

const theme = {
  htmlFontSize: 16,
  color,
  fonts,
  border,

  pxToRem(px) {
    return px / this.htmlFontSize + 'rem';
  },
};

export default theme;
