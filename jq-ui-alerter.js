function alerter(question, _title,_ok_name) {
    _title = _title || 'Header text';
	_ok_name=_ok_name||'Close';
    var defer = jQuery.Deferred();
    jQuery('<div></div>').css('z-index','1025').html(question)
    .dialog({autoOpen: true,modal: true,width: "auto",
		minWidth:400,
		title: _title,buttons: [{text:_ok_name,click: function() {
                defer.resolve("true");
                jQuery(this).dialog("close");
            }}]/*,
			create: function (event, ui) {
				if(_title=='no-message')
				{$(".ui-widget-header").hide();}
			}*/
			});
	$('.ui-dialog').css('z-index','1024');
	$('.ui-widget-overlay').css('z-index','1023');
    return defer.promise();
}
