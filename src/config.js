function getConfig(name, defaultValue=null) {
    // si esta dentro de un contenedor, usar window.ENV
    if( window.ENV !== undefined ) {
        return window.ENV[name] || defaultValue;
    }

    return import.meta.env[name] || defaultValue;
}

export function getBackendUrl() {
    return getConfig('VITE_REACT_APP_BACKEND_URL');
}

export function getHoursCloseTicketsAuto() {
    return getConfig('VITE_REACT_APP_HOURS_CLOSE_TICKETS_AUTO');
}