export interface ISiteConfig {
    wait: string;
    mutationObserver: string;
    makeSelectable: string;
  }

export const PINNACLE_CONFIG: ISiteConfig = {
    wait: 'div[class*="style_buttons"] >* button > span',
    mutationObserver: 'div#root',
    makeSelectable: 'button'
}