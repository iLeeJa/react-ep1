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
  position: relative;
  z-index: 3;
  /*box-shadow: 0 20px 5px #DDDDDD, 0 30px 5px #EEEEEE;*/

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
    
    .card-profile-img {
      margin-right: -8px;
      border-radius: 50%;
      border: 2px solid ${VARIABLES.COLORS.WHITE};
      width: 26px;
      height: 26px;
    }

    .card-profile-img-1 {
      z-index: 3;
    }

    .card-profile-img-2 {
      z-index: 2;
    }

    .card-proflie-number {
      margin-left: 15px;
      line-height: 26px;
      ${TYPOGRAPHYS.FONT_STYLES.FIRST_LIGHT_XS};
    }
  }

  .card-wishlist {
    position: absolute;
    top: 15px;
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
    
    .card-steps {
      color: ${VARIABLES.COLORS.BLUE_3};
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
    background-color: ${VARIABLES.COLORS.BLUE_2};
    background-image: linear-gradient(#0997F9, #054DF9);
    line-height: 58px;
    width: 58px;
    height: 58px;

    .card-direction-img {
      position: relative;
      top: -3px;
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
