'use strict';

let usersDummyData = [
	{
		username: 'Pistike123',
		first_name: 'Pistike',
		last_name: 'Lachazai',
		email: 'pistike@gmail.hu',
		password: 'abc'
	},
	{
		username: 'Zolika123',
		first_name: 'Zolika',
		last_name: 'Kovacs',
		email: 'zolika@gmail.hu',
		password: 'abc'
	},
	{
		username: 'tomikathebest',
		first_name: 'Tamas',
		last_name: 'Nagy',
		email: 'nagytomi@gmail.hu',
		password: 'abc'
	}
];

let postsDummyData = [
	{
		title: 'Dear Javascript',
		url: 'https://www.google.com',
	},
	{
		title: 'I love SQL',
		url: 'https://www.mysql.com',
	},
	{
		title: 'Why is linux the best OS?',
		url: 'https://www.debianproject.com',
	},
	{
		title: 'The benefits of drinking tea',
		url: 'https://www.twinings.com',
	}
];

let votesDummyData = [
	{
		user_id: '1',
		post_id: '2',
		vote: '0'
	},
];

module.exports = { usersDummyData, postsDummyData, votesDummyData }
