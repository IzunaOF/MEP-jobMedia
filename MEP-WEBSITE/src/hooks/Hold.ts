import axios from 'axios';

export default function hold<T>(holdThis: T): [T, Function] {
    const stuck: T[] = [holdThis];
    function setHold(holdValue: T){
        stuck.fill(holdValue);
    }
    return [stuck[0], setHold];
}

