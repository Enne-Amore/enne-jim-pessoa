export interface ProjectsType {
  id: string;
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
