Template.registerHelper('siteTitle', function(string) {
	return SEO.settings.title;
});

Template.registerHelper('truncate', function(string, length) {
  var cleanString = s(string).stripTags();
  return s(cleanString).truncate(length);
});

Template.registerHelper('formatdate', function(datetime){
	if(moment && datetime){
		return moment(datetime).format('DD MMM YYYY');
	} else {
		return datetime;
	}
})