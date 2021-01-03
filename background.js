// console.log("Background script running");
chrome.runtime.onInstalled.addListener(function (tab) {
	chrome.storage.sync.set({ color: '#3aa757' }, function () {
		console.log("The color is green.");
	});
	console.log(tab);
});
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
	console.log(tab);
	let msg = { txt: "hello" };
	chrome.tabs.sendMessage(tab.id, msg);
}
/* chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
	chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'https://developer.chrome.com/docs/extensions/mv2/getstarted/' },
		})
		],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
}); */