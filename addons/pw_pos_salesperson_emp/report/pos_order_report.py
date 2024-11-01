from odoo import models, fields


class PosOrderReport(models.Model):
    _inherit = "report.pos.order"

    saleperson_id = fields.Many2one(
        comodel_name="hr.employee",
        string="Vendedor",
        readonly=True,
    )

    def _select(self):
        return super(PosOrderReport, self)._select() + ",l.user_id AS saleperson_id"

    def _group_by(self):
        return super(PosOrderReport, self)._group_by() + ",l.user_id"
