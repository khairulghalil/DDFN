/*  */
/***** login *****/
/*  */

// auto focus next input field >>
function nextInput(val) {
    if (val.value.length == val.maxLength) {
        var $next = $(val).parent().next().find('.input-otp')
        
        if ($next.length) {
            $next.focus()
        } else {
            $(val).blur();
        } 
    }
}

/*  */
/***** navbar *****/
/*  */

// tooltip show & hide >>
function show(menus) {
    const button = document.querySelector('#' + menus + ' .nav_link');
    const tooltip = document.querySelector('#' + menus + ' .nav_list');
    const tooltiphead = tooltip.querySelector('.nav_list_header');

    var offset = -156;
    if (document.body.classList.contains('body-pd')) {
        offset = 0; // expanded
    }

    Popper.createPopper(button, tooltip, {
        placement: 'right-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, offset],
                },
            },
        ],
    });

    if (offset == 0) { // expanded
        tooltiphead.classList.add("d-none")
        button.classList.add("on_show")
        if (tooltip.querySelector('a')) {
            button.classList.add("on_show");
            tooltip.style.display = "block";
        }
    } else { // collapsed
        tooltiphead.classList.remove("d-none")
        button.classList.add("on_show");
        tooltip.style.display = "block";
    }
}

function hide(menus) {
    const button = document.querySelector('#' + menus + ' .nav_link');
    const tooltip = document.querySelector('#' + menus + ' .nav_list');

    var offset = -156;
    if (document.body.classList.contains('body-pd')) {
        offset = 0;
    }
    
    Popper.createPopper(button, tooltip, {
        placement: 'right-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, offset],
                },
            },
        ],
    });

    button.classList.remove("on_show");
    tooltip.style.display = "none";
}