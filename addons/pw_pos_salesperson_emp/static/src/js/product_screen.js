/** @odoo-module **/

import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { patch } from "@web/core/utils/patch";
import { SalespersonPopup } from "@pw_pos_salesperson_emp/input_popups/salesperson_popup";

patch(ProductScreen.prototype, {
    setup() {
        super.setup(...arguments);
    },
    async changeEmployee(orderline) {
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
            orderline.set_line_emp(selectedEmp);
        }
    },
    removeEmployee(orderline) {
        orderline.remove_sale_person()
    }
});
