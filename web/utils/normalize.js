import { css } from 'styled-components'

export const normalize = css`
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */

  /* Document
   ========================================================================== */

  /**
 * Use a better box model (opinionated).
 */

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /**
 * Use a more readable tab size (opinionated).
 */

  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
   ========================================================================== */

  /**
 * Remove the margin in all browsers.
 */

  body {
    margin: 0;
  }

  /**
 * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
 */

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`
