namespace Utility {
    export namespace Taxes {
            export function calculteIva(price: number): number{
                return (price * 0.21)*price
            }

            export function calcultePenalIva(price: number): number{
                return (price * 0.30)*price
            }
        }
}

    