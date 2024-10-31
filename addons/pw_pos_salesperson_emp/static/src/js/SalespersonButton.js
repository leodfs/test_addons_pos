/** @odoo-module **/

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { useService } from "@web/core/utils/hooks";
import { Component } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { SalespersonPopup } from "@pw_pos_salesperson_emp/input_popups/salesperson_popup";

export class SalespersonButton extends Component {
    static template = "pw_pos_salesperson.SalespersonButton";
    setup() {
        this.pos = usePos();
        this.popup = useService("popup");
    }
    async click() {
        if (!this.pos.employees) {
            return;
        }
        const selectionList = this.pos.employees.map(user => ({
            id: user.id,
            label: user.name,
            item: user,
        }));
        const { confirmed, payload: selectedEmp } = await this.popup.add(
            SalespersonPopup,
            {
                title: "Seleccione un vendedor",
                list: selectionList,
            }
        );
        if (confirmed) {
            const order = this.pos.get_order();
            const orderLines = order.get_orderlines();
            for (const line of orderLines) {
                line.set_line_emp(selectedEmp);
            }
        }
    }
}

ProductScreen.addControlButton({
    component: SalespersonButton,
    condition: function () {
        return this.pos.config.allow_salesperson;
    },
});
