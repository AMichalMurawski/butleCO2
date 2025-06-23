import { css } from 'styled-components';

export const theme = {
  color: {
    main: '#121212',
    mainTrans: '#121212aa',
    structural: '#1F2A38',
    structuralTrans: '#1F2A38aa',
    // structural: '#1E1E1E',
    // structuralTrans: '#1E1E1Eaa',
    // remarkable: '#5FB3F3', //info
    // remarkableTrans: '#5FB3F3aa',
    // remarkable: '#83D7FF', //info
    // remarkableTrans: '#83D7FFaa',
    // remarkable: '#7A99FF', //info
    // remarkableTrans: '#7A99FFaa',
    // hightlight: '#A1C9F1',
    // hightlightTrans: '#A1C9F1aa',
    // hightlight: '#CFE6FF',
    // hightlightTrans: '#CFE6FFaa',
    // hightlight: '#90CAFF',
    // hightlightTrans: '#90CAFFaa',
    remarkable: '#4FDFFF',
    remarkableTrans: '#4FDFFFaa',
    // hightlight: '#8CFFFF',
    // hightlightTrans: '#8CFFFFaa',
    hightlight: '#83D7FF',
    hightlightTrans: '#83D7FFaa',
    accent: '#6BCB9C', //positive
    accentTrans: '#6BCB9Caa',
    // text: '#E5E5E5',
    // textTrans: '#E5E5E5aa',
    text: '#F4F0EB',
    textTrans: '#F4F0EBaa',
    warning: '#E9AE3C',
    warningTrans: '#E9AE3Caa',
    danger: '#E57373',
    dangerTrans: '#E57373aa',
  },
  fonts: {
    // Roboto + Roboto Slab
    // main: css`
    //   font-family: 'Roboto', sans-serif;
    //   font-weight: 400;
    //   line-height: 1.6;
    //   letter-spacing: 0.04em;
    // `,
    // heading: css`
    //   font-family: 'Roboto Slab', serif;
    //   font-weight: 700;
    //   line-height: 1.8;
    //   letter-spacing: 0.02em;
    // `,

    // Montserrat + Merriweather
    main: css`
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: 0.04em;
    `,
    // heading: css`
    //   font-family: 'Merriweather', serif;
    //   font-weight: 700;
    //   line-height: 2;
    //   letter-spacing: 0.06em;
    // `,

    // Poppins + Lora
    // main: css`
    //   font-family: 'Poppins', sans-serif;
    //   font-weight: 400;
    //   line-height: 1.6;
    //   letter-spacing: 0.04em;
    // `,
    // heading: css`
    //   font-family: 'Lora', serif;
    //   font-weight: 700;
    //   line-height: 1.8;
    //   letter-spacing: 0.03em;
    // `,

    // Open Sans + PT Serif
    // main: css`
    //   font-family: 'Open Sans', sans-serif;
    //   font-weight: 400;
    //   line-height: 1.6;
    //   letter-spacing: 0.03em;
    // `,
    // heading: css`
    //   font-family: 'PT Serif', serif;
    //   font-weight: 700;
    //   line-height: 1.8;
    //   letter-spacing: 0.03em;
    // `,

    // Work Sans + Crimson Text
    // main: css`
    //   font-family: 'Work Sans', sans-serif;
    //   font-weight: 400;
    //   line-height: 1.6;
    //   letter-spacing: 0.03em;
    // `,
    heading: css`
      font-family: 'Crimson Text', serif;
      font-weight: 700;
      line-height: 1.6;
      letter-spacing: 0.03em;
    `,
  },
};

export type ThemeType = typeof theme;
