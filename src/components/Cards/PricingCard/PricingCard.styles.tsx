import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import type { IStyledPricingCardWrap } from "../../../types/components/PricingCard"

const PricingCardWrapStyles = styled.div<IStyledPricingCardWrap>`
    background-color: ${colors.white.main};
    border-radius: .5rem;
    ${({ $isHighlight }) => $isHighlight && `outline: 3px solid ${colors.primary.normal[500]};`}
    padding: 1rem;
    max-width: 25.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 1;
    
    @media only screen and (min-width: ${breakpoints.sm}) {
        padding: 1.5rem;
        border-radius: 1rem;
    }

    
    @media only screen and (min-width: ${breakpoints.xxl}) {
        min-height: 40.5625rem;

        &.highlight{
            min-height: 43.75rem;
        }
    }

    &:hover{
        box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
        outline: 3px solid ${colors.primary.active[600]};
        z-index: 0;
    }

    & .details{
        background-color: ${colors.tertiary[100]};
        padding: 1rem;
        border-radius: .25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        @media only screen and (min-width: ${breakpoints.sm}) {
            border-radius: .5rem;
        }
        
        & .price{
            display: flex;
            align-items: center;
            gap: 1rem;

            & h2, & h5{
                color: ${colors.primary.normal[500]};
            }

            & h2{
                &:is(:last-child){
                    font-size: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem) !important;
                }
            }

            & h5{
                opacity: 0.6;
                text-decoration: line-through;
            }
            
        }
    }

    & .includes{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1rem;
        
        @media only screen and (min-width: ${breakpoints.sm}) {
            margin-bottom: 1.5rem;
        }

        @media only screen and (min-width: ${breakpoints.xxl}) {}

        & ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            & li{
                display: flex;
                gap: 1rem;
                align-items: center;

                & .icon-check{
                    min-width: 1rem;
                    min-height: 1rem;
                    width: 1rem;
                    height: 1rem;
                    display: flex;
    
                    & svg{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    & .cta{
        margin-top: auto;
        display: flex;
        gap: 1rem;

        & .icon-check{
            min-width: 1rem;
            min-height: 1rem;
            width: 1rem;
            height: 1rem;
            display: flex;

            & svg{
                width: 100%;
                height: 100%;
            }
        }

        &[type="primary"]{
            & path{
                fill: ${colors.white.main};
            }
        }
        &[type="secondary"]{
            & path{
                fill: ${colors.black.main};
            }
        }
    }
`

export default PricingCardWrapStyles
