/* 
** Code for dropdown
*/
var global = {};

global.ui = {
	defaultDropDown: function(settings) {
		var defaults = {
			dropDownSelector: '.default-dropdown',
			dropDownCurrent: '.default-dropdown > a',
			droppedDownElement: '.selectors',
			dropDownAttrSelector: 'selectorid'
		} //end defaults

		var dpv = $.extend(defaults, settings);

		var selectorWidth = $(dpv.dropDownSelector).width();
		var dropDownWidth = $(dpv.droppedDownElement).width();

		if (selectorWidth > dropDownWidth) {
			var unifiedWidth = selectorWidth;
		} else {
			var unifiedWidth = dropDownWidth + $('.down-icon').width() + 10;
		}

		$(dpv.dropDownCurrent).width(unifiedWidth);
		$(dpv.droppedDownElement).width(unifiedWidth);

		$(dpv.dropDownCurrent).live('click', function() {
			if ($(dpv.droppedDownElement).hasClass('visible')) {
				$(dpv.droppedDownElement).removeClass('visible');
				$(dpv.droppedDownElement).hide();
			} else {
				$(dpv.droppedDownElement).addClass('visible');
				$(dpv.droppedDownElement).show();
			}
			return false;
		});

		$(dpv.droppedDownElement + ' li a').live('click', function() {
			var clickedElement = $(this).text();
			var dpNumber = $(this).attr(dpv.dropDownAttrSelector);
			$(dpv.dropDownCurrent + ' span.selected').text(clickedElement);
			$(dpv.dropDownCurrent).attr('value', dpNumber);
			$(dpv.droppedDownElement).removeClass('visible');
			$(dpv.droppedDownElement).hide();
			$('.selectors').hide();
			return false;
		});

		$('body').live('click', function() {
			$(dpv.droppedDownElement).removeClass('visible');
			$(dpv.droppedDownElement).hide();
		});
		
	}
}