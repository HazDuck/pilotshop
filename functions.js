$.get('handy.hbs', function (data) {
    var info = data
    var template = Handlebars.compile(info)
    var productInfo =
{
    "products": [
    {
        "name": "Maecenas",
        "desc": "Nullam eleifend mauris ultricies nulla porttitor",
        "price": 45.99,
        "originalPrice": 75,
        "discount": 45,
        "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"
    },
    {
        "name": "Morbi",
        "desc": "Nullam tortor arcu varius natoque penatibu",
        "price": 120,
        "originalPrice": 120,
        "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/alpha_industries_men_s_cwu_pilot_x_flight_jacket_01_270x335_crop_top.png?v=1480672952"
    },
    {
        "name": "Praesent id",
        "desc": "Donec cursus sapien at dolor placerat, eget",
        "price": 50,
        "originalPrice": 65,
        "discount": 15,
        "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/american_optical_original_pilot_eyewear_57mm_frame_1_270x335_crop_top.png?v=1480672961"
    },
    {
        "name": "Vivamus volutpat a",
        "desc": "Nullam eu consequat nibh. Orci varius natoque!",
        "price": 154,
        "originalPrice": 160,
        "discount": 6,
        "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/aspen_avionics_evolution_01_270x335_crop_top.png?v=1480672974"
    },
    {
        "name": "Sodales",
        "desc": "Ion maximus lobortis tellus quis egestas",
        "price": 45.99,
        "originalPrice": 75,
        "discount": 45,
        "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/aviation_first_aid_kit_02_270x335_crop_top.png?v=1480672985"
    },
    {
        "name": "Vivamus volutpat a augue ",
        "desc": "Ut libero odio, hendrerit in placerat non",
        "price": 66,
        "originalPrice": 66,
        "image": "https:////cdn.shopify.com/s/files/1/1634/8185/products/cocoons_fitovers_polarized_sunglasses_pilot_lg_02_270x335_crop_top.png?v=1480673019"
    },
    {
        "name": "Aliquam",
        "desc": "Cras facilisis nibh vitaeid justo",
        "price": 15,
        "originalPrice": 30,
        "discount": 15,
        "image": "https:////cdn.shopify.com/s/files/1/1634/8185/products/david_clark_dc_x11p_panel_anr_enc_aviation_pilot_headset_2_270x335_crop_top.png?v=1480673029"
    },
    {
        "name": "Suspendisse",
        "desc": "In maximus lobortis tellus quis egestas",
        "price": 17,
        "originalPrice": 23,
        "discount": 6,
        "image": "https:////cdn.shopify.com/s/files/1/1634/8185/products/garmin_aera_796_02_270x335_crop_top.png?v=1480673041"
    }
]
}

var html = template(productInfo)
    console.log(html)
    $('.product-container').append(html)
})