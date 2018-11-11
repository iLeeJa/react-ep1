import {
  css
} from 'styled-components'
import {
  default as VARIABLES
} from './variables' // Use relative path for React Styleguidist

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Typographys:
//
// Using: ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
//
// * First regular (XXXXX Regular)
//   - FIRST_REGULAR_MN  (px)
//
// Notice: Color, Hover/Focus can set at Global or Scaffolding
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Text default style
// ============================================================
const TEXT_DEFAULT = css`
  font-weight: normal;
  vertical-align: middle;
  text-transform: none;
`

export default {
  FONT_STYLES: {
    // First Light
    // ============================================================

    // Extra small
    // -------------------------------
    FIRST_LIGHT_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_LIGHT};
      font-size: ${VARIABLES.FONT_SIZES.XS};
    `,

    // First regular
    // ============================================================

    // Mini
    // -------------------------------

    // Tiny
    // -------------------------------
    FIRST_REGULAR_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
    `,

    // First medium
    // ============================================================

    // Mini
    // -------------------------------
    FIRST_MEDIUM_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.MN};
    `,

    // First bold
    // ============================================================
    
    // Medium
    // -------------------------------
    FIRST_BOLD_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MD};
    `,

  }
}
