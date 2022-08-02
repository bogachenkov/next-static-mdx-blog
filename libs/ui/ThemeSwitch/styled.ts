import styled from 'styled-components';

export const StyledSwitchButton = styled.button`
  --size: 2.8rem;

  padding: 0;
  border: none;
  background-color: transparent;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;

  @media (hover: none) {
    --size: 2.5rem;
  }
`;

export const StyledSwitchIcon = styled.svg`
  inline-size: 100%;
  block-size: 100%;
  stroke-linecap: round;

  & > :is(#switch-moon, #switch-sun, #switch-beams) {
    transform-origin: center center;
  }

  & > :is(#switch-moon, #switch-sun) {
    fill: var(--color-icon);

    ${StyledSwitchButton}:is(:hover, :focus-visible) > & {
      fill: var(--color-icon-hover);
    }
  }

  & > #switch-beams {
    stroke: var(--color-icon);
    stroke-width: 2px;
  }

  ${StyledSwitchButton}[data-theme="dark"] & {
    & > #switch-sun {
      transform: scale(1.75);
    }

    & > #switch-beams {
      opacity: 0;
    }

    & > #switch-moon > circle {
      transform: translateX(-7px);

      @supports (cx: 1) {
        transform: translateX(0);
        cx: 17;
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    & > #switch-sun {
      transition: transform .5s var(--ease-elastic-3);
    }

    & > #switch-beams {
      transition: 
        transform .5s var(--ease-elastic-4),
        opacity .5s var(--ease-3)
      ;
    }

    & #switch-moon > circle {
      transition: transform .25s var(--ease-out-5);

      @supports (cx: 1) {
        transition: cx .25s var(--ease-out-5);
      }
    }

    ${StyledSwitchButton}[data-theme="dark"] & {
      & > #switch-sun {
        transform: scale(1.75);
        transition-timing-function: var(--ease-3);
        transition-duration: .25s;
      }

      & > #switch-beams {
        transform: rotateZ(-25deg);
        transition-duration: .15s;
      }

      & > #switch-moon > circle {
        transition-delay: .25s;
        transition-duration: .5s;
      }
    }
  }
`;