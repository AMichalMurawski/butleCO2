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
  color1: {
    main: 'rgba(18, 18, 18, 1)',
    mainTrans: 'rgba(18, 18, 18, 0.67)',
    structural: 'rgba(31, 42, 56, 1)',
    structuralTrans: 'rgba(31, 42, 56, 0.67)',
    remarkable: 'rgb(232, 163, 58)',
    remarkableTrans: 'rgba(232, 163, 58, 0.67)',
    hightlight: 'rgb(232, 163, 58)',
    hightlightTrans: 'rgba(232, 163, 58, 0.67)',
    accent: 'rgba(107, 203, 156, 1)', //positive
    accentTrans: 'rgba(107, 203, 156, 0.67)',
    text: 'rgba(244, 240, 235, 1)',
    textTrans: 'rgba(244, 240, 235, 0.67)',
    warning: 'rgba(233, 174, 60, 1)',
    warningTrans: 'rgba(233, 174, 60, 0.67)',
    danger: 'rgba(240, 64, 64, 1)',
    dangerTrans: 'rgba(240, 64, 64, 0.67)',
  },
  color2: {
    main: 'rgba(18, 18, 18, 1)',
    mainTrans: 'rgba(18, 18, 18, 0.67)',
    structural: 'rgba(31, 42, 56, 1)',
    structuralTrans: 'rgba(31, 42, 56, 0.67)',
    remarkable: 'rgb(31, 228, 218)',
    remarkableTrans: 'rgba(31, 228, 218, 0.67)',
    hightlight: 'rgb(31, 228, 218)',
    hightlightTrans: 'rgba(31, 228, 218, 0.67)',
    accent: 'rgba(107, 203, 156, 1)', //positive
    accentTrans: 'rgba(107, 203, 156, 0.67)',
    text: 'rgba(244, 240, 235, 1)',
    textTrans: 'rgba(244, 240, 235, 0.67)',
    warning: 'rgba(233, 174, 60, 1)',
    warningTrans: 'rgba(233, 174, 60, 0.67)',
    danger: 'rgba(240, 64, 64, 1)',
    dangerTrans: 'rgba(240, 64, 64, 0.67)',
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
