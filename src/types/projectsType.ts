export interface ProjectsType {
  id: string;
  card: {
    url: string;
    ariaLabel: string;
    imgMobile: string;
    imgDesktop: string;
    alt: string;
    positions: string[];
    caption: string;
  };
  header: {
    headerStyle: string;
    positions: string[];
    positionStyle: string;
    img: string;
    alt: string;
    imgStyle: string;
    caption: string;
    captionStyle: string;
    downStyle: string;
  };
  accesses: {
    id: string;
    img: string;
    alt: string;
    urlSite?: string;
    ariaLabelSite?: string;
    urlFigma?: string;
    ariaLabelFigma?: string;
    urlGitHub?: string;
    ariaLabelGitHub?: string;
    urlMainStyle: string;
    urlSecondaryStyle?: string;
  };
}
