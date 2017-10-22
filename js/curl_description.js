$(function(){
    $('#input').on('change keyup', function(){
        var command = $.trim($(this).val().replace(/\s\\\s/g, ' ').replace(/\s\s+/g, ' '));
        showDescription(command);
    });

    var commands = [
        'curl https://api.example.com',
        'curl https://api.example.com/surprise \\\n     -u banana:coconuts \\\n     -d "sample data"',
        'curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer b7d03a6947b217efb6f3ec3bd3504582" -d \'{"type":"A","name":"www","data":"162.10.66.0","priority":null,"port":null,"weight":null}\' "https://api.digitalocean.com/v2/domains/example.com/records"',
        'curl -u "demo" -X POST -d @file1.txt -d @file2.txt https://example.com/upload',
        'curl -X POST https://api.easypost.com/v2/shipments \\\n     -u API_KEY: \\\n     -d \'shipment[to_address][id]=adr_HrBKVA85\' \\\n     -d \'shipment[from_address][id]=adr_VtuTOj7o\' \\\n     -d \'shipment[parcel][id]=prcl_WDv2VzHp\' \\\n     -d \'shipment[is_return]=true\' \\\n     -d \'shipment[customs_info][id]=cstinfo_bl5sE20Y\''
    ];

    for (var i = 0; i < commands.length; i++) {
        $('#examples a:eq(' + i + ')').click(function(event){
            event.preventDefault();
            var index = $(this).index();
            $('#input').val(commands[index]).change();
        });
    }
});

var showDescription = function(command){
    var urlExists = false;
    var isOpenTag = false;
    var isInsideQuotes = false;
    var isQuotesJustClosed;
    var openQuote = null;
    var parts = command.split(' ');

    if (parts[0] !== 'curl') {
        $('#input_description').text('Invalid command');
        return;
    }

    for (var i = 1; i < parts.length; i++) {
        isQuotesJustClosed = false;
        var item = parts[i];
        var firstChar = item.charAt(0);
        var lastChar = item.charAt(item.length - 1);

        if (isInsideQuotes && lastChar === openQuote) {
            isInsideQuotes = false;
            isQuotesJustClosed = true;
        }

        if ((firstChar === '"' || firstChar === "'") && firstChar !== lastChar) {
            isInsideQuotes = true;
            openQuote = item.charAt(0);
        }

        if (!isInsideQuotes && isOpenTag) {
            parts[i] += '</span>';
            isOpenTag = false;
            continue;
        }

        if (!isInsideQuotes && !isQuotesJustClosed) {
            if (firstChar === '-') {
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
    }

    $('#input_description').html(parts.join(' ')).find('span[data-title!=""]').bind('mouseenter', function(event){
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
