export interface ISiteConfig {
    wait: string;
    mutationObserver: string;
    makeSelectable: string;
  }

export const PINNACLE_CONFIG: ISiteConfig = {
    wait: 'div[class*="style_buttons"] >* button > span',
    mutationObserver: 'div#root',
    makeSelectable: '[class*="style_button__"]'
}

export const DRAFTKINGS_CONFIG: ISiteConfig = {
    wait: 'div.sportsbook-outcome-cell__elements',
    mutationObserver: 'section.sportsbook-wrapper__body',
    makeSelectable: 'div.sportsbook-outcome-cell__body'
}

export const BETMGM_CONFIG: ISiteConfig = {
    wait: 'div#main-view >* div.option-indicator',
    mutationObserver: 'div#main-view',
    makeSelectable: 'html'
}

export const CAESARS_CONFIG: ISiteConfig = {
    wait: 'div.selectionContainer >* button > div > span',
    mutationObserver: 'div.contentContainer',
    makeSelectable: '.cui-select-none'
}

export const BET365_CONFIG: ISiteConfig = {
    wait: 'div.gl-Participant_General > span',
    mutationObserver: 'div.wc-PageView',
    makeSelectable: '.g5-Application'
}

export const BETRIVERS_CONFIG: ISiteConfig = {
    wait: 'button.KambiBC-betty-outcome > div',
    mutationObserver: 'section.main-content',
    makeSelectable: 'button'
}

export const UNIBET_CONFIG: ISiteConfig = {
    wait: 'button.KambiBC-betty-outcome > div',
    mutationObserver: 'div#rightPanel',
    makeSelectable: 'button'
}

export const LEOVEGAS_CONFIG: ISiteConfig = {
    wait: 'button.KambiBC-betty-outcome > div',
    mutationObserver: 'div#sports-client',
    makeSelectable: 'button'
}

export const POINTSBET_CONFIG: ISiteConfig = {
    wait: 'div#mainContent >* button > span',
    mutationObserver: 'div#container',
    makeSelectable: 'button'
}

export const NORTHSTARBETS_CONFIG: ISiteConfig = {
    wait: 'button.KambiBC-betty-outcome > div',
    mutationObserver: 'div#main-content',
    makeSelectable: 'button'
}

export const BETANO_CONFIG: ISiteConfig = {
    wait: 'div.selections > button > span',
    mutationObserver: 'section.main-content-wrapper',
    makeSelectable: '.selections__selection'
}

export const ACTION247_CONFIG: ISiteConfig = {
    wait: 'div[class*="priceBlockContainer"]',
    mutationObserver: 'section#body-content',
    makeSelectable: 'body'
}

export const PADDYPOWER_CONFIG: ISiteConfig = {
    wait: '.button__content > span',
    mutationObserver: 'div#main-container',
    makeSelectable: 'abc-button .button'
}

export const THIRTYTWORED_CONFIG: ISiteConfig = {
    wait: 'button.KambiBC-betty-outcome > div',
    mutationObserver: 'div#sportsbook-frame',
    makeSelectable: 'button'
}

export const WILLIAMHILL_CONFIG: ISiteConfig = {
    wait: 'div.btmarket__selection > button > span',
    mutationObserver: 'main#main',
    makeSelectable: 'button'
}

