Books = new Meteor.Collection('books');

illustrationType = new SimpleSchema({
	full: {
		type: Number,
		label: "Full"
	},
	spot: {
		type: Number,
		label: "Spots"
	}
});

devStatus = new SimpleSchema({
	raw: {
		type: Boolean,
		label: "Raw"
	},
	rtf: {
		type: Boolean,
		label: "RTF"
	},
	docx: {
		type: Boolean,
		label: "DOCX"
	},
	rawPDF: {
		type: Boolean,
		label: "rawPDF"
	},
	redpen: {
		type: Boolean,
		label: "Redpen"
	},
	docxEd: {
		type: Boolean,
		label: "DOCX-Ed"
	},
	indd: {
		type: Boolean,
		label: "INDD"
	},
	exported: {
		type: Boolean,
		label: "Exported"
	},
	uploaded: {
		type: Boolean,
		label: "Uploaded"
	},
	published: {
		type: Boolean,
		label: "Published"
	}
});

pubStatus = new SimpleSchema({
	site: {
		type: Boolean,
		label: "Site"
	},
	RTF: {
		type: Boolean,
		label: "THE RED FILE"
	},
	siteStore: {
		type: Boolean,
		label: "Site Store"
	},
	externalStore: {
		type: Boolean,
		label: "External Store" /* e.g., Amazon, iBookStore, etc. */
	}
});

pubType = new SimpleSchema({
	unpublished: {
		type: Boolean,
		label: "Unpublished"
	},
	TRF: {
		type: Boolean,
		label: "THE RED FILE"
	},
	site: {
		type: Boolean,
		label: "Site"
	},
	epub: {
		type: Boolean,
		label: "ePub"
	},
	mobi: {
		type: Boolean,
		label: ".mobi"
	},
	collection: {
		type: Boolean,
		label: "Collection"
	},
	print: {
		type: Boolean,
		label: "Print"
	},
	illustrated: {
		type: Boolean,
		label: "Illustrated"
	},
	audio: {
		type: Boolean,
		label: "Audio"
	}
});

BookSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	subTitle: {
		type: String,
		label: "SubTitle",
		optional: true
	},
	author: {
		type: String,
		label: "Author",
		optional: true
	},
	series: {
		type: String,
		label: "Series",
		optional: true
	},
	o_pub: {
		type: String,
		label: "Original Publication"
	},
	o_pubDate: {
		type: Date,
		label: "Original Publication Date"
	},
	subgenre: {
		type: String,
		label: "Sub-Genre"
	},
	category: {
		type: String,
		label: "Category" /* as in free-on-site vs premium vs sale; or quick-read vs novella, etc. */
	},
	wordCount: {
		type: Number,
		label: "Word Count"
	},
	illustration: {
		type: [illustrationType],
		label: "Illustrations",
	},
	keywords: {
		type: [String],
		label: "Keywords"
	},
	excerpt: {
		type: String,
		label: "Excerpt",
		min: 125
	},
	devStatus: {
		type: [devStatus],
		label: "Dev Status",
		autoform: {
			type: "hidden",
		}
	},
	pubStatus: {
		type: [pubStatus],
		label: "Publication Status",
		autoform: {
			type: "hidden",
		}		
	},
	pubType: {
		type: [pubType],
		label: "Publication Type",
		defaultValue: 'unpublished',
		autoform: {
			type: "hidden",
		}
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden",
		}		
	}
});

Books.attachSchema( BookSchema );

Books.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	},
});