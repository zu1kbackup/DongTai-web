export default {
  log: {
    login: '登入',
    title: '日志管理',
    exportBtn: '导出',
    deleteBtn: '删除',
    clearBtn: '清空',
    username: '用户名',
    handle: '操作',
    handleTime: '操作时间',
    selectAllPage: '本页全选',
    deleteInfo: '日志删除后，将不可恢复',
    deleteDesc: '请确认是否删除？',
    deleteEnter: '确认删除',
    deleteClear: '取消',
    clearEnter: '确认清空',
    clearClear: '取消',
    deleteTitle: '删除日志',
    clearTitle: '清空日志',
    clearInfo: '日志清空后，将不可恢复',
    clearDesc: '请确认是否清空？',
    choseLog: '请选择日志',
  },
  message: {
    notice: '消息通知',
    clearAll: '全部清除',
    Empty: '空消息',
    warning: '此操作将删除消息, 是否继续?',
    tips: '提示',
    confirm: '确定',
    cancel: '取消',
  },
  base: {
    yearAgo: '年前',
    monthAgo: '月前',
    dayAgo: '天前',
    hourAgo: '小时前',
    minuteAgo: '分钟前',
    secondAgo: '秒前',
    login: '登 入',
    loading: '正在加载...',
    deploy: 'Add Agent',
    logout: '退出',
    oldPassword: '请输入原有密码',
    newPassword: '请输入新密码',
    rePassword: '请再次输入密码',
    diffPassword: '两次输入密码不一致',
  },
  menu: {
    about: '关于洞态',
    projectEdit: '项目配置',
    home: '首页',
    login: '登录',
    project: '项目配置',
    projectManage: '项目配置',
    projectDetail: '项目详情',
    vuln: '应用漏洞',
    vulnList: '应用漏洞列表',
    vulnDetail: '应用漏洞详情',
    sca: '组件管理',
    scaList: '组件管理列表',
    scaDetail: '组件管理详情',
    setting: '系统配置',
    changeLogo: '品牌配置',
    agentManage: 'Agent 管理',
    sensitive: '敏感信息',
    template: '策略模板',
    strategyManage: '策略管理',
    strategy: '策略',
    hookRule: '自定义规则',
    upgradeOnline: '系统升级',
    sysInfo: 'Agent 配置',
    changePassword: '密码修改',
    logManage: '操作日志',
    user: '角色管理',
    talent: '租户管理',
    department: '部门管理',
    taintPool: '搜索',
    search: '污点搜索',
    poolDetail: '污点详情',
    language: '语言选择',
    chinese: '简体中文',
    englist: '英文',
    statusMonitoring: '状态监控',
    userSetting: '用户管理',
    roleSetting: '组织管理',
    sensitiveManage: '敏感信息配置',
    templateManage: '策略模板管理',
  },
  views: {
    changeLogo: {
      settingTitle: '品牌显示配置',
      settingInfo:
        'Logo 样式与 Icon 样式需要同时上传，未配置项将显示洞态图标。',
      uploadLogo: '上传Logo样式',
      uploadLogoOne:
        '1. 支持上传品牌 Logo, 默认展示 “洞态” Logo，上传前可预览线上场景，如下图所示。',
      uploadLogoTwo:
        '2. Logo 建议使用彩色图片，最小尺寸 100*30，最大尺寸200*60，支持png格式，最大 2 MB，宽高比为10:3，无背景。',
      enLogo: '英文logo',
      zhLogo: '中文logo',
      change: '点击图片替换',
      uploadIcon: '上传Icon样式',
      uploadIconOne:
        '1. 支持上传品牌 Icon, 默认展示 “洞态”Icon，上传前可预览线上场景，如下图所示。',
      uploadIconTwo:
        ' 2. Icon 建议使用彩色图片，最小尺寸32*32，最大尺寸128*128，支持ico格式，最大128KB，宽高比为1:1，无背景。',
      warningPng: '上传头像图片只能是 PNG 格式!',
      warning2M: '上传图片大小不能超过 2MB!',
      warningICO: '上传图片只能是 ICO 格式!',
      warning128K: '上传图片大小不能超过 128KB!',
    },
    statusMonitoring: {
      on: '运行中',
      off: '关闭',
      oss: '云端Agent服务',
      normal: '正常',
      error: '异常',
      dongtai_openapi: 'OpenAPI服务',
      dongtai_engine: 'Engine服务',
      engine_monitoring_indicators: '消息队列状态监控',
      padding: '堆积',
      item: '条',
    },
    deploy: {
      begin: '选择一种语言，开始安装',
      installing: '安装',
      agent: 'Agent',
      term: '开始安装之前，检查你的环境，确保以下条件：',
      download: '下载Agent',
      install: '安装Agent',
      copy: '复制',
      downloadWorld: '下载',
      reloadTile: '重启应用服务（自动安装跳过此步）',
      reloadDesc: '请重启您的应用服务器。',
      help: '安装帮助',
      agentInstructions: '安装方法',
      moreDocument: '查阅更多文档',
      moreSupport: '获得更多支持',
      issue: '提交 ISSUE',
      java: {
        autoInstall: '自动安装',
        ManualInstallation: '手动安装',
        autoInstallDesc:
          '上传 DongTai JAVA Agent到应用服务器，查看需要部署Agent的 JAVA Web应用的进程 id，然后运行命令安装Agent，命令如下',
        term1:
          '检查Agent所在系统与DongTai OpenApi之间网络环境是否可以互相连接。',
        term2:
          '确认Agent端所在环境在我们的支持列表中。支持列表：Any Java EEServer、Tomcat、JBoss、Jetty、Resin、WebLogic、WebSphere',
        term3: ``,
        term4: ``,
        term5: ``,
        term6: ``,
        term7: ``,
        p1:
          '若尚未启动 Web 应用服务器，请启动 Web 应用服务器。然后再浏览器访问应用。稍等1-2分钟，刷新系统配置页面，点击Agent管理，查看Agent是否注册成功。如果没有注册成功，按照如下步骤进行排查：',
        p2: '1. 检查 agent.jar 文件',
        p3:
          '运行 java -jar /tmp/agent.jar 命令，查看是否反馈 agent.jar 的使用帮助，如果没有，说明 agent.jar 文件不正确，请重新下载然后检查 agent.jar 文件，如果仍然不正确，请前往 github 给工程师提交 issue，我们会及时给您回复',
        p4: '2. 检查网络情况',
        p51: '在 Web 应用服务器中，检查是否可访问',
        p52:
          '服务，如果不可访问，说明网络不通，请解决网络访问的问题；如果网络不存在问题，请前往 github 给工程师提交 issue，我们会及时给您回复',
        title2: '确认Agent端所在环境在我们的支持列表中。',
      },
      python: {
        ManualInstallation: '手动安装',
        os: '操作系统: Windows/Linux/macOS',
        term1: 'Python 版本：3.6及以上',
        term2: '解释器：CPython',
        term3: '中间件：uWSGI',
        termA: '编译依赖',
        termAa: 'gcc (Linux/macOS)',
        termAb: 'make (Linux/macOS)',
        termAc: 'cmake',
        termAd: 'Visual Studio (Windows)',
        term4: 'Web框架：',
        'term4-1': '- Django：3.0-3.2',
        'term4-2': '- Flask：1.0-1.2',
        term6: 'python依赖包：',
        'term6-1': '- psutil >= 5.8.0',
        'term6-2': '- requests >= 2.25.1',
        'term6-3': '- pip >= 19.2.3',
        manualInstallationDesc: '找到第一步下载的压缩文件执行以下命令',
        settings: '项目配置',
        p1:
          '若尚未启动 Web 应用服务器，请启动 Web 应用服务器。然后再浏览器访问应用。稍等1-2分钟，刷新系统配置页面，点击Agent管理，查看Agent是否注册成功。如果没有注册成功，按照如下步骤进行排查：',
        p2: '1. 检查 dongtai-agent-python.tar.gz 文件',
        p3:
          '运行pip3 install ./dongtai-agent-python.tar.gz 命令，查看是否反馈 dongtai-agent-python.tar.gz 的使用帮助，如果没有，说明 dongtai-agent-python.tar.gz文件不正确，请重新下载然后检查 dongtai-agent-python.tar.gz文件，如果仍然不正确，请前往 github 给工程师提交 issue，我们会及时给您回复',
        p4: '2. 检测Django项目的setting.py文件，MIDDLEWARE配置是否有增加',
        p5: `'dongtai_agent_python.middlewares.django_middleware.FireMiddleware'`,
        p6: '3. 检查网络情况',
        p71: '在 Web 应用服务器中，检查是否可访问',
        p72:
          ' 服务，如果不可访问，说明网络不通，请解决网络访问的问题；如果网络不存在问题，请前往 github 给工程师提交 issue，我们会及时给您回复',
        settingName: '配置项目名称',
        n1:
          '配置系统环境变量projectName，demoProjectName为自定义项目名称，与web页面，项目管理中新增项目名称保持一致，否则无法上报流量',
        n2: 'linux/mac命令导入：',
        n3: 'export projectName=demoProjectName',
        n4: 'Windows 增加环境变量:',
        n5: '验证： 命令行 直接输入 env 即可查看',
        n6:
          '注意，若无法配置系统环境变量，可更改agent配置文件，修改项目名称，找到python安装agent扩展包路径地址，例如：/Library/Frameworks/Python.framework/Versions/3.8/lib/python3.8/site-packages/dongtai_agent_python修改dongtai_agent_python/config.json中的project.name，系统环境变量projectName优先级高于配置文件中的project.name；',
      },
      php: {
        ManualInstallation: '手动安装',
        term1: 'PHP版本不低于8.0.9',
        manualInstallationDesc1:
          'a.手动解压缩php-agent.tar.gz，php-agent里面有三个文件，分别是：dongtai_php_agent.so& policy.json &dongtai-php-property.ini，把dongtai_php_agent.so放到php安装环境中的extension中，policy.json的路径可以在dongtai-php-property.ini中修改hook.json.path对应的路径，默认为:"/var/www/php-agent/policy.json"。',
        manualInstallationDesc2:
          'b.dongtai-php-property.ini放在php的配置文件夹中，如conf.d,php –m查看是否安装成功，如果没有dongtai_php_agent,去掉dongtai-php-property.ini中extension=dongtai_php_agent的注释，重新查看。',
        manualInstallationDesc3:
          'c. 通过终端，可以调用本地php文件测试结果，也可以进入靶场测试，靶场地址：https://github.com/jinghao1/phpvul',
      },
      go: {
        term1: 'Go版本不低于1.11',
        ManualInstallation: '手动安装',
        manualInstallationDesc1:
          'a.将下载的dongtai-go-agent-config.yaml放置到项目根目录',
        manualInstallationDesc2:
          'b.在项目入口文件引入基础包 _ "github.com/HXSecurity/DongTai-agent-go/run/base"',
        manualInstallationDesc3:
          'c.在项目入口文件引入框架包 例：_ "github.com/HXSecurity/DongTai-agent-go/run/gin"',
        manualInstallationDesc4: 'd.目前支持框架包：',
        manualInstallationDesc5:
          'gorm: _ "github.com/HXSecurity/DongTai-agent-go/run/gorm"',
        manualInstallationDesc6:
          'http: _ "github.com/HXSecurity/DongTai-agent-go/run/http"',
        manualInstallationDesc7:
          'httprouter： _ "github.com/HXSecurity/DongTai-agent-go/run/httpRouter"',
        manualInstallationDesc8: 'e.执行: go mod tidy 等待同步包',
        manualInstallationDesc9:
          'f.添加命令行参数 -gcflags "all=-N -l" 运行项目,例如： go run main.go -gcflags "all=-N -l"',
      },
    },
    search: {
      commonly: '常用查询语法',
      copySuccess: '已复制',
      copyFail: '复制失败',
      important: '高危',
      height: '中危',
      middle: '低危',
      low: '无风险',
      graph: '污点调用链',
      edit: '编辑',
      http: 'HTTP数据包',
      no: '无',
      assignVuln: '关联漏洞',
      project: '项目',
      user: '用户',
      no_project_name: '未绑定',
      agent: 'Agent',
      running: '运行中',
      stop: '已停止',
      sending: '重放中',
      send: '发送',
      copy: '复制',
      defPolicy: '内置策略',
      myPolicy: '我的策略',
      searchValuePlace: '请输入查询内容',
      prependPlace: '筛选',
      url: 'URL',
      signature: '方法签名',
      sinkvalues: '污点数据',
      req_header_fs: '请求头',
      req_data: '请求体',
      res_header: '响应头',
      res_body: '响应体',
      empty: '无匹配数据',
      warning: '请输入搜索内容',
      contain: '包含',
      exclude: '不包含',
      farthest: '最早',
      lately: '最近',
      day: '天',
      hour: '小时',
      minute: '分钟',
      second: '秒',
      timeWarning: '请输入大于0的整数',
      enterTime: '确定',
      quickSelection: '快速选择',
      commonlyU: '常用',
      today: '今日',
      '24Hours': '24小时',
      thisWeek: '本周',
      '7Day': '7天',
      '15Minutes': '15分钟',
      '30Minutes': '30分钟',
      '1Hour': '1小时',
    },
    hookPage: {
      all: '全部',
      sourceRule: '污点源方法规则',
      propRule: '传播方法规则',
      filterRule: '过滤方法规则',
      dangerRule: '危险方法规则',
      allHooksNum: '规则总数',
      sinkHooksNum: 'sink规则数量',
      selected: '已选中',
      race: '种',
      strip: '条',
      selectType: '请选择规则类型',
      addHookType: '添加规则类型',
      addHook: '添加规则',
      on: '启用',
      off: '禁用',
      del: '删除',
      empty: '暂无数据',
      ruleInfo: '规则详情',
      point: '污点输入',
      pointOut: '污点输出',
      hoopDeep: 'HOOK深度',
      children: '子类',
      nowChildren: '当前类及子类',
      now: '当前类',
      openTrace: '开启污点跟踪',
      yes: '是',
      no: '否',
      updateTime: '修改时间',
      user: '创建者',
      status: '状态',
      address: '操作',
      edit: '编辑',
      delpop: '确定删除吗？',
      hookType: '规则集',
      hooksType: '规则类型',
      typeName: '类型名称',
      namePlaceholder:
        '请输入类型名称，如：String、StringBuilder等，建议使用类名',
      typeShotName: '类型简称',
      shotNamePlaceholder:
        '请输入类型简称，如：字符串-01、字符串-02，方便自己查看',
      openOrNot: '是否启用',
      clear: '取消',
      enter: '确定',
      ruleInfoPlaceholder:
        '请输入HOOK规则，格式如：java.lang.String.<init>(java.lang.String)',
      source: '污点来源',
      target: '污点去向',
      relation: '请选择逻辑关系',
      origin: '请选择数据源',
      paramPlaceholder: '参数编号，从1开始',
      add: '增加',
      hookTrack: '继承深度',
      track: '污点追踪',
      depth: '继承深度',
      onlyChildren: '仅子类',
      onlyNow: '仅当前类',
      or: '或',
      and: '和',
      O: '对象',
      R: '返回值',
      P: '参数',
      changeOne: '此操作将批量',
      changeTwo: '数据, 是否继续?',
      pop: '提示',
      changeWarning: '请先选择需要操作的数据',
      spreadType: '传播方法规则',
      contaminatedType: '污染源方法规则',
      filterType: '过滤方法规则',
      dangerType: '危险方法规则',
      enterType: '入口方法规则',
      searchDesc: '查找规则详情',
    },
    login: {
      title: '用户登录',
      subTitle: '欢迎使用IAST系统',
      user: '账号',
      usernamePlaceholder: '请输入账号，默认admin',
      password: '密码',
      passwordPlaceholder: '请输入密码，默认admin',
      captcha: '验证码',
      captchaPlaceholder: '请输入验证码',
    },
    vulnList: {
      filter: '过滤器',
      language: '语言',
      level: '等级',
      type: '类型',
      reset: '重置',
      resetAll: '重置全部',
      project_name: '项目',
      searchExample: '请输入搜索条件，如：http://127.0.0.1:8080',
      searchName: '请输入项目名称搜索',
      sort: '请选择排序条件',
      developLanguage: '请选择开发语言',
      vulnStatus: '请选择漏洞状态',
      toVeVerified: '待验证',
      verification: '验证中',
      confirmed: '已确认',
      ignored: '已忽略',
      processed: '已处理',
      choose: '已选中',
      strip: '项',
      clear: '取消',
      enter: '确定',
      verificationBatch: '批量验证',
      verificationAll: '全量验证',
      chooseWarning: '请选择需要验证的漏洞',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      will: '即将进行',
      all: '全量',
      batch: '选中条目',
      recheckDesc: '验证，是否继续?',
      recheckInfo: '提示',
      has: '存在',
      vule: '漏洞',
      is: '的',
      reqHas: '出现',
      position: '位置',
      orderOptions: {
        type: '漏洞类型',
        level: '漏洞等级',
        url: 'url',
        latest_time: '最新上报时间',
        first_time: '首次上报时间',
      },
    },
    vulnDetail: {
      vulnList: '应用列表',
      source_value: '初始污点',
      target_value: '传播后污点',
      baseInfo: '基本信息',
      vulnDesc: '漏洞描述',
      recheck: '验证',
      export: '导出',
      delete: '删除',
      httpRequest: '请求包',
      codeDemo: '漏洞代码示例',
      graph: '污点流图',
      suggest: '修复建议',
      appInfo: '应用信息',
      devEnv: '运行时环境',
      path: '环境变量',
      url: 'url',
      first_time: '首次出现',
      serverIp: '服务器 IP',
      clientIp: '客户端 IP',
      language: '语言',
      port: '端口',
      projectName: '项目名称',
      level: '危害等级',
      counts: '出现次数',
      type: '类型',
      file: '文件',
      num: '行号',
      caller: '调用方法',
      fileAndNum: '文件及行号',
      wuDianZhi: '污点值',
      route: '路径',
      middleware: '中间件',
      command: '启动命令',
      other: '其他',
      state: '状态',
      taintValue: '攻击向量',
      taintParamName: '攻击参数',
      agent: 'Agent',
      version: '项目版本',
      reload: '刷新',
      has: '存在',
      vule: '漏洞',
      is: '的',
      reqHas: ' 出现',
      position: '位置',
      untreated: '未处理',
      replay: '请求重放',
      stainSource: '污点来源',
      communicationMethod: '传播方法',
      dangerMethod: '危险方法',
      deleteVuln: '删除漏洞',
      deleteVulnInfo: '漏洞删除后，将不可恢复',
      deleteVulnDesc: '请确认是否删除？',
      deleteVulnEnter: '确认删除',
      cancel: '取消',
      canNotReplay: '历史数据不支持重放',
      exportSuccess: '导出报告成功',
      exportFail: '导出报告失败',
      empty: '空',
      req: '请求',
      res: '响应',
      reported: '已上报',
      confirmed: '已确认',
      fixed: '已修复',
      ignored: '已忽略',
      vuln: '漏洞',
    },
    scaList: {
      license: '开源协议',
      filter: '过滤器',
      language: '语言',
      level: '等级',
      type: '类型',
      reset: '重置',
      resetAll: '重置全部',
      project_name: '项目',
      searchExample: '请输入搜索条件，如：spring',
      searchName: '请输入项目名称搜索',
      sort: '请选择排序条件',
      developLanguage: '请选择开发语言',
      orderOptions: {
        project_name: '项目名称',
        level: '风险等级',
        package_name: '包名',
        version: '版本',
        language: '语言',
        vul_count: '风险数量',
      },
      tableHeaders: {
        close: '确认关闭？',
        enter: '确 认',
        clear: '取 消',
        update_time: '更新时间',
        create_time: '创建时间',
        context_path: '上下文',
        method_pool: '方法池',
        http_method: '请求方法',
        req_header: '请求体',
        name: '组件名称',
        path: '路径',
        version: '组件版本',
        application: '所属应用',
        language: '语言',
        level: '风险等级',
        count: '漏洞数量',
        time: '发现时间',
        componentInfo: '组件信息',
        dataTest: '数据包调试',
      },
    },
    scaDetail: {
      agent: 'Agent',
      version_now: '项目版本',
      version: '组件版本',
      level: '风险等级',
      project_name: '项目名称',
      vul_count: '漏洞数量',
      unit: '个',
      signature_value: '组件哈希',
      vulList: '漏洞列表',
      cveNumber: 'CVE 编号',
      cweNumber: 'CWE 编号',
      vulName: '漏洞名称',
      vulLevel: '漏洞等级',
      safeVersion: '安全版本',
      operate: '操作',
      detail: '详情',
      reload: '刷新',
      scaList: '组件列表',
      path: '组件路径',
      vulDetail: {
        title: '漏洞详情',
        num: '漏洞编号',
        name: '漏洞名称',
        desc: '漏洞概述',
        detail: '漏洞细节',
      },
    },
    changePassword: {
      username: '用户名',
      oldPassword: '旧密码',
      newPassword: '新密码',
      confirmNewPassword: '确认新密码',
      submit: '确认',
    },
    agentManage: {
      method_queue: '方法池队列',
      replay_queue: '重放队列',
      report_queue: '报告队列',
      step: '次',
      item: '条',
      delAgentInfo: '此操作将永久删除该Agent, 是否继续?',
      delAgentPop: '提示',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      delAgent: '删除Agent',
      enterDel: '确认删除',
      clear: '取消',
      agentDelInfo: 'Agent删除后，相关的数据将一并删除，不可恢复',
      agentDelPop: '请确认是否删除？',
      running: '运行中',
      not_running: '未运行',
      is_core_running: '核心组件运行中',
      is_core_not_running: '核心组件未运行',
      offline: '下线',
      normal: '正常',
      state: '运行状态',
      searchValue: '请输入搜索条件',
      choose: '已选中',
      strip: '条',
      on: '启用',
      off: '禁用',
      del: '删除',
      flow: '请求次数',
      address: '服务器地址',
      payload: '服务器负载',
      status: '运行状态',
      manage: '管理',
      owner: '负责人',
      timestapm: '时间',
      projectName: '项目名称',
      healthy: '健康状态',
      language: '语言',
      selectWarning: '请先选择需要操作的Agent',
      startupTime: '启动时间（毫秒）',
    },
    strategyManage: {
      no: '无',
      edit: '编辑',
      enter: '确 定',
      clear: '取 消',
      del: '删除',
      warning: '当前有策略正在编辑',
      deleteWarning: '此操作将永久删除该数据, 是否继续?',
      deletePop: '提示',
      name: '策略名称',
      detail: '策略详情',
      status: '启用状态',
      settings: '设置',
      operate: '操作',
      fix: '修复建议',
      addChildren: '新增子部门',
      children: '子部门',
      tname: '部门名称',
      twname: '请输入部门名称',
      twnamep: '请输入部门名称进行搜索',
      searchValue: '搜索漏洞类型',
      level: '风险等级',
      editTitle: '编辑策略',
      addTitle: '新增策略',
      viewTitle: '策略详情',
      notnull: '该值不能为空',
      view: '预览',
    },
    sensitiveManage: {
      no: '无',
      edit: '编辑',
      enter: '确 定',
      clear: '取 消',
      del: '删除',
      deleteWarning: '此操作将永久删除该数据, 是否继续?',
      deletePop: '提示',
      name: '策略名称',
      detail: '匹配方式',
      status: '启用状态',
      settings: '设置',
      operate: '操作',
      fix: '匹配规则',
      add: '新增匹配规则',
      searchValue: '搜索敏感数据类型',
      testData: '测试数据',
      test: '运行',
      res: '匹配结果',
      nameR: '请选择策略名称',
      detailR: '请输入匹配方式',
      fixR: '请输入匹配规则',
      t: '敏感数据配置',
      p1:
        '敏感信息检测功能正式开启公测，为了检测敏感信息泄漏的安全风险，需要配置敏感信息的匹配规则及相关的策略。',
      'p1-1': '检测位置：',
      'p1-2': '1. HTTP Request Param 参数',
      'p1-3': '2. HTTP Request Post Data',
      'p1-4': '3. HTTP Response Data',
      p2: '流程（以增加 手机号码泄漏 为例）：',
      p3:
        '1. 进入 “策略管理” 页面，新增策略 “手机号码泄漏”，填写策略描述、修复建议并选择启用；',
      p4:
        '2. 返回 当前页面，点击 “新增匹配规则” 按钮，选择 策略名称为 “手机号码泄漏”，匹配方式为 “正则匹配”，填写 “匹配规则”，然后点击保存即可。',
      tip:
        '策略名称的来自 策略管理 中的策略名称，如不存在，可联系管理员前往策略管理 新增策略',
      fixP: '输入正则表达式的规则，用于匹配当前策略',
      testP: '输入完内容后，点击运行按钮进行测试',
      search: '搜索',
      noValidatio: '无匹配字符',
    },
    templateManage: {
      fid: '漏洞类型',
      no: '无',
      edit: '编辑',
      enter: '确 定',
      clear: '取 消',
      del: '删除',
      selectAll: '全选',
      deleteWarning: '此操作将永久删除该数据, 是否继续?',
      deletePop: '提示',
      name: '模板名称',
      status: '启用状态',
      settings: '设置',
      operate: '操作',
      add: '新增策略模板',
      searchValue: '搜索策略模板',
      nameR: '请输入策略模板名称',
      search: '搜索',
    },
    upgradeOnline: {
      online: '在线升级',
      onlineDesc:
        '在线升级需要连接公网，访问动态IAST的远程升级服务器，请确保当前机器可访问公网。',
      address: '升级服务器地址',
      onlineSubmit: '立即升级',
      offline: '离线升级',
      offlineDesc:
        '请联系火线平台售后支持，获取最新的离线安装包，然后上传离线安装包进行升级',
      select: '选择离线安装包',
      offlineSubmit: '上传并升级',
      selectFile: '选取文件',
      upload: '上传到服务器',
      uploadInfo: '只能上传jar文件',
    },
    sysInfo: {
      vul_verifiy: '主动验证',
      infoTitle: 'Agent 配置',
      agentThreshold: 'Agent 停止阈值',
      vul:
        '主动验证功能用于验证存在污点调用链的漏洞是否真实有效。主动验证时， engine 自动识别攻击参数位置，并构造 payload，然后从 Agent 内部重放 HTTP/HTTPS 流量，进行验证。该功能非必须功能，关闭不会造成漏洞检测结果的变化，如不需要，可自行关闭。',
      open: '当CPU利用率满足阈值条件时，Agent自动停止。',
      close: '当CPU利用率低于阈值条件时，Agent自动启动。',
      cpu: 'CPU 利用率 ',
      enter: '确定',
      on: '开启',
      off: '关闭',
    },
    projectManage: {
      title: '项目列表',
      name: '项目名称',
      vul: '已确认漏洞',
      agent: '存活Agent数量(个)',
      owner: '负责人',
      time: '最近更新时间',
      manage: '管理',
      add: '新建项目',
      searchName: '请输入项目名称，然后回车或点击搜索图标进行搜索',
    },
    projectEdit: {
      on: '开启',
      off: '关闭',
      followAll: '跟随全局',
      advanced: '高级设置',
      save: '保存',
      clear: '取消',
      addScan: '创建策略',
      scanName: '策略名称',
      fid: '漏洞类型',
      selectAll: '全选',
      back: '返回',
      title: '基本设置',
      name: '项目名称',
      namePlaceholder:
        '格式：中文、英文字母大小写、数字、@等组合，长度20以内，名称保证唯一',
      mode: '扫描模式',
      mode1: '插桩模式',
      mode2: '流量模式',
      agent: '关联Agent',
      agentPlaceholder: '请根据Agent的名称选择要加入项目的Agent',
      scan: '扫描策略',
      settings: '设置',
      scanPlaceholder: '请选择已有的扫描策略或新增策略模版',
      scanAdd: '新增策略模板',
      added: '已添加',
      submit: '保存',
      version_name: '版本名称',
      versionNamePlaceholder: '请输入版本号，如：v1.0 或 xxxx年xx月第x次迭代',
      description: '版本描述',
      descriptionPlaceholder: '请输入版本描述，如：更新xxxx功能，优化xxxx等',
      agent_popover:
        '通过选择 Agent，将 Agent 绑定至当前项目；推荐在 Agent 端使用 project.name 参数进行 Agent 与项目的自动绑定',
      version_name_popover:
        '推荐在 Agent 端使用 project.version 参数指定项目版本',
      vul_verifiy: '主动验证',
    },
    apiList: {
      methodPlaceHolder: '请选择请求方法',
      searchPlaceHolder: '请输入API地址进行搜索',
      statusPlaceHolder: '请选择覆盖状态',
      rate: '覆盖率',
      parameters: '参数列表',
      view: '查看请求',
      send: '发起请求',
      name: '名称',
      type: '类型',
      extra: '额外信息',
      response: '响应',
      unlimited: '不限',
      covered: '已覆盖',
      uncovered: '未覆盖',
    },
    projectDetail: {
      mode: '扫描模式',
      latest_time: '最新时间',
      projectDesc: '项目概况',
      apiList: 'API导航',
      projectVul: '项目漏洞',
      projectComponent: '项目组件',
      vulNum: '漏洞分布',
      trend: '风险趋势',
      type: '类型分布',
      owner: '负责人',
      version: '版本',
      add_version: '新增版本',
      version_dialog: '版本管理',
      version_name: '版本名称',
      description: '版本描述',
      handle: '操作',
      current_version: '当前版本',
      versionCurrent: '设为当前版本',
      editVersion: '修改',
      enterVersion: '确定',
      dialogEnterVersion: '关 闭',
      cancelVersion: '取消',
      deleteVersion: '删除',
      hasEdit: '有版本处于编辑状态',
      hasSame: '存在相同版本名称',
      warning: '提示',
      warningInfo: '此操作将永久删除该版本, 是否继续?',
      setting: '设置',
      export: '漏洞报告',
      scaExport: '组件报告',
      recheck: '漏洞验证',
      search_version_name: '版本名称，如：v1',
      search_description: '版本描述，如：xxx业务第x次迭代',
      pieType: '类型',
      exportSuccess: '导出报告成功',
      exportFail: '导出报告失败',
      exportType: '报告格式',
      exportbtn: '导出',
      exportHistory: '导出记录',
      reportTtype: '格式',
      reportTtime: '生成时间',
      reportStatus: '状态',
      done: '已完成',
      loading: '进行中',
      rWarningInfo: '此操作将永久删除该报告, 是否继续?',
    },
    userList: {
      keywordPlaceholder: '请输入名称关键字',
      addUser: '新增用户',
      editUser: '修改用户信息',
      userID: '用户ID',
      name: '用户名称',
      namePlaceholder: '请输入用户名称',
      email: '用户邮箱',
      emailPlaceholder: '请输入用户邮箱',
      role: '用户级别',
      department: '所属部门',
      departmentPlaceholder: '请输入所属部门',
      phone: '联系电话',
      phonePlaceholder: '请输入联系电话',
      operate: '操作',
      password: '密码',
      passwordPlaceholder: '请输入密码',
      rePass: '确认密码',
      rePassPlaceholder: '请再次输入密码',
      submit: '确认',
      cancel: '取消',
      isActive: '状态',
      dateJoined: '创建时间',
      lastLogin: '登陆时间',
      reset: '重置密码',
      admin: '超级管理员',
      user: '普通用户',
      needPWD: '请输入密码',
      rePWD: '请再次输入密码',
      diffPWD: '两次输入密码不一致',
      on: '启用',
      off: '禁用',
      notLogin: '未登录',
      deleteConfirm: '此操作将重置用户密码, 是否继续?',
      deleteConfirmPop: '提示',
      edit: '修改',
      del: '删除',
      talent: '部门名称',
    },
    talent: {
      title: {
        add: '新增租户',
        modify: '修改租户信息',
        placeholder: '请输入租户名称进行搜索，例如：火线白帽社区',
      },
      table: {
        name: '租户名称',
        enable: '启用状态',
        create: '创建时间',
        update: '更新时间',
        modifyBy: '操作人员',
        operate: '操作',
        open: '操作',
        off: '禁用',
        on: '启用',
        user: '普通用户',
        superAdmin: '超级管理员',
      },
      add: {
        email: '邮箱地址',
        emailPlaceholder: '请输入企业邮箱，注意：必须使用企业邮箱',
        enable: '启用状态',
        enablePlaceholder: '租户是否启用',
        placeholder: '请输入租户名称，注意：租户名称不能重复',
        submit: '确认',
        cancel: '取消',
        on: '启用',
        off: '禁用',
      },
    },
    about: {
      nowVersion: '当前版本',
      newVersion: '最新版本',
      already: '已是最新版本',
      update: '更新',
      checking: '正在检查更新...',
      help: '帮助文档',
      issue: '反馈问题',
      detail: '详细信息',
      version: '版本',
      copy: '复制',
      close: '关闭',
    },
  },
}
