Books = new Meteor.Collection('books');

illustrationType = new SimpleSchema({
	full: {
		type: Number,
		label: "Full",
		optional: true
	},
	spot: {
		type: Number,
		label: "Spots",
		optional: true
	}
});

devStatus = new SimpleSchema({
	raw: {
		type: Boolean,
		defaultValue: true,
		label: "Raw",
		optional: true
	},
	rtf: {
		type: Boolean,
		label: "RTF",
		optional: true
	},
	docx: {
		type: Boolean,
		label: "DOCX",
		optional: true
	},
	rawPDF: {
		type: Boolean,
		label: "rawPDF",
		optional: true
	},
	redpen: {
		type: Boolean,
		label: "Redpen",
		optional: true
	},
	docxEd: {
		type: Boolean,
		label: "DOCX-Ed",
		optional: true
	},
	indd: {
		type: Boolean,
		label: "INDD",
		optional: true
	},
	exported: {
		type: Boolean,
		label: "Exported",
		optional: true
	},
	uploaded: {
		type: Boolean,
		label: "Uploaded",
		optional: true
	},
	published: {
		type: Boolean,
		label: "Published",
		optional: true
	}
});

pubStatus = new SimpleSchema({
	site: {
		type: Boolean,
		label: "Site",
		optional: true
	},
	RTF: {
		type: Boolean,
		label: "THE RED FILE",
		optional: true
	},
	siteStore: {
		type: Boolean,
		label: "Site Store",
		optional: true
	},
	externalStore: {
		type: Boolean,
		label: "External Store", /* e.g., Amazon, iBookStore, etc. */
		optional: true
	}
});

pubType = new SimpleSchema({
	unpublished: {
		type: Boolean,
		label: "Unpublished",
		optional: true
	},
	TRF: {
		type: Boolean,
		label: "THE RED FILE",
		optional: true
	},
	site: {
		type: Boolean,
		label: "Site",
		optional: true
	},
	epub: {
		type: Boolean,
		label: "ePub",
		optional: true
	},
	mobi: {
		type: Boolean,
		label: ".mobi",
		optional: true
	},
	collection: {
		type: Boolean,
		label: "Collection",
		optional: true
	},
	print: {
		type: Boolean,
		label: "Print",
		optional: true
	},
	illustrated: {
		type: Boolean,
		label: "Illustrated",
		optional: true
	},
	audio: {
		type: Boolean,
		label: "Audio",
		optional: true
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
		label: "Original Publication",
		optional: true
	},
	o_pubDate: {
		type: Date,
		label: "Original Publication Date",
		optional: true
	},
	subgenre: {
		type: String,
		label: "Sub-Genre",
		optional: true,

	},
	category: {
		type: String,
		label: "Category", /* as in free-on-site vs premium vs sale; or quick-read vs novella, etc. */
		optional: true
	},
	wordCount: {
		type: Number,
		label: "Word Count",
		optional: true
	},
	illustration: {
		type: [illustrationType],
		label: "Illustrations",
		optional: true
	},
	keywords: {
		type: [String],
		label: "Keywords",
		optional: true
	},
	excerpt: {
		type: String,
		label: "Excerpt",
		// min: 125,
		optional: true
	},
	devStatus: {
		type: [devStatus],
		label: "Dev Status",
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	pubStatus: {
		type: [pubStatus],
		label: "Publication Status",
		optional: true,
		autoform: {
			type: "hidden"
		}		
	},
	pubType: {
		type: [pubType],
		label: "Publication Type",
		optional: true,
		autoform: {
			type: "hidden"
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
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			return new Date() /* ???? */
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