export const SUPERBOOK_CONFIG: ISiteConfig = {
    wait: 'div.marketgroup >* div.value > div > div.selectionprice',
    mutationObserver: 'main.v-content',
    makeSelectable: '.selection-data'
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
    'sportsbook.caesars.com': CAESARS_CONFIG,
    'www.nj.bet365.com': BET365_CONFIG,
    'www.co.bet365.com': BET365_CONFIG,
    'www.ia.bet365.com': BET365_CONFIG,
    'www.va.bet365.com': BET365_CONFIG,
    'www.bet365.com': BET365_CONFIG,
    'www.on.bet365.ca': BET365_CONFIG,
    'www.bet365.com.au': BET365_CONFIG,
    'www.bet365.nl': BET365_CONFIG,
    'www.bet365.ee': BET365_CONFIG,
    'www.bet365.it': BET365_CONFIG,
    'www.bet365.es': BET365_CONFIG,
    'www.bet365.gr': BET365_CONFIG,
    'www.bet365.de': BET365_CONFIG,
    'www.bet365.com.cy': BET365_CONFIG,
    'www.bet365.mx': BET365_CONFIG,
    'www.bet365.dk': BET365_CONFIG,
    'sports.borgataonline.com': BETMGM_CONFIG,
    'sports.partypoker.com': BETMGM_CONFIG,
    'sports.bwin.com': BETMGM_CONFIG,
    'sports.sportingbet.com': BETMGM_CONFIG,
    'ny.betrivers.com': BETRIVERS_CONFIG,
    'pa.betrivers.com': BETRIVERS_CONFIG,
    'nj.betrivers.com': BETRIVERS_CONFIG,
    'oh.betrivers.com': BETRIVERS_CONFIG,
    'in.betrivers.com': BETRIVERS_CONFIG,
    'il.betrivers.com': BETRIVERS_CONFIG,
    'md.betrivers.com': BETRIVERS_CONFIG,
    'mi.betrivers.com': BETRIVERS_CONFIG,
    'ia.betrivers.com': BETRIVERS_CONFIG,
    'co.betrivers.com': BETRIVERS_CONFIG,
    'az.betrivers.com': BETRIVERS_CONFIG,
    'la.betrivers.com': BETRIVERS_CONFIG,
    'va.betrivers.com': BETRIVERS_CONFIG,
    'wv.betrivers.com': BETRIVERS_CONFIG,
    'on.betrivers.ca': BETRIVERS_CONFIG,
    'ct.playsugarhouse.com': BETRIVERS_CONFIG,
    'www.unibet.com': UNIBET_CONFIG,
    'nj.betparx.com': BETRIVERS_CONFIG,
    'oh.betparx.com': BETRIVERS_CONFIG,
    'www.playgunlake.com': BETRIVERS_CONFIG,
    'pa.betparx.com': BETRIVERS_CONFIG,
    'www.leovegas.com': LEOVEGAS_CONFIG,
    'nj.pointsbet.com': POINTSBET_CONFIG,
    'co.pointsbet.com': POINTSBET_CONFIG,
    'il.pointsbet.com': POINTSBET_CONFIG,
    'in.pointsbet.com': POINTSBET_CONFIG,
    'ia.pointsbet.com': POINTSBET_CONFIG,
    'ks.pointsbet.com': POINTSBET_CONFIG,
    'la.pointsbet.com': POINTSBET_CONFIG,
    'md.pointsbet.com': POINTSBET_CONFIG,
    'mi.pointsbet.com': POINTSBET_CONFIG,
    'ny.pointsbet.com': POINTSBET_CONFIG,
    'oh.pointsbet.com': POINTSBET_CONFIG,
    'pa.pointsbet.com': POINTSBET_CONFIG,
    'wv.pointsbet.com': POINTSBET_CONFIG,
    'va.pointsbet.com': POINTSBET_CONFIG,
    'www.northstarbets.ca': NORTHSTARBETS_CONFIG,
    'www.betano.ca': BETANO_CONFIG,
    'www.betano.com': BETANO_CONFIG,
    'www.betano.bg': BETANO_CONFIG,
    'www.betano.pt': BETANO_CONFIG,
    'ro.betano.com': BETANO_CONFIG,
    'www.betano.de': BETANO_CONFIG,
    'www.betano.cz': BETANO_CONFIG,
    'pe.betano.com': BETANO_CONFIG,
    'cl.betano.com': BETANO_CONFIG,
    'pl.betano.com': BETANO_CONFIG,
    'sportsbook.action247.com': ACTION247_CONFIG,
    'www.paddypower.com': PADDYPOWER_CONFIG,
    'www.paddypower.ie': PADDYPOWER_CONFIG,
    'www.32red.com': THIRTYTWORED_CONFIG,
    'sports.williamhill.com': WILLIAMHILL_CONFIG,
    'az.superbook.com': SUPERBOOK_CONFIG,
    'co.superbook.com': SUPERBOOK_CONFIG,
    'iowa.superbook.com': SUPERBOOK_CONFIG,
    'md.superbook.com': SUPERBOOK_CONFIG,
    'nj.superbook.com': SUPERBOOK_CONFIG,
    'oh.superbook.com': SUPERBOOK_CONFIG,
    'tn.superbook.com': SUPERBOOK_CONFIG
 }