function confirmation(question,my_title,yes_btn_title,no_btn_title,on_close) {
	my_title=my_title||'Подтвердите действие';
	yes_btn_title=yes_btn_title||'Давай';
	no_btn_title=no_btn_title||'Нет, спасибо';
	on_close=on_close||"false";	
    var defer = jQuery.Deferred();	
    jQuery('<div></div>')
    .html(question)
    .dialog({
        autoOpen: true,
        modal: true,
        title: my_title,
        width: "80%",
        buttons: [
			{
				text:yes_btn_title,
				click:function() {
					defer.resolve("true");
					$(this).dialog("close");
				},
			},
            {
				text:no_btn_title,
				click: function() {
					defer.resolve("false");
					jQuery(this).dialog("close");
				}
			}
			],
		close:function(){
			defer.resolve(on_close);
		}});
    return defer.promise();
}
