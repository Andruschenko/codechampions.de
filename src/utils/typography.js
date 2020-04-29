import Typography from 'typography';
import GrandView from 'typography-theme-grand-view';
import { PRIMARY, PRIMARY_HOVER } from '../constants/Color';

GrandView.overrideThemeStyles = ({ rhythm }) => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      padding: '2px 3px',
      color: PRIMARY,
    },
    'a:hover,a:active': {
      textDecoration: 'none',
      textShadow: 'none',
      backgroundImage: 'none',

      backgroundColor: PRIMARY_HOVER,
      color: 'white',
      padding: '2px 3px',
      borderRadius: '4px',
    },
    blockquote: {
      borderLeft: rhythm(6 / 16) + ' solid ' + '#914b00',
    },
  };
};

delete GrandView.googleFonts;

const typography = new Typography(GrandView);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
