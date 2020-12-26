"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ON_ERROR = exports.ON_SUCCESS = exports.ON_CANCEL = exports.EventRegister = void 0;
class EventRegister {
    static addEventListener(eventName, callback) {
        if ((eventName === null || eventName === void 0 ? void 0 : eventName.length) && typeof callback === 'function') {
            EventRegister._Listeners.count++;
            const eventId = 'l' + EventRegister._Listeners.count;
            EventRegister._Listeners.refs[eventId] = {
                name: eventName,
                callback
            };
            return eventId;
        }
        return false;
    }
    static removeEventListener(id) {
        if (id === null || id === void 0 ? void 0 : id.length) {
            return delete EventRegister._Listeners.refs[id];
        }
        return false;
    }
    static removeAllListeners() {
        let removeError = false;
        Object.keys(EventRegister._Listeners.refs).forEach((_id) => {
            const removed = delete EventRegister._Listeners.refs[_id];
            removeError = !removeError ? !removed : removeError;
        });
        return !removeError;
    }
    static emitEvent(eventName, data) {
        Object.keys(EventRegister._Listeners.refs).forEach((_id) => {
            if (EventRegister._Listeners.refs[_id] &&
                eventName === EventRegister._Listeners.refs[_id].name) {
                EventRegister._Listeners.refs[_id].callback(data);
            }
        });
    }
    /*
     * shortener
     */
    static on(eventName, callback) {
        return EventRegister.addEventListener(eventName, callback);
    }
    static rm(eventName) {
        return EventRegister.removeEventListener(eventName);
    }
    static rmAll() {
        return EventRegister.removeAllListeners();
    }
    static emit(eventName, data) {
        EventRegister.emitEvent(eventName, data);
    }
}
exports.EventRegister = EventRegister;
EventRegister._Listeners = {
    count: 0,
    refs: {}
};
const ON_CANCEL = 'onCancel';
exports.ON_CANCEL = ON_CANCEL;
const ON_SUCCESS = 'onSuccess';
exports.ON_SUCCESS = ON_SUCCESS;
const ON_ERROR = 'onError';
exports.ON_ERROR = ON_ERROR;
