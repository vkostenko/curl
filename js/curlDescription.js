var description = function(fieldId, tooltip){
    var self = this;
    var container = document.getElementById(fieldId);

    var clearDescription = function(){
        container.innerHTML = 'curl ';
    };

    var addOption = function(option) {
        var className = option.error !== undefined ? 'error ' : '';
        var long = option.long === undefined ? '' : option.long;

        var span = document.createElement('span');
            span.className = className;
            span.dataset['config'] = long;
            span.innerHTML = option.name + (option.value !== undefined ? ' ' + option.value : '');

            if (option.error !== undefined) {
                span.dataset['error'] = option.error;
            }

            if (option.isNegation !== undefined && option.isNegation) {
                span.dataset['isNegation'] = '1';
            }

            span.addEventListener('mouseenter', tooltip.show);
            span.addEventListener('mouseleave', self.onTargetLeave);

        container.appendChild(span);
    };

    this.onTargetLeave = function(event){
        var newTarget = event.relatedTarget;
        if (!tooltip.isInsideContainer(newTarget)) {
            tooltip.hide(event);
        }
    };

    this.displayMessage = function(message){
        container.innerHTML = message;
    };

    this.displayOptions = function(options){
        clearDescription();
        for (var i = 0; i < options.length; i++) {
            addOption(options[i]);
        }
    };
};

var tooltip = function(fieldId){
    var container = document.getElementById(fieldId);

    var tooltipActiveClassName = 'tooltip_active';

    this.isInsideContainer = function(element){
        while (element != document) {
            if (element == container) {
                return true;
            }

            element = element.parentNode;
        }

        return false;
    };

    this.init = function(){
        container.addEventListener('mouseleave', this.hide);
    };

    this.show = function(event){
        var self = this;
        var errorContent = '',
            noteContent = '';

        var element = event.target;
        element.classList.add(tooltipActiveClassName);

        if (element.dataset['error']) {
            errorContent = '<div class="error">' + element.dataset['error'] + '</div>';
            container.classList.add('error');
        } else {
            container.classList.remove('error');
        }

        if (element.dataset['isNegation']) {
            noteContent = '<div class="note">Negation form is used</div>';
        }

        var option = curlOptions.long[element.dataset['config']];

        if (option !== undefined) {
            var content = option.text;

            content = '<div class="title">' + option.title + '</div>' + noteContent + errorContent + content;
            if (option.see !== undefined) {
                content += '<div class="see">See also: <span>' + option.see.join('</span> <span>') + '</span></div>';
            }
            if (option.overrides !== undefined) {
                content += '<div class="overrides">Overrides: <span>' + option.overrides.join('</span> <span>') + '</span></div>';
            }
        } else {
            content = noteContent + errorContent;
        }

        container.innerHTML = content;
        container.style.top = element.offsetTop - element.parentNode.offsetTop - element.parentNode.clientHeight + 41 + "px";
        container.style.display = 'block';
    };

    this.hide = function(){
        var elements = document.getElementsByClassName(tooltipActiveClassName);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(tooltipActiveClassName);
        }
        container.style.display = 'none';
    };
};

var descriptionUpdater = function(){
    var inputField = null;
    var parser = null;
    var descriptionContainer = null;
    var self = this;
    var examples = [
        'curl http://ifconfig.io/',
        'curl -XPOST http://ifconfig.io/ -1I01 -d "sample data" --no-insecure',
        'curl -XPOST http://ifconfig.io/ -Eas.txt -d "sample data" --8 --no-http1.1',
        'curl http://ifconfig.io/ \\\n -u username:password \\\n -d "sample data"',
        'curl -XPOST -H "Content-Type: application/json" -H "Authorization: abcdef 90fc123090dv720fa" -11 --no-insecure -d \'{"type":"A","name":"www","data":"162.10.66.0"}\' "http://ifconfig.io" http://ipconfig.io',
    ];

    var loadExamples = function(){
        var container = document.getElementById('examples');

        for (var i = 0; i < examples.length; i++) {
            var element = document.createElement('a');
            element.dataset['example'] = examples[i];
            element.href = '#';
            element.addEventListener('click', function(event){
                event.preventDefault();
                inputField.value = this.dataset['example'];
                inputField.dispatchEvent(new Event('change'));
            });
            element.innerText = 'Example #' + (i + 1);

            container.appendChild(element);
        }
    };

    this.onLoad = function(){
        parser = curlParser(curlOptions);
        inputField = document.getElementById('input');
        tooltip = new tooltip('infobox');
        tooltip.init();
        descriptionContainer = new description('input_description', tooltip);

        inputField.addEventListener('change', self.onInputChange);
        inputField.addEventListener('keyup', self.onInputChange);

        loadExamples();
    };

    this.onInputChange = function(){
        var result = parser.parse(inputField.value);
        if (result.error) {
            descriptionContainer.displayMessage(result.error);
        } else {
            descriptionContainer.displayOptions(result.options);
        }
    };
};

var updater = new descriptionUpdater();
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    updater.onLoad();
} else {
    document.addEventListener('DOMContentLoaded', updater.onLoad);
}