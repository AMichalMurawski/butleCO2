import { css } from 'styled-components';

export const theme = {
  color: {
    main: '#121212',
    mainTrans: '#121212aa',
    structural: '#1F2A38',
    structuralTrans: '#1F2A38aa',
    remarkable: '#4FDFFF',
    remarkableTrans: '#4FDFFFaa',
    hightlight: '#83D7FF',
    hightlightTrans: '#83D7FFaa',
    accent: '#6BCB9C', //positive
    accentTrans: '#6BCB9Caa',
    text: '#F4F0EB',
    textTrans: '#F4F0EBaa',
    warning: '#E9AE3C',
    warningTrans: '#E9AE3Caa',
    danger: '#FF5A5A',
    dangerTrans: '#FF5A5Aaa',
  },
  fonts: {
    // Montserrat
    main: css`
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: 0.04em;
    `,
    // Crimson Text
    heading: css`
      font-family: 'Crimson Text', serif;
      font-weight: 700;
      line-height: 1.6;
      letter-spacing: 0.03em;
    `,
  },
  media: {
    m: '@media screen and (min-width: 480px)',
    t: '@media screen and (min-width: 768px)',
    d: '@media screen and (min-width: 992px)',
    l: '@media screen and (min-width: 1240px)',
  },
  css: {
    transition: (elements: string | string[]): string => {
      const trans = '300ms ease';

      if (typeof elements === 'string') {
        return `transition: ${elements} ${trans};`;
      }

      return `transition: ${elements
        .map(el => {
          return `${el} ${trans}`;
        })
        .join(', ')};`;
    },
  },
};

export type ThemeType = typeof theme;
