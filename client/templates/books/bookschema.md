BookSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	author: {
		type: String,
		label: "Author"
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
	type: {
		type: String,
		label: "Type" /* as in free-on-site vs premium vs sale; or quick-read vs novella, etc. */
	},
	wordCount: {
		type: Number,
		label: "Word Count"
	},
	illustration: {
		type: String,
		label: "Illustrations"
	},
	keywords: {
		type: [String],
		label: "Keywords"
	},
	excerpt: {
		type: String,
		label: "Excerpt"
	},
	devStatus: {
		type: Object,
		label: "Title"
	},
	pubStatus: {
		type: [String],
		label: "Publication Status"
		// allowedValues: ['site', 'TRF', 'siteStore', 'externalStore']
	},
	pubType: {
		type: [String],
		label: "Publication Type",
		defaultValue: 'unpublished'
		// allowedValues: ['unpublished', 'TRF', 'web', 'ePub', 'mobi', 'print', 'audio'],
		// autoValue: 'unpublished'
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date()
		}
	}
});

Books.attachSchema( BookSchema );