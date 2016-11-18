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
        // TO DO: Can this formula be rewritten to avoid a devide by zero case?
        if (rate != 0) {
            let rateDecimal = rate / 100;
            var fv = (payment * ((Math.pow(1 + rateDecimal, periods) - 1) / rateDecimal));
        } else {
            var fv = payment * periods;
        }
        return rnd(fv, 3);
    }

    static PV(rate, periods, futureValue) {
        // Calculates the present value of a future amount
        let rateDecimal = rate / 100;
        let pv = futureValue * (1 / Math.pow(1 + rateDecimal, periods));
        return rnd(pv, 2);
    }

    static PMT(rate, periods, presentValue) {
        // Calculates the payments needed to achieve a desired present value
        // TO DO: Can this formula be rewritten to avoid a devide by zero case?
        if (rate != 0) {
            let rateDecimal = rate / 100;
            var pmt = presentValue / ((1 - (Math.pow(1 + rateDecimal, periods * -1))) / rateDecimal);
        } else {
            var pmt = presentValue / periods;
        }
        return rnd(pmt, 2);
    }

    static IIR(payments, precision = 0.001) {
        let iir = 0;
        return iir;
    }
}