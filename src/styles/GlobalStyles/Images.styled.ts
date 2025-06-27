import styled from "styled-components";

interface ImageBgProps {
    $url: string;
  }
  
  export const ImageBg = styled.div<ImageBgProps>`
    width: 100%;
    height: 100%;
    background-image: url(${({ $url }) => $url || ''});
    background-size: cover;
    background-position: center;
  `;
  