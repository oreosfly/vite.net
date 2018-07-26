module.exports = {
  lang: "CH",

  // components/Home
  profile: {
    title: "概况",
    market: "Vite流通市值",
    tps: "系统TPS",
    price: "Vite流通价格",
    totalTrans: "历史总交易量",
    latestHeight: "最新区块高度",
    nearMonth: "近30天交易量",
  },
  lineChart: {
    title: "交易曲线"
  },
  snapshotList: {
    title: "快照块列表",
    height: "快照块高度",
    node: "出块节点",
    pack: "快照",
    account: "账户",
    cost: "耗时",
    sec: "秒",
    secAgo: "秒前",
  },
  transactionList: {
    title: "交易列表",
    hash: "交易 Hash",
    from: "转出",
    to: "转入",
  },

  // components/Token
  accList: {
    title: "总账户数 --, (仅展示最近的 --条数据)"
  },
  accTitles: [{
    prop: "accountAddress",
    name: "账户地址",
  }, {
    prop: "balance",
    name: "账户余额",
  }, {
    prop: "percent",
    name: "占总流通比例",
  }, {
    prop: "transNum",
    name: "账户交易次数",
  }],

  // Basic components part: components/
  footer: {
    official: "官网"
  },
  nav: {
    index: "首页",
    transactionList: "交易列表",
    blockList: "快照块列表",
    tokenList: "Token列表"
  },
  pageTable: {
    pre: "上一页",
    next: "下一页",
    num: "序号",
  },
  search: {
    btn: "搜索",
    placeholder: "支持搜索区块、交易、账户、代币"
  },
  utils: {
    noData: "暂无数据"
  },


  // components/transList.vue
  transList: {
    title: "总交易笔数：",
    label: "交易列表"
  },
  transTitles: [{
    prop: "hash",
    name: "交易Hash",
    width: "160"
  }, {
    prop: "type",
    name: "交易类型",
  }, {
    prop: "status",
    name: "状态",
  }, {
    prop: "snapshotTimestamp",
    name: "首次快照块",
    width: "160"
  }, {
    prop: "timestamp",
    name: "时间戳",
    width: "100"
  }, {
    prop: "confirmTimes",
    name: "确认数",
    width: "115"
  }, {
    prop: "from",
    name: "转出方",
    width: "160"
  }, {
    prop: "to",
    name: "转入方",
    width: "160"
  }],
  addedTitle: [{
    prop: "tokenName",
    name: "代币",
    width: "70"
  }, {
    prop: "amount",
    name: "金额",
    width: "75"
  }],


  // layouts/
  error: {
    reload: "点击重新加载",
    home: "点击返回首页",
    exception: "发生错误异常",
  },


  // pages/account
  account: {
    title: "账户详情",
    accHash: "地址",
    accType: "账户持有代币种类",
    accToken: "账户持有代币",
    token: "代币",
    bAmount: "余额数量",
    bValue: "余额价值",
    tNum: "交易次数",
    allToken: "所有代币估值",
  },


  // pages/block
  block: {
    title: "快照块详情",
  },
  blockDetailMap: {
    height: "快照块高度",
    age: "快照块年龄",
    accountNum: "快照账户数",
    hash: "快照块Hash",
    producer: "快照节点",
    amount: "锻造奖励"
  },


  // pages/blockList
  blkList: {
    title: {
      total: "总快照块量：",
      // recentTotalFirst: "，（仅展示最近的 ",
      // recentTotalEnd: " 条数据）"
    }
  },
  blockTitles: [{
    prop: "height",
    name: "快照块高度",
  }, {
    prop: "age",
    name: "快照块年龄",
  }, {
    prop: "accountNum",
    name: "快照账户数",

  }, {
    prop: "producer",
    name: "快照节点",

  }, {
    prop: "hash",
    name: "Hash",

  }, {
    prop: "price",
    name: "锻造奖励",
  }],


  // pages/searchError
  sError: {
    text: "竟然没有搜索到，换个词试试"
  },


  // pages/token
  token: {
    aLabel: "账户列表",
    tLabel: "交易列表",
  },
  tokenDetailMap: {
    circulationLines: "流通额度",
    owner: "所有者地址",
    price: "价格",
    addressNumber: "地址数量",
    transactionNumber: "交易数量"
  },


  // pages/tokenList
  tokenList: {
    title: "代币列表",
    total: "总TOKEN种类：",
  },
  tokenTitles: [{
    prop: "icon",
    name: "图标",
  }, {
    prop: "token",
    name: "代币",
  }, {
    prop: "price",
    name: "价格",
  }, {
    prop: "upDown",
    name: "涨跌",
  }, {
    prop: "transPrice",
    name: "交易金额",
  }, {
    prop: "famc",
    name: "流通市值",
    width: "190"
  }],


  // pages/transaction
  transaction: {
    send: "发送",
    receive: "接收",
  },
  transactionDetailMap: {
    hash: "交易Hash",
    type: "交易类型",
    status: "交易状态",
    confirmTimes: "确认数",
    snapshotBlockHash: "首次快照块",
    timestamp: "时间戳",
    from: "转出方地址",
    to: "转入方地址",
    tokenName: "Token",
    amount: "数额",
    introduction: "附带的文本资料"
  },


  // Head titles of all pages
  head: {
    home: "Vite区块链浏览器",
    blockList: "Vite区块",
    transTitle: "Vite交易信息",
    sError: "搜索无结果",
    tTitle: "代币详情",
    transDetail: "交易详情",
  }
};
