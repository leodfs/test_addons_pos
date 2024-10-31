/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { ErrorPopup } from "@point_of_sale/app/errors/popups/error_popup";

patch(PaymentScreen.prototype, {
    async validateOrder(isForceValidate) {
        const order = this.currentOrder;
        const missingSalesperson = order.get_orderlines().some(line => !line.get_line_emp());
        if (missingSalesperson) {
            await this.popup.add(ErrorPopup, {
                title: 'Vendedor requerido',
                body: 'Todas las líneas deben tener un vendedor asignado antes de proceder al pago.',
            });
            return;
        }
        await super.validateOrder(...arguments);
    }
});
