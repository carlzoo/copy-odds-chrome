const ROOT_SELECTORS = [
    '.matchup-market-groups',
    '.contentBlock'
];
const WAIT_ELEMENT = 'div[class*="style_content"] > div[class*="style_button"]';

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

    ROOT_SELECTORS.forEach((selector) => {
        const root = document.querySelector(selector);
        const buttons = root?.querySelectorAll('button');
        buttons?.forEach((button) => {
            button.style.userSelect = "text";
        });
    });
}

waitForPinnacleEl(WAIT_ELEMENT, () => {
    makeOddsTextSelectable();
    //TODO: add listeners for odds changes on html elements, and then rerun getPinnacleOdds
    //const target = document.getElementsByTagName('body')[0];
    //const observer = new MutationObserver(function(mutations) {
    //mutations.forEach(function(mutation) {
        /*if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].firstChild.nodeValue == "Not enough?") {
        mutation.addedNodes[0].addEventListener("click", createImage);
        }*/
    //    console.log("mutation detected");
    //});    
    //});

    //const config = { attributes: true, childList: true, characterData: true };
    //observer.observe(target, config);
});

