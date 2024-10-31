/** @odoo-module */

import { AbstractAwaitablePopup } from "@point_of_sale/app/popup/abstract_awaitable_popup";
import { _t } from "@web/core/l10n/translation";
import { useState } from "@odoo/owl";

export class SalespersonPopup extends AbstractAwaitablePopup {
    static template = "pw_pos_salesperson_emp.SalespersonPopup";
    static defaultProps = {
        cancelText: "Cancelar",
        confirmText: "Aceptar",
        title: "Seleccione un vendedor",
        list: [],
    };
    setup() {
        super.setup();
        this.state = useState({ selectedId: null });
    }
    onChangeSalesperson(selectedId) {
        const selectedEmp = this.props.list.find((item) => item.id == selectedId);
        if (selectedEmp) {
            this.state.selectedId = selectedId;
            this.selectedEmp = selectedEmp;
        }
    }
    getPayload() {
        return this.selectedEmp && this.selectedEmp.item;
    }
}
