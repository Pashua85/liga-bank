import {BREAKPOINTS} from '../variables';

type srcObject = {
  deskSrc: string,
  tabSrc: string,
  mobileSrc: string
}

export const chooseSrc = (width: number, {deskSrc, tabSrc, mobileSrc}: srcObject): string => {
  if (BREAKPOINTS.MOBILE < width && width <= BREAKPOINTS.TAB) {
    return tabSrc;
  } else if (width <= BREAKPOINTS.MOBILE) {
    return mobileSrc;
  } else {
    return deskSrc;
  }
};
