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

export const DRAFTKINGS_CONFIG: ISiteConfig = {
    wait: 'div.sportsbook-outcome-cell__elements',
    mutationObserver: 'section.sportsbook-wrapper__body',
    makeSelectable: 'div[role="button"]'
}

export const BETMGM_CONFIG: ISiteConfig = {
    wait: 'div#main-view >* div.option-indicator',
    mutationObserver: 'div#main-view',
    makeSelectable: 'div.option-indicator'
}

export const CAESARS_CONFIG: ISiteConfig = {
    wait: 'div.selectionContainer >* button > div > span',
    mutationObserver: 'div.contentContainer',
    makeSelectable: 'button'
}

export const HOST_CONFIG_MAP : Record<string, ISiteConfig> = {
    'www.pinnacle.com': PINNACLE_CONFIG,
    'www.pinnacle.ca': PINNACLE_CONFIG,
    'sportsbook.draftkings.com': DRAFTKINGS_CONFIG,
    'sports.az.betmgm.com': BETMGM_CONFIG,
    'sports.co.betmgm.com': BETMGM_CONFIG,
    'sports.il.betmgm.com': BETMGM_CONFIG,
    'sports.in.betmgm.com': BETMGM_CONFIG,
    'sports.ia.betmgm.com': BETMGM_CONFIG,
    'sports.ks.betmgm.com': BETMGM_CONFIG,
    'sports.la.betmgm.com': BETMGM_CONFIG,
    'sports.md.betmgm.com': BETMGM_CONFIG,
    'sports.ma.betmgm.com': BETMGM_CONFIG,
    'sports.mi.betmgm.com': BETMGM_CONFIG,
    'sports.ms.betmgm.com': BETMGM_CONFIG,
    'sports.nj.betmgm.com': BETMGM_CONFIG,
    'sports.ny.betmgm.com': BETMGM_CONFIG,
    'sports.oh.betmgm.com': BETMGM_CONFIG,
    'sports.pa.betmgm.com': BETMGM_CONFIG,
    'sports.pr.betmgm.com': BETMGM_CONFIG,
    'sports.tn.betmgm.com': BETMGM_CONFIG,
    'sports.va.betmgm.com': BETMGM_CONFIG,
    'sports.dc.betmgm.com': BETMGM_CONFIG,
    'sports.wv.betmgm.com': BETMGM_CONFIG,
    'sports.wy.betmgm.com': BETMGM_CONFIG,
    'sports.on.betmgm.ca': BETMGM_CONFIG,
    'sportsbook.caesars.com': CAESARS_CONFIG
 }