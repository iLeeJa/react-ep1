import styled from 'styled-components'
// import {
//   default as VARIABLES
// } from '../../themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../themes/styles/bases/typographys'
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
    font-family: 'Roboto-Light';
    
    .card-profile-img {
      margin-right: -8px;
      border-radius: 50%;
      border: 2px solid #FFFFFF;
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
      font-size: 18px;
      line-height: 26px;
    }
  }

  .card-wishlist {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
  }

  .card-title {
    position: absolute;
    bottom: 15px;
    left: 15px;
    font-family: 'Roboto-Bold';
    font-size: 26px;
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
      color: #005BF4;
      font-family: 'Roboto-Medium';
      font-size: 12px;
      letter-spacing: 1px;
      text-align: left;
    }
    .card-detail {
      color: #3A3D44;
      font-family: 'Roboto-Regular';
      font-size: 14px;
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
    background-color: #0A82FA;
    background-image: linear-gradient(#0997F9, #054DF9);
    color: #FFFFFF;
    font-size: 24px;
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
    color: #9E9FA3;
    font-family: 'Roboto-Regular';
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  /* Modifiers
  ------------------------------- */
  /* UI */
  &.is-ui-bg-white {
    background-color: #FFFFFF;
  }

  .card-header {
    &.is-ui-font-white {
      color: #FFFFFF;
    }
  }

  /* UI for */

  /* Media queries
  ------------------------------- */
`
