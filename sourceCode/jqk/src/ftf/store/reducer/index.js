import { CHANGE_INPUT,PUSH_SEARCH_LIST,PUSH_HISTORY_LIST,ENTER_HISTORY_LIST,DELETE_ITEM,CLEAR_ITEM} from '../actionType/search'
const defaultState = {
    input:'',
    homeData:[
        {
          id: 1,
          to: "/tuijian",
          text: "推荐"
        },
        {
          id: 2,
          to: "/shenghuo",
          text: "生活"
        },
        {
          id: 3,
          to: "/jiaoyu",
          text: "教育"
        },
        {
          id: 4,
          to: "/yule",
          text: "娱乐"
        },
        {
          id: 5,
          to: "/qiche",
          text: "汽车"
        },
        {
          id: 6,
          to: "/jinrong",
          text: "金融"
        },
        {
          id: 7,
          to: "/zhichang",
          text: "职场"
        },
        {
          id: 8,
          to: "/keji",
          text: "科技"
        },
        {
          id: 9,
          to: "/tiyu",
          text: "体育"
        }
      ],
      list: [
                {
                    id: 1,
                    title: "华为正式发布鸿蒙",
                    text: "全场景分布式系统"
                },
                {
                    id: 2,
                    title: "上海堡垒",
                    text: "上映后口碑崩盘？"
                },
                {
                    id: 3,
                    title: "杨幂魏大勋恋情？",
                    text: "男方发文否认"
                },
                {
                    id: 4,
                    title: "RNG 2:1 击败 iG",
                    text: "电竞春晚 RNG 胜出"
                },
                {
                    id: 5,
                    title: "荣耀智慧屏发布",
                    text: "首款搭载鸿蒙系统"
                },
                {
                    id: 6,
                    title: "中餐厅第三季",
                    text: "黄晓明店长能力引质疑"
                },
                {
                    id: 7,
                    title: "中国新说唱第二季",
                    text: "最新八强出炉"
                },
                {
                    id: 8,
                    title: "方舟编译器是什么",
                    text: "如何一句话讲清？"
                }
            ],            
            searchData:[
              {
                  id: 1,
                  title: "华为正式发布鸿蒙",
                  text: "全场景分布式系统"
              },
              {
                  id: 2,
                  title: "上海堡垒",
                  text: "上映后口碑崩盘？"
              },
              {
                  id: 3,
                  title: "杨幂魏大勋恋情？",
                  text: "男方发文否认"
              },
              {
                  id: 4,
                  title: "RNG 2:1 击败 iG",
                  text: "电竞春晚 RNG 胜出"
              },
              {
                  id: 5,
                  title: "荣耀智慧屏发布",
                  text: "首款搭载鸿蒙系统"
              },
              {
                  id: 6,
                  title: "中餐厅第三季",
                  text: "黄晓明店长能力引质疑"
              },
              {
                  id: 7,
                  title: "中国新说唱第二季",
                  text: "最新八强出炉"
              },
              {
                  id: 8,
                  title: "方舟编译器是什么",
                  text: "如何一句话讲清？"
              }
          ],
    searchList: [],
    historyList: [],
    count: 0
}
export default (state = defaultState,action)=>{
  const newState=JSON.parse(JSON.stringify(state))
  switch(action.type){
    case CHANGE_INPUT:
      newState.input=action.value;
      return newState;
      case PUSH_SEARCH_LIST:
        newState.searchList = action.list
        return newState
      case PUSH_HISTORY_LIST:
        newState.historyList.push(newState.searchList[action.index])
        newState.searchList = [];
       newState.input= '';
        return newState
      case ENTER_HISTORY_LIST:
      newState.historyList.push(newState.input)
      newState.searchList = [];
      newState.input = ''
      return newState
    case DELETE_ITEM:
      newState.historyList.splice(action.index,1)
      return newState
    case CLEAR_ITEM:
      newState.historyList = []
      return newState
    case 'onAddCount':
      newState.count += 1;
      return newState
    default:
     return state
  }
}