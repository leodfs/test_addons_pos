{
    "name": "POS Salesperson Employee",
    "version": "1.0",
    "author": "Drayer Consulting",
    "category": "Point of Sale",
    "depends": ["point_of_sale", "hr"],
    "summary": "This apps helps you set salesperson on pos orderline from pos interface | POS Orderline User | Assign Sales Person on POS | POS Sales Person",
    "description": """
- Odoo POS Orderline user
- Odoo POS Orderline salesperson
- Odoo POS Salesperson
- Odoo POS Item Salesperson
- Odoo POS Item User
- Odoo POS product salesperson
    """,
    "data": [
        "data/point_of_sale_data.xml",
        "views/pos_config_view.xml",
    ],
    "assets": {
        "point_of_sale._assets_pos": [
            "pw_pos_salesperson_emp/static/src/js/models.js",
            "pw_pos_salesperson_emp/static/src/js/payment_screen.js",
            "pw_pos_salesperson_emp/static/src/js/product_screen.js",
            "pw_pos_salesperson_emp/static/src/input_popups/salesperson_popup.js",
            "pw_pos_salesperson_emp/static/src/js/SalespersonButton.js",
            "pw_pos_salesperson_emp/static/src/xml/pos.xml",
        ],
    },
    "module_type": "official",
    "application": True,
    "installable": True,
    "license": "LGPL-3",
}
