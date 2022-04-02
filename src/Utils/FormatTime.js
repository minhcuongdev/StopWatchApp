const padToTwo = (number) => (number <= 9 ? `0${number}` : number )

export const displayTime = (centiseconds) =>{
    let minus = 0;
    let second = 0;

    if(centiseconds < 100) {
        centiseconds = 0 
    }

    if(centiseconds < 100) {
        return `00:00:${padToTwo(centiseconds)}`;
    }

    let remainCentiseconds = centiseconds % 100;
    second = (centiseconds - remainCentiseconds) / 100;

    if(second < 60) {
        return `00:${padToTwo(second)}:${padToTwo(remainCentiseconds)}`;
    }

    let remainSeconds = second % 60;
    minus = (second - remainSeconds) / 60;

    return `${padToTwo(minus)}:${padToTwo(remainSeconds)}:${padToTwo(remainCentiseconds)}`;
}