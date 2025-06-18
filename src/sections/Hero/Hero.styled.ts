import styled, { keyframes } from 'styled-components';
import { ImageBg, Section } from '../../styles/Global.styled';

export const HeroSection = styled(Section)`
  position: relative;
  width: 100%;
  height: 600px;
  padding-top: 0;
  padding-inline: 0;
`;

export const ImagesRollWraper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const generateRollAnimation = (count: number) => {
  const step = 100 / count;
  const stepWait = step * 0.9;
  const stepMove = step * 0.1; 
  const stepTranslate: number = 100 / (count + 1);
  
  let keyframeString = `0% { transform: translateX(0); }`;

  let stepPercent: number = 0;
  let stepX: number = 0

  for (let i = 0; i < count; i++) {
    stepPercent += stepWait;
    keyframeString += `
      ${stepPercent}% { transform: translateX(-${stepX}%); }
    `;
    
    stepPercent += stepMove;
    stepX += stepTranslate;
    keyframeString += `
      ${stepPercent}% { transform: translateX(-${stepX}%); }
    `;
  }

  return keyframes`${keyframeString}`;
};

interface ImagesRollProps {
  $imagesCount: number;
};

export const ImagesRoll = styled.div<ImagesRollProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $imagesCount }) => `${($imagesCount + 1) * 100}%`};
  display: flex;
  flex-direction: row;
  animation: ${({$imagesCount}) => `${$imagesCount * 5}s`} ${({ $imagesCount }) => generateRollAnimation($imagesCount)} linear infinite;
`;

export const Image = styled(ImageBg)`
  filter: brightness(60%);
`;

export const Sentence = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.hightlight};
  text-shadow: 0 0 10px black;
  width: 80%;
`;
