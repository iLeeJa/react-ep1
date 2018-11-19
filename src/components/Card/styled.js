import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const CardWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  text-align: center;
  border-radius: 10px;
  margin: 32px;
  max-width: 311px;
  position: relative;

  /* Child element styles
  ------------------------------- */
  .card-header {
    position: relative;
  }

  .card-profile {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: space-between;

    .card-avatar {
      margin-right: -8px;

      .cover-ratio-1-1 {
        overflow: hidden;
        position: relative;
        padding-bottom: 100%;
        width: 26px;
        height: 26px;
      }
    }
    
    .card-avatar-img {
      border-radius: 50%;
      border: 2px solid ${VARIABLES.COLORS.WHITE};
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    .card-avatar-img-1 {
      z-index: 3;
    }

    .card-avatar-img-2 {
      z-index: 2;
    }

    .card-avatar-number {
      margin-left: 15px;
      line-height: 26px;
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_LIGHT_XS};
    }
  }

  .card-wishlist {
    position: absolute;
    top: 9px;
    right: 20px;
  }

  .card-title {
    position: absolute;
    bottom: 15px;
    left: 15px;
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_MD};
  }

  .cover-ratio-8-7 {
    overflow: hidden;
    position: relative;
    padding-bottom: 88.11%;

    .card-image {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-description {
    position: relative;
    padding: 15px;
    z-index: 3;
    background-color: ${VARIABLES.COLORS.WHITE};
    border-radius: 0 0 10px 10px;
    
    .card-steps {
      color: ${VARIABLES.COLORS.BLUE_6};
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_MEDIUM_MN};
      letter-spacing: 1px;
      text-align: left;
    }
    .card-detail {
      color: ${VARIABLES.COLORS.TEXT_DETAIL};
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_TN};
      letter-spacing: 1px;
      text-align: left;
      margin-top: 10px;
    }
  }

  .card-direction {
    position: absolute;
    top: -30px;
    right: 15px;
    border-radius: 50%;
    background-color: ${VARIABLES.COLORS.BLUE_3};
    background-image: linear-gradient(${VARIABLES.COLORS.BLUE_4}, ${VARIABLES.COLORS.BLUE_5});
    line-height: 58px;
    width: 58px;
    height: 58px;
    box-shadow: 0px 10px 20px rgba(9,151,249,0.4);

    .card-direction-img {
      position: relative;
    }
  }

  .card-timer {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    color: ${VARIABLES.COLORS.GRAY_5};
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_TN};
    letter-spacing: 1px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  &::before {
    content: ' ';
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: -15px;
    z-index: 2;
    background-color: ${VARIABLES.COLORS.BLUE_2};
    height: 143px;
    border-radius: 10px;
  }

  &::after {
    content: ' ';
    position: absolute;
    z-index: 1;
    left: 30px;
    right: 30px;
    bottom: -30px;
    background-color: ${VARIABLES.COLORS.GRAY_2};
    height: 143px;
    border-radius: 10px;
    filter: blur(1px);
    opacity: 0.1;
  }

  /* Modifiers
  ------------------------------- */
  /* UI */
  &.is-ui-theme-white {
    background-color: ${VARIABLES.COLORS.WHITE};
    color: ${VARIABLES.COLORS.WHITE};
  }

  /* UI for */

  /* Media queries
  ------------------------------- */
`
