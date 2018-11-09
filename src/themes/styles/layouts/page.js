import {
  injectGlobal
} from 'styled-components'
// import {
//   default as VARIABLES
// } from 'themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from 'themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from 'themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from 'themes/styles/helpers/utilities'
// import {
//   CONTENTS,
//   ICONS,
//   LOGOS,
//   SHAREDS,
//   VIDEOS,
//   AUDIOS,
//   DOCUMENTS
// } from 'themes'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Page
//
// * Home
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  /* Home
  ============================================================ */
  .home {
    .XXXXX {
      /* Style */
    }
  }

  .detail {
    background-color: #0F224C;
    
    .card-shadow-1 {
      position: absolute;
      left: 47px;
      bottom: -12px;
      z-index: 2;
      background-color: #435B7F;
      width: 281px;
      height: 200px;
      border-radius: 10px;
      filter: blur(1px);
      opacity: 0.8;
    }

    .card-shadow-2 {
      position: absolute;
      z-index: 1;
      left: 57px;
      bottom: -30px;
      background-color: #ccc;
      width: 261px;
      height: 200px;
      border-radius: 10px;
      filter: blur(1px);
      opacity: 0.1;
    }
  }
`;
