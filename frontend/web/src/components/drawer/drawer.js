export default {
	name: 'Drawer',
	computed: {
		initiallyOpen() {
			return [this.$store.getters.context['introduction']];
		},
		items() {
			return [
				{
					id: 1,
					name: this.$store.getters.context['introduction'],
					children: [
						{ id: 2, name: this.$store.getters.context['what-is-abjad'], link: `/${this.$store.getters.lang}/introduction/what-is-abjad` },
						{ id: 3, name: this.$store.getters.context['why-abjad'], link: `/${this.$store.getters.lang}/introduction/why-abjad`  },
					],
					open: 'mdi-script-text',
					close: 'mdi-script-text-outline'
				},
				{
					id: 5,
					name: this.$store.getters.context['getting-started'],
					children: [
						{
							id: 6,
							name: this.$store.getters.context['installation'],
							link: `/${this.$store.getters.lang}/getting-started/installation`
						},
						{
							id: 7,
							name: this.$store.getters.context['first-program'],
							link: `/${this.$store.getters.lang}/getting-started/first-program`
						},
					],
					open: 'mdi-speedometer',
					close: 'mdi-speedometer-medium'
				},
				{
					id: 15,
					name: this.$store.getters.context['documentation'],
					open: 'mdi-file-document',
					close: 'mdi-file-document-outline',
					children: [
            {
							id: 17,
							name: this.$store.getters.context['syntax'],
							link: `/${this.$store.getters.lang}/documentation/syntax`
						},
						{
							id: 18,
							name: this.$store.getters.context['variables'],
							link: `/${this.$store.getters.lang}/documentation/variables`
            },
            {
							id: 19,
							name: this.$store.getters.context['constants'],
							link: `/${this.$store.getters.lang}/documentation/constants`
						},
            {
							id: 20,
							name: this.$store.getters.context['types'],
							link: `/${this.$store.getters.lang}/documentation/data-types`
						},
            {
							id: 21,
							name: this.$store.getters.context['printing'],
							link: `/${this.$store.getters.lang}/documentation/print`
						},
            {
							id: 22,
							name: this.$store.getters.context['operations'],
							link: `/${this.$store.getters.lang}/documentation/operations`
						},
            {
							id: 23,
							name: this.$store.getters.context['comments'],
							link: `/${this.$store.getters.lang}/documentation/comments`
						},
            {
							id: 24,
							name: this.$store.getters.context['conditionals'],
							link: `/${this.$store.getters.lang}/documentation/conditionals`
						},
            {
							id: 25,
							name: this.$store.getters.context['while-loop'],
							link: `/${this.$store.getters.lang}/documentation/while-loop`
						},
            {
							id: 26,
							name: this.$store.getters.context['for-loop'],
							link: `/${this.$store.getters.lang}/documentation/for-loop`
						},
            {
							id: 26,
							name: this.$store.getters.context['function'],
							link: `/${this.$store.getters.lang}/documentation/function`
						},
            {
							id: 26,
							name: this.$store.getters.context['class'],
							link: `/${this.$store.getters.lang}/documentation/class`
						},
					]
				},
				{
					id: 16,
					name: this.$store.getters.context['running-abjad'],
					open: 'mdi-play',
					close: 'mdi-play-outline',
					link: `/${this.$store.getters.lang}/running-code`
				},
				{ 
					id: 10, 
					name: this.$store.getters.context['online-editor'],
					link: `/${this.$store.getters.lang}/editor`,
					close: 'mdi-code-braces'
				},
				{
					id: 19,
					name: this.$store.getters.context['about']
				},
			];
		}
	}
}