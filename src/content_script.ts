const WAIT_ELEMENT = 'div[class*="style_buttons"] >* button > span';
const MUTATION_OBSERVER_ELEMENT = 'div#root';
const MAKE_SELECTABLE_ELEMENT = 'button';

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

    const buttons = document.querySelectorAll(MAKE_SELECTABLE_ELEMENT);
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

const targetNode = document.querySelector(MUTATION_OBSERVER_ELEMENT);
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver((mutationList, _observer) => {
    if (mutationList.length > 0) {
        runPinnacle();
    }
  });
if (targetNode) {
    observer.observe(targetNode, config);
}
