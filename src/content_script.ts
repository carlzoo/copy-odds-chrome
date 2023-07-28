/*const ROOT_SELECTORS = [
    '.matchup-market-groups',
    'main[class*="style_desktop_middle"]',
    'div[class*="style_specials"]'
];*/
const WAIT_ELEMENT = 'div[class*="style_buttons"] >* button > span';
const MUTATION_OBSERVER_ELEMENT = 'div[';

// @input: <div class="style_buttonRow__*">

const waitForPinnacleEl = (selector: string, callback: () => void) => {
    if (document.querySelectorAll(selector).length) {
      callback();
    } else {
      setTimeout(() => {
            waitForPinnacleEl(selector, callback);
        }, 100);
    }
};

const makeOddsTextSelectable = (): void => {

    const buttons = document.querySelectorAll('button');
    buttons?.forEach((button) => {
        button.style.userSelect = "text";
    });
}

const runPinnacle = () => {
    waitForPinnacleEl(WAIT_ELEMENT, () => {
        makeOddsTextSelectable();
    });
}

runPinnacle();

const targetNode = document.querySelector('div#root');
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver((mutationList, _observer) => {
    if (mutationList.length > 0) {
        runPinnacle();
    }
  });
if (targetNode) {
    observer.observe(targetNode, config);
}
