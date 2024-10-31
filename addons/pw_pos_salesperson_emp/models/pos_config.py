from odoo import fields, models, api


class PosConfig(models.Model):
    _inherit = "pos.config"

    allow_salesperson = fields.Boolean(
        string="Permitir vendedores",
    )


class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    allow_salesperson = fields.Boolean(
        related="pos_config_id.allow_salesperson",
        readonly=False,
    )

    @api.onchange('allow_salesperson')
    def _onchange_allow_salesperson(self):
        if self.allow_salesperson:
            self.pos_module_pos_hr = True
