
import {useDateSalesFilter} from "../data/useDateSalesFilter";
var first;
var end;

export function Graphic (value)  {
    var pad = function (num) {
        return ('00' + num).slice(-2)
    };
    first = new Date();
    first = first.getUTCFullYear() + '-' +
        pad(first.getUTCMonth() + 1) + '-' +
        pad(first.getUTCDate()) + ' ' + '00:00:00';
    end = new Date();
    end=end.getUTCFullYear() + '-' +
        pad(end.getUTCMonth() + 1) + '-' +
        pad(end.getUTCDate()) + ' ' + '23:59:59';
    console.log('del primero',first+' '+end);
    const datasales=useDateSalesFilter(first,end);
    console.log('esto es hoy',datasales)
    return datasales;
    if (value == 'date2') {

    }

}
