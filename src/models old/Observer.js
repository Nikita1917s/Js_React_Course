function Observable() {
    const observers = [];
    this.sendMessage = ( msg ) => {};
    this.addObserver = function( observer ){};
}
function Observer (behavior) {
    this.notify = function( msg ){};
}
export { Observable, Observer };