import { HOST_CONFIG_MAP, ISiteConfig } from "./config";

const waitForLoaded = (selector: string, callback: () => void) => {
    if (document.querySelectorAll(selector).length) {
      callback();
    } else {
      setTimeout(() => {
            waitForLoaded(selector, callback);
        }, 100);
    }
};


const run = (config: ISiteConfig) => {
    
    const selectors = document.querySelectorAll<HTMLElement>(config.makeSelectable);
    selectors?.forEach((selector) => {
        selector.style.userSelect = "text";
    });
}

const hostConfig = HOST_CONFIG_MAP[location.host];
if (hostConfig) {
    console.log("[Copy odds] Copy odds extension running");
    run(hostConfig);
    waitForLoaded(hostConfig.wait, () => {
        const targetNode = document.querySelector(hostConfig.mutationObserver);
        const mutationObserverConfig = { attributes: true, childList: true, subtree: true, characterData: true };
        const observer = new MutationObserver((mutationList, _observer) => {
            if (mutationList.length > 0) {
                run(hostConfig);
            }
        });
        if (targetNode) {
            observer.observe(targetNode, mutationObserverConfig);
        } else {
            console.log("[Copy odds] Unable to find observer node!");
        }
    });
}



