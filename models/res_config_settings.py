from odoo import fields, models,api


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    quiz_timer = fields.Float(string='Quiz Timer', config_parameter='quiz_time.quiz_timer')


