export const timeToDate = (string) => {
    const timeRemoveReg = /T.*$/;
    return string.replace(timeRemoveReg, '').replace(/-/g, '.');
}