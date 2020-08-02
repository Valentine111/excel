import {capitalize} from '@core/utils';

export class DOMListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error();
        }
        this.$root = $root;
        this.lesteners = listeners
    }
    initDOMListeners() {
        this.lesteners.forEach(listener => {
            const method = getMethodName(listener);
            if (!this[method]) {
                throw new Error(`Method is not ampl`)
            }
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[method])
        })
    }
    removeDOMListener() {
        this.lesteners.forEach(listener => {
            const method = getMethodName(listener);
            if (!this[method]) {
                throw new Error(`Method is not ampl`)
            }
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on'+capitalize(eventName);
}
