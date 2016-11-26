'use strict';

function rnd(base, percision) {
    // round a number to the giving amount of decimal places
    let x = Math.pow(10, percision);
    let result = Math.round(base * x) / x;
    return result;
}

class NPV {
    static FV(rate, periods, payment) {
        // Calculates the future value of an annuity
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
        // Calculates the present value of a single future amount
        let rateDecimal = rate / 100;
        let pv = futureValue * (1 / Math.pow(1 + rateDecimal, periods));
        return rnd(pv, 2);
    }

    static PV_AN(rate, periods, payment) {
        // Calculates the present value of an annuity
        if (rate != 0) {
            let rateDecimal = rate / 100;
            var pv = payment * ((1 - (Math.pow(1 + rateDecimal, periods * -1))) / rateDecimal);
        } else {
            var pv = payment * periods;
        }
        return rnd(pv, 2);
    }

    static PMT(rate, periods, presentValue) {
        // Calculates the payments needed to achieve a desired present value
        // TO DO: Can this formula be rewritten to avoid a devide by zero case?
        // TO DO: periods = 0 also creates a divide by zero case
        if (rate != 0) {
            let rateDecimal = rate / 100;
            var pmt = presentValue / ((1 - (Math.pow(1 + rateDecimal, periods * -1))) / rateDecimal);
        } else {
            var pmt = presentValue / periods;
        }
        return rnd(pmt, 2);
    }

    static IRR(payments, precision = 1) {
        // Calculates the internal rate of return of an array of payments
        var cash = rnd(payments.reduce(function(a, b) {return a + b;}, 0), 2);
        var interval = 0.0;
        if (cash === 0) {
            return 0.0;
        } else if (cash > 0) {
            interval = 1 / Math.pow(10, 2 + precision); // f(x) = 1/(10^(2+x))
        } else {
            interval = -1 / Math.pow(10, 2 + precision);
        }

        var interest = 0.0;
        var nper = payments.length; // Number of periods
        var npv = 100;

        while (rnd(Math.abs(npv), 4) > 0.0) {
            interest = interest + interval;
            var cper = 0; // Curent period
            npv = 0.0;
            while (cper < nper) {
                var denominator = rnd(Math.pow(1 + interest, cper), 4);
                if (denominator !== 0) {
                    npv = npv + (payments[cper] / denominator);
                }
                cper++;
            } 

            if ((interval > 0.0) && (npv < 0.0)) break;
            if ((interval < 0.0) && (npv > 0.0)) break;
        }
        return rnd(((interest - interval) * 100.0), precision);
    }
}