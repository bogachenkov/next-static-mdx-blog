import Image from 'next/future/image';
import styled from 'styled-components';

export const StyledMdxImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: filter .3s linear;
  filter: blur(var(--image-blur));
`;