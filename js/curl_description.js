$(function(){
    $('#input').change(function(){
        updateDescription($(this).val());
    });
    showHints($('#input_description'));
});

var updateDescription = function(value){
    $description = $('#input_description');
    $description.html(value);
    showHints($description);
};

var showHints = function($description){
    var str = $.trim($description.text().replace(/\s\s+/g, ' '));
    var parts = str.split(' ');

    if (parts[0] !== 'curl') {
        console.log('Invalid command');
    }

    var urlExists = false;
    var isOpenTag = false;
    for (var i = 1; i < parts.length; i++) {
        var item = parts[i];
        if (isOpenTag) {
            parts[i] += '</span>';
            isOpenTag = false;
            continue;
        }

        if (item.charAt(0) === '-') {
            if (options[item] !== undefined) {
                var option = options[item];
                if (option.use !== undefined) {
                    item = option.use;
                    option = options[option.use];
                }

                if (option.isBool !== undefined && option.isBool) {
                    isOpenTag = false;
                    parts[i] = '<span data-title="' + item + '">' + parts[i] + '</span>';
                } else {
                    isOpenTag = true;
                    parts[i] = '<span data-title="' + item + '">' + parts[i];
                }
            }
        } else if (!urlExists) {
            parts[i] = '<span data-title="--url">' + item + '</span>';
            urlExists = true;
        } else {
            console.log('Url exists. Invalid request');
            break;
        }
    }

    $description.html(parts.join(' ')).find('span[data-title!=""]').bind('mouseenter', function(event){
        $(this).addClass('active');
        var option = options[$(this).data('title')];
        var title = option.title !== undefined ? option.title : $(this).data('title');

        var content = option.text;
        content = '<div class="title">' + title + '</div>' + content;
        if (option.see !== undefined) {
            content += '<div class="see">See also: <span>' + option.see.join('</span> <span>') + '</span></div>';
        }
        if (option.overrides !== undefined) {
            content += '<div class="overrides">Overrides: <span>' + option.overrides.join('</span> <span>') + '</span></div>';
        }

        $('#infobox').css('top', $(this).position().top + 34).html(content).show();
    }).bind('mouseleave', function(event){
        if ($(event.relatedTarget).attr('id') !== 'infobox' && !$(event.relatedTarget).parents('#infobox').length) {
            $(this).removeClass('active');
            $('#infobox').hide();
        }
    });

    $('#infobox').bind('mouseleave', function(){
        $('span.active').removeClass('active');
        $(this).hide();
    });
};
