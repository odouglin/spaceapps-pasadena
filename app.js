// Import all components
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';
import {MDCBanner} from '@material/banner';


//
// Instantiate all components
//
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const banner = new MDCBanner(document.querySelector('.mdc-banner'));
