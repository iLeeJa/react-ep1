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
  border: 1px solid #000000;
  border-radius: 10px;
  margin: 30px;

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
    color: #FFFFFF;
    
    .card-profile-img {
      margin-right: -5px;
      font-size: 24px;
    }

    .card-proflie-number {
      margin-left: 10px;
      font-size: 18px;
      line-height: 24px;
    }
  }

  .card-wishlist {
    position: absolute;
    top: 15px;
    right: 20px;
    color: #FFFFFF;
    font-size: 24px;
  }

  .card-title {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #FFFFFF;
    font-size: 28px;
  }

  .card-image {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }

  .card-description {
    position: relative;
    padding: 15px;
    
    .card-steps {
      color: #005BF4;
      font-size: 12px;
      text-align: left;
    }
    .card-detail {
      color: #3A3D44;
      font-size: 16px;
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
    color: #FFFFFF;
    font-size: 24px;
    line-height: 60px;
    width: 60px;
    height: 60px;
  }

  .card-timer {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    color: #9E9FA3;
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 10px;
  }

  /* Modifiers
  ------------------------------- */
  /* UI */
  &.is-ui-bg-white {
    background-color: #FFFFFF;
  }
  /* UI for */
  /* Color */
  /* Media queries
  ------------------------------- */
`
