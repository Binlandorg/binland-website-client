import styled from "styled-components"

import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"
import H1 from "ui/Titles/H1"

export const HeroWrapper = styled.div`
    --color: ${colors.body};
    --size: 1rem;
    --border-radius: calc(var(--size) * 0.5);

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;

    @media only screen and (min-width: 900px) {
        --size: 2rem;

        margin-top: 5rem;
        gap: initial;
    }
`

export const HeroText = styled.div<{ $heightDiff: number }>`
    --fix-size: min(${props => Math.round(props.$heightDiff / 2)}px, var(--size));

    @media only screen and (min-width: 900px) {
        display: flex;
        position: relative;
        z-index: 2;

        & .title, & .text{
            flex: 1;
        }

        & .title{
            background-color: var(--color);
            height: fit-content;
            padding-bottom: 1rem;
            border-bottom-right-radius: var(--border-radius);
            position: relative;
            padding-right: 2rem;

            &.padding-none{
                padding-right: initial;
            }

            & .display-none{
                display: none;
            }

            & .border-radius-left-bottom, 
            & .border-radius-right-bottom{
                position: absolute;
                background-color: transparent;
                overflow: hidden;

                &::after{
                    content: "";
                    width: 100%;
                    height: 100%;
                    border-radius: var(--border-radius);
                    background-color: transparent;
                    position: absolute;
                }
            }

            & .border-radius-left-bottom{
                width: var(--size);
                height: var(--size);
                left: 0;
                top: 100%;

                &::after{
                    top: 0;
                    left: 0;
                    box-shadow: calc(var(--size) * -0.5) calc(var(--size) * -0.5) 0 0px var(--color);
                }
            }

            & .border-radius-right-bottom{
                width: var(--fix-size);
                height: var(--fix-size);
                right: 0;
                top: 100%;

                &::after{
                    top: 0;
                    left: 0;
                    box-shadow: calc(var(--fix-size) * 0.5) calc(var(--fix-size) * -0.5) 0 0px var(--color);
                }
            }
        }

        & .text{
            background-color: var(--color);
            height: fit-content;
            padding-bottom: 2rem;
            padding-left: 2rem;
            border-bottom-left-radius: var(--border-radius);
            position: relative;

            &.padding-none{
                padding-left: initial;
            }

            & .display-none{
                display: none;
            }

            & .border-radius-right-bottom, .border-radius-left-bottom{
                position: absolute;
                background-color: transparent;
                overflow: hidden;

                &::after{
                    content: "";
                    width: 100%;
                    height: 100%;
                    border-radius: var(--border-radius);
                    background-color: transparent;
                    position: absolute;
                }
            }

            & .border-radius-left-bottom{
                width: var(--fix-size);
                height: var(--fix-size);
                top: 100%;
                left: 0;

                &::after{
                    top: 0;
                    left: 0;
                    box-shadow: calc(var(--fix-size) * -0.5) calc(var(--fix-size) * -0.5) 0 0px var(--color);
                }
            }

            & .border-radius-right-bottom{
                width: var(--size);
                height: var(--size);
                top: 100%;
                right: 0;

                &::after{
                    top: 0;
                    left: 0;
                    box-shadow: calc(var(--size) * 0.5) calc(var(--size) * -0.5) 0 0px var(--color);
                }
            }
        }
    }

    @media only screen and (min-width: 900px) {
        & .title {
            max-width: min-content;
        }
    }
`

export const H1Bold = styled(H1)`
	font-weight: ${FontWeight.bold};
    color: ${colors.black.main};
    text-transform: uppercase;

    @media only screen and (min-width: 900px) {
        width: min-content;
        margin-top: -1.5rem;
    }
`

export const ImageContainer = styled.div<{$heightDiff: number}>`
  
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    margin-bottom: 2.5rem;

    & .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 15%;
        background-color: var(--color);
        border-bottom-right-radius: var(--border-radius);
        z-index: 1;

        &::after, &::before{
            content: "";
            position: absolute;
            width: var(--size);
            height: var(--size);
            border-radius: var(--border-radius);
            background-color:transparent;
            box-shadow: calc(var(--size) * -0.5) calc(var(--size) * -0.5) 0 0px var(--color);
        }

        &::after{
            top: 100%;
            left: 0;
        }

        &::before{
            top: 0;
            left: 100%;
        }
    }

    @media only screen and (min-width: 900px) {
        --size: 6rem;

        margin-top: -${({$heightDiff}) => $heightDiff}px;
        z-index: -1;

        & .overlay{
            display: none;
        }
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 1.2;
    transform-origin: left top;

    @media only screen and (min-width: 900px) {
        scale: initial;
    }
`

export const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    & .quote-icon{
        width: 2.25rem;

        & path{
            fill: ${colors.secondary.normal[300]};
        }
    }

    & .quote-text{
        font-weight: ${FontWeight.regular};
    }

    & .quote-icon:last-child{
        align-self: end;
    }
`