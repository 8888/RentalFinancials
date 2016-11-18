'use strict';

function rnd(base, percision) {
    // round a number to the giving amount of decimal places
    let x = Math.pow(10, percision);
    let result = Math.round(base * x) / x;
    return result;
}

class NPV {
    static FV(rate, periods, payment) {
        // Calculates the future value of cashflow
        if (rate != 0) {
            let rateDecimal = rate / 100;
            var fv = (payment * ((Math.pow(1 + rateDecimal, periods) - 1) / rateDecimal));
        } else {
            var fv = payment * periods;
        }
        return rnd(fv, 3);
    }

    static PV(rate, periods, futureValue) {
        let pv = 0;
        return pv;
    }

    static PMT(rate, periods, presentValue) {
        let pmt = 0;
        return pmt;
    }

    static IIR(payments, precision = 0.001) {
        let iir = 0;
        return iir;
    }
}