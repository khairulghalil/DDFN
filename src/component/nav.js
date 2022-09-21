import { writable } from 'svelte/store';

export var menus = writable('');
export var sub_menus = writable('');
export var expand = writable('true');

export function colorLink() {
    const linkColor = document.querySelectorAll('.nav_link')
    var parent_id = $(this).parent().attr('id');
    const linkMenu = document.querySelector('#' + parent_id + ' .nav_list a')
    if (linkColor) {
        if (!linkMenu) {
            menus = writable($(this).attr('id'))
            sub_menus = writable('')
        }
    }
}

export function colorSubLink() {
    const linkSubColor = document.querySelectorAll('.nav_list_body')
    if (linkSubColor) {
        var parent_id = $(this).parent().parent().parent().attr('id');
        menus = writable($('#'+ parent_id + ' .nav_link').attr('id'));
        sub_menus = writable($(this).attr('id'));
    }
}