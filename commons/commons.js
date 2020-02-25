const topicKey = "topics";
const curIndexKey = "curIndex";
const getTopicsByCache = function(){
	var topics = uni.getStorageSync(topicKey);
	return topics;
}
const addTopicByCache = function(topic){
	var topics = uni.getStorageSync(topicKey);
	if(topics == ""){
		var topics= new Array();
	}
	topics.push(topic);
	uni.setStorageSync(topicKey, topics);
	return topics;
}
const delTopicByCache = function(index){
	var topics = uni.getStorageSync(topicKey);
	topics.splice(index,1);
	uni.setStorageSync(topicKey, topics);
	return topics;
}
const editTopicByCache = function(index,topic){
	var topics = uni.getStorageSync(topicKey);
	if(topics == ""){
		var topics= new Array();
	}
	topics[index]=topic;
	uni.setStorageSync(topicKey, topics);
	return topics;
}
const setCurIndex = function(index){
	uni.setStorageSync(curIndexKey,index);
}
const getCurIndex = function(){
	var index = uni.getStorageSync(curIndexKey);
	return index;
}

const reset = function(){
	try {
	    uni.clearStorageSync();
		var topic = new Object();
		topic.topicName="周末去哪玩?";
		topic.list=getDefaultList();
		addTopicByCache(topic);
		setCurIndex(0);
	} catch (e) {
	    // error
	}
}

const getDefaultList=function(){
	var list = ["电影院看电影",
				"补美容觉",
				"逛商场",
				"一起追剧",
				"一起玩游戏",
				"景点游玩",
				"压马路",
				"给对方煲汤"];
	return list;
}

export default {
    topicKey,
    curIndexKey,
    getTopicsByCache,
	addTopicByCache,
	editTopicByCache,
	delTopicByCache,
	setCurIndex,
    getCurIndex,
    getDefaultList,
    reset,
}