const imgHost = 'http://fuss10.elemecdn.com/';
//头部地址和天气的api
//const addressApi='/bgs/poi/reverse_geo_coding?latitude=22.54286&longitude=114.059563'
const addressApi='/bgs/poi/reverse_geo_coding';
//天气
//const weatherApi = '/bgs/weather/current?latitude=22.54286&longitude=114.059563';
const weatherApi = '/bgs/weather/current';
//热搜词
//const hotWordsApi = '/shopping/v3/hot_search_words?latitude=22.54286&longitude=114.059563';
const hotWordsApi = '/shopping/v3/hot_search_words';
//轮播图
//const categoryApi = '/shopping/v2/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template';
const categoryApi =  '/shopping/v2/entries?templates[]=main_template';
//列表
//const homeListApi = '/shopping/restaurants?latitude=22.54286&longitude=114.059563&offset=0&limit=20&extras[]=activities&terminal=h5'
const homeListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5'

//地址搜索请求
//const searchAssressApi="/bgs/poi/search_poi_nearby?offset=0&limit=20&longitude=113.93694&latitude=22.532597"
const searchAssressApi='/bgs/poi/search_poi_nearby?offset=0&limit=10';

//搜索推荐api
const searchWordApi='/shopping/v3/hot_search_words?geohash=ws102bgc3uey'

//搜索api  &keyword=招牌酸菜鱼&latitude=22.548305&longitude=113.944439
const keyWrodSearchApi='/shopping/v1/restaurants/search?offset=0&limit=20&keyword=招牌酸菜鱼&latitude=22.548305&longitude=113.944439&search_item_type=2&extra[]=activities'  
//const keyWrodSearchApi='/shopping/v1/restaurants/search?offset=0&limit=20&search_item_type=2&extra[]=activities'

//店铺详情头部api连个部分加起来 是一个完整请求
//var detailh1 ="/shopping/restaurant/155170084" 数字是id
var detailhApi1 ="/shopping/restaurant/"
var datailhApi2="?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=22.54286&longitude=114.059563"

//店铺详情头菜单分类api'/shopping/v2/menu?restaurant_id=155170108'
var detailMenuApi= '/shopping/v2/menu?restaurant_id='

var  testApi="../../static/nav.json"
export default {
	addressApi,
	weatherApi,
	imgHost,
	hotWordsApi,
	categoryApi,
	homeListApi,
	searchAssressApi,
	searchWordApi,
	keyWrodSearchApi,
	detailhApi1,
	datailhApi2,
	detailMenuApi,
	testApi
}
