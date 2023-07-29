import { HOST_CONFIG_MAP, ISiteConfig } from "./config";

const run = (config: ISiteConfig) => {
    const waitForLoaded = (selector: string, callback: () => void) => {
        if (document.querySelectorAll(selector).length) {
          callback();
        } else {
          setTimeout(() => {
                waitForLoaded(selector, callback);
            }, 100);
        }
    };
    
    const makeOddsTextSelectable = (): void => {
    
        const buttons = document.querySelectorAll<HTMLElement>(config.makeSelectable);
        buttons?.forEach((button) => {
            button.style.userSelect = "text";
        });
    }
    
    waitForLoaded(config.wait, () => {
        makeOddsTextSelectable();
    });
}

const hostConfig = HOST_CONFIG_MAP[location.host];
run(hostConfig);

const targetNode = document.querySelector(hostConfig.mutationObserver);
const mutationObserverConfig = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver((mutationList, _observer) => {
    if (mutationList.length > 0) {
        run(hostConfig);
    }
  });
if (targetNode) {
    observer.observe(targetNode, mutationObserverConfig);
}
