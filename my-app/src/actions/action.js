const githubSearchUrl = 'https://api.github.com/search/repositories';

export const GET_REPO = 'GET_REPO';

function sendResultToReducer(result){
	return {
		type: GET_REPO,
		result
	}
}

export default function getSearchResult(text, stars, license, forked){
	return (dispatch, queryStr) => {
		queryStr = encodeURIComponent(text)+'+stars'+encodeURIComponent(`:${stars}`)+'+license'+encodeURIComponent(`:${license}`)+'+fork'+encodeURIComponent(`:${forked}`);
		fetch(githubSearchUrl+'?q='+queryStr)
			.then(response => {
				return response.json();
			})
			.then(data => {
				dispatch(sendResultToReducer(data));
			})
			.catch(() => {
				alert('Error when retrieving the search result');
			})
	}
}