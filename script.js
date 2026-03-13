const TOTAL_DAYS = 28;
const ACTIONS_PER_DAY = 2;
const RENT_AMOUNT = 850;
const SAVE_KEY = "tiktok_simulator_save_v1";
const ENDINGS_KEY = "tiktok_simulator_endings_v1";

const statsConfig = [
  { key: "fans", label: "粉丝数", format: (value) => value.toLocaleString("zh-CN") },
  { key: "reputation", label: "声誉" },
  { key: "money", label: "资金", format: (value) => `$${value}` },
  { key: "energy", label: "能量" },
  { key: "inspiration", label: "灵感" },
  { key: "scandal", label: "黑料值" },
  { key: "network", label: "人脉值" }
];

const hiddenStatsConfig = [
  { key: "authenticity", label: "真实度" },
  { key: "alienation", label: "异化值" }
];

const actionCatalog = [
  {
    id: "publish",
    title: "发布视频",
    desc: "对着镜头制造一个可被算法识别的情绪切口。",
    cost: 1
  },
  {
    id: "street",
    title: "出门采风",
    desc: "在布鲁克林的街口、地铁和廉价咖啡之间寻找新的镜面。",
    cost: 1
  },
  {
    id: "collab",
    title: "联动博主",
    desc: "让别人的镜头为你担保，也让你为别人的欲望背书。",
    cost: 1
  },
  {
    id: "business",
    title: "商务活动",
    desc: "与品牌、公关和中介接触，把人格翻译成报价单。",
    cost: 1
  },
  {
    id: "rest",
    title: "休息恢复",
    desc: "暂时离开屏幕，让神经和面孔从表演中退场。",
    cost: 1
  },
  {
    id: "nightlive",
    title: "深夜直播",
    desc: "在凌晨的人群里出售亲密感，也把裂缝放大给所有人看。",
    cost: 1
  },
  {
    id: "trend",
    title: "研究热点",
    desc: "拆解热点结构，向算法学习如何驯化注意力。",
    cost: 1
  },
  {
    id: "relationship",
    title: "经营私生活",
    desc: "和恋人、朋友、房东、同学周旋，试着保住不被内容化的一部分。",
    cost: 1
  },
  {
    id: "shadow",
    title: "灰色机会",
    desc: "靠近法律、道德和体面的边界，看是否能从阴影里拿到筹码。",
    cost: 1
  },
  {
    id: "random",
    title: "刷新随机事件",
    desc: "按下刷新键，像把手伸进一台不透明的命运机器。",
    cost: 1
  }
];

const eventTemplates = {
  publish: [
    {
      title: "视频像一面被擦亮的窗",
      text: "你把布鲁克林傍晚的橙色天空剪进 22 秒，评论区有人说这像一代人把贫穷滤成柔光。你想起本雅明，机械复制让灵光衰退，但算法发明了新的灵光，它不真实，却可量化。",
      effects: {
        fans: 1800,
        reputation: 4,
        money: 40,
        energy: -9,
        inspiration: -4,
        authenticity: 3,
        alienation: 2
      },
      tags: [
        "art-post"
      ]
    },
    {
      title: "争议成为燃料",
      text: "你故意把观点说得更锋利一些，像给刀刃多磨两次。播放量果然窜升，连反对都成了流量的二次分发。尼采说凝视深渊时深渊也凝视你，而你注意到深渊甚至还会点赞。",
      effects: {
        fans: 2600,
        reputation: -5,
        money: 65,
        energy: -12,
        inspiration: -6,
        scandal: 8,
        alienation: 6
      },
      tags: [
        "rage-bait"
      ]
    },
    {
      title: "真诚的笨拙",
      text: "你录了一个没有背景乐、没有快切的口播，讲学费、房租和焦虑。数据起得慢，但私信里有人说第一次觉得屏幕另一头是人，而不是品牌包装。萨特会说，人被迫自由，而你第一次觉得自由像是承认自己的狼狈。",
      effects: {
        fans: 900,
        reputation: 8,
        money: 0,
        energy: -7,
        inspiration: 5,
        authenticity: 7,
        alienation: -2
      },
      tags: [
        "honest-post"
      ]
    },
    {
      title: "课堂短片意外出圈",
      text: "你把课堂作业剪成一条看似随意的日记短片，没想到一群传媒学生开始逐帧分析。你忽然意识到，被认真观看比被广泛观看更接近尊严。",
      effects: {
        fans: 1400,
        reputation: 6,
        money: 20,
        energy: -8,
        inspiration: 4,
        authenticity: 6,
        alienation: -1
      },
      tags: [
        "student-film"
      ]
    },
    {
      title: "极简主义视频失手",
      text: "你试着把所有音乐和字幕拿掉，结果大部分观众在前三秒就划走。沉默并不天然深刻，尤其在以停留时长为信仰的平台里。",
      effects: {
        fans: -350,
        reputation: 1,
        energy: -5,
        inspiration: 3,
        authenticity: 2,
        alienation: -1
      },
      tags: [
        "minimal-post"
      ]
    },
    {
      title: "片场式的自我排练",
      text: "你对着镜子排练开场白，反复试哪种停顿更像真诚、哪种皱眉更像突然想起什么。录制结束后你突然意识到，表演并不总是假装，它有时只是把真实感训练成一种可重复的方法。问题在于，当方法足够熟练之后，你会越来越难分辨自己到底是在表达，还是在制造表达的外观。",
      effects: {
        fans: 1300,
        reputation: 3,
        money: 40,
        energy: -9,
        inspiration: 4,
        authenticity: 2,
        alienation: 5
      },
      tags: [
        "self-rehearsal"
      ]
    },
    {
      title: "你把失败剪得比成功更漂亮",
      text: "那条视频其实讲的是一次失败的投递、一次没回音的合作和一个乱成一团的下午。可你在剪辑时发现，失败也可以被打磨成一种极具美感的叙事线。观众夸你真实，你却在夜里隐约感到羞愧，因为你知道自己连狼狈都已经掌握了布光方法。",
      effects: {
        fans: 1600,
        reputation: 5,
        money: 30,
        energy: -8,
        inspiration: 5,
        authenticity: 4,
        alienation: 4
      },
      tags: [
        "beautiful-failure"
      ]
    },
    {
      title: "一条关于学费的视频压中了集体神经",
      text: "你提到学费、实习、房租和学生签证边缘的压力，本来只是想给自己找个出口，结果评论区迅速聚起一群处境相似的人。热度涨得不夸张，却稳定得像一条缓慢发光的线。你第一次感到，真正有重量的话题并不一定最炸裂，它们只是更持久地留在人身体里。",
      effects: {
        fans: 1700,
        reputation: 7,
        money: 20,
        energy: -9,
        inspiration: 7,
        authenticity: 7,
        alienation: -1
      },
      tags: [
        "tuition-video"
      ]
    },
    {
      title: "品牌模仿你的风格先一步发了",
      text: "你刚准备发布一个自己很满意的形式，结果刷到某品牌已经用近似语气和镜头做了整套 campaign。你没有真的被抄袭，却还是感到一种被提前收编的郁闷。原来在这个行业里，风格也可能先变成市场调研，再回过头来成为你的创作阻力。",
      effects: {
        fans: 700,
        reputation: 1,
        money: -10,
        energy: -7,
        inspiration: -2,
        authenticity: 3,
        alienation: 4
      },
      tags: [
        "style-captured"
      ]
    },
    {
      title: "删改到凌晨的独白",
      text: "你把一条口播改了七个版本，删掉自怜，删掉漂亮话，最后留下一个有些不完整的自白。发布之后，数据没有立刻爆开，但评论区出现了许多比点赞更慢的东西: 长段留言、互相接力的经历、一些认真到让人不安的共鸣。你忽然意识到，所谓表达并不总是把自己交出去，有时它更像在混乱的人群里试探性地点起一盏小灯。",
      effects: {
        fans: 1200,
        reputation: 7,
        money: 10,
        energy: -8,
        inspiration: 6,
        authenticity: 8,
        alienation: -2
      },
      tags: [
        "midnight-monologue"
      ]
    },
    {
      title: "恶搞模板套上哲学腔",
      text: "你把一个最流行的恶搞模板和一段关于欲望机器的台词拼在一起，观众一时分不清你是在认真引用，还是在利用引用为笑料镀金。播放量不错，转发也快，但你在回看时感到一种熟悉的空心感，仿佛一切高概念最终都只是在为停留时长打工。",
      effects: {
        fans: 2400,
        reputation: -2,
        money: 80,
        energy: -10,
        inspiration: -2,
        alienation: 7
      },
      tags: [
        "theory-meme"
      ]
    }
  ],
  street: [
    {
      title: "街头采样",
      text: "你沿着 Bedford Avenue 走，听见地铁和滑板的回声，像城市在给自己配旁白。你拍到一位拉小提琴的老人，他说年轻人都在记录生活，却很少真的生活。你把这句话记下来，像捡到一枚硬币。",
      effects: {
        fans: 300,
        reputation: 3,
        energy: -8,
        inspiration: 12,
        authenticity: 5,
        alienation: -3
      },
      tags: [
        "street-notes"
      ]
    },
    {
      title: "潮流气味",
      text: "你在二手店和快闪店之间反复横跳，知道自己搜集的不只是素材，还有可出售的姿态。德波说景观不是图像的集合，而是人与人之间被图像中介的关系。你今天闻到这种关系有一股香水味。",
      effects: {
        fans: 600,
        reputation: 1,
        money: -35,
        energy: -10,
        inspiration: 8,
        network: 2,
        alienation: 4
      },
      tags: [
        "fashion-loop"
      ]
    },
    {
      title: "抗议现场",
      text: "路口突然聚起一群人，标语、喊声和警灯像互相撕扯的句子。你意识到镜头一旦举起，就不再是旁观者。阿伦特提醒过公共行动的重量，而你发现按下录制键的手比想象中更轻。",
      effects: {
        fans: 700,
        reputation: 4,
        energy: -11,
        inspiration: 10,
        network: 3,
        authenticity: 4,
        alienation: 1
      },
      tags: [
        "protest-seen"
      ]
    },
    {
      title: "地铁口的陌生采访",
      text: "你随机采访路人，得到的回答远比预设的问题更混乱。城市从不按脚本说话，而你今天终于没急着把混乱删掉。",
      effects: {
        fans: 850,
        reputation: 5,
        energy: -9,
        inspiration: 11,
        authenticity: 6,
        network: 2
      },
      tags: [
        "street-interview"
      ]
    },
    {
      title: "雨夜扫街",
      text: "你在雨后的街道拍到霓虹倒影，布鲁克林像一块被踩脏的镜子。你带着湿透的鞋回家，却像从城市体内带回一份私密证词。",
      effects: {
        fans: 500,
        reputation: 2,
        money: -15,
        energy: -12,
        inspiration: 13,
        authenticity: 5,
        alienation: -2
      },
      tags: [
        "rain-walk"
      ]
    },
    {
      title: "你在跳蚤市场里找到旧磁带",
      text: "一个摊位角落堆着旧磁带和破损相机，你随手翻出一盘写着模糊年份的录音。卖家说那是某位已经搬走的人留下的东西。你没有播放，却一路把它带回家，像把一个不属于你的时代碎片暂时借住进了自己的叙事里。",
      effects: {
        fans: 400,
        reputation: 3,
        money: -18,
        energy: -8,
        inspiration: 12,
        authenticity: 6,
        alienation: -2
      },
      tags: [
        "flea-tape"
      ]
    },
    {
      title: "街头画家把你也画进了画里",
      text: "你原本只是站在一旁拍一个街头画家，结果对方抬头说你别动，然后顺手把你的轮廓也勾进了背景。那一刻你突然从记录者变成被记录者，身份互换得几乎有点粗暴。等你回看素材时，最打动你的并不是画，而是自己那一瞬间难得的迟疑。",
      effects: {
        fans: 620,
        reputation: 4,
        energy: -7,
        inspiration: 10,
        authenticity: 5,
        alienation: 1
      },
      tags: [
        "street-portrait"
      ]
    },
    {
      title: "快闪店的队伍像一条被灯光喂养的河",
      text: "你本来只是路过一家快闪店，却被那条排队的人流吸住了几分钟。每个人都在等待一次可被记录的消费体验，仿佛买到的不是商品，而是一种可以上传的参与证明。你拍了几组镜头，越拍越觉得这城市最稳定的宗教也许就是限时供应。",
      effects: {
        fans: 900,
        reputation: 2,
        money: -22,
        energy: -9,
        inspiration: 7,
        alienation: 5
      },
      tags: [
        "popup-line"
      ]
    },
    {
      title: "晨跑者和失眠者共享同一条街",
      text: "你天刚亮就出了门，看见晨跑的人和刚结束夜生活的人在同一条街上擦肩而过。一个人的自律和另一个人的失控在五分钟里短暂重叠，谁也没看谁。你把这个画面拍下来时突然觉得，城市最准确的比喻可能不是拼图，而是同时发生的互不解释。",
      effects: {
        fans: 750,
        reputation: 4,
        energy: -10,
        inspiration: 11,
        authenticity: 6,
        alienation: -1
      },
      tags: [
        "dawn-street"
      ]
    },
    {
      title: "凌晨便利店对白",
      text: "你在一家二十四小时便利店门口遇见夜班收银员，对方说自己每天看无数人经过，却很少有人真正抬头看她。你原本只想拍一组街头镜头，最后却把录音反复听了三遍。城市最残酷的地方也许不在于拥挤，而在于每个人都被训练成彼此的背景。",
      effects: {
        fans: 650,
        reputation: 6,
        energy: -7,
        inspiration: 14,
        authenticity: 7,
        alienation: -2
      },
      tags: [
        "night-store"
      ]
    },
    {
      title: "画廊外的争论",
      text: "你在一间小画廊外遇见几位学生争论艺术、政治和房租，没人真正说服谁，但每句话都像在给这个城市的现实磨边。你没有立刻拍摄，而是先加入对话，后来才补了一点散乱的素材。某些内容之所以动人，也许正因为它们最初不是为内容存在的。",
      effects: {
        fans: 500,
        reputation: 4,
        money: -12,
        energy: -9,
        inspiration: 12,
        network: 4,
        authenticity: 6
      },
      tags: [
        "gallery-talk"
      ]
    }
  ],
  collab: [
    {
      title: "互相借光",
      text: "你和一个同样住在 Brooklyn 的生活方式博主联动，彼此在镜头里装作毫不费力。涨粉很快，但你知道这更像股权互换。福柯会说每种关系都携带权力，而你们今天把权力拍得像暧昧。",
      effects: {
        fans: 2200,
        reputation: 3,
        money: 90,
        energy: -12,
        inspiration: 2,
        network: 8,
        alienation: 5
      },
      tags: [
        "soft-collab"
      ]
    },
    {
      title: "危险同盟",
      text: "你和一个争议缠身的博主同框，因为他拥有你暂时无法拒绝的流量。评论区开始争论你是否只是把道德外包给热度。你想起康德的冷脸，他大概不会为这种合作签字。",
      effects: {
        fans: 3400,
        reputation: -8,
        money: 120,
        energy: -10,
        scandal: 10,
        network: 10,
        alienation: 7
      },
      tags: [
        "toxic-collab"
      ]
    },
    {
      title: "真朋友难得",
      text: "一位纪录片学生帮你拍了一段毫不讨好的幕后，镜头里全是你修改台词时的沉默和自嘲。它不像爆款，但让你们都觉得没有完全被市场语言征服。友谊原来仍是一种不高效的生产方式。",
      effects: {
        fans: 500,
        reputation: 6,
        money: 10,
        energy: -7,
        inspiration: 9,
        network: 6,
        authenticity: 6,
        alienation: -2
      },
      tags: [
        "documentary-friend"
      ]
    },
    {
      title: "播客对谈",
      text: "你上了一档小众播客，没有滤镜，也没有快切，只能靠完整句子自救。长篇表达让你重新感到语言不是钩子，而是房间。",
      effects: {
        fans: 900,
        reputation: 7,
        money: 60,
        energy: -6,
        inspiration: 7,
        network: 5,
        authenticity: 5
      },
      tags: [
        "podcast-guest"
      ]
    },
    {
      title: "跨圈联动翻车",
      text: "你试图进入更主流的娱乐圈语境，却发现自己既不够圆滑，也不够无害。观众说你像在租借一张并不合身的人设。",
      effects: {
        fans: 1100,
        reputation: -6,
        money: 50,
        energy: -9,
        scandal: 5,
        alienation: 5
      },
      tags: [
        "crossover-slip"
      ]
    },
    {
      title: "你和摄影师博主互相拍彼此的幕后",
      text: "这次联动没有明确主角，你们轮流站到镜头前，也轮流站到镜头后。素材里保留了很多尴尬、等待和重来，比成片更像真实劳动的样子。你回看时忽然觉得，协作最动人的时刻往往不是成果完成的时候，而是彼此都还没完全想好该把对方放在哪里的时候。",
      effects: {
        fans: 1000,
        reputation: 6,
        money: 60,
        energy: -8,
        inspiration: 8,
        network: 7,
        authenticity: 5
      },
      tags: [
        "mutual-bts"
      ]
    },
    {
      title: "一次联动让你意识到自己也会嫉妒",
      text: "对方随口说出一个你苦想很久的结构，然后像没事一样继续聊天。你表面上附和，心里却有一个很小的部分开始发酸。回家以后你明白，这种行业里最难处理的情绪之一不是失败，而是看着与你相近的人更轻松地做到你在拼命练习的事。",
      effects: {
        fans: 600,
        reputation: 2,
        money: 20,
        energy: -7,
        inspiration: 5,
        network: 3,
        alienation: 2
      },
      tags: [
        "creative-jealousy"
      ]
    },
    {
      title: "跨城连线带来一种奇怪的亲近",
      text: "你和洛杉矶的创作者远程连线，对方的房间、光线和节奏都跟纽约完全不同。可你们聊起焦虑、合作、平台和自我管理时，语言又惊人地相似。那种熟悉让你短暂感到温暖，也让你更清楚，整整一代创作者正在被同一套结构训练出相近的疲惫。",
      effects: {
        fans: 1400,
        reputation: 5,
        money: 50,
        energy: -8,
        inspiration: 6,
        network: 6,
        authenticity: 3
      },
      tags: [
        "remote-collab"
      ]
    },
    {
      title: "联动后的合照成了唯一稳定的证据",
      text: "整场合作结束后，真正传播最广的反而是一张随手拍的合照。它模糊、普通、甚至构图不够好，却因为没那么精致而显得可信。你盯着那张照片看了很久，忽然觉得也许人们真正渴望的不是完美内容，而是在完美旁边还残存一点未被控制的部分。",
      effects: {
        fans: 900,
        reputation: 4,
        money: 30,
        energy: -6,
        inspiration: 5,
        authenticity: 4,
        alienation: -1
      },
      tags: [
        "collab-photo"
      ]
    },
    {
      title: "三人圆桌直播",
      text: "你和两个风格完全不同的创作者进行了一次长时间连麦，一个偏商业，一个偏激进，另一个像在观望一切崩坏。你们谈算法、谈种族、谈自我品牌，谈到后面已经不像节目，更像一场勉强维持秩序的深夜辩论。观众人数上下震荡，但留下的人明显更认真，你也第一次觉得合作不一定只能制造表面的热闹。",
      effects: {
        fans: 1600,
        reputation: 6,
        money: 70,
        energy: -11,
        inspiration: 9,
        network: 8,
        authenticity: 4
      },
      tags: [
        "roundtable-live"
      ]
    },
    {
      title: "联动后的署名争议",
      text: "合作视频上线后，对方团队把你的名字放得很靠后，还删掉了你坚持保留的一段观点。你犹豫是否公开表达不满，因为在内容行业里，署名和主体性经常同时被谈判。你没有立刻翻脸，但心里多了一层清醒: 所谓合作，有时只是更温和的掠夺。",
      effects: {
        fans: 800,
        reputation: 2,
        money: 40,
        energy: -8,
        scandal: 3,
        network: -1,
        authenticity: 3
      },
      tags: [
        "credit-dispute"
      ]
    }
  ],
  business: [
    {
      title: "品牌午餐",
      text: "一位中介在 Soho 约你吃午餐，把你的受众、肤色、年龄和口音拆成可议价的条目。你点头的时候，忽然理解马克思所谓异化不是抽象名词，而是一张写着 CPM 的餐巾纸。",
      effects: {
        fans: 400,
        reputation: 0,
        money: 420,
        energy: -8,
        inspiration: -4,
        network: 6,
        alienation: 9
      },
      tags: [
        "brand-entry"
      ]
    },
    {
      title: "高价代言",
      text: "你接下了一单健康饮料的合作，合约里有一页特别写着你不得在公开场合显得悲观。资本并不爱你，它只爱一个持续稳定的笑。你签字时觉得自己像把焦虑折叠进了西装口袋。",
      effects: {
        fans: 1500,
        reputation: -2,
        money: 780,
        energy: -10,
        inspiration: -6,
        network: 5,
        alienation: 10
      },
      tags: [
        "brand-deal"
      ]
    },
    {
      title: "被压价的下午",
      text: "你被对方以“学生身份还在试水”为由压价，对方口气温柔得像是在教学。你最终拒绝，带着一点穷困和一点体面回到地铁。有人说尊严不能付房租，但它至少能让镜子里的人不那么陌生。",
      effects: {
        reputation: 5,
        money: -20,
        energy: -6,
        inspiration: 4,
        authenticity: 3,
        alienation: -1
      },
      tags: [
        "refused-deal"
      ]
    },
    {
      title: "校友资源晚宴",
      text: "你在一场校友酒会里遇见几个比你更早学会妥协的人。他们说理想不是不要卖，而是要卖个好价钱。你无法反驳，只能记住这句令人不安的诚实。",
      effects: {
        money: 260,
        reputation: 1,
        energy: -7,
        network: 9,
        alienation: 5
      },
      tags: [
        "alumni-network"
      ]
    },
    {
      title: "无偿试合作",
      text: "品牌让你先做一条试样，说如果效果好以后会长期合作。你知道“以后”通常是资本最便宜的货币。",
      effects: {
        money: 0,
        reputation: -1,
        energy: -7,
        inspiration: -3,
        alienation: 4,
        authenticity: -1
      },
      tags: [
        "free-spec-work"
      ]
    },
    {
      title: "你第一次被问到愿不愿意“长期绑定”",
      text: "对方把“长期绑定”说得像情书一样温柔，仿佛这不是一份可能持续限制你的合约，而是一种彼此成全。你一边记重点，一边意识到成熟行业最可怕的地方不在于粗暴，它常常比任何人都更懂如何让收编听起来像赞美。你离开时忽然有点想笑，因为连束缚都被包装成了发展机会。",
      effects: {
        fans: 500,
        reputation: 0,
        money: 380,
        energy: -8,
        inspiration: -2,
        network: 8,
        alienation: 8
      },
      tags: [
        "long-bind"
      ]
    },
    {
      title: "品牌方要你证明自己没有“风险情绪”",
      text: "他们并不直接问你是否稳定，而是委婉地想知道你最近的内容为什么有一点暗。会议室里的每个人都像在处理一个需要精细包装的潜在事故，只有你明白他们真正担心的不是你不开心，而是你的不开心是否会影响转化。你坐在那里，很清楚自己正在被当作一件需要质量检测的情绪商品。",
      effects: {
        fans: 300,
        reputation: -2,
        money: 260,
        energy: -7,
        inspiration: -4,
        network: 6,
        alienation: 9
      },
      tags: [
        "risk-mood"
      ]
    },
    {
      title: "商务午后的掌声听起来像结算音效",
      text: "一场提案结束时，大家都礼貌鼓掌，你也点头致意。可不知为什么，那掌声在你耳朵里听起来不像认可，更像一堆看不见的数字正在后台完成结算。你突然明白，一旦把自己推到商业空间里，被理解和被估值经常会共用同一种语气。",
      effects: {
        money: 310,
        reputation: 1,
        energy: -6,
        inspiration: 2,
        network: 5,
        alienation: 6
      },
      tags: [
        "proposal-applause"
      ]
    },
    {
      title: "实习生悄悄告诉你他们也在模仿你",
      text: "散会后一个年轻实习生追出来，说她其实也在做视频，平时会偷偷学你的开场和叙事方式。那一刻你同时感到被肯定和被复制的微妙不适。也许这就是行业真正的传播路径: 不是伟大作品改变世界，而是足够多的人把彼此的技巧带回自己的小房间继续训练。",
      effects: {
        fans: 850,
        reputation: 4,
        money: 60,
        energy: -5,
        inspiration: 6,
        authenticity: 3,
        network: 4
      },
      tags: [
        "intern-copy"
      ]
    },
    {
      title: "公关培训课",
      text: "一家经纪机构邀请你旁听危机公关培训，讲师用近乎温柔的口吻教大家如何在翻车时看起来像在反省。你记下几条技巧，却又在笔记本边缘写下另一句话: 如果真诚也可以被训练成流程，那它和脚本之间到底还剩多大距离。离开会议室时，你比进去时更懂行业，也更不确定自己想成为什么。",
      effects: {
        money: 140,
        reputation: 1,
        energy: -6,
        inspiration: 3,
        network: 7,
        alienation: 6
      },
      tags: [
        "pr-class"
      ]
    },
    {
      title: "基金会式的品牌提案",
      text: "一个看起来极有文化品位的品牌邀请你做“青年城市观察”合作，他们给你的自由度比普通广告高，却也把每个自由点都标了预算。你在会议室里几乎被说服，觉得自己也许真的能在资本里偷渡一点真问题，直到合同附录提醒你所有表达最终都归甲方解释。你带着文件走出门，感觉自己刚参加完一场过分精致的思想拍卖。",
      effects: {
        fans: 900,
        money: 360,
        reputation: 2,
        energy: -9,
        inspiration: 4,
        network: 6,
        alienation: 7
      },
      tags: [
        "foundation-brand"
      ]
    }
  ],
  random: [
    {
      title: "系统把你推给陌生人",
      text: "凌晨三点，一条旧视频突然冲上推荐页。你从睡梦里醒来，看着数据像血压仪一样往上跳。你忽然明白，命运在平台时代的样子，就是后台曲线图毫无预兆地向右上角刺去。",
      effects: {
        fans: 4800,
        reputation: 2,
        money: 180,
        energy: -5,
        inspiration: 1,
        alienation: 5
      },
      tags: [
        "algorithm-boost"
      ]
    },
    {
      title: "旧帖被考古",
      text: "某条三年前的玩笑被人翻出来，你发现互联网从不真正遗忘，它只是把判决延后。评论区开始出现“他一直都是这样的人”。你坐在床边，意识到过去也是一种定时炸弹。",
      effects: {
        fans: -600,
        reputation: -14,
        money: -80,
        energy: -12,
        scandal: 14,
        alienation: 3
      },
      tags: [
        "old-post"
      ]
    },
    {
      title: "房东发来消息",
      text: "房东提醒你别忘了周末前转账，语气礼貌得像威胁经过排版。你看着狭小公寓的白墙，突然理解存在主义的一部分来自房租，而不是哲学课堂。",
      effects: {
        energy: -4,
        inspiration: -2,
        alienation: 2
      },
      tags: [
        "rent-anxiety"
      ]
    },
    {
      title: "陌生富豪打赏",
      text: "一个头像过于干净的账号突然给你打赏了一大笔钱，留言只有一句“别停”。这种支持不像鼓励，更像下注。",
      effects: {
        money: 320,
        fans: 300,
        reputation: -1,
        alienation: 4,
        scandal: 2
      },
      tags: [
        "mysterious-patron"
      ]
    },
    {
      title: "同城论坛夸你真实",
      text: "一个本地论坛有人长帖讨论你，说你至少还没有完全活成广告位。你被这句评价击中，因为它听起来不像夸奖，更像缓刑。",
      effects: {
        fans: 700,
        reputation: 6,
        inspiration: 5,
        authenticity: 4,
        alienation: -2
      },
      tags: [
        "forum-praise"
      ]
    },
    {
      title: "有人把你做成了表情包",
      text: "一段你自己都没意识到会火的表情被切出来，在别人的视频和群聊里到处漂流。它给你带来一些流量，也带来一种奇怪的异化感。你知道表情包从来不关心完整的人，它只截取最方便流通的那一秒，而这恰恰也是平台最擅长的工作。",
      effects: {
        fans: 1700,
        reputation: 1,
        money: 30,
        energy: -4,
        alienation: 4
      },
      tags: [
        "meme-face"
      ]
    },
    {
      title: "一个旧同学突然转发了你",
      text: "你本以为过去生活中的人早已和现在的线上身份断开，结果一个旧同学突然把你的视频转进校友群，语气半认真半调侃。熟人与陌生观众之间那层薄膜瞬间破了一个口。你开始意识到，所谓“面向公众”的真正含义，可能就是所有版本的你迟早要在同一条时间线上撞见。",
      effects: {
        fans: 900,
        reputation: 2,
        energy: -5,
        inspiration: 4,
        alienation: 2
      },
      tags: [
        "old-classmate-share"
      ]
    },
    {
      title: "有人质疑你买粉",
      text: "评论区突然出现一串分析数据的人，说你的增长曲线不自然、互动结构不对、粉丝画像有问题。你明知道这不一定是真的，却还是点进后台反复查看，仿佛被指控之后连原本真实的部分都开始显得心虚。平台时代的指控厉害就厉害在，它不需要证据，也能制造持续的自我审查。",
      effects: {
        fans: -400,
        reputation: -6,
        energy: -7,
        scandal: 5,
        alienation: 4
      },
      tags: [
        "buy-followers-rumor"
      ]
    },
    {
      title: "一条过气内容忽然第二次复活",
      text: "那是一条你差点忘掉的视频，质量不算最好，观点也不算成熟，却在某个深夜突然迎来第二次传播。你看着它重新活过来，心里没有太多惊喜，反而生出一点轻微的不信任。原来在这个系统里，过去并不会真正过去，它只是等待另一个适合再次被调用的时机。",
      effects: {
        fans: 2600,
        reputation: 2,
        money: 70,
        energy: -4,
        inspiration: 1,
        alienation: 3
      },
      tags: [
        "second-life"
      ]
    },
    {
      title: "一次采访邀约最终只是蹭热度",
      text: "对方最初把邮件写得很认真，结果电话里真正感兴趣的只是你最近是否有可炒作的争议。你挂断之后并没有太愤怒，只是更加疲惫。媒体有时并不比平台高贵太多，它只是用更完整的句子处理同样的注意力饥饿。",
      effects: {
        fans: 200,
        reputation: -2,
        energy: -5,
        inspiration: 2,
        alienation: 4
      },
      tags: [
        "bad-interview"
      ]
    },
    {
      title: "你的账号短暂出现异常登录提醒",
      text: "手机跳出一条安全提醒，说你的账号在陌生设备上尝试登录。事情最终没有真的失控，但那几分钟你几乎是条件反射地想起所有没删干净的草稿、私信和合作记录。数字生活的脆弱性总是这样，在最短时间里让你看见自己有多少把柄已经交给平台保管。",
      effects: {
        fans: 0,
        reputation: 0,
        money: 0,
        energy: -6,
        scandal: 3,
        alienation: 5
      },
      tags: [
        "login-alert"
      ]
    },
    {
      title: "你被错误地卷入另一场舆论",
      text: "有人把你和另一个长得有点像、风格有点近的创作者搞混了，几小时内评论区里全是误伤式的怒气。你本来不想解释，可看着越来越多人按错键一样对你输出，你还是感到一种荒诞。互联网最大的悲喜剧之一，也许就是身份有时只是一张模糊缩略图。",
      effects: {
        fans: 500,
        reputation: -5,
        energy: -7,
        scandal: 4,
        alienation: 4
      },
      tags: [
        "mistaken-identity"
      ]
    },
    {
      title: "一个大学教授在课上提到了你",
      text: "朋友发来消息，说某门课上老师拿你的视频讨论“青年创作者的劳动与自我商品化”。你短暂地觉得被认可，随后又迅速感到一点冷意。原来当你足够典型之后，连自己的困境都可能被别人拿去做理论例子。",
      effects: {
        fans: 800,
        reputation: 6,
        money: 10,
        inspiration: 6,
        authenticity: 3,
        alienation: 2
      },
      tags: [
        "class-example"
      ]
    },
    {
      title: "平台悄悄改了推荐逻辑",
      text: "你说不清具体哪里变了，只是直觉某种节奏不再奏效。账号表现没有立刻垮掉，可你熟悉的把握感突然少了一截。平台从不需要正式通知创作者规则已经移动，只要悄悄让昨天有效的东西今天稍微失灵，人就会自动开始重新训练自己。",
      effects: {
        fans: -200,
        reputation: 0,
        money: -10,
        energy: -6,
        inspiration: -2,
        alienation: 6
      },
      tags: [
        "silent-update"
      ]
    },
    {
      title: "一条假消息把你短暂抬进热榜",
      text: "有人误传你即将签下大公司或参与某个电影项目，消息来源并不可靠，却在几小时内带来大批围观。你什么都没做，热度就自己滚了进来。这种无中生有的馈赠并不让人愉快，反而让你再次确认，在这里，事实经常只是注意力的一种可选装饰。",
      effects: {
        fans: 2400,
        reputation: -1,
        money: 80,
        energy: -5,
        scandal: 2,
        alienation: 5
      },
      tags: [
        "false-heat"
      ]
    },
    {
      title: "你收到一封没有署名的长邮件",
      text: "对方像很了解你，知道你的节奏、犹豫、合作习惯，甚至知道你会在哪些时刻看起来特别想消失。邮件没有直接威胁，只是过分准确。你读完以后坐了很久，第一次真正感到公众身份和私人生活之间那层边界不是墙，更像一块随时可能被手指捅破的纸。",
      effects: {
        fans: 0,
        reputation: -1,
        energy: -8,
        scandal: 4,
        alienation: 7
      },
      tags: [
        "unsigned-mail"
      ]
    },
    {
      title: "有人说你的视频救了他一晚",
      text: "私信只有一句话: “昨晚差点撑不住的时候，看了你的直播回放。”你不知道该如何承接这种分量，因为它既是最大的肯定，也是一种近乎无法偿还的负债。被需要听上去总很动人，真正沉重的部分在于，你并不确定自己是否有资格承担这样的投射。",
      effects: {
        fans: 600,
        reputation: 8,
        money: 0,
        energy: -4,
        inspiration: 7,
        authenticity: 5
      },
      tags: [
        "saved-a-night"
      ]
    },
    {
      title: "你的账号被推荐给错误年龄层",
      text: "后台突然涌进一批更年轻的观众，他们对你原本带有灰度的表达反应很直白，喜欢和反感都更迅速。你一下子意识到，同样的内容换一批人看会变成另一回事。平台并不在乎这件事会不会扭曲表达，它只在乎这次误投有没有带来更多停留。",
      effects: {
        fans: 1500,
        reputation: -2,
        money: 40,
        energy: -3,
        scandal: 3,
        alienation: 4
      },
      tags: [
        "wrong-age"
      ]
    },
    {
      title: "一条路人偷拍视频拍到了你崩溃的片刻",
      text: "你本来只是低头在街边喘口气，没想到被人远远拍下，配文写得像在观看某种都市寓言。视频传播得不算太大，却足够让你感到羞耻。最残忍的地方不是被拍，而是你清楚知道，如果角色互换，你也未必能完全抵抗点开观看的冲动。",
      effects: {
        fans: 900,
        reputation: -4,
        energy: -9,
        scandal: 6,
        alienation: 6
      },
      tags: [
        "caught-offcamera"
      ]
    },
    {
      title: "陌生记者来信",
      text: "一位自由记者发来邮件，想采访你关于“年轻创作者如何把生活变成劳动”。邮件写得认真，几乎不像互联网的产物，这反而让你更不安。你知道一旦接受采访，自己的矛盾会被整理成一篇更清晰的叙事，而清晰往往意味着某些复杂部分被剔除了。",
      effects: {
        fans: 700,
        reputation: 5,
        energy: -4,
        inspiration: 7,
        authenticity: 4,
        alienation: 1
      },
      tags: [
        "journalist-mail"
      ]
    },
    {
      title: "错误推流进入陌生社群",
      text: "算法把你的一条视频推给了一群你原本接触不到的人，他们的解读既陌生又粗暴，但并不全然错误。你在评论区看见另一个版本的自己被拼贴出来，像一张角度失真的肖像。平台时代最奇怪的事，也许就是陌生人总能比熟人更快给你命名。",
      effects: {
        fans: 2100,
        reputation: -3,
        money: 60,
        energy: -6,
        scandal: 4,
        alienation: 5
      },
      tags: [
        "wrong-audience"
      ]
    }
  ],
  rest: [
    {
      title: "把手机翻面",
      text: "你把手机扣在桌上，任由通知像雨点敲在背壳。几小时后，你发现世界没有因此停摆，只是自己终于听见了窗外风声。海德格尔会说人常常沉沦于闲谈，而你今天从闲谈中短暂脱身。",
      effects: {
        energy: 18,
        inspiration: 6,
        authenticity: 4,
        alienation: -6
      },
      tags: [
        "rested"
      ]
    },
    {
      title: "空白不是浪费",
      text: "你去 Prospect Park 发呆，什么也没拍。起初你焦虑得像亏损，后来却觉得空白本身也是一种产出。不是每个瞬间都必须变成内容，这个念头让你恢复了一点呼吸。",
      effects: {
        energy: 14,
        inspiration: 10,
        authenticity: 6,
        alienation: -5
      },
      tags: [
        "park-rest"
      ]
    },
    {
      title: "睡眠把人格缝回去",
      text: "你久违地睡满了八小时。醒来时没有新的赞，也没有新的恨，但头脑像被重新校准。人并不总是需要意义，有时只需要一张床和完整的夜晚。",
      effects: {
        energy: 22,
        inspiration: 2,
        scandal: -2,
        alienation: -4
      },
      tags: [
        "deep-sleep"
      ]
    },
    {
      title: "给自己做饭",
      text: "你认真做了一顿饭，没有拍教程，也没有摆拍桌面。食物在这一刻只负责维持你，而不是维持账号。",
      effects: {
        energy: 12,
        inspiration: 4,
        authenticity: 5,
        alienation: -3
      },
      tags: [
        "cook-alone"
      ]
    },
    {
      title: "清理草稿箱",
      text: "你删掉一些永远不会发出的片段，像替过去的自己打扫房间。并非所有未发布都算失败，有些只是及时止损。",
      effects: {
        energy: 8,
        inspiration: 8,
        scandal: -1,
        authenticity: 3,
        alienation: -2
      },
      tags: [
        "draft-cleanup"
      ]
    },
    {
      title: "你把通知权限关掉了一整晚",
      text: "没有任何壮烈仪式，你只是安静地把所有推送关掉，然后把手机放远了一点。头几个小时你还会下意识想摸回去，像在戒一种已经嵌进肌肉记忆的动作。到夜里，你终于重新听见房间的真实噪音，发现安静并不空，它只是平时被提示音遮住了。",
      effects: {
        energy: 11,
        inspiration: 5,
        authenticity: 5,
        alienation: -4
      },
      tags: [
        "mute-night"
      ]
    },
    {
      title: "没有镜头的一顿早餐显得异常正式",
      text: "你认真做了一顿早餐，没有拍，没有调色，没有考虑角度，只是慢慢吃完。奇怪的是，这种平常竟然让你有点不习惯，仿佛一顿饭如果不被记录就会损失一部分存在证明。你在这个念头出现时短暂沉默，知道自己已经被训练得比想象中更深。",
      effects: {
        energy: 10,
        inspiration: 7,
        authenticity: 6,
        alienation: -3
      },
      tags: [
        "quiet-breakfast"
      ]
    },
    {
      title: "你翻完一本和行业无关的旧书",
      text: "那本书和平台、内容、变现都没有关系，甚至连节奏都慢得不像这个时代的产物。可正因如此，你在字里行间得到一种接近降温的效果。你忽然意识到，很多真正帮助人的东西并不会立刻提供方法，它们只是把你从过度反应里暂时拿出来。",
      effects: {
        energy: 8,
        inspiration: 12,
        authenticity: 5,
        alienation: -4
      },
      tags: [
        "old-book"
      ]
    },
    {
      title: "你在傍晚散步时没有带耳机",
      text: "没有播客、没有音乐、没有任何一层额外声音，街道第一次显得过于具体。你听见小店关门、地铁进站、楼上吵架和路边小孩短暂的笑。那种未经筛选的现实让你轻微不适，也让你确信自己确实很久没有只是待在世界里，而不是持续把世界转译成可发布的材料。",
      effects: {
        energy: 9,
        inspiration: 8,
        authenticity: 6,
        alienation: -3
      },
      tags: [
        "no-headphones"
      ]
    },
    {
      title: "看一场和你无关的电影",
      text: "你一个人去看了一场几乎没人讨论的老电影，散场时外面的风比银幕更冷。你突然被一种久违的体验击中: 有些作品并不索取回应，也不要求立刻转发，它们只是安静地在你体内停留。你走出影院后没有掏手机，而是任由那种缓慢继续作用了一会儿。",
      effects: {
        energy: 10,
        inspiration: 12,
        authenticity: 5,
        alienation: -4
      },
      tags: [
        "cinema-alone"
      ]
    },
    {
      title: "给父母回长消息",
      text: "你认真给家里回了一长串消息，把近况、困窘和不愿承认的疲惫都写进去。对面没有给出任何高明建议，只是让你按时吃饭，别总熬夜。你读完时甚至有点想笑，原来有些关心如此朴素，朴素到无法被包装成内容，也因此显得格外可靠。",
      effects: {
        energy: 9,
        inspiration: 6,
        scandal: -2,
        authenticity: 7,
        alienation: -3
      },
      tags: [
        "long-reply-home"
      ]
    }
  ],
  nightlive: [
    {
      title: "深夜诚实过量",
      text: "你在凌晨直播里讲太多真心话，弹幕一半说你终于像个人，一半催你再崩一点。平台把脆弱包装成陪伴，把陪伴包装成时长。你意识到每多说一句，都是把灵魂再切一片试吃。",
      effects: {
        fans: 2600,
        reputation: 4,
        money: 150,
        energy: -18,
        inspiration: -2,
        authenticity: 5,
        alienation: 6
      },
      tags: [
        "late-confession"
      ]
    },
    {
      title: "情绪外包给观众",
      text: "你边喝酒边直播，观众鼓励你继续，像一群人共同推着一辆即将侧翻的车。黑格尔说承认来自他者，但你今晚得到的承认像刀刃反光。",
      effects: {
        fans: 3100,
        reputation: -4,
        money: 210,
        energy: -22,
        scandal: 8,
        alienation: 10
      },
      tags: [
        "messy-live"
      ]
    },
    {
      title: "午夜里的连接",
      text: "你读着观众来信，缓慢地回答一个个关于失败、爱和羞耻的问题。没有爆点，只有一种奇怪的共同体感。仿佛屏幕并不总是隔膜，它偶尔也能成为火堆。",
      effects: {
        fans: 1100,
        reputation: 7,
        money: 80,
        energy: -14,
        inspiration: 8,
        network: 3,
        authenticity: 7
      },
      tags: [
        "community-live"
      ]
    },
    {
      title: "观众替你写人设",
      text: "弹幕开始给你贴标签，‘破碎感天才’、‘布鲁克林忧郁男孩’、‘诚实失败学家’。命名是一种温柔的暴力，因为它总想把复杂压缩成可记忆的样子。",
      effects: {
        fans: 1900,
        reputation: 2,
        money: 130,
        energy: -16,
        inspiration: 4,
        alienation: 7
      },
      tags: [
        "named-by-chat"
      ]
    },
    {
      title: "深夜热线效果过强",
      text: "有人在直播里突然哭起来，讲失业、分手和药物。你一边安慰一边明白，自己正被塑造成某种数字神父。",
      effects: {
        fans: 1500,
        reputation: 8,
        money: 70,
        energy: -17,
        inspiration: 6,
        authenticity: 6
      },
      tags: [
        "healer-live"
      ]
    },
    {
      title: "凌晨一点的笑话比白天锋利",
      text: "你原本只是顺手接了几句玩笑，没想到弹幕在深夜特别容易把玩笑推向更尖的方向。观众越笑，你越能感觉到某种边界正在变薄。直播结束后你回想那些句子，突然发现白天不会说出口的话，在凌晨总是被包装成更容易原谅的失控。",
      effects: {
        fans: 1800,
        reputation: 1,
        money: 120,
        energy: -15,
        scandal: 5,
        alienation: 6
      },
      tags: [
        "midnight-jokes"
      ]
    },
    {
      title: "你读了一封过长的私信",
      text: "那封私信长得像一篇未发表的散文，写失恋、失业、母亲、药物和凌晨四点的空房间。你读到一半就知道这已经不再只是互动，而是一种被过度信任的托付。可你还是读完了，因为屏幕另一端的人显然把你当成某种不会离开的存在，而你恰恰靠制造这种错觉谋生。",
      effects: {
        fans: 1200,
        reputation: 7,
        money: 90,
        energy: -16,
        inspiration: 8,
        authenticity: 5
      },
      tags: [
        "long-dm-live"
      ]
    },
    {
      title: "直播间突然出现熟人",
      text: "一个你现实里认识的人突然进直播间发了句很普通的话，你却瞬间感到一阵难以解释的慌。陌生人看你是角色，熟人看你会不由自主地对比。那几秒里你像被两个版本的自己同时拉扯，意识到真正令人不安的从来不是被围观，而是被知道你原本模样的人围观。",
      effects: {
        fans: 900,
        reputation: 3,
        money: 50,
        energy: -13,
        inspiration: 6,
        authenticity: 4,
        alienation: 3
      },
      tags: [
        "known-viewer"
      ]
    },
    {
      title: "你差点把直播开成忏悔",
      text: "某个问题让你忽然卡住，原本准备好的节奏和轻松口气一起断了一下。观众立刻敏锐地安静下来，像察觉到了更有价值的裂缝。你在那几秒里几乎想把一切都说出来，可又知道一旦说出来，它们就会立刻变成下一轮被消费的核心内容。",
      effects: {
        fans: 2100,
        reputation: 4,
        money: 140,
        energy: -18,
        inspiration: 5,
        authenticity: 4,
        alienation: 7
      },
      tags: [
        "almost-confession"
      ]
    },
    {
      title: "匿名观众的剖白",
      text: "直播快结束时，一个匿名观众突然刷礼物并讲述自己如何在失业后每天靠刷短视频撑过夜晚。你一边回应，一边被一种奇怪的羞耻感击中: 你靠制造陪伴谋生，而屏幕另一头的人真的把这种陪伴当成了生存的一部分。流量在这瞬间短暂长出重量，让你差点忘了自己仍在表演。",
      effects: {
        fans: 1700,
        reputation: 8,
        money: 190,
        energy: -15,
        inspiration: 7,
        authenticity: 6
      },
      tags: [
        "anonymous-confession"
      ]
    },
    {
      title: "深夜与黑粉连线",
      text: "你一时冲动，同意和一个常年攻击你的账号连线。对方并不像想象中那么恶毒，只是疲惫、刻薄、且同样需要观众。你们吵到一半突然像在照镜子，直播间里先是沉默，随后爆发出更猛烈的讨论。原来最危险的从不是敌意，而是发现敌意背后也有某种相似结构。",
      effects: {
        fans: 2800,
        reputation: -1,
        money: 160,
        energy: -18,
        scandal: 7,
        inspiration: 6,
        alienation: 8
      },
      tags: [
        "hater-callin"
      ]
    }
  ],
  trend: [
    {
      title: "解剖热门模板",
      text: "你把过去七天的热门音频和转场拆成表格，像在学习一门新的驯兽术。你逐渐明白，算法并不偏爱真相，只偏爱可预测的停留时长。理性在这里不再是启蒙，而是服从。",
      effects: {
        fans: 900,
        money: 40,
        energy: -8,
        inspiration: -4,
        alienation: 8
      },
      tags: [
        "algo-study"
      ]
    },
    {
      title: "热点套壳",
      text: "你决定用最流行的叙事模板包装自己的生活，连痛苦都按节拍切分。效果不错，但你在回看时有一种被自己模仿的感觉。鲍德里亚会说你正在活成拟像的影子。",
      effects: {
        fans: 2100,
        reputation: -1,
        money: 120,
        energy: -9,
        inspiration: -7,
        alienation: 10
      },
      tags: [
        "template-life"
      ]
    },
    {
      title: "研究也能反哺创作",
      text: "你并没有盲从热点，而是研究它们为何有效，再反过来拒绝其中最廉价的部分。方法论让你更冷静，但至少没有完全把自己献祭给热榜。",
      effects: {
        fans: 700,
        reputation: 3,
        money: 30,
        energy: -6,
        inspiration: 5,
        authenticity: 3,
        alienation: 2
      },
      tags: [
        "critical-study"
      ]
    },
    {
      title: "数据表格反噬你",
      text: "你盯着近三十条视频的完播率，越看越像在看一份关于人格效率的尸检报告。工具原本应服务创作，但它开始要求你服从自己。",
      effects: {
        fans: 500,
        energy: -7,
        inspiration: -5,
        alienation: 9
      },
      tags: [
        "spreadsheet-trap"
      ]
    },
    {
      title: "逆潮流实验",
      text: "你故意反着热点做一条视频，评论区虽然两极，但少数人留了很长的留言。你第一次觉得‘逆流’也可以不是姿态，而是方法。",
      effects: {
        fans: 650,
        reputation: 5,
        energy: -6,
        inspiration: 8,
        authenticity: 6,
        alienation: -1
      },
      tags: [
        "anti-trend"
      ]
    },
    {
      title: "你开始把别人当成案例库",
      text: "刷到同行的视频时，你第一反应不再是喜欢或厌烦，而是拆解: 为什么这里停顿、为什么那里转场、为什么这句能带动停留。专业能力在增长，直觉却在变硬。你知道这很难完全避免，可还是会在深夜里怀疑，自己是否已经太习惯把所有表达都看成供提取的方法素材。",
      effects: {
        fans: 1000,
        money: 50,
        energy: -7,
        inspiration: -2,
        alienation: 7
      },
      tags: [
        "case-library"
      ]
    },
    {
      title: "热门话题像提前写好的陷阱题",
      text: "你研究一个正在升温的话题时，越看越觉得它像一道故意设计成两端对打的选择题。任何复杂解释都会被算法当作拖沓，任何极端结论都会立刻得到回报。你把这一点写进笔记，随后又犹豫是否要利用这道题，因为你知道识破机制和拒绝利用机制，从来不是一回事。",
      effects: {
        fans: 1200,
        money: 40,
        energy: -6,
        inspiration: 6,
        authenticity: 4,
        alienation: 5
      },
      tags: [
        "trap-topic"
      ]
    },
    {
      title: "你发现潮流的寿命比耐心更短",
      text: "昨天还在涨的东西今天就开始下落，昨天还算新鲜的语气今天就显得晚了一步。你盯着更新速度，第一次真切感到平台不是在奖励创造，而是在奖励足够快的模仿与转述。最可怕的是，你已经越来越擅长跟上这种速度了。",
      effects: {
        fans: 1400,
        money: 60,
        energy: -8,
        inspiration: -4,
        alienation: 8
      },
      tags: [
        "short-cycle"
      ]
    },
    {
      title: "你把热点做成了一份精致的尸检",
      text: "你没有直接跟风，而是用拆解、引用和批判把热点重写成一条看起来更聪明的内容。观众很买账，甚至有人说这才是“真正懂互联网”的表达。可你也明白，再高明的分析最终还是借了热点的尸体发声，只是换了一件更体面的外套。",
      effects: {
        fans: 1600,
        reputation: 4,
        money: 80,
        energy: -7,
        inspiration: 4,
        alienation: 5
      },
      tags: [
        "elegant-autopsy"
      ]
    },
    {
      title: "分析师式的冷静",
      text: "你把平台热点拆得越来越细，甚至开始能预测哪种情绪会在未来两天被市场偏爱。这种洞察确实让你更有效率，也让你逐渐生出一种冷感，仿佛自己正在研究的不是内容，而是如何给大众情绪建模。知识曾经是通向自由的工具，如今却像把你更稳地锁进系统里。",
      effects: {
        fans: 1300,
        money: 80,
        energy: -7,
        inspiration: -3,
        alienation: 9
      },
      tags: [
        "trend-forecast"
      ]
    },
    {
      title: "小众社区逆向学习",
      text: "你花了一个下午泡在一些几乎不追热点的小众论坛里，看人们如何在没有算法奖励的情况下仍旧认真发言。那种慢和笨拙让你重新感到羡慕，也让你意识到平台并没有发明表达，它只是发明了表达的加速装置。你带着一点不合时宜的信心回到桌前，觉得自己也许还能试试别的节奏。",
      effects: {
        fans: 450,
        reputation: 4,
        energy: -4,
        inspiration: 11,
        authenticity: 6,
        alienation: -2
      },
      tags: [
        "slow-community"
      ]
    }
  ],
  relationship: [
    {
      title: "爱情还没被剪成短视频",
      text: "你和一个摄影系学生在廉价酒吧里聊到打烊，对方说喜欢你在镜头外说话的速度。你突然生出一种奢侈的希望，仿佛生活不必总向观众交代。列维纳斯也许会提醒你，真正的他者无法被占有，只能被回应。",
      effects: {
        reputation: 3,
        money: -55,
        energy: 4,
        inspiration: 12,
        authenticity: 8,
        alienation: -5,
        flags: [
          "loveInterest"
        ]
      },
      tags: [
        "romance-begins"
      ]
    },
    {
      title: "家人与同学的提醒",
      text: "母亲打来电话问你最近是否还正常吃饭，导师则提醒你毕业论文不能写成品牌提案。你一边敷衍一边心虚。原来关心也是一种照镜子，它把你从自己讲给观众的故事里拖出来。",
      effects: {
        reputation: 2,
        money: -10,
        energy: -2,
        inspiration: 5,
        authenticity: 6,
        alienation: -2
      },
      tags: [
        "family-call"
      ]
    },
    {
      title: "把私生活做成内容",
      text: "你和暧昧对象拍了情侣感挑战，评论区比你们的关系还先宣布了结局。你得到流量，也失去了一点不被观看的空间。亲密关系一旦上线，就很难再下线。",
      effects: {
        fans: 1800,
        reputation: -1,
        money: 90,
        energy: -8,
        inspiration: 2,
        scandal: 4,
        alienation: 6,
        flags: [
          "realityLoveArc"
        ]
      },
      tags: [
        "love-content"
      ]
    },
    {
      title: "朋友拒绝入镜",
      text: "一个老同学明确告诉你，他不想再成为你内容里的背景板。你尴尬地笑了笑，却在回家路上意识到自己确实开始本能地把每个关系都想成素材。",
      effects: {
        reputation: -1,
        energy: -3,
        inspiration: 4,
        authenticity: 5,
        alienation: -1
      },
      tags: [
        "friend-boundary"
      ]
    },
    {
      title: "旧情人回信",
      text: "前任突然发来一封很长的邮件，说她最近总在网上刷到你。她说你越来越会说话，也越来越不像以前那个会停顿的人。",
      effects: {
        fans: 200,
        reputation: 1,
        energy: -4,
        inspiration: 10,
        authenticity: 7,
        alienation: -3
      },
      tags: [
        "ex-letter"
      ]
    },
    {
      title: "一次平常晚饭被你说成了选题",
      text: "朋友只是抱怨了一下租金和工作，你脑子里却瞬间长出三个可拍方向和两个标题结构。你没有真的当场拿出手机，可那个反应已经足够说明很多事。回家的路上你忽然觉得难受，因为最先被行业夺走的也许不是时间，而是你对他人经验的无功利接收能力。",
      effects: {
        reputation: -1,
        energy: -4,
        inspiration: 6,
        authenticity: 5,
        alienation: 1
      },
      tags: [
        "topic-reflex"
      ]
    },
    {
      title: "你和家人通话时故意装得比实际轻松",
      text: "电话那头问你最近怎么样，你几乎本能地挑最好讲的部分说，把最糟的几处轻轻掠过。挂断之后你意识到，这种筛选并不只发生在镜头里，它已经开始渗入最亲近的关系。原来长期经营一个可接受版本的自己，会让人慢慢忘记该怎样完整地把近况交给别人。",
      effects: {
        reputation: 2,
        energy: -3,
        inspiration: 5,
        authenticity: 4,
        alienation: 2
      },
      tags: [
        "filtered-call"
      ]
    },
    {
      title: "你在暧昧里第一次想到了镜头之外的时间",
      text: "对方提议某天周末一起去海边，不拍、不发、不做任何记录。这个提议出奇地简单，却让你短暂慌了一下，因为它意味着那一天无法被转化成任何可计量成果。你随后又有点想笑，明白自己已经被平台训练到连纯粹约会都要先计算损益。",
      effects: {
        reputation: 3,
        money: -30,
        energy: 3,
        inspiration: 8,
        authenticity: 7,
        alienation: -3
      },
      tags: [
        "offcamera-date"
      ]
    },
    {
      title: "老同学说你变得更会说，也更难靠近",
      text: "那句话并不重，甚至像随口感叹，可你一路都在回想。更会说本该是职业优势，难靠近却像某种附带损耗。也许这就是很多面向公众生活的人共同面对的问题: 你越擅长表达，别人越难分辨你哪一层是真正在向他们靠近。",
      effects: {
        reputation: 1,
        energy: -2,
        inspiration: 7,
        authenticity: 6,
        alienation: -1
      },
      tags: [
        "harder-to-reach"
      ]
    },
    {
      title: "朋友组局上的失语",
      text: "你去参加一个朋友的生日聚会，本想完全不谈工作，却还是在几杯酒后被问起账号、数据和商业计划。你回答得越来越熟练，甚至开始像在路演，直到有人半开玩笑地说你现在说话像 PPT。笑声过去后你突然安静下来，因为那句玩笑精准得让人无法反驳。",
      effects: {
        reputation: 1,
        money: -40,
        energy: -5,
        inspiration: 8,
        authenticity: 6,
        alienation: -2
      },
      tags: [
        "party-pitch"
      ]
    },
    {
      title: "室友深夜摊牌",
      text: "室友在厨房里对你说，他已经很久不确定该把你当朋友还是当一台永远在采集素材的机器。你下意识想辩解，却发现近几周你确实常常在对话中先想到镜头感，再想到人本身。那一刻没有任何观众在场，羞愧也就失去了可表演性，只剩下它本来的重量。",
      effects: {
        reputation: -2,
        energy: -4,
        inspiration: 7,
        authenticity: 8,
        alienation: -3
      },
      tags: [
        "roommate-truth"
      ]
    }
  ],
  shadow: [
    {
      title: "伪慈善提案",
      text: "一位灰色顾问建议你发起一个“为街头青年募资”的挑战，他保证账目足够复杂，没人会认真追。你盯着文案，意识到作恶从来不像电影里那样隆重，它经常只是一个更会说话的 Excel 表。",
      effects: {
        fans: 1200,
        money: 300,
        reputation: -8,
        scandal: 16,
        network: 5,
        alienation: 8,
        flags: [
          "fakeCharitySeed"
        ]
      },
      tags: [
        "fake-charity"
      ]
    },
    {
      title: "边缘地带",
      text: "你跟着朋友去拍一个地下派对，现场有人兜售药物、偷拍视频和未授权素材。你没完全参与，但也没有离开。法律边界像雾一样围住你，暧昧让每个人都觉得自己无辜。",
      effects: {
        fans: 400,
        money: 140,
        energy: -10,
        scandal: 10,
        network: 6,
        alienation: 6,
        flags: [
          "crimeSeed"
        ]
      },
      tags: [
        "danger-party"
      ]
    },
    {
      title: "极端立场的试探",
      text: "某个政治号联系你，希望你用更明确的敌我叙事换取资源和推流。他们说时代只奖励态度鲜明的人。你知道鲜明有时只是复杂性的尸体。",
      effects: {
        fans: 1300,
        money: 180,
        reputation: -4,
        inspiration: -3,
        scandal: 8,
        network: 4,
        alienation: 7,
        flags: [
          "radicalSeed"
        ]
      },
      tags: [
        "political-door"
      ]
    },
    {
      title: "数据刷量邀请",
      text: "一家灰色工作室承诺给你买来漂亮的曲线和稳定的增长，只要求你别问来源。你知道所有捷径都不是路，它们只是把风险挪到了以后。",
      effects: {
        fans: 2200,
        money: -180,
        scandal: 12,
        alienation: 9,
        network: 3,
        flags: [
          "botSeed"
        ]
      },
      tags: [
        "bot-offer"
      ]
    },
    {
      title: "偷拍视频买卖",
      text: "有人问你要不要收一份涉及明星和网红的偷拍视频，价格不高，爆点极大。你甚至没有立刻拒绝，这已经足够说明问题。",
      effects: {
        money: -60,
        energy: -5,
        scandal: 9,
        alienation: 7,
        flags: [
          "leakSeed"
        ]
      },
      tags: [
        "leak-market"
      ]
    },
    {
      title: "你第一次认真看完了一份来路可疑的合同",
      text: "合同措辞并不粗糙，甚至比某些正规合作更讲究，只是细看会发现很多责任都被故意写得模糊。你越看越清楚，这个世界真正危险的部分并不总是野蛮，它可以很专业、很有礼貌、很像一条给走投无路的人准备好的职业支线。你把文档关掉时，心里第一次生出一种冷冷的敬畏。",
      effects: {
        money: 110,
        energy: -6,
        scandal: 7,
        network: 4,
        alienation: 6
      },
      tags: [
        "shady-contract"
      ]
    },
    {
      title: "有人暗示你可以卖掉一段并不属于你的信息",
      text: "那只是饭局上一句轻轻带过的提示，像笑话，又不像。可你能分辨出对方不是在试探想象力，而是在试探边界。最让你不安的不是提议本身，而是你居然真的花了几秒去估算这件事值不值得冒险，这几秒足以让你对自己新的部分保持警惕。",
      effects: {
        money: 70,
        energy: -5,
        scandal: 8,
        inspiration: -3,
        alienation: 7
      },
      tags: [
        "sell-info"
      ]
    },
    {
      title: "你被带去一个只谈结果不谈来源的局",
      text: "桌上每个人都用行话避开真正的名词，像默认坦白是最不专业的行为。你坐在那儿听别人谈投流、压热搜、做匿名口径，突然感到一种荒诞的熟悉: 这里的逻辑和正常内容行业并没有本质不同，只是把所有遮羞布提前撤掉了。理解这点的瞬间，比提案本身更让人发冷。",
      effects: {
        money: 150,
        energy: -8,
        scandal: 9,
        network: 5,
        alienation: 8
      },
      tags: [
        "results-only"
      ]
    },
    {
      title: "你发现灰色地带也有自己的体面礼仪",
      text: "没有人直说自己在做坏事，大家只是互相递更抽象的词: 风险控制、节奏处理、舆论管理、账户隔离。你越听越明白，邪门的部分从来不是词汇本身，而是它们如何让越界听上去像一门成熟行业。那一刻你第一次理解，许多人并不是突然跌进去，而是先学会了怎样用体面的语言陪自己走进去。",
      effects: {
        money: 90,
        energy: -5,
        scandal: 8,
        inspiration: -2,
        alienation: 9
      },
      tags: [
        "dark-etiquette"
      ]
    },
    {
      title: "替人带货的黑箱报价",
      text: "一个中间人问你愿不愿意用小号替某位翻车博主悄悄带货，对外只算普通合作，抽成却高得不正常。整个过程像在灰尘里谈判，没有人提道德，也没有人提边界，仿佛默认这些词已经在上一个版本的互联网里被淘汰。你盯着报价单看了很久，最后仍旧无法坦然把它当成一份普通工作。",
      effects: {
        money: 380,
        reputation: -5,
        energy: -8,
        scandal: 10,
        alienation: 8,
        network: 4,
        flags: [
          "shadowProxy"
        ]
      },
      tags: [
        "proxy-deal"
      ]
    },
    {
      title: "偷拍视频的二次勒索",
      text: "有人找到你，说手里有一段能毁掉某位大博主的偷拍视频，问你要不要参与匿名扩散并分成。你第一次清楚地感到，黑暗经济并不是另一个世界，它只是把曝光、传播和收益换了更直接的说法。你没有立刻报警，也没有立刻答应，而这种停顿本身已经让你意识到自己离边界有多近。",
      effects: {
        money: 90,
        energy: -6,
        scandal: 12,
        alienation: 8,
        network: 3,
        flags: [
          "blackmailSeed"
        ]
      },
      tags: [
        "extortion-whisper"
      ]
    }
  ]
};

const narrativeCodas = {
  publish: [
    "你知道镜头不会替你承担后果，它只会把后果保存得比记忆更清楚。",
    "有些表达一旦进入推荐流，就会比你本人活得更久，也更陌生。",
    "你把生活整理成能被看见的形状时，也在默默决定哪些部分不再被允许含糊。"
  ],
  street: [
    "城市并没有给你答案，它只是把更多表面递到你手里，逼你决定相信哪一层。",
    "街头的真正密度不在画面里，而在你来不及完全解释的那些停顿里。",
    "你越想把纽约拍成一个完整比喻，它越会用细节提醒你自己只是临时经过。"
  ],
  collab: [
    "合作的真实代价往往不是分成，而是谁在不知不觉中替谁调整了说话方式。",
    "你们互相借光，也互相借走一点定义自己的权利。",
    "联动结束以后，留下来的不只是素材，还有彼此如何被彼此改写的痕迹。"
  ],
  business: [
    "商业从不急着显得粗暴，它更擅长让妥协看上去像成熟。",
    "每一份报价单都在问同一个问题: 你愿意把哪部分自己先折现。",
    "钱很少直接命令人，它通常只是把别的选项慢慢变得不现实。"
  ],
  random: [
    "偶然事件之所以有效，是因为它总能把你已经在担心的东西突然实体化。",
    "你越来越难区分命运与系统噪声，因为两者都喜欢借波动说话。",
    "随机并不公平，它只是擅长让人误以为一切都还有别的可能。"
  ],
  rest: [
    "你并没有完全恢复，只是暂时不再把每一次呼吸都交给平台计价。",
    "休息最奢侈的部分不是安静，而是它短暂地允许你不必证明自己没有浪费时间。",
    "当身体重新慢下来时，你才会发现有多少疲惫之前一直被包装成职业素养。"
  ],
  nightlive: [
    "深夜从不天然诚实，它只是让人更难维持白天那套完整而体面的表演。",
    "弹幕像一片流动的目光，既托住你，也随时可能把你往更深处推。",
    "直播结束后留下来的不是热度，而是你是否还认得刚才那个被放大的自己。"
  ],
  trend: [
    "研究趋势久了以后，连你自己的犹豫都会开始长出数据分析的口吻。",
    "你越理解热点的结构，就越要小心自己别被结构反过来借走判断力。",
    "所谓掌握趋势，很多时候只是提前学会牺牲什么。"
  ],
  relationship: [
    "人与人的关系原本不该有发布节奏，可你越来越常用内容行业的语言理解亲密，这件事本身就足够危险。",
    "你想起有些人认识你，比观众更早，也比观众更麻烦，因为他们见过你还没来得及包装的时候。",
    "私生活最脆弱的部分并不是秘密被看见，而是它开始为了被看见而自行变形。"
  ],
  shadow: [
    "阴影从不自称阴影，它通常会把自己包装成效率、机会或危机下的现实主义。",
    "你还没有彻底越界，但边界已经开始在你心里变软。",
    "黑暗最擅长的事不是逼迫，而是让人觉得自己只是比昨天更务实了一点点。"
  ],
  choice: [
    "选择总会淘汰掉另一个版本的你，只是多数时候没人会替那条未走的路线举行葬礼。",
    "你把决定说出口的一瞬间，叙事就开始收紧。",
    "真正沉重的往往不是岔路本身，而是你开始明白自己会走哪一种路。"
  ],
  system: [
    "有些变化并不是单一事件造成的，它们更像许多日常微小决定在某一刻突然显影。",
    "并没有谁在外部替你写剧本，只是你一遍遍的偏好和妥协，慢慢长成了剧情。",
    "人生的转折点很少长得像转折点，多数时候，它们只是某件小事终于积累够了分量。"
  ]
};

const lateEventTemplates = {
  publish: [
    {
      title: "赞助密度开始压过表达",
      text: "第十四天之后，你发现自己的脚本里出现了越来越多可被替换成品牌名的空位。你仍然努力保留一点观点和个人语气，但商务词汇已经像潮水一样漫过句子的缝隙。观众未必立刻厌烦，甚至可能更买账，可你在回放里第一次清楚地看见，自己正在一点点学会如何优雅地消失在内容里。",
      effects: { fans: 2600, money: 240, reputation: -3, energy: -11, inspiration: -5, alienation: 9 },
      tags: ["late-sponsored"]
    },
    {
      title: "你开始复制昨天的自己",
      text: "你翻看后台，发现最有效的内容往往来自你曾经最真诚的一次失控或最笨拙的一次坦白。于是你尝试复刻它们，换个角度、换段台词、换一层更熟练的语气。数据没有辜负你，但那种熟练像一面反光太强的镜子，照得你几乎不愿直视自己正在进行的重复生产。",
      effects: { fans: 1900, money: 80, energy: -10, inspiration: -7, authenticity: -5, alienation: 8 },
      tags: ["self-copy"]
    }
  ],
  street: [
    {
      title: "城市看上去像一块被使用过度的背景布",
      text: "走到第十四天以后，布鲁克林的墙面、便利店、天桥和地铁口不再只是素材，它们开始像一套被你反复调度过的布景。你仍能找到细节，但很难再找到最初那种未经命名的惊讶。城市没有枯竭，枯竭的是你面对城市时那部分还来不及被算法分类的感官。",
      effects: { fans: 700, reputation: 2, energy: -12, inspiration: 9, authenticity: 3, alienation: 5 },
      tags: ["city-fatigue"]
    },
    {
      title: "街头镜头开始反过来监视你",
      text: "拍摄时你越来越频繁地在橱窗和玻璃门里看见自己的倒影，像另一个人正从城市里盯着你工作。你突然不确定自己是在记录街头，还是在借街头确认自己仍旧存在。后期回看时，那些微小倒影反而成了最刺眼的部分，让所有风景都带上一种持续被观看的疲态。",
      effects: { fans: 900, reputation: 3, energy: -10, inspiration: 8, authenticity: 4, alienation: 7 },
      tags: ["mirror-city"]
    }
  ],
  collab: [
    {
      title: "联动像在参加一场互相担保的仪式",
      text: "越到中后期，你越能看出联动背后的算术: 谁借谁的受众，谁消费谁的争议，谁在谁的评论区里试探新的位置。表面仍旧是轻松玩笑和即兴火花，实际上每一次停顿都像在评估边界。你并不讨厌这种职业性，只是偶尔会怀疑，当合作被训练得如此熟练之后，人与人之间是否还剩下真正的意外。",
      effects: { fans: 2300, money: 140, energy: -11, network: 9, authenticity: -3, alienation: 7 },
      tags: ["collab-ritual"]
    },
    {
      title: "你被邀请进入更大的圈层，也更像临时租客",
      text: "有人把你拉进一场更高层级的联动项目，场地更贵，妆发更完整，所有人都懂得如何在镜头前显得从容。你站在其中并不格格不入，却始终有一种短租般的局促，仿佛随时会被提醒这里只欢迎可持续变现的版本。离场之后，你意识到阶层感有时并不来自财富，而来自谁更早学会把不安伪装成风格。",
      effects: { fans: 3000, money: 180, reputation: -1, energy: -9, network: 10, alienation: 8 },
      tags: ["bigger-circle"]
    }
  ],
  business: [
    {
      title: "你开始听懂资本最温柔的威胁",
      text: "进入中后期后，商务谈判不再像机会，更像一种持续教化。每个人都对你礼貌、耐心、善于倾听，可真正被鼓励留下来的只有那部分最可控、最不冒犯、最容易包装的你。你忽然明白，资本最有效的暴力不是拒绝，而是用足够体面的方式把你塑造成更容易出售的人。",
      effects: { money: 520, reputation: -2, energy: -10, inspiration: -4, network: 8, alienation: 10 },
      tags: ["soft-domestication"]
    },
    {
      title: "你的名字被当作项目资产对待",
      text: "会议里有人开始不再直接叫你，而是说“这个账号”“这个面孔”“这个受众切口”。你明明坐在现场，却像在旁听对自己使用权的一场讨论。奇怪的是，你甚至没有立刻愤怒，只是熟练地记录重点、点头、继续谈价格。原来异化最深的时候，并不一定伴随痛感，它也可能表现为一种近乎职业的配合。",
      effects: { money: 460, reputation: -1, energy: -8, network: 7, authenticity: -4, alienation: 11 },
      tags: ["asset-language"]
    }
  ],
  random: [
    {
      title: "平台像故意测试你的承受上限",
      text: "到了后半程，你越来越觉得推荐机制不只是分发工具，而像一台会观察反应的实验机器。今天它突然把你推高，明天又让你坠下，再隔一天给一点补偿性的回升。你知道不能把一切都人格化，但仍无法摆脱那种感觉: 仿佛某种看不见的结构正以你的情绪起伏作为训练数据。",
      effects: { fans: 3400, reputation: -2, money: 90, energy: -9, inspiration: -2, alienation: 9 },
      tags: ["algorithm-whiplash"]
    },
    {
      title: "你开始把每一次偶然都当成征兆",
      text: "一个陌生账号的转发、一条没有上下文的私信、一句模糊不清的邀约，都足以让你推演半天。中后期的焦虑与其说来自事件本身，不如说来自你已经学会如何为任何小波动放大意义。系统并不需要时刻惩罚你，只要让你习惯持续解释自己，你就会主动完成一半消耗。",
      effects: { fans: 1000, reputation: 1, energy: -8, inspiration: 3, alienation: 8 },
      tags: ["omen-loop"]
    }
  ],
  rest: [
    {
      title: "休息也开始带着生产羞耻",
      text: "越到后面，你越难真正停下来。哪怕只是发呆一小时，脑子里也会自动弹出“这能不能剪成一条内容”“这是否值得记录”的提示音。你意识到最可怕的并不是忙碌，而是连休息都开始按照可转化价值被衡量。于是这一次的暂停不再轻盈，它更像一场艰难的自我夺回。",
      effects: { energy: 11, inspiration: 7, authenticity: 6, alienation: -5 },
      tags: ["rest-guilt"]
    },
    {
      title: "你短暂体验到一种接近匿名的平静",
      text: "那天下午你没有更新、没有回消息，也没有查看后台。几个小时以后，世界并没有因此坍塌，平台也没有派人来敲门。这个事实本应平常，却让你获得一种近乎奢侈的安慰: 也许自己并不需要时时刻刻证明存在，存在本身原来也可以在无人围观处成立。",
      effects: { energy: 13, inspiration: 9, authenticity: 8, alienation: -6 },
      tags: ["late-anonymous-rest"]
    }
  ],
  nightlive: [
    {
      title: "深夜直播开始像一间半公开的审讯室",
      text: "到了后半程，直播间里的气氛不再只有陪伴和热闹，它越来越像一场持续试探边界的围观。观众知道你在哪些话题上会迟疑，知道哪种情绪最容易让你失控，也知道什么时候该刷一句“你还好吗”把你重新推回表演状态。你并非完全被动，但也不得不承认，亲密感一旦规模化，常常就会长出残酷的效率。",
      effects: { fans: 2800, money: 220, energy: -19, scandal: 6, authenticity: 2, alienation: 10 },
      tags: ["stream-interrogation"]
    },
    {
      title: "观众开始追更你的精神状态",
      text: "有人在弹幕里统计你近几次直播时说话的速度、喝水的次数、沉默的长度，像在追一部关于你逐步走偏的连续剧。你一边感到反感，一边又清楚这种被连载的脆弱确实能带来比普通内容更稳定的黏性。最糟糕的从来不是别人消费你的裂缝，而是你偶尔也开始从这种消费里看到价值。",
      effects: { fans: 3500, money: 260, energy: -20, scandal: 8, alienation: 12 },
      tags: ["serial-breakdown"]
    }
  ],
  trend: [
    {
      title: "你学会了提前向未来的热点投降",
      text: "中后期最大的变化不是你更懂趋势，而是你开始在趋势真正到来前就主动为它腾位置。你删掉不够利落的表达，修正可能拖慢传播的句子，甚至提前裁掉某些会让商业客户不安的锐度。这种预防性自我管理高效得惊人，也让你意识到，真正驯化人的未必是命令，往往是对可能损失的想象。",
      effects: { fans: 1800, money: 90, energy: -8, inspiration: -6, alienation: 10 },
      tags: ["preemptive-obedience"]
    },
    {
      title: "你开始从人群里读取可被放大的情绪模板",
      text: "刷久了之后，任何社会事件在你眼里都先变成情绪结构: 愤怒怎么切、羞耻怎么钩、共鸣怎么留口。技术上这很厉害，甚至算一种职业成熟，可你也越来越难分辨自己是否还在理解现实，还是只在为现实寻找更高效的包装方式。知识与操控之间的边界，从来就不如课堂上讲得那样清楚。",
      effects: { fans: 2000, money: 120, energy: -9, inspiration: -5, authenticity: -3, alienation: 11 },
      tags: ["emotion-template"]
    }
  ],
  relationship: [
    {
      title: "你和身边人的对话越来越难不带行业黑话",
      text: "第十四天以后，连最普通的饭桌聊天都可能滑向曝光、路径、增长和转化。朋友还在说生活，你却总能听出里面潜藏的选题结构。你讨厌这种条件反射，却也无法立刻摆脱，因为它已经被训练成你的职业本能。关系并没有立即破裂，只是缓慢地被一种不属于它的语法渗透。",
      effects: { reputation: -1, energy: -5, inspiration: 6, authenticity: 5, alienation: -1 },
      tags: ["industry-language"]
    },
    {
      title: "真正关心你的人开始问同一个问题",
      text: "不同的人在不同场合里都以不同方式问你: 你最近还好吗。问题本身并不复杂，却因为重复出现而变得像某种警报。你试图用玩笑和忙碌带过去，但心里明白，真正让人紧张的不是别人多虑，而是他们可能比你更早看见了你的变化。",
      effects: { reputation: 2, energy: -3, inspiration: 9, authenticity: 7, alienation: -2 },
      tags: ["everyone-asks"]
    }
  ],
  shadow: [
    {
      title: "灰色机会开始成体系地出现",
      text: "到了后期，危险不再以单次诱惑出现，而更像一整套逐渐成形的地下供应链。总有人知道谁缺钱、谁需要热度、谁正在边缘摇摆，于是合适的提议会在最脆弱的时候准确出现。你第一次强烈意识到，堕落并不是个人故事，它往往有成熟的分发网络，只等人点开。",
      effects: { money: 520, energy: -10, scandal: 12, network: 6, alienation: 10 },
      tags: ["shadow-network"]
    },
    {
      title: "你对越界的想象开始变得具体",
      text: "以前你说起风险时还带点抽象修辞，如今却能迅速估算某种爆料值多少钱、某场灰单能拖过几周房租、某次匿名操作大概需要几层中转。最危险的也许不是你真的做了什么，而是你已经能如此熟练地替未来的越界准备术语和预算。语言一旦提前打通，道德就会比想象中更容易跟着后撤。",
      effects: { money: 260, energy: -7, scandal: 9, inspiration: -2, alienation: 11 },
      tags: ["specific-fall"]
    }
  ]
};

const rareEventTemplates = {
  publish: [
    {
      title: "一位真正的大导演把你的视频发给了选角团队",
      text: "那不是营销号也不是朋友的玩笑，而是一封措辞克制却明显懂行的邮件。对方说并不确定这会不会变成工作，只是觉得你镜头里的犹豫和断裂很适合更长的叙事。你读完之后没有立刻兴奋，反而有一种被另一种秩序远远看见的失重感，像一直在小房间里练习的人，忽然听见门外有人停下脚步。",
      effects: { fans: 2600, reputation: 8, money: 180, inspiration: 12, network: 8, authenticity: 5 },
      tags: ["rare-director-mail"],
      rareChance: 0.08,
      when: (state) => state.stats.authenticity >= 32 || state.stats.fans >= 40000
    }
  ],
  street: [
    {
      title: "你在街头遇见了自己曾经崇拜的人",
      text: "那人并没有带团队，也没有被灯光包围，只是很普通地站在拐角抽烟。你认出他，他也注意到你手里的设备。你们只说了几句，但那几句短得惊人，却让你回家之后一直没舍得立刻看素材。你突然意识到，某些相遇之所以像事件，不是因为它们改变了现实，而是因为它们重新标注了你为什么会走到这里。",
      effects: { reputation: 7, inspiration: 14, network: 6, authenticity: 5, fans: 500 },
      tags: ["rare-idol-street"],
      rareChance: 0.07,
      when: (state) => state.stats.inspiration >= 38
    }
  ],
  collab: [
    {
      title: "一次联动意外产生了真正的创作化学反应",
      text: "你原本只打算完成合作指标，结果对方一句顺手抛出的想法把整场拍摄推到了完全不同的方向。你们都临时放弃了最安全的脚本，转而追逐某种没人能提前计算的数据之外的张力。素材不一定最商业，却在回看时有一种稀有的活性，让你久违地觉得合作不是互相借光，而是共同点火。",
      effects: { fans: 2400, reputation: 7, money: 120, inspiration: 13, network: 9, authenticity: 5 },
      tags: ["rare-creative-spark"],
      rareChance: 0.08,
      when: (state) => state.stats.network >= 20 || state.stats.inspiration >= 36
    }
  ],
  business: [
    {
      title: "你被邀请参加一场真正有门槛的闭门局",
      text: "没有公开海报，没有会后返图，甚至没有人会在社交平台上承认自己去过。桌上的每句话都比平时轻，却比平时更值钱。你坐在其中，第一次意识到资源最密集的地方往往最安静，也最擅长把未来在酒杯碰撞之间先分配掉。离场时你带走的不止是名片，更是一种对权力运行速度的新的体感。",
      effects: { money: 420, network: 12, reputation: 4, alienation: 6, inspiration: 4 },
      tags: ["rare-closed-room"],
      rareChance: 0.07,
      when: (state) => state.stats.network >= 24 || state.stats.fans >= 60000
    }
  ],
  rest: [
    {
      title: "你在彻底离线的一天里重新感到自己是完整的人",
      text: "没有消息、没有后台、没有人把你的情绪换算成数据。起初你像丢了护栏，后面却慢慢感到一种久违的稳定。那天并没有发生什么值得记录的大事，可正因如此，它反而显得像一块罕见的净土。你晚上回家时忽然明白，有些最重要的恢复根本不会形成爆点，它只是让你再次具备被生活触碰的能力。",
      effects: { energy: 18, inspiration: 12, authenticity: 9, alienation: -10 },
      tags: ["rare-full-offline"],
      rareChance: 0.07,
      when: (state) => state.stats.alienation >= 24 || state.stats.energy <= 60
    }
  ],
  nightlive: [
    {
      title: "一场直播意外变成真正的共同体时刻",
      text: "那晚没人起哄，也没有谁故意把你往更危险的边上推。弹幕缓慢、认真，像一群彼此并不认识的人在帮忙守住某种稀薄但真实的秩序。你第一次在直播结束后没有感到被掏空，反而有一点近乎古老的安慰，好像屏幕也并不必然只会制造剥削，它偶尔也可能让人短暂地相信彼此并不完全孤立。",
      effects: { fans: 1600, reputation: 10, money: 140, inspiration: 10, authenticity: 9, alienation: -4 },
      tags: ["rare-live-community"],
      rareChance: 0.08,
      when: (state) => state.stats.reputation >= 45
    }
  ],
  trend: [
    {
      title: "你突然看穿了一个比热点更大的结构",
      text: "那不是某条视频、某个模板或某次流行，而是一整套关于情绪、停留和社会焦虑如何被加工成内容燃料的底层图。你在笔记本上快速写下几行，知道这未必能立刻变现，却可能改变你此后看待整个平台的方式。知识在这一刻不再只是服从效率的工具，而短暂地重新像回了洞察本身。",
      effects: { inspiration: 16, authenticity: 7, reputation: 5, alienation: -2, fans: 400 },
      tags: ["rare-big-insight"],
      rareChance: 0.07,
      when: (state) => state.stats.inspiration >= 42 || state.stats.authenticity >= 30
    }
  ],
  relationship: [
    {
      title: "你得到了一次不被观看也能成立的爱",
      text: "那晚没有镜头，没有截图，没有任何适合复述给别人的高潮。只是一个人平静地听你说完那些连你自己都觉得说出来会显得过于软弱的部分，然后没有立刻给建议，也没有把你修成更合理的版本。你在那之后很久都没打开后台，因为你突然觉得，自己也许终于拥有了一小块不需要平台来证明价值的现实。",
      effects: { energy: 12, reputation: 5, authenticity: 10, alienation: -8, inspiration: 8 },
      tags: ["rare-real-intimacy"],
      rareChance: 0.07,
      when: (state) => hasFlag(state, "loveInterest") || state.stats.authenticity >= 34
    }
  ],
  shadow: [
    {
      title: "你几乎一只脚踏进深渊，又在最后一秒停住",
      text: "钱、渠道、匿名保护和合理化说辞全都摆在你面前，结构严丝合缝，几乎不像诱惑，更像一份成熟得过分的职业路径。你甚至已经开始在心里替这件事写解释，却在某个细节上突然感到彻骨的恶心。那种生理性的退缩救了你一次，也让你第一次知道，自己并非总能指望理性在最后一刻把人拉回来。",
      effects: { energy: -2, reputation: 4, authenticity: 10, scandal: -2, alienation: -6 },
      tags: ["rare-step-back"],
      rareChance: 0.06,
      when: (state) => state.stats.scandal >= 18 || state.stats.alienation >= 26
    }
  ],
  random: [
    {
      title: "一条私信准确得像预言",
      text: "那人并没有声称认识你，只是写了一段关于你会如何继续分裂、如何继续被流量奖励、又如何在某个节点突然想消失的判断。准确得过分，像在读一份你还没来得及承认的病历。你看着那段话，不知道该把它归入恶意、洞察还是某种不祥的同类识别。最可怕的是，你几乎每一句都能在体内找到回声。",
      effects: { inspiration: 10, scandal: 2, alienation: 8, authenticity: 2 },
      tags: ["rare-prophecy-dm"],
      rareChance: 0.06,
      when: (state) => state.stats.alienation >= 28
    },
    {
      title: "你忽然被推到一个完全不属于你的文化现场中央",
      text: "平台把你的一条内容莫名其妙送进了另一个圈层，那些人用你陌生的术语解释你，赞美和嘲笑都带着异地的语感。你像被扔进一间镜子角度全部错开的房间，看见自己被重新切成好几种互不兼容的版本。那种不适并不全然负面，因为它让你意识到，账号一旦足够公开，就迟早会失去对自我解释的垄断。",
      effects: { fans: 3200, reputation: -1, inspiration: 6, alienation: 6, scandal: 2 },
      tags: ["rare-displaced-audience"],
      rareChance: 0.07,
      when: (state) => state.stats.fans >= 25000
    }
  ]
};

const endingPreludeTexts = {
  "million-shell": "结局前夜，你盯着那条持续上涨却已经几乎无法让你兴奋的数字曲线，突然明白自己早已不是在生活，只是在维持一个能被生活围观的设施。",
  "cancelled-person": "前夜里每一次刷新都像在看自己被重新编目，证词、截图、语气、旧玩笑，全都开始朝同一个方向收紧。",
  "capital-signing": "签字前夜，你很清楚明天不会像失败，更像一场体面到足以遮住代价的交接。",
  "real-breakout": "前夜里你第一次感到自己也许不需要再故意把裂缝藏起来，因为正是那些裂缝一路把你带到了这里。",
  "mental-collapse": "前夜像一张被拉得太紧的膜，连最普通的一次呼吸都带着即将断裂的细小噪音。",
  "underground-revolutionary": "前夜里你没有再去想播放量，而是在盘算明天会有多少双真实的脚出现在同一处地点。",
  "love-and-exit": "前夜的安静比任何热搜都更有说服力，你忽然相信不被证明的生活也能成立。",
  "fake-death": "前夜里你把消失写成脚本，知道明天真正扩散的不是死亡，而是人们消费死亡的方式。",
  'forgotten': "前夜没有任何预兆，世界只是照常往前走，而你慢慢意识到自己即将从它的高频记忆里滑出去。",
  "onlyfans-pivot": "前夜里你反复告诉自己这只是赛道切换，可每一次自我说服都在提醒你边界刚刚被重新标价。",
  "political-extreme": "前夜的句子越来越短，越来越适合动员，越来越不适合怀疑；你知道自己正在走进一种高效而危险的整齐。",
  "fake-charity-scam": "前夜里所有看似温柔的包装都开始露出账目和流程的骨架，善意已经来不及解释自己。",
  "reality-show-love": "前夜像一次提前排好的预告片，你知道明天连最私人部分也会被重新剪进可追更的结构里。",
  "split-live": "前夜的镜子不再只反射脸，而开始反射你内部那些互相争吵却都还想继续上线的版本。",
  "algorithm-slave": "前夜里你几乎能预测明天该发什么、几点发、如何发，却唯独很难说清自己为什么还要这样发。",
  "documentary-reversal": "前夜里你知道明天会有人把镜头对准你如何被制造，而那比任何赞美和任何网暴都更接近真正的暴露。",
  "crime-edge": "前夜像一份尚未被正式宣读的清单，记录、转账、文件和暧昧说辞都开始互相串联。",
  "anonymous-vanish": "前夜安静得近乎奢侈，你知道明天并不是终结，只是把名字从持续被调用的地方撤下来。",
  "film-crossover": "前夜里你隐约看见一种更大的景框正在靠近，而你不确定那是晋升、收编，还是两者本来就分不开。"
};

const storyArcCatalog = {
  "brand-machine": {
    title: "品牌化进程",
    steps: [
      {
        title: "第一天，公关词替你改写语气",
        text: "第二天醒来，你发现自己已经在心里替合作方预演今天该如何说话。不是他们真的在场，而是那种被要求稳定、积极、可控的语气开始提前占据你的句子。你甚至能感觉到某些本来会说出口的棱角，在成形前就被自己磨平了。",
        effects: { money: 120, authenticity: -4, alienation: 5 }
      },
      {
        title: "第二天，你开始主动自我审查",
        text: "你打开草稿时，本能地删掉了一句可能让品牌不安的批评，然后愣了两秒。真正成熟的商业合作，也许从来不需要甲方天天盯着你，它只需要让你逐渐学会替他们提前排雷。你并不因此停工，反而完成得更快，这才是最令人不安的地方。",
        effects: { reputation: -1, inspiration: -3, authenticity: -5, alienation: 6 }
      },
      {
        title: "第三天，你意识到观众也看出了变化",
        text: "评论区开始有人说你最近更顺了，也更空了。措辞并不激烈，却精准得让你无法完全忽略。你忽然明白，被资本塑形最难堪的地方不是堕落本身，而是连旁观者都能看出你正在练习怎样优雅地失真。",
        effects: { fans: -600, reputation: -4, authenticity: -4, alienation: 5 }
      }
    ]
  },
  "public-romance-arc": {
    title: "公开恋情连锁",
    steps: [
      {
        title: "第一天，亲密变成选题",
        text: "公开之后的第二天，你们普通吃顿饭都可能被想成下一条视频的素材。对方起初还能配合，甚至觉得新鲜，但你很快发现你们的关系已经开始被观众的想象提前编剧。爱情在被观看时并不会立刻死亡，它只是会越来越像一档节目。",
        effects: { fans: 2200, money: 90, alienation: 5 }
      },
      {
        title: "第二天，评论区替你们定义关系",
        text: "有人夸你们甜，有人开始分析眼神、肢体、语气，仿佛一段关系的真实性可以由弹幕统计出来。最奇怪的是，你也开始在这些外部解释里寻找安全感。原来亲密一旦进入流量结构，连不安都会想借助数据被证明。",
        effects: { reputation: -1, energy: -5, scandal: 3, alienation: 6 }
      },
      {
        title: "第三天，现实开始被镜头倒逼",
        text: "你们为了不让观众看出异样，甚至在一次小争执后仍旧按计划发出了早已排好的同框内容。那条视频表现很好，甚至比前两条都好。你在发布后盯着屏幕许久，意识到关系并没有立刻坏掉，但它已经学会向镜头让步。",
        effects: { fans: 2600, money: 120, authenticity: -5, alienation: 7 }
      }
    ]
  },
  "quiet-love-arc": {
    title: "私密关系保留",
    steps: [
      {
        title: "第一天，你们拥有一个无人评论的夜晚",
        text: "你们去了一个没有打卡意义的小餐馆，食物普通，灯光普通，谈话也没有任何适合做标题的高潮。可正因为没有高潮，它才显得格外珍贵。你离开时突然意识到，真正的亲密也许并不需要被证明，它只需要被好好度过。",
        effects: { energy: 6, inspiration: 7, authenticity: 6, alienation: -4 }
      },
      {
        title: "第二天，对方开始更信任你的沉默",
        text: "你没有把这段关系交给观众，对方也就逐渐把更多未必好看的部分交给你。那些犹豫、脾气、无聊和琐碎，恰恰让你感到一种久违的现实感。不是每一种连接都必须被转译成内容，某些连接的价值正在于它无法被转译。",
        effects: { reputation: 2, energy: 5, authenticity: 7, alienation: -3 }
      }
    ]
  },
  "radical-spiral": {
    title: "极端化螺旋",
    steps: [
      {
        title: "第一天，立场开始替你筛选朋友",
        text: "你刚答应合作，旧朋友圈里就有人沉默、有人劝阻、有人直接离开。新社群则迅速向你敞开，效率高得像一套成熟招商系统。你短暂感到被需要，但也明白这种需要只针对某种更锋利、更单一、更方便传播的你。",
        effects: { fans: 2600, network: 6, reputation: -4, alienation: 5 }
      },
      {
        title: "第二天，复杂开始显得像软弱",
        text: "你写文案时几次想加入限定和保留，可每一次犹豫都会让句子失去传播效率。于是你把灰度删掉，把条件句剪短，把问题讲成战斗。热度立刻给出奖励，而你心里那点尚未死掉的怀疑则被迫后撤。",
        effects: { fans: 3200, reputation: -5, inspiration: -4, alienation: 7, scandal: 4 }
      },
      {
        title: "第三天，立场不再是工具，而开始反过来使用你",
        text: "你发现自己已经很难在不动员情绪的情况下表达观点，仿佛所有温和、犹疑和复杂都在拖累账号成长。你不一定真的更相信这些口号，只是越来越依赖它们带来的秩序感。极端最可怕的地方就在这里: 它不要求真诚，只要求持续。",
        effects: { fans: 2800, reputation: -6, authenticity: -6, alienation: 8, scandal: 5 }
      }
    ]
  },
  "grey-debt": {
    title: "灰单后遗症",
    steps: [
      {
        title: "第一天，钱到账了，睡眠却没回来",
        text: "你解决了眼前的房租问题，可当天夜里却反复想起合同里那些过于模糊的句子。钱确实能缓解焦虑，却不总能缓解知道自己为什么得到这笔钱的那部分不适。你意识到危机被延后，不代表它真的消失。",
        effects: { money: 80, energy: -6, scandal: 3, alienation: 5 }
      },
      {
        title: "第二天，对方开始默认你会继续配合",
        text: "那边很自然地又发来下一次合作的口风，像一切都已进入熟悉流程。你突然明白，灰色交易最厉害的不是第一次说服，而是它总能迅速制造第二次的惯性。人一旦被某个结构证明过“可以”，后面就会有更多结构排队来使用这个事实。",
        effects: { network: 4, authenticity: -4, alienation: 6, scandal: 4 }
      },
      {
        title: "第三天，你开始替自己找理由",
        text: "你对着镜子练习了几种解释: 危机所迫、人人如此、我并没有真的违法。每一种说法都不完全错误，因此也就格外危险。真正让人下沉的往往不是谎言，而是那些带着部分真相的自我宽恕。",
        effects: { energy: -4, authenticity: -6, alienation: 6, scandal: 5 }
      }
    ]
  },
  "shell-acceleration": {
    title: "空壳化加速",
    steps: [
      {
        title: "第一天，团队开始默认你只是容器",
        text: "品牌群里的人讨论你下周的内容口径时，语气像在讨论一个反应稳定的素材库。你突然发现，自己越配合，越容易被说成成熟；而所谓成熟，不过是把自我压缩成可交付的轮廓。",
        effects: { fans: 18000, money: 260, authenticity: -5, alienation: 8 }
      },
      {
        title: "第二天，你比任何人都更懂该如何继续失真",
        text: "你甚至不再需要别人提醒哪些话能说、哪些情绪该删。真正可怕的不是别人替你修改，而是你已经学会在表达开始之前就主动完成删改。效率大幅提高，代价也因此更难被看见。",
        effects: { fans: 26000, authenticity: -6, alienation: 10, tags: ["asset-language"] }
      }
    ]
  },
  "cancel-spiral": {
    title: "取消余震",
    steps: [
      {
        title: "第一天，澄清被重新剪成了证词",
        text: "你发出去的解释没有起到灭火作用，反而被人截成几段更适合传播的素材。互联网并不总在等待真相，它更擅长等待一个可以重复播放的语气破绽。",
        effects: { reputation: -8, scandal: 7, alienation: 6 }
      },
      {
        title: "第二天，旧玩笑和旧合作继续回潮",
        text: "更多人开始从过去的碎片里为今天补充罪证。你意识到所谓‘被取消’不是一瞬间的判决，而是一次会自己寻找补充材料的慢性编目。",
        effects: { fans: -5200, reputation: -9, scandal: 8, flags: ["cancelled"] }
      }
    ]
  },
  "forgotten-drift": {
    title: "被遗忘的惯性",
    steps: [
      {
        title: "第一天，连自己都很难为更新找到理由",
        text: "没有爆炸性的失败，也没有值得夸耀的起色，只有一种慢慢失去被需要感的钝痛。你剪完视频，却在发布前盯着按钮犹豫很久，仿佛连自己都不再确定还有谁在等它出现。",
        effects: { fans: -2200, money: -70, inspiration: -4, network: -2 }
      },
      {
        title: "第二天，你的名字像从常用词里滑了出去",
        text: "后台安静得近乎礼貌，没有辱骂，也没有留恋，只是越来越少的人点进来。被遗忘最残忍的地方不在于它剧烈，而在于它总把退场伪装成一种完全正常的统计结果。",
        effects: { fans: -2600, money: -90, network: -3, reputation: -3, flags: ["endingForgottenPriority"] }
      }
    ]
  },
  "body-market-arc": {
    title: "身体市场化",
    steps: [
      {
        title: "第一天，订阅增长比内容反馈更诚实",
        text: "你发现后台里最积极的不是评论，而是付款提醒。市场并不关心你是否舒服，它只关心边界一旦被重新定价之后，增长曲线会不会更稳定。",
        effects: { money: 320, fans: 5000, authenticity: -5, alienation: 8 }
      },
      {
        title: "第二天，身体成为最可靠的主营业务",
        text: "你开始比过去更精确地计算角度、停顿和若即若离的尺度。真正让人不安的不是赚到钱，而是你已经能熟练地把羞耻感也当作产品优化的一部分。",
        effects: { money: 420, fans: 7000, authenticity: -7, alienation: 10, flags: ["endingOnlyfansPriority"] }
      }
    ]
  },
  "anonymous-fade": {
    title: "匿名退场",
    steps: [
      {
        title: "第一天，你开始悄悄拆掉自己的入口",
        text: "你删掉几个不再必要的简介，关闭了部分私信提醒，把某些合作邮件留在未读。离场并没有想象中壮烈，它更像一件细碎而长期的家务，慢慢把名字从所有会被调用的地方撤下来。",
        effects: { authenticity: 4, alienation: -5, inspiration: 5 }
      },
      {
        title: "第二天，你第一次把安静当成一种去向",
        text: "没有人知道你是不是在筹备大动作，只有你清楚自己只是想让生活重新拥有不被统计的部分。匿名在这一刻不再像失败，反而像一种被拖延太久的主权恢复。",
        effects: { authenticity: 5, alienation: -6, energy: 5, flags: ["endingAnonymousPriority"] }
      }
    ]
  }
};

const branchingEvents = [
  {
    id: "brand-script-branch",
    actionId: "business",
    once: true,
    chance: 0.3,
    when: (state) => state.stats.network >= 18 || hasTag(state, "brand-entry"),
    title: "品牌要求你修改观点",
    text: "合作方发来补充条款，希望你把视频里的社会批评部分删掉，换成更积极的生活方式语气。对方说不是审查，只是“语义优化”。",
    choices: [
      {
        label: "接受修改",
        text: "你删掉最锋利的句子，换来合同继续推进。资本最擅长的不是禁止，而是让你主动变得无害。",
        effects: {
          money: 420,
          reputation: -4,
          authenticity: -7,
          alienation: 8,
          flags: [
            "soldTone"
          ]
        },
        activatesArc: "brand-machine"
      },
      {
        label: "拒绝改稿",
        text: "你把修改意见留在邮箱里，没有回复。代价是钱没到账，但至少句子还保持了原来的棱角。",
        effects: {
          reputation: 6,
          money: -30,
          authenticity: 7,
          network: -2,
          alienation: -2
        }
      }
    ]
  },
  {
    id: "love-public-branch",
    actionId: "relationship",
    once: true,
    chance: 0.34,
    when: (state) => hasFlag(state, "loveInterest") || hasTag(state, "romance-begins"),
    title: "有人建议你公开恋情",
    text: "朋友提醒你，恋爱线最近在平台上很有市场。那位摄影系学生没有反对，只问你是否能承受一段关系被评论区定义。",
    choices: [
      {
        label: "公开关系",
        text: "你们拍下第一条正式同框视频，亲密关系从此拥有了发布时间和封面图。",
        effects: {
          fans: 5200,
          money: 180,
          reputation: -1,
          scandal: 4,
          alienation: 8,
          flags: [
            "realityLoveArc"
          ]
        },
        activatesArc: "public-romance-arc"
      },
      {
        label: "保持私密",
        text: "你决定把这段关系留在线下，让它免于被算法命名。某些东西不被观看，反而更像真实存在。",
        effects: {
          energy: 6,
          inspiration: 7,
          authenticity: 8,
          alienation: -4,
          flags: [
            "loveRoute"
          ]
        },
        activatesArc: "quiet-love-arc"
      }
    ]
  },
  {
    id: "cancel-defense-branch",
    actionId: "random",
    once: true,
    chance: 0.35,
    when: (state) => state.stats.scandal >= 20 || hasTag(state, "old-post"),
    title: "团队建议你先发制人",
    text: "有人建议你录一条澄清视频，抢在更大的舆论浪潮前设定叙事。另一些人说最好直接装死，等互联网转移注意。",
    choices: [
      {
        label: "立即回应",
        text: "你坐在灯前，一口气录了三版道歉与解释。观众看见了你的焦虑，但不一定会把它算作诚意。",
        effects: {
          reputation: 5,
          fans: -1200,
          energy: -9,
          scandal: -4,
          authenticity: 4
        }
      },
      {
        label: "保持沉默",
        text: "你什么都不说，把时间押给公共记忆的短暂。沉默有时确实有效，但它也会把空白留给最坏的解释。",
        effects: {
          reputation: -7,
          energy: -3,
          scandal: 6,
          alienation: 4,
          flags: [
            "silentStorm"
          ]
        }
      }
    ]
  },
  {
    id: "street-footage-branch",
    actionId: "street",
    once: false,
    chance: 0.28,
    when: (state) => state.stats.inspiration >= 40,
    title: "你拍到一段过于私密的街头素材",
    text: "镜头里是一次街头争吵，情绪浓烈、构图完美、极具传播潜力。问题在于，当事人并不知道自己将成为内容。",
    choices: [
      {
        label: "照发不误",
        text: "你把片段剪成高张力叙事，播放量会说明大多数人并不在意授权，只在意刺激。",
        effects: {
          fans: 3600,
          money: 110,
          reputation: -6,
          scandal: 8,
          alienation: 6
        }
      },
      {
        label: "放弃发布",
        text: "你把素材存进硬盘深处，像承认有些画面应该停留在记忆，而不是推荐页。",
        effects: {
          reputation: 5,
          inspiration: 5,
          authenticity: 7,
          fans: -200,
          alienation: -2
        }
      }
    ]
  },
  {
    id: "live-meltdown-branch",
    actionId: "nightlive",
    once: false,
    chance: 0.26,
    when: (state) => state.stats.energy <= 42 || state.stats.alienation >= 26,
    title: "观众催你更失控一点",
    text: "弹幕不断刷屏，让你再喝一点、再说狠一点、再崩一次。你知道这一步跨出去，效果会很好，但未必还能回头。",
    choices: [
      {
        label: "继续加码",
        text: "你顺着观众的欲望往下坠，直播间热度肉眼可见地升高。崩溃一旦有了观赏性，就很难再被叫作求救。",
        effects: {
          fans: 4200,
          money: 260,
          energy: -16,
          scandal: 10,
          alienation: 11,
          tags: [
            "messy-live"
          ]
        }
      },
      {
        label: "强行下播",
        text: "你关掉直播，房间突然安静得像有人离场后的剧院。数据停止了，但你保住了一点残余的自主权。",
        effects: {
          energy: 4,
          reputation: 2,
          authenticity: 5,
          alienation: -3
        }
      }
    ]
  },
  {
    id: "radical-offer-branch",
    actionId: "shadow",
    once: true,
    chance: 0.32,
    when: (state) => hasFlag(state, "radicalSeed") || state.stats.scandal >= 16,
    title: "极端账号邀请你长期合作",
    text: "他们承诺给你资源、社群和一条清晰的敌我叙事，只需要你停止犹豫。复杂会让人疲惫，而极端总能伪装成决心。",
    choices: [
      {
        label: "接受合作",
        text: "你答应了，口号和立场会替你完成很多传播工作，代价是你的怀疑能力开始显得多余。",
        effects: {
          fans: 6800,
          money: 220,
          reputation: -8,
          scandal: 8,
          alienation: 10,
          flags: [
            "radicalSeed"
          ]
        },
        activatesArc: "radical-spiral"
      },
      {
        label: "抽身离开",
        text: "你删掉聊天记录，第一次为自己的犹豫感到庆幸。不是所有摇摆都意味着软弱，有时它只是智识仍在工作。",
        effects: {
          reputation: 4,
          authenticity: 6,
          network: -2,
          alienation: -3
        }
      }
    ]
  },
  {
    id: "rent-fix-branch",
    actionId: "business",
    once: false,
    chance: 0.25,
    when: (state) => state.stats.money < RENT_AMOUNT && getRentCountdown() <= 3,
    title: "房租压力逼近最后期限",
    text: "你只有几天时间，房租像一个越来越响的倒计时。有个朋友介绍来两条路：一条是廉价但体面，一条是高价但明显有问题。",
    choices: [
      {
        label: "接廉价体面单",
        text: "钱不算多，但至少不会让你事后删除简历。你把尊严折了一下，但没折断。",
        effects: {
          money: 260,
          energy: -8,
          authenticity: 2,
          alienation: 1
        }
      },
      {
        label: "接高价灰单",
        text: "你拿到了足够多的钱，也在合同边缘闻到了明显的腐蚀气味。危机被延后，道德被透支。",
        effects: {
          money: 620,
          energy: -12,
          scandal: 9,
          alienation: 9,
          flags: [
            "crimeSeed"
          ]
        },
        activatesArc: "grey-debt"
      }
    ]
  },
  {
    id: "podcast-leak-branch",
    actionId: "collab",
    once: false,
    chance: 0.24,
    when: (state) => hasAnyTag(state, ["podcast-guest", "roundtable-live", "documentary-friend"]),
    title: "对方想剪出你最尖锐的一句话做预告",
    text: "合作方发来预告版，把你最激进的一句判断单独切出来，效果极好，也极易引战。对方说这是宣传，不是断章取义。你知道一旦同意，后续讨论将很难再回到完整上下文。",
    choices: [
      {
        label: "允许使用",
        text: "你同意了，因为你也知道争议在当下几乎等于触达。预告上线后热度迅速升高，而复杂性则被留在正片里等待少数人补课。",
        effects: {
          fans: 3200,
          reputation: -3,
          scandal: 6,
          alienation: 5
        }
      },
      {
        label: "要求撤下",
        text: "你要求对方换一版预告，宁可少一点热度，也不想把自己完全缩成一句适合吵架的口号。对方有些不满，但还是照做了。",
        effects: {
          reputation: 5,
          network: -1,
          authenticity: 6,
          fans: -150
        }
      }
    ]
  },
  {
    id: "thesis-branch",
    actionId: "trend",
    once: true,
    chance: 0.22,
    when: (state) => state.day >= 12,
    title: "导师要你决定毕业论文方向",
    text: "导师提醒你毕业论文不能永远拖延下去。你可以写一篇稳妥但无害的行业分析，也可以把自己作为样本，直接剖开这场平台化生存对人格的改造。",
    choices: [
      {
        label: "写稳妥分析",
        text: "你选择安全、规范、可通过的方向。论文会更容易完成，但它几乎无法容纳你真正正在经历的裂缝。",
        effects: {
          reputation: 2,
          energy: -4,
          inspiration: -2,
          alienation: 3
        }
      },
      {
        label: "拿自己开刀",
        text: "你决定把自己写进去，把那些不体面的动机、技巧和疲惫都作为研究材料。过程痛苦，却像终于停止了无休止的粉饰。",
        effects: {
          inspiration: 12,
          authenticity: 9,
          energy: -7,
          reputation: 3,
          flags: [
            "selfStudy"
          ]
        }
      }
    ]
  },
  {
    id: "fan-meet-branch",
    actionId: "publish",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.fans >= 18000,
    title: "粉丝想在街头和你合影",
    text: "一个看起来很年轻的粉丝在街上认出你，眼神里带着明显的激动和一点被平台训练出来的熟悉。你知道这只是瞬间小事，可每一次线下相遇都在提醒你，账号并不只活在屏幕里。",
    choices: [
      {
        label: "热情互动",
        text: "你停下来认真聊天、合影，还问了对方为什么会看你。短短几分钟让你短暂地相信内容真的在某种层面上连接了人。",
        effects: {
          reputation: 6,
          fans: 900,
          energy: -3,
          authenticity: 4
        }
      },
      {
        label: "匆忙离开",
        text: "你礼貌但快速地结束了互动，因为那天你实在太累。走远之后你隐约觉得抱歉，却也第一次承认自己没有义务永远可被接近。",
        effects: {
          energy: 4,
          reputation: -2,
          alienation: 1,
          authenticity: 1
        }
      }
    ]
  },
  {
    id: "archive-branch",
    actionId: "rest",
    once: false,
    chance: 0.22,
    when: (state) => state.stats.scandal >= 14 || state.stats.alienation >= 22,
    title: "你翻出很多旧内容，开始怀疑该不该清理",
    text: "休息时你翻到几个月前甚至几年前的草稿和已发布内容，其中有些如今看来显得稚嫩、轻率，甚至危险。删除像一种修正，保留又像对过去负责。问题是互联网从不真给人后悔的干净空间。",
    choices: [
      {
        label: "集中清理旧作",
        text: "你删掉了许多边界模糊的内容，像替过去的自己做一次迟到的急救。损失了一点连贯性，却也减少了未来的雷区。",
        effects: {
          fans: -500,
          scandal: -7,
          authenticity: 4,
          energy: -2
        }
      },
      {
        label: "全部保留",
        text: "你决定保留这些痕迹，哪怕它们并不体面。人不该被修成一个无懈可击的版本，只是这个决定以后也可能让你付出更贵的学费。",
        effects: {
          authenticity: 6,
          scandal: 4,
          reputation: -1,
          alienation: -1
        }
      }
    ]
  },
  {
    id: "shadow-leak-branch",
    actionId: "shadow",
    once: false,
    chance: 0.23,
    when: (state) => hasAnyTag(state, ["leak-market", "extortion-whisper", "proxy-deal"]),
    title: "有人希望你做匿名爆料的中转站",
    text: "对方说你不需要亲自出手，只要借一个账号、一个群组或一次转发，就能拿到不小的分成。灰色地带最常见的诱惑，不是直接把你拖下去，而是让你相信自己只是负责递一下绳子。",
    choices: [
      {
        label: "答应中转",
        text: "你告诉自己这不算亲自动手，可每一次转发都是实际结构的一部分。钱来得比良心反应更快。",
        effects: {
          money: 460,
          scandal: 12,
          alienation: 10,
          network: 5,
          flags: [
            "crimeSeed"
          ]
        }
      },
      {
        label: "彻底拒绝",
        text: "你把人拉黑，顺手清掉几条危险记录。拒绝并不能让过去的靠近完全消失，但至少让你没有继续往里走。",
        effects: {
          authenticity: 7,
          network: -2,
          energy: 2,
          alienation: -3
        }
      }
    ]
  },
  {
    id: "publish-delete-branch",
    actionId: "publish",
    once: false,
    chance: 0.24,
    when: (state) => state.stats.scandal >= 10 || state.stats.reputation <= 48,
    title: "新视频刚发出去，你就开始怀疑该不该删",
    text: "评论区风向并不明确，有人说真诚，有人说矫饰。你知道如果现在删掉，可以保住一点名声；如果留下，也许会换来更长尾的讨论。",
    choices: [
      {
        label: "立刻删除",
        text: "你删掉视频，像把一句刚说出口的话硬生生吞回去。安全了一点，也失去了后续可能。",
        effects: {
          fans: -300,
          reputation: 3,
          energy: -2,
          authenticity: -2
        }
      },
      {
        label: "硬着头皮保留",
        text: "你决定不删，让讨论自己发酵。保留并不一定高尚，只是你今天不想再帮所有误解提前收尾。",
        effects: {
          fans: 900,
          reputation: -2,
          scandal: 3,
          authenticity: 3
        }
      }
    ]
  },
  {
    id: "publish-boost-branch",
    actionId: "publish",
    once: false,
    chance: 0.21,
    when: (state) => state.stats.money >= 120 || state.stats.fans >= 8000,
    title: "有人建议你给这条视频买一点推流",
    text: "对方说只要补一小笔预算，平台就更愿意把内容送进更大的池子。你知道这不是完全作弊，却也不是完全无辜。",
    choices: [
      {
        label: "花钱推一把",
        text: "你买了额外曝光，曲线很快好看起来。你并不完全开心，只是更懂得漂亮数据背后有多少人工扶梯。",
        effects: {
          fans: 2200,
          money: -160,
          alienation: 5
        }
      },
      {
        label: "坚持自然流",
        text: "你放弃额外推流，告诉自己至少这次让内容自己走路。慢一点，但你仍保住了一点判断。",
        effects: {
          reputation: 2,
          authenticity: 4,
          money: 0
        }
      }
    ]
  },
  {
    id: "publish-series-branch",
    actionId: "publish",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.inspiration >= 40,
    title: "观众希望你把这个主题做成系列",
    text: "一条内容刚有回响，私信里就有人催更、催连载、催你把偶然的火花做成稳定产品。你知道系列化意味着成长，也意味着更难退出。",
    choices: [
      {
        label: "立刻系列化",
        text: "你决定趁热开系列，把原本一次性的灵感变成可持续栏目。效率上去了，压力也跟着绑定。",
        effects: {
          fans: 2600,
          inspiration: -5,
          alienation: 4
        }
      },
      {
        label: "只保留一次",
        text: "你让它停在这一条，不把每次共鸣都变成流水线。观众会失望一点，你自己会轻一点。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -150
        }
      }
    ]
  },
  {
    id: "publish-ghostwriter-branch",
    actionId: "publish",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.energy <= 60 || state.stats.fans >= 15000,
    title: "有人提议替你写稿",
    text: "对方说只要给几个关键词，就能写出像你一样的句子。真正令人不安的不是这件事多冒犯，而是你清楚它未必写得比你差。",
    choices: [
      {
        label: "试一次代写",
        text: "你把语气外包了一部分，效率高得让人心虚。稿子确实顺，只是顺得像一条没有摩擦力的路。",
        effects: {
          money: 40,
          energy: 6,
          authenticity: -6,
          alienation: 6
        }
      },
      {
        label: "拒绝代写",
        text: "你还是自己写，哪怕更慢、更乱、更容易卡住。至少卡住的时候，你知道那是自己的卡住。",
        effects: {
          energy: -3,
          authenticity: 5,
          inspiration: 4
        }
      }
    ]
  },
  {
    id: "publish-comment-war-branch",
    actionId: "publish",
    once: false,
    chance: 0.22,
    when: (state) => state.stats.fans >= 6000,
    title: "评论区吵起来了，你要不要亲自下场",
    text: "两拨人已经把你的评论区打成临时战场，而你的名字被挂在争论最上面。你知道自己的回复会带来秩序，也会带来更大风暴。",
    choices: [
      {
        label: "亲自回击",
        text: "你一条条回过去，像在把自己的立场钉在评论区。场面热了，局面也更难收拾。",
        effects: {
          fans: 1800,
          reputation: -3,
          scandal: 5,
          alienation: 3
        }
      },
      {
        label: "交给他们吵",
        text: "你什么都不说，让评论区自己消耗自己。你省下了一点精力，也失去了一点主动权。",
        effects: {
          energy: 3,
          reputation: -1,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "street-help-branch",
    actionId: "street",
    once: false,
    chance: 0.23,
    when: (state) => state.stats.energy >= 20,
    title: "你拍摄时遇到有人当街求助",
    text: "对方并不认识你，只是看上去真的需要一点帮忙。镜头还开着，素材也难得，你必须决定先当创作者还是先当路人。",
    choices: [
      {
        label: "先收起镜头帮忙",
        text: "你把相机放下，帮对方处理完再离开。失去了一段内容，也捡回一点没被工作占满的自己。",
        effects: {
          reputation: 5,
          fans: -100,
          authenticity: 6,
          energy: -2
        }
      },
      {
        label: "继续拍再说",
        text: "你没有完全停下，只是在不太舒服的状态里把场面拍完。素材更完整了，心里却留下了一点硬结。",
        effects: {
          fans: 1500,
          reputation: -4,
          scandal: 4,
          alienation: 5
        }
      }
    ]
  },
  {
    id: "street-police-branch",
    actionId: "street",
    once: false,
    chance: 0.19,
    when: (state) => state.stats.scandal >= 6 || state.stats.fans >= 10000,
    title: "保安或警方要求你停止拍摄",
    text: "对方并不粗暴，只是很明确地告诉你这里不适合继续举着镜头。你可以解释、周旋，也可以立刻撤离。",
    choices: [
      {
        label: "坚持交涉",
        text: "你试图说明自己只是记录者，语气也尽量平稳。过程拖长了，却也让场面更接近一次微型对峙。",
        effects: {
          reputation: 3,
          energy: -5,
          scandal: 3,
          authenticity: 2
        }
      },
      {
        label: "马上离开",
        text: "你把设备收好，转身就走。没有素材，没有争执，也没有多余风险。",
        effects: {
          energy: 2,
          fans: -120,
          authenticity: 1
        }
      }
    ]
  },
  {
    id: "street-party-branch",
    actionId: "street",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.network >= 12,
    title: "有人邀请你去一个只限朋友进入的后场",
    text: "那地方看上去能拍到很多别人进不去的内容，也可能沾上一些你并不想解释的东西。门就在眼前，界限也就在眼前。",
    choices: [
      {
        label: "进去看看",
        text: "你跟了进去，知道自己是在主动靠近一种更难洗净的素材来源。",
        effects: {
          fans: 1700,
          network: 4,
          scandal: 5,
          alienation: 4
        }
      },
      {
        label: "礼貌拒绝",
        text: "你停在门外，宁可错过所谓独家，也不想为几分钟内容预支后面几天的焦虑。",
        effects: {
          reputation: 2,
          authenticity: 4,
          energy: 1
        }
      }
    ]
  },
  {
    id: "street-activist-branch",
    actionId: "street",
    once: false,
    chance: 0.18,
    when: (state) => hasTag(state, "protest-seen") || state.stats.authenticity >= 26,
    title: "一群组织者问你愿不愿意真正参与，而不只是记录",
    text: "他们看过你拍的东西，说如果你真在意这些议题，就别总站在镜头后面。这个邀请不激烈，却比任何口号都更难推开。",
    choices: [
      {
        label: "参与进去",
        text: "你答应帮忙，第一次让镜头后面的时间真正流向行动。你少了一点旁观者的安全感，也多了一点归属。",
        effects: {
          network: 6,
          authenticity: 7,
          energy: -5,
          fans: 200
        }
      },
      {
        label: "继续做记录者",
        text: "你还是选择记录，因为你知道自己未必准备好真正进入。诚实不一定光彩，但至少比表态更可靠。",
        effects: {
          reputation: 2,
          inspiration: 4,
          authenticity: 2
        }
      }
    ]
  },
  {
    id: "street-luxury-branch",
    actionId: "street",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.fans >= 7000 || state.stats.network >= 18,
    title: "奢侈品牌快闪的人问你要不要顺便拍一条合作短片",
    text: "对方看中你的镜头感和城市气质，现场就能给钱，条件是把今天的街头素材向更精致的方向带。你知道这很方便，也很会改写一天原本的气味。",
    choices: [
      {
        label: "接下现场合作",
        text: "你顺势接了，效率高得几乎不像机会，更像一个已经等你很久的岔路。",
        effects: {
          money: 240,
          fans: 600,
          authenticity: -3,
          alienation: 4
        }
      },
      {
        label: "保持原计划",
        text: "你谢绝了，继续拍原本想拍的街道和人。结果没那么亮，但你心里安静很多。",
        effects: {
          inspiration: 5,
          authenticity: 5,
          money: 0
        }
      }
    ]
  },
  {
    id: "collab-revenue-branch",
    actionId: "collab",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.money <= 700 || state.stats.network >= 10,
    title: "合作结束后，对方提出重新分成",
    text: "最初谈好的比例突然被对方团队说成“只是初步理解”。你可以据理力争，也可以忍下这次不快换未来可能。",
    choices: [
      {
        label: "当场争分成",
        text: "你把话说得很清楚，气氛也跟着冷下来。钱未必全拿到，但至少对方知道你不会永远配合。",
        effects: {
          money: 120,
          reputation: 2,
          network: -2,
          authenticity: 3
        }
      },
      {
        label: "先忍下来",
        text: "你决定先吞掉这次不平衡，把它当行业学费。表面体面，心里却多了一点账。",
        effects: {
          money: -60,
          network: 2,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "collab-callout-branch",
    actionId: "collab",
    once: false,
    chance: 0.19,
    when: (state) => state.stats.scandal >= 10 || state.stats.reputation <= 50,
    title: "你发现合作对象过去有一段不太干净的记录",
    text: "这件事还没上热搜，但并不难被翻出来。你可以装作没看见，也可以在合作前直接问清楚。",
    choices: [
      {
        label: "直接追问",
        text: "你把问题抛了出去，空气立刻变得紧。场面不好看，却省得以后装作意外。",
        effects: {
          reputation: 4,
          network: -2,
          authenticity: 4
        }
      },
      {
        label: "假装不知道",
        text: "你选择不问，因为你也清楚流量行业里干净的人不多。问题被暂时藏住，代价被暂时留给未来。",
        effects: {
          fans: 900,
          scandal: 3,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "collab-mentor-branch",
    actionId: "collab",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.fans >= 12000,
    title: "一个更小的创作者想请你带他一条",
    text: "他看你的时候，像你曾经看那些先走一步的人。帮助他会消耗时间，拒绝他也会留下点什么。",
    choices: [
      {
        label: "认真带他一把",
        text: "你花时间讲方法、看脚本、帮他避坑。短期没有立刻回报，但那种向下传递的感觉意外地让你松了一口气。",
        effects: {
          network: 5,
          reputation: 5,
          energy: -4,
          authenticity: 4
        }
      },
      {
        label: "委婉推开",
        text: "你说自己最近太忙，其实也确实忙。只是挂断以后你清楚地感到，忙碌经常被用来合理化很多冷漠。",
        effects: {
          energy: 2,
          reputation: -1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "collab-rumor-branch",
    actionId: "collab",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.fans >= 9000,
    title: "一次联动被传成了绯闻或结盟信号",
    text: "你们只是合作，外界却迅速替你们写出另一层戏码。互联网一向不喜欢没有附加剧情的并肩出现。",
    choices: [
      {
        label: "顺势模糊处理",
        text: "你不否认也不承认，让讨论自己扩大。热度很懂这种暧昧的效率。",
        effects: {
          fans: 1900,
          reputation: -2,
          scandal: 3,
          alienation: 4
        }
      },
      {
        label: "尽快澄清",
        text: "你把边界说清，主动切断额外想象。传播少了一截，麻烦也少了一截。",
        effects: {
          reputation: 3,
          authenticity: 3,
          fans: -100
        }
      }
    ]
  },
  {
    id: "collab-collective-branch",
    actionId: "collab",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.network >= 16,
    title: "有人提议你加入一个创作者小团体",
    text: "他们有共享资源、互推规则和内部机会，也有自己默认的语气与政治。加入意味着支持，也意味着某种集体标签。",
    choices: [
      {
        label: "加入团队",
        text: "你决定进去看看，因为单打独斗确实太累。团队给你靠背，也开始决定你被怎样看见。",
        effects: {
          network: 7,
          fans: 800,
          alienation: 3
        }
      },
      {
        label: "保持独立",
        text: "你谢绝了，知道独立不一定更自由，但至少眼下还能替自己完整负责。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          network: -1
        }
      }
    ]
  },
  {
    id: "business-equity-branch",
    actionId: "business",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.network >= 18,
    title: "有人不想给现金，想给你所谓股权",
    text: "他们把未来描绘得很亮，说眼下少拿一点没关系，等项目做大你会得到真正的位置。你知道这类话从来不只关于未来，也关于现在谁更弱。",
    choices: [
      {
        label: "接受股权说法",
        text: "你赌了一把未来，希望眼前的让步会换来更大回报。赌局本身就已经说明了位置差。",
        effects: {
          money: -50,
          network: 6,
          alienation: 3
        }
      },
      {
        label: "只谈现金",
        text: "你把话讲得很明白，宁可少点幻想，也不想再替别人的野心垫资。",
        effects: {
          money: 120,
          reputation: 2,
          authenticity: 3
        }
      }
    ]
  },
  {
    id: "business-nda-branch",
    actionId: "business",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.fans >= 10000 || state.stats.money < 500,
    title: "合作方要求你签一份非常严的保密协议",
    text: "条款写得像在预设未来可能出现的所有尴尬。你当然可以签，可签完之后有些事情就连抱怨都需要衡量。",
    choices: [
      {
        label: "签字",
        text: "你签了，因为眼前机会确实不小。只是笔落下的那一刻，你也知道以后要把更多不适吞回肚子。",
        effects: {
          money: 260,
          network: 4,
          alienation: 4
        }
      },
      {
        label: "拒签离开",
        text: "你把文件推回去，带着一点穷和一点松弛离开会议室。",
        effects: {
          reputation: 3,
          authenticity: 5,
          money: -20
        }
      }
    ]
  },
  {
    id: "business-charity-face-branch",
    actionId: "business",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.reputation >= 40,
    title: "品牌想借你的人设做一场善意活动",
    text: "活动标题写得温柔而正确，执行细节却明显更像营销。你可以借这个机会抬名声，也可以怀疑自己是否在替空心善意站台。",
    choices: [
      {
        label: "接下站台",
        text: "你站到了台上，知道今天的善意里有多少是真、多少是包装，但还是把笑撑到了结束。",
        effects: {
          money: 220,
          reputation: 3,
          authenticity: -3,
          alienation: 4
        }
      },
      {
        label: "礼貌拒绝",
        text: "你不想做这层薄薄的糖衣，哪怕错过一笔不坏的收益。",
        effects: {
          reputation: 2,
          authenticity: 4,
          money: -30
        }
      }
    ]
  },
  {
    id: "business-agent-branch",
    actionId: "business",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.fans >= 15000,
    title: "独立经纪人想长期代理你",
    text: "对方说自己能替你挡掉无效合作、抬高报价，也能在你不想出面的地方替你说话。你一边心动，一边知道交出谈判权也是交出叙事权的一部分。",
    choices: [
      {
        label: "交给经纪人",
        text: "你决定试试，把一部分复杂交给专业的人处理。事情会更顺，距离也会更远。",
        effects: {
          money: 180,
          network: 6,
          alienation: 4
        }
      },
      {
        label: "继续自己谈",
        text: "你宁可累一点，也想知道每一次妥协具体发生在哪里。",
        effects: {
          energy: -3,
          authenticity: 3,
          money: 40
        }
      }
    ]
  },
  {
    id: "business-astroturf-branch",
    actionId: "business",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.scandal >= 8 || state.stats.money <= 600,
    title: "有人提议你参与一场伪装成自来水的宣传",
    text: "他们说不需要你明着带货，只要做几个“像普通分享”的内容节点。你知道这种模糊正是问题所在。",
    choices: [
      {
        label: "接这单",
        text: "你把广告藏进日常语气里，效果确实自然。自然到连你自己都要多看两遍才确认它究竟是分享还是安排。",
        effects: {
          money: 340,
          reputation: -4,
          scandal: 5,
          alienation: 6
        }
      },
      {
        label: "拒绝这种做法",
        text: "你决定不碰，因为你知道越是难被看出的东西，越容易把人带到不好解释的地方。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "random-rumor-branch",
    actionId: "random",
    once: false,
    chance: 0.21,
    when: (state) => state.stats.fans >= 8000,
    title: "一条和你有关的传闻正在发酵",
    text: "真假并不重要，重要的是它已经开始扩散。你可以抢先给定义，也可以继续观望风向。",
    choices: [
      {
        label: "抢先定调",
        text: "你主动讲一个版本，把主动权拿回来一点。讲述本身也会制造新的裂缝。",
        effects: {
          reputation: 3,
          fans: 400,
          energy: -5,
          scandal: 2
        }
      },
      {
        label: "继续观察",
        text: "你先不说，想看看这股风会吹到哪。沉默省事，却也可能把解释权全部让出去。",
        effects: {
          energy: 1,
          reputation: -3,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "random-journalist-branch",
    actionId: "random",
    once: false,
    chance: 0.19,
    when: (state) => hasAnyTag(state, ["journalist-mail", "class-example"]),
    title: "记者又来追问更私人的部分",
    text: "这次对方不满足于行业话题，想把你的家庭、恋爱和心理状态都写进去。深度和越界经常只差一个编辑角度。",
    choices: [
      {
        label: "接受深聊",
        text: "你往里再走了一步，希望换来更完整的呈现。完整并不一定意味着安全。",
        effects: {
          fans: 1200,
          reputation: 4,
          energy: -7,
          scandal: 2
        }
      },
      {
        label: "明确设限",
        text: "你告诉对方哪些部分不谈，哪怕因此让报道少点戏剧性。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -50
        }
      }
    ]
  },
  {
    id: "random-security-branch",
    actionId: "random",
    once: false,
    chance: 0.18,
    when: (state) => hasAnyTag(state, ["login-alert", "unsigned-mail"]),
    title: "你开始怀疑账号安全已经不只是技术问题",
    text: "它牵扯到草稿、私信、合作、关系，甚至牵扯到你还没来得及决定要不要说出口的东西。你要花钱升级防护，还是先赌它不会真的出事？",
    choices: [
      {
        label: "花钱做安全",
        text: "你付了这笔并不便宜的钱，买到一些真正的安心，也买到一个时代特有的常识: 任何公开身份都需要维护费。",
        effects: {
          money: -180,
          energy: 2,
          scandal: -2,
          alienation: -1
        }
      },
      {
        label: "先观望",
        text: "你决定暂时不动，因为还有更紧的花销。省下来的不是风险，只是成本。",
        effects: {
          money: 0,
          energy: -2,
          scandal: 3,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "random-viral-branch",
    actionId: "random",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.fans >= 12000,
    title: "一个营销号想以夸张标题搬运你",
    text: "他们承诺会给你带来更多人，但标题和切片一定会比原内容更刺激。你清楚这会带来热度，也会带来更扭曲的第一印象。",
    choices: [
      {
        label: "默认他们搬",
        text: "你没有阻止，因为你也知道阻止未必有效。结果来得很快，误读也来得很快。",
        effects: {
          fans: 2600,
          reputation: -3,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "主动要求下架",
        text: "你去沟通下架，像在替内容争取一次不被撕碎的机会。",
        effects: {
          reputation: 3,
          authenticity: 3,
          fans: -100
        }
      }
    ]
  },
  {
    id: "random-gift-branch",
    actionId: "random",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.money < 700 || state.stats.fans >= 10000,
    title: "一个陌生支持者想给你寄很贵的礼物",
    text: "他语气热情却不越界，至少表面如此。你要接受这份支持，还是把距离留在刚刚好的地方？",
    choices: [
      {
        label: "收下礼物",
        text: "你说服自己这只是粉丝文化的一部分，可礼物一旦太贵，就很难完全没有重量。",
        effects: {
          money: 90,
          fans: 300,
          alienation: 3
        }
      },
      {
        label: "礼貌拒绝",
        text: "你感谢对方，却不想让关系往更难定义的方向滑。",
        effects: {
          reputation: 3,
          authenticity: 2,
          fans: -50
        }
      }
    ]
  },
  {
    id: "rest-therapy-branch",
    actionId: "rest",
    once: false,
    chance: 0.19,
    when: (state) => state.stats.energy <= 65 || state.stats.alienation >= 18,
    title: "你认真考虑要不要预约咨询",
    text: "这不是一个戏剧化的崩溃时刻，而是很普通的一天里，你忽然觉得自己也许需要一个不以转化率衡量话语的人。",
    choices: [
      {
        label: "预约咨询",
        text: "你定下时间，知道这不会立刻解决问题，却可能让问题终于有地方落地。",
        effects: {
          money: -140,
          energy: 6,
          authenticity: 5,
          alienation: -2
        }
      },
      {
        label: "再撑一撑",
        text: "你决定先不去，告诉自己也许下周会好一点。人常常就是用这种话把真正的求助往后挪。",
        effects: {
          money: 0,
          energy: -2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "rest-app-delete-branch",
    actionId: "rest",
    once: false,
    chance: 0.21,
    when: (state) => state.stats.alienation >= 14,
    title: "你想把几个最耗神的应用删掉一天",
    text: "删掉意味着清静，也意味着错过数据、合作消息和任何可能发生的小转机。你不知道自己真正想摆脱的是应用，还是被应用训练出来的那部分反应。",
    choices: [
      {
        label: "删掉一天",
        text: "你真的删了，前几个小时像戒断，后面几小时才终于像休息。",
        effects: {
          energy: 8,
          authenticity: 4,
          alienation: -4,
          fans: -100
        }
      },
      {
        label: "保留入口",
        text: "你没删，因为你不敢完全离线。谨慎保住了效率，也保住了持续紧绷。",
        effects: {
          energy: -1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "rest-loan-branch",
    actionId: "rest",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.money < RENT_AMOUNT,
    title: "休息时你开始盘算要不要向朋友借钱",
    text: "这是一个非常现实的问题，也因此格外伤自尊。借钱能缓解当下，却会改变关系里某些不太可逆的东西。",
    choices: [
      {
        label: "开口借钱",
        text: "你把消息发了出去，手指离开发送键时有一种极轻微的颤。关系开始承担现金流的重量。",
        effects: {
          money: 300,
          reputation: -1,
          authenticity: 2,
          alienation: 1
        }
      },
      {
        label: "还是不借",
        text: "你没有开口，决定把窘迫留给自己处理。硬气一点，也更孤立一点。",
        effects: {
          authenticity: 3,
          energy: -2,
          money: 0
        }
      }
    ]
  },
  {
    id: "rest-gallery-branch",
    actionId: "rest",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.inspiration >= 25,
    title: "你路过一个免费展览，想进去却又怕浪费时间",
    text: "门票不要钱，真正昂贵的是你能否允许自己花一个下午在没有明确产出的地方。",
    choices: [
      {
        label: "进去看完",
        text: "你把下午交给那些不急着解释自己的作品。出来的时候并没有解决任何现实问题，却像重新长回一点感受力。",
        effects: {
          inspiration: 10,
          authenticity: 4,
          energy: 2
        }
      },
      {
        label: "继续赶路",
        text: "你转身离开，因为待办事项确实很多。只是有些门一旦不进，晚上会继续在脑子里开着。",
        effects: {
          money: 0,
          inspiration: -1,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "rest-mentor-branch",
    actionId: "rest",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.network >= 14,
    title: "一位前辈愿意抽空和你聊聊",
    text: "他不一定能给你答案，但也许能帮你少走一些看上去很像必经之路的弯路。问题是，接受建议常常意味着先承认自己正在乱。",
    choices: [
      {
        label: "认真去聊",
        text: "你去了，带着问题，也带着一点不好意思。离开时没有得到公式，却得到一种更少自欺的清醒。",
        effects: {
          network: 4,
          inspiration: 6,
          authenticity: 3
        }
      },
      {
        label: "暂时回绝",
        text: "你说最近太忙，实际上更像是不想让别人过早看清自己的混乱。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-donation-branch",
    actionId: "nightlive",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.fans >= 7000,
    title: "观众想给你冲一个夸张的打赏目标",
    text: "他们把它说成一场一起玩的仪式，只要你愿意多留一会儿、多讲一点、多冒一点险。你知道直播时长和失控程度在这里经常是绑定销售的。",
    choices: [
      {
        label: "顺着目标播下去",
        text: "你继续留在镜头前，热度和金额一起往上长。人也跟着慢慢发空。",
        effects: {
          money: 260,
          fans: 1400,
          energy: -12,
          alienation: 5
        }
      },
      {
        label: "适时收住",
        text: "你停在还算清醒的位置，没有把自己再往里推一步。收入少一点，睡眠也许多一点。",
        effects: {
          money: 60,
          energy: 2,
          authenticity: 2
        }
      }
    ]
  },
  {
    id: "nightlive-mod-branch",
    actionId: "nightlive",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.fans >= 5000 || state.stats.scandal >= 8,
    title: "直播间管理员问你要不要封掉一批人",
    text: "那些人确实刻薄，但也确实抬高了互动。你得决定要一个更安静的房间，还是更热闹的战场。",
    choices: [
      {
        label: "大面积封禁",
        text: "房间干净了很多，节奏也稳了下来。代价是少了一点刺激和围观。",
        effects: {
          reputation: 3,
          fans: -150,
          energy: 2,
          authenticity: 1
        }
      },
      {
        label: "留着他们",
        text: "你让管理员别动，因为你知道敌意本身也是内容的一部分。",
        effects: {
          fans: 1000,
          scandal: 3,
          alienation: 4
        }
      }
    ]
  },
  {
    id: "nightlive-sleep-branch",
    actionId: "nightlive",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.energy <= 50,
    title: "有人起哄让你直接开着镜头睡觉",
    text: "这是当下最廉价也最高效的亲密幻觉之一。只要你答应，观众就能把你的疲惫继续消费到天亮。",
    choices: [
      {
        label: "真的这么做",
        text: "你把边界往后推了一大截，房间里的安静都被转换成了在线时长。",
        effects: {
          fans: 2200,
          money: 180,
          energy: -14,
          alienation: 7
        }
      },
      {
        label: "笑着拒绝",
        text: "你把这当成玩笑带过去，保住了一点可关闭的私人空间。",
        effects: {
          energy: 2,
          authenticity: 3,
          fans: -80
        }
      }
    ]
  },
  {
    id: "nightlive-callin-branch",
    actionId: "nightlive",
    once: false,
    chance: 0.19,
    when: (state) => state.stats.reputation >= 35,
    title: "一个观众想连麦讲他的人生烂摊子",
    text: "你知道一旦接进来，直播就不再完全由你控制。可也正因此，它可能变得更真，或者更糟。",
    choices: [
      {
        label: "接通连麦",
        text: "你让对方进来，房间一度像被真实生活撞了一下。观众黏住了，你也多背了一点重量。",
        effects: {
          fans: 1500,
          reputation: 4,
          energy: -10,
          authenticity: 4
        }
      },
      {
        label: "婉拒连麦",
        text: "你没接，因为你知道自己不是所有问题的容器。",
        effects: {
          energy: 2,
          reputation: 1,
          authenticity: 2
        }
      }
    ]
  },
  {
    id: "nightlive-clipfarm-branch",
    actionId: "nightlive",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.fans >= 10000,
    title: "有人想专门帮你切深夜直播片段",
    text: "他很懂节奏，也很懂哪些失神和沉默最值钱。你知道这会提高传播效率，也会让你的夜晚被切得更零碎。",
    choices: [
      {
        label: "允许切片",
        text: "你答应了，让直播余波继续在别的平台替你工作。",
        effects: {
          fans: 2400,
          money: 120,
          alienation: 5
        }
      },
      {
        label: "不授权切片",
        text: "你宁可让夜晚只停留在夜晚，不想让所有失态都获得二次寿命。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -100
        }
      }
    ]
  },
  {
    id: "trend-tool-branch",
    actionId: "trend",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.money >= 100 || state.stats.fans >= 9000,
    title: "有人向你推销一套热点分析工具",
    text: "它会告诉你什么时候发、怎么发、什么词该留、什么词该删。你知道这种工具能帮你，也会更快地把你推向同一种语气。",
    choices: [
      {
        label: "买下工具",
        text: "你把判断的一部分交给了数据面板，效率立刻提升。自主感却少了一点。",
        effects: {
          money: -120,
          fans: 1200,
          alienation: 5
        }
      },
      {
        label: "不用它",
        text: "你还是决定保留一些笨拙，哪怕意味着慢一点。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          money: 0
        }
      }
    ]
  },
  {
    id: "trend-copy-branch",
    actionId: "trend",
    once: false,
    chance: 0.2,
    when: (state) => state.stats.inspiration <= 65,
    title: "你发现一个很想直接借来的结构",
    text: "它并不算抄袭，只是过于好用。好用到你几乎能听见自己的底线正在用很合理的语气往后退。",
    choices: [
      {
        label: "直接借结构",
        text: "你照着做了，心里说服自己这叫行业共识。确实有效，也确实少了点属于你自己的摩擦。",
        effects: {
          fans: 1800,
          inspiration: -4,
          authenticity: -4,
          alienation: 4
        }
      },
      {
        label: "重写成自己的版本",
        text: "你多花时间把它重新拆开再组，结果没那么炸，却更像你。",
        effects: {
          inspiration: 5,
          authenticity: 4,
          fans: 300
        }
      }
    ]
  },
  {
    id: "trend-ai-branch",
    actionId: "trend",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.energy <= 60,
    title: "朋友建议你让 AI 帮你先出十个脚本",
    text: "你并不反感工具，真正的问题是，一旦开始依赖，写作会不会也像剪辑一样逐渐变成筛选。",
    choices: [
      {
        label: "让 AI 先写",
        text: "你拿到一堆还算像样的草稿，效率高得让人很难完全拒绝。",
        effects: {
          energy: 5,
          inspiration: -3,
          authenticity: -4,
          alienation: 4
        }
      },
      {
        label: "自己从空白开始",
        text: "你宁可继续卡住，也想保留和空白硬碰硬的那部分权利。",
        effects: {
          inspiration: 4,
          authenticity: 4,
          energy: -2
        }
      }
    ]
  },
  {
    id: "trend-pivot-branch",
    actionId: "trend",
    once: false,
    chance: 0.18,
    when: (state) => state.stats.fans >= 6000,
    title: "你开始认真考虑要不要彻底转向一个更赚钱的垂类",
    text: "它并不一定更适合你，只是市场清晰、受众稳定、品牌也更懂怎么投。你得决定未来是更准，还是更像自己。",
    choices: [
      {
        label: "转向赚钱垂类",
        text: "你开始往那个方向修正自己，效率和确定性都提高了。",
        effects: {
          fans: 1600,
          money: 140,
          authenticity: -5,
          alienation: 5
        }
      },
      {
        label: "保持现在的混杂",
        text: "你继续维持不那么好归类的样子，知道这会更慢，但也许更真。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          money: 0
        }
      }
    ]
  },
  {
    id: "trend-culture-branch",
    actionId: "trend",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.reputation >= 30,
    title: "一个热点建立在别人真实创伤上",
    text: "所有人都在借题发挥，而你也清楚自己只要切进去就会得到不少流量。问题是，有些问题一旦太好用，就更该被怀疑。",
    choices: [
      {
        label: "还是跟进",
        text: "你告诉自己至少会处理得更克制，可本质上仍旧是在借伤口发声。",
        effects: {
          fans: 2000,
          reputation: -4,
          alienation: 4,
          scandal: 3
        }
      },
      {
        label: "选择不碰",
        text: "你放过这个热点，哪怕意味着错过一轮大流量。",
        effects: {
          reputation: 3,
          authenticity: 5,
          fans: -80
        }
      }
    ]
  },
  {
    id: "relationship-movein-branch",
    actionId: "relationship",
    once: false,
    chance: 0.17,
    when: (state) => hasFlag(state, "loveInterest") || hasFlag(state, "loveRoute"),
    title: "有人半认真地提议要不要干脆搬到一起",
    text: "这个提议听起来像解决房租、孤独和时间的一次性方案，也像把关系推进到更难撤回的地方。",
    choices: [
      {
        label: "认真考虑同居",
        text: "你点头了，知道这会让生活更近，也让逃离更难。",
        effects: {
          money: 180,
          energy: 3,
          authenticity: 2,
          alienation: -1
        }
      },
      {
        label: "先别这么快",
        text: "你把速度放慢，宁可保留一点距离，也不想把压力塞进亲密。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "relationship-family-video-branch",
    actionId: "relationship",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.fans >= 7000,
    title: "家人问你能不能别把他们放进视频里",
    text: "他们不是在反对你的工作，只是不想自己也被拖进这套公开叙事。你得决定尊重这条线，还是继续把亲密关系留在内容边缘。",
    choices: [
      {
        label: "完全尊重边界",
        text: "你答应了，知道这会减少一点可用素材，却让关系终于不是素材。",
        effects: {
          reputation: 3,
          authenticity: 5,
          fans: -100
        }
      },
      {
        label: "还是留一点痕迹",
        text: "你说会控制，但没有完全停下。边界被谈过，并不代表边界就能真的被守住。",
        effects: {
          fans: 900,
          reputation: -3,
          scandal: 3,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "relationship-borrow-branch",
    actionId: "relationship",
    once: false,
    chance: 0.17,
    when: (state) => state.stats.money < 700,
    title: "朋友也手头紧，却问你能不能借点钱",
    text: "你自己的现金流并不稳，但对方显然也不是随口一问。你得决定关系此刻要不要承担经济重量。",
    choices: [
      {
        label: "还是借一点",
        text: "你咬牙借了，因为你知道穷人之间最难的是互相看见彼此的窘迫。",
        effects: {
          money: -180,
          reputation: 4,
          authenticity: 3
        }
      },
      {
        label: "坦白自己也紧",
        text: "你没有装大方，因为你确实也没有余地。诚实并不体面，却比勉强硬撑更可持续。",
        effects: {
          reputation: 1,
          authenticity: 3,
          energy: 1
        }
      }
    ]
  },
  {
    id: "relationship-breakup-rumor-branch",
    actionId: "relationship",
    once: false,
    chance: 0.18,
    when: (state) => hasFlag(state, "realityLoveArc") || hasFlag(state, "loveRoute"),
    title: "外界开始猜测你们是不是已经出了问题",
    text: "只是几天没同框，评论区和搬运号就先把剧情写完了。你可以配合表演和解，也可以让他们继续猜。",
    choices: [
      {
        label: "发点甜的堵嘴",
        text: "你们补了一条看起来一切正常的内容，把风向暂时压住。关系也因此更像被调度的项目。",
        effects: {
          fans: 1800,
          money: 70,
          authenticity: -3,
          alienation: 4
        }
      },
      {
        label: "不回应猜测",
        text: "你决定不把感情交给舆论排期，哪怕这会让猜测继续发酵。",
        effects: {
          authenticity: 4,
          reputation: 1,
          scandal: 1
        }
      }
    ]
  },
  {
    id: "relationship-lease-branch",
    actionId: "relationship",
    once: false,
    chance: 0.17,
    when: (state) => state.day >= 7,
    title: "室友和房东都开始问你下个月怎么打算",
    text: "这是一个看似朴素的居住问题，却把工作、关系和现金流全拧到了一起。继续留、搬走、找人分担，每个决定都带着别的后果。",
    choices: [
      {
        label: "先稳住住处",
        text: "你决定一切以稳定居住为先，把很多理想都往后推了推。",
        effects: {
          money: -80,
          energy: 3,
          alienation: 1
        }
      },
      {
        label: "考虑换个地方",
        text: "你开始盘算搬走，知道这会打乱节奏，也可能重新整理自己。",
        effects: {
          inspiration: 5,
          energy: -3,
          money: -40,
          authenticity: 2
        }
      }
    ]
  },
  {
    id: "shadow-botfarm-branch",
    actionId: "shadow",
    once: false,
    chance: 0.17,
    when: (state) => hasFlag(state, "botSeed") || state.stats.fans >= 10000,
    title: "你真的有机会买到一整套刷量服务",
    text: "不再是模糊邀请，而是报价、周期、效果图和售后说明全摆在你眼前。你可以继续说服自己这只是策略，也可以承认这就是伪造。",
    choices: [
      {
        label: "下单刷量",
        text: "你买了，数字立刻看上去更像成功。只是你自己也很难再完全相信这些数字。",
        effects: {
          fans: 4200,
          money: -260,
          scandal: 10,
          alienation: 7
        }
      },
      {
        label: "彻底放弃",
        text: "你把窗口关掉，知道这并不会自动让你干净，但至少没再往里多走一步。",
        effects: {
          authenticity: 4,
          reputation: 2,
          energy: 1
        }
      }
    ]
  },
  {
    id: "shadow-cash-branch",
    actionId: "shadow",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.money < RENT_AMOUNT || state.stats.scandal >= 10,
    title: "有人想让你帮忙带一笔不该问来源的现金",
    text: "对方说只是顺路带一下，什么也不用知道。很多事情最危险的时候，都被表述得像只需要举手之劳。",
    choices: [
      {
        label: "答应帮忙",
        text: "你接了，因为眼下真的缺钱，也因为你对“只是带一下”的说法产生了危险的理解。",
        effects: {
          money: 220,
          scandal: 8,
          alienation: 6,
          flags: [
            "crimeSeed"
          ]
        }
      },
      {
        label: "拒绝这活",
        text: "你没有接，怕的不是电影式的后果，而是从此以后自己会更容易把这类事说成正常工作。",
        effects: {
          authenticity: 5,
          money: 0,
          energy: 1
        }
      }
    ]
  },
  {
    id: "shadow-deepfake-branch",
    actionId: "shadow",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.network >= 12,
    title: "有人提议用 AI 合成素材给营销号喂料",
    text: "他保证不会查到你头上，效果还会非常好。你知道这不是单纯技术问题，而是你愿不愿意把伪造当成职业能力的一部分。",
    choices: [
      {
        label: "参与合成",
        text: "你点头了，因为这个时代对伪造的容忍度高得令人沮丧。",
        effects: {
          money: 280,
          scandal: 10,
          alienation: 8,
          flags: [
            "crimeSeed"
          ]
        }
      },
      {
        label: "立刻拉开距离",
        text: "你没让这件事继续聊下去，不想测试自己还能把哪种东西叫作手段。",
        effects: {
          authenticity: 5,
          reputation: 1,
          network: -1
        }
      }
    ]
  },
  {
    id: "shadow-docs-branch",
    actionId: "shadow",
    once: false,
    chance: 0.17,
    when: (state) => hasAnyTag(state, ["proxy-deal", "extortion-whisper", "leak-market"]),
    title: "一份更直接的黑料文件摆到了你面前",
    text: "里面的信息完整得几乎像为你准备好的一次机会。问题是，机会和证据在灰色世界里常常共享同一个文件夹。",
    choices: [
      {
        label: "收下文件",
        text: "你把它留下了，哪怕还没决定怎么用。可一旦文件进了手里，人就很难再声称自己完全无辜。",
        effects: {
          scandal: 9,
          alienation: 7,
          network: 3
        }
      },
      {
        label: "当场删掉",
        text: "你不想让自己未来在某个脆弱时刻拥有太容易的武器。",
        effects: {
          authenticity: 4,
          energy: 1,
          scandal: -1
        }
      }
    ]
  },
  {
    id: "shadow-front-branch",
    actionId: "shadow",
    once: false,
    chance: 0.16,
    when: (state) => state.stats.money <= 800 || state.stats.alienation >= 18,
    title: "有人想让你做前台人设，替一整套灰色业务遮脸",
    text: "你只需要看起来正常、好看、可信，其余都不用管。最可怕的是，这听上去和很多合法工作几乎没有表面区别。",
    choices: [
      {
        label: "答应当门面",
        text: "你站到了前面，换来更快的钱和更慢才会找上门的后果。",
        effects: {
          money: 420,
          reputation: -5,
          scandal: 8,
          alienation: 7
        }
      },
      {
        label: "退出这件事",
        text: "你拒绝了，因为你知道一旦把脸借出去，很多债就会顺着脸追上来。",
        effects: {
          authenticity: 4,
          money: 0,
          energy: 1
        }
      }
    ]
  },
  {
    id: "publish-late-message-extra",
    actionId: "publish",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的脚本",
    text: "消息长得像一封小论文，对方把你的成片拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把观众当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份脚本确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "publish-credit-dispute-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "观众开始争论成片该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "publish-paywall-offer-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把成片的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把观众再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "publish-boundary-blur-extra",
    actionId: "publish",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "剪辑台里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "publish-forum-thread-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的创作者形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "publish-old-friend-extra",
    actionId: "publish",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的脚本表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "publish-premium-room-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的脚本房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "publish-legal-nudge-extra",
    actionId: "publish",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意成片的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "publish-mentor-doubt-extra",
    actionId: "publish",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对脚本的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "publish-family-call-extra",
    actionId: "publish",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的成片到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "publish-archive-discovery-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的成片素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "publish-outsider-critique-extra",
    actionId: "publish",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的创作者方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "publish-gift-economy-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "观众想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "publish-deadline-shift-extra",
    actionId: "publish",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "脚本的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "publish-identity-question-extra",
    actionId: "publish",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像创作者还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "street-late-message-extra",
    actionId: "street",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的街头素材",
    text: "消息长得像一封小论文，对方把你的现场片段拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把路人当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份街头素材确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "street-credit-dispute-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "路人开始争论现场片段该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "street-paywall-offer-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把现场片段的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把路人再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "street-boundary-blur-extra",
    actionId: "street",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "街角里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "street-forum-thread-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的记录者形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "street-old-friend-extra",
    actionId: "street",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的街头素材表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "street-premium-room-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的街头素材房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "street-legal-nudge-extra",
    actionId: "street",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意现场片段的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "street-mentor-doubt-extra",
    actionId: "street",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对街头素材的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "street-family-call-extra",
    actionId: "street",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的现场片段到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "street-archive-discovery-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的现场片段素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "street-outsider-critique-extra",
    actionId: "street",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的记录者方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "street-gift-economy-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "路人想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "street-deadline-shift-extra",
    actionId: "street",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "街头素材的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "street-identity-question-extra",
    actionId: "street",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像记录者还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "collab-late-message-extra",
    actionId: "collab",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的合作提案",
    text: "消息长得像一封小论文，对方把你的联动内容拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把合作者当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份合作提案确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "collab-credit-dispute-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "合作者开始争论联动内容该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "collab-paywall-offer-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把联动内容的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把合作者再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "collab-boundary-blur-extra",
    actionId: "collab",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "共享工作室里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "collab-forum-thread-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的搭档形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "collab-old-friend-extra",
    actionId: "collab",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的合作提案表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "collab-premium-room-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的合作提案房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "collab-legal-nudge-extra",
    actionId: "collab",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意联动内容的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "collab-mentor-doubt-extra",
    actionId: "collab",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对合作提案的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "collab-family-call-extra",
    actionId: "collab",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的联动内容到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "collab-archive-discovery-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的联动内容素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "collab-outsider-critique-extra",
    actionId: "collab",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的搭档方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "collab-gift-economy-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "合作者想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "collab-deadline-shift-extra",
    actionId: "collab",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "合作提案的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "collab-identity-question-extra",
    actionId: "collab",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像搭档还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "business-late-message-extra",
    actionId: "business",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的报价单",
    text: "消息长得像一封小论文，对方把你的商务方案拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把甲方当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份报价单确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "business-credit-dispute-extra",
    actionId: "business",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "甲方开始争论商务方案该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "business-paywall-offer-extra",
    actionId: "business",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把商务方案的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把甲方再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "business-boundary-blur-extra",
    actionId: "business",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "会议室里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "business-forum-thread-extra",
    actionId: "business",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的谈判者形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "business-old-friend-extra",
    actionId: "business",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的报价单表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "business-premium-room-extra",
    actionId: "business",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的报价单房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "business-legal-nudge-extra",
    actionId: "business",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意商务方案的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "business-mentor-doubt-extra",
    actionId: "business",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对报价单的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "business-family-call-extra",
    actionId: "business",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的商务方案到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "business-archive-discovery-extra",
    actionId: "business",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的商务方案素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "business-outsider-critique-extra",
    actionId: "business",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的谈判者方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "business-gift-economy-extra",
    actionId: "business",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "甲方想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "business-deadline-shift-extra",
    actionId: "business",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "报价单的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "business-identity-question-extra",
    actionId: "business",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像谈判者还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "rest-late-message-extra",
    actionId: "rest",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的休息时间",
    text: "消息长得像一封小论文，对方把你的空白时段拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把自己当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份休息时间确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "rest-credit-dispute-extra",
    actionId: "rest",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "自己开始争论空白时段该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "rest-paywall-offer-extra",
    actionId: "rest",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把空白时段的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把自己再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "rest-boundary-blur-extra",
    actionId: "rest",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "公寓里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "rest-forum-thread-extra",
    actionId: "rest",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的普通人形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "rest-old-friend-extra",
    actionId: "rest",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的休息时间表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "rest-premium-room-extra",
    actionId: "rest",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的休息时间房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "rest-legal-nudge-extra",
    actionId: "rest",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意空白时段的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "rest-mentor-doubt-extra",
    actionId: "rest",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对休息时间的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "rest-family-call-extra",
    actionId: "rest",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的空白时段到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "rest-archive-discovery-extra",
    actionId: "rest",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的空白时段素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "rest-outsider-critique-extra",
    actionId: "rest",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的普通人方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "rest-gift-economy-extra",
    actionId: "rest",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "自己想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "rest-deadline-shift-extra",
    actionId: "rest",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "休息时间的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "rest-identity-question-extra",
    actionId: "rest",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像普通人还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "nightlive-late-message-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的直播节奏",
    text: "消息长得像一封小论文，对方把你的深夜片段拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把弹幕当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份直播节奏确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-credit-dispute-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "弹幕开始争论深夜片段该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "nightlive-paywall-offer-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把深夜片段的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把弹幕再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "nightlive-boundary-blur-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "镜头前里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "nightlive-forum-thread-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的主播形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "nightlive-old-friend-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的直播节奏表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-premium-room-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的直播节奏房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-legal-nudge-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意深夜片段的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-mentor-doubt-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对直播节奏的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "nightlive-family-call-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的深夜片段到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "nightlive-archive-discovery-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的深夜片段素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "nightlive-outsider-critique-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的主播方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-gift-economy-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "弹幕想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "nightlive-deadline-shift-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "直播节奏的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "nightlive-identity-question-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像主播还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "trend-late-message-extra",
    actionId: "trend",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的热点模型",
    text: "消息长得像一封小论文，对方把你的数据结论拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把算法用户当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份热点模型确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "trend-credit-dispute-extra",
    actionId: "trend",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "算法用户开始争论数据结论该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "trend-paywall-offer-extra",
    actionId: "trend",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把数据结论的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把算法用户再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "trend-boundary-blur-extra",
    actionId: "trend",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "后台页面里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "trend-forum-thread-extra",
    actionId: "trend",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的操盘者形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "trend-old-friend-extra",
    actionId: "trend",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的热点模型表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "trend-premium-room-extra",
    actionId: "trend",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的热点模型房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "trend-legal-nudge-extra",
    actionId: "trend",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意数据结论的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "trend-mentor-doubt-extra",
    actionId: "trend",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对热点模型的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "trend-family-call-extra",
    actionId: "trend",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的数据结论到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "trend-archive-discovery-extra",
    actionId: "trend",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的数据结论素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "trend-outsider-critique-extra",
    actionId: "trend",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的操盘者方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "trend-gift-economy-extra",
    actionId: "trend",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "算法用户想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "trend-deadline-shift-extra",
    actionId: "trend",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "热点模型的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "trend-identity-question-extra",
    actionId: "trend",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像操盘者还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "relationship-late-message-extra",
    actionId: "relationship",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的私人边界",
    text: "消息长得像一封小论文，对方把你的关系线索拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把亲近的人当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份私人边界确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "relationship-credit-dispute-extra",
    actionId: "relationship",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "亲近的人开始争论关系线索该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "relationship-paywall-offer-extra",
    actionId: "relationship",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把关系线索的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把亲近的人再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "relationship-boundary-blur-extra",
    actionId: "relationship",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "聊天框里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "relationship-forum-thread-extra",
    actionId: "relationship",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的伴侣候选形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "relationship-old-friend-extra",
    actionId: "relationship",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的私人边界表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "relationship-premium-room-extra",
    actionId: "relationship",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的私人边界房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "relationship-legal-nudge-extra",
    actionId: "relationship",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意关系线索的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "relationship-mentor-doubt-extra",
    actionId: "relationship",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对私人边界的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "relationship-family-call-extra",
    actionId: "relationship",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的关系线索到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "relationship-archive-discovery-extra",
    actionId: "relationship",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的关系线索素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "relationship-outsider-critique-extra",
    actionId: "relationship",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的伴侣候选方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "relationship-gift-economy-extra",
    actionId: "relationship",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "亲近的人想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "relationship-deadline-shift-extra",
    actionId: "relationship",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "私人边界的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "relationship-identity-question-extra",
    actionId: "relationship",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像伴侣候选还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "shadow-late-message-extra",
    actionId: "shadow",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的灰色邀约",
    text: "消息长得像一封小论文，对方把你的危险机会拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把中间人当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份灰色邀约确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "shadow-credit-dispute-extra",
    actionId: "shadow",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "中间人开始争论危险机会该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "shadow-paywall-offer-extra",
    actionId: "shadow",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把危险机会的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把中间人再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "shadow-boundary-blur-extra",
    actionId: "shadow",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "匿名窗口里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "shadow-forum-thread-extra",
    actionId: "shadow",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的冒险者形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "shadow-old-friend-extra",
    actionId: "shadow",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的灰色邀约表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "shadow-premium-room-extra",
    actionId: "shadow",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的灰色邀约房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "shadow-legal-nudge-extra",
    actionId: "shadow",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意危险机会的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "shadow-mentor-doubt-extra",
    actionId: "shadow",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对灰色邀约的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "shadow-family-call-extra",
    actionId: "shadow",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的危险机会到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "shadow-archive-discovery-extra",
    actionId: "shadow",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的危险机会素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "shadow-outsider-critique-extra",
    actionId: "shadow",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的冒险者方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "shadow-gift-economy-extra",
    actionId: "shadow",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "中间人想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "shadow-deadline-shift-extra",
    actionId: "shadow",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "灰色邀约的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "shadow-identity-question-extra",
    actionId: "shadow",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像冒险者还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "random-late-message-extra",
    actionId: "random",
    once: false,
    chance: 0.13,
    when: () => true,
    title: "深夜有人逐行点评你的突发消息",
    text: "消息长得像一封小论文，对方把你的偶然事件拆开来读，像在逼你承认每一步选择都不是偶然。",
    choices: [
      {
        label: "认真回复",
        text: "你花时间回信，让对方知道你并非只会把陌生人当数据。",
        effects: {
          reputation: 3,
          authenticity: 3,
          energy: -3,
          fans: 120
        }
      },
      {
        label: "关掉窗口",
        text: "你没有再看下去，怕自己一旦认真，就得承认这份突发消息确实已经开始塑形你。",
        effects: {
          energy: 2,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "random-credit-dispute-extra",
    actionId: "random",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 8 || state.stats.fans >= 5000,
    title: "陌生人开始争论偶然事件该归谁",
    text: "原本顺利的一次推进忽然卡在署名和功劳上，所有人都想在最后一秒把自己写进成果。",
    choices: [
      {
        label: "把功劳分出去",
        text: "你退了一步，让别人也站进灯里。损失一点控制，换来一点更长的关系。",
        effects: {
          network: 4,
          reputation: 3,
          authenticity: 2,
          fans: -80
        }
      },
      {
        label: "坚持署名",
        text: "你把边界说清，因为你知道模糊功劳最终通常只会抹去最容易被抹去的人。",
        effects: {
          reputation: 1,
          network: -2,
          alienation: 2,
          fans: 300
        }
      }
    ]
  },
  {
    id: "random-paywall-offer-extra",
    actionId: "random",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 4000 || state.stats.money <= 700,
    title: "有人建议把偶然事件的一部分藏到付费墙后",
    text: "这会让内容更像产品，也会让亲密显得更像层级制度。钱不难懂，难的是你愿不愿意替边界标价。",
    choices: [
      {
        label: "试着收费",
        text: "你把更完整的版本藏到门后，知道自己正在学习另一种更安静的收割。",
        effects: {
          money: 180,
          fans: 260,
          authenticity: -2,
          alienation: 3
        }
      },
      {
        label: "继续公开",
        text: "你不想把陌生人再细分成能否付费的等级。至少今天不想。",
        effects: {
          authenticity: 4,
          reputation: 2,
          money: 0
        }
      }
    ]
  },
  {
    id: "random-boundary-blur-extra",
    actionId: "random",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 20 || state.stats.alienation >= 16,
    title: "收件箱里出现了不该被拍或不该被说的东西",
    text: "它很有力量，也很像越界。真正危险的不是越界本身，而是越界经常被效率说成必要。",
    choices: [
      {
        label: "保留这部分",
        text: "你决定留下它，把风险包进成品里。",
        effects: {
          fans: 900,
          scandal: 4,
          alienation: 4
        }
      },
      {
        label: "把它删掉",
        text: "你删掉了那几秒，像给自己留一条还算能回头的线。",
        effects: {
          authenticity: 4,
          reputation: 2,
          fans: -90
        }
      }
    ]
  },
  {
    id: "random-forum-thread-extra",
    actionId: "random",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3500,
    title: "某个论坛正在长篇讨论你的路过的人形象",
    text: "有人夸你，有人拆你，更多人只是把你当作某种类型样本。被分析并不总是荣耀，它有时只是一种晚到的物化。",
    choices: [
      {
        label: "下场解释",
        text: "你进入帖子里说了几句，希望别人知道你不是自己简介里那几行字。",
        effects: {
          reputation: 2,
          energy: -4,
          authenticity: 2
        }
      },
      {
        label: "默默旁观",
        text: "你什么都没说，让别人继续把你用作投射屏幕。",
        effects: {
          fans: 500,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "random-old-friend-extra",
    actionId: "random",
    once: false,
    chance: 0.11,
    when: () => true,
    title: "一个旧相识突然对你的突发消息表示担心",
    text: "他说你现在说话更熟练，却也更像在提前排练。熟练未必是罪，但它确实会让关心听上去像审讯。",
    choices: [
      {
        label: "认真听完",
        text: "你没有辩解，让那点不舒服完整停留在耳朵里。",
        effects: {
          authenticity: 4,
          inspiration: 3,
          energy: -1
        }
      },
      {
        label: "敷衍带过",
        text: "你笑了笑，把这通关心处理成普通社交噪音。",
        effects: {
          energy: 1,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "random-premium-room-extra",
    actionId: "random",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.network >= 10 || state.stats.fans >= 8000,
    title: "有人邀请你去一个只向少数人开放的突发消息房间",
    text: "门后是信息、人脉、诀窍和一些不会写进公开说明的东西。精英感总擅长把偏袒伪装成专业。",
    choices: [
      {
        label: "进去看看",
        text: "你接受了邀请，知道自己是去找资源，也是在学习新的圈内语法。",
        effects: {
          network: 5,
          money: 60,
          alienation: 3
        }
      },
      {
        label: "留在门外",
        text: "你没有进去，不想让每一次上升都先从认同圈层开始。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "random-legal-nudge-extra",
    actionId: "random",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.scandal >= 8 || state.stats.fans >= 9000,
    title: "一封措辞很克制的邮件提醒你注意偶然事件的边界",
    text: "它没有直接威胁，却足够让你明白别人已经在注意你。法律最有效的时候，往往就是它还没真正出手的时候。",
    choices: [
      {
        label: "立刻调整",
        text: "你往后退了一步，把几处最危险的地方改掉。",
        effects: {
          scandal: -2,
          reputation: 2,
          fans: -60
        }
      },
      {
        label: "继续推进",
        text: "你判断对方暂时不会真的追上来，于是继续往前。",
        effects: {
          fans: 700,
          scandal: 4,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "random-mentor-doubt-extra",
    actionId: "random",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.inspiration >= 15,
    title: "一个前辈质疑你对突发消息的理解",
    text: "他说你太快学会有效，却还没学会为什么非要这样做。批评不一定公平，但它总能逼你停下来。",
    choices: [
      {
        label: "继续追问",
        text: "你把尴尬吞下去，换来一些不太舒服但有用的提醒。",
        effects: {
          inspiration: 5,
          authenticity: 3,
          energy: -2
        }
      },
      {
        label: "礼貌结束",
        text: "你结束了这场谈话，不想让别人的标准太早压进你的步伐。",
        effects: {
          energy: 1,
          fans: 180,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "random-family-call-extra",
    actionId: "random",
    once: false,
    chance: 0.1,
    when: () => true,
    title: "家里来电，问你现在做的偶然事件到底算不算工作",
    text: "你知道这不是纯粹的冒犯，而是一种老问题: 当劳动看起来太像表演时，旁人总会怀疑它是否真的辛苦。",
    choices: [
      {
        label: "耐心解释",
        text: "你把流程讲了一遍，希望他们至少理解这不是纯粹的玩。",
        effects: {
          authenticity: 3,
          energy: -2,
          reputation: 1
        }
      },
      {
        label: "草草结束",
        text: "你不想再翻译自己的生活，于是很快挂断。",
        effects: {
          energy: 1,
          alienation: 2,
          inspiration: 1
        }
      }
    ]
  },
  {
    id: "random-archive-discovery-extra",
    actionId: "random",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 18 || state.stats.scandal >= 6,
    title: "你翻到一段旧的偶然事件素材",
    text: "那时的你还没这么懂节奏，也没这么懂如何被看见。旧素材像一面不客气的镜子，让现在的技巧一下显得有些暧昧。",
    choices: [
      {
        label: "重新发出去",
        text: "你把旧版本整理后放出来，让别人看到一个没那么熟练的自己。",
        effects: {
          fans: 420,
          authenticity: 5,
          reputation: 2
        }
      },
      {
        label: "继续压箱底",
        text: "你把它关回文件夹，决定不让过去参与今天的生意。",
        effects: {
          inspiration: 3,
          alienation: 1
        }
      }
    ]
  },
  {
    id: "random-outsider-critique-extra",
    actionId: "random",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.reputation >= 25 || state.stats.fans >= 5000,
    title: "一个圈外人对你的路过的人方式提出了很刺的意见",
    text: "他不懂行业，也因此说出了一些行业里很少有人愿意直说的话。外行话常常粗糙，却不总是无效。",
    choices: [
      {
        label: "把刺听进去",
        text: "你没有急着捍卫自己，反而让那几句话在脑子里多待了一会儿。",
        effects: {
          authenticity: 4,
          alienation: -1,
          energy: -1
        }
      },
      {
        label: "觉得他不懂",
        text: "你把这番话归为局外人的天真，继续按熟悉的路径推进。",
        effects: {
          fans: 300,
          alienation: 2
        }
      }
    ]
  },
  {
    id: "random-gift-economy-extra",
    actionId: "random",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.fans >= 3000 || state.stats.network >= 10,
    title: "陌生人想给你一个不太好拒绝的人情",
    text: "它表面上是帮助，实际也可能是一次悄悄记账。互惠并不可怕，可怕的是你不知道账会在哪一天被翻出来。",
    choices: [
      {
        label: "收下人情",
        text: "你接受了，告诉自己以后总能还。问题是，关系里的“以后”常常比合同更黏。",
        effects: {
          money: 90,
          network: 3,
          alienation: 2
        }
      },
      {
        label: "婉拒好意",
        text: "你谢过对方，不想让这份帮助在以后变成默认义务。",
        effects: {
          authenticity: 3,
          reputation: 2
        }
      }
    ]
  },
  {
    id: "random-deadline-shift-extra",
    actionId: "random",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 75,
    title: "突发消息的截止时间突然提前",
    text: "这不一定是针对你，只是系统总爱把每个人都训练成临时起跑的人。赶得上是一种能力，答应总赶也是另一种更危险的习惯。",
    choices: [
      {
        label: "硬扛着做完",
        text: "你把自己往前推，及时交出结果。代价是身体又替职业精神记了一笔账。",
        effects: {
          fans: 500,
          money: 80,
          energy: -7,
          alienation: 3
        }
      },
      {
        label: "主动延后",
        text: "你承认今天做不出最好的版本，宁可让别人不满，也不想再把自己掏空。",
        effects: {
          energy: 3,
          authenticity: 3,
          reputation: -1
        }
      }
    ]
  },
  {
    id: "random-identity-question-extra",
    actionId: "random",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.authenticity >= 18 || state.stats.alienation >= 18,
    title: "你忽然不确定自己更像路过的人还是某种被训练出来的角色",
    text: "这种怀疑来得很轻，却足够让整天都变慢一点。自我从来不是稳定物件，它只是在高频重复里暂时看起来结实。",
    choices: [
      {
        label: "顺着怀疑停一下",
        text: "你让这点疑问留下来，不急着用效率把它盖掉。",
        effects: {
          authenticity: 5,
          inspiration: 4,
          fans: -120
        }
      },
      {
        label: "继续按流程走",
        text: "你决定先完成今天该完成的事，怀疑以后再说。",
        effects: {
          fans: 420,
          money: 40,
          alienation: 3
        }
      }
    ]
  },
  {
    id: "publish-comment-freeze-extra",
    actionId: "publish",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.reputation <= 60,
    title: "你考虑要不要关闭评论区",
    text: "这条内容刚发出去，评论区就开始往两个方向滑。关闭评论会让空气安静一点，也会让人怀疑你只是想先把质疑锁在门外。",
    choices: [
      {
        label: "关闭评论",
        text: "你把门先关上，像给内容套了一层隔离带。争议变少了，怀疑却没有真的消失。",
        effects: { reputation: -1, energy: 2, scandal: -2, alienation: 2 }
      },
      {
        label: "继续开放",
        text: "你决定让这阵噪音完整经过自己。它不舒服，却至少不像提前伪装出来的镇定。",
        effects: { fans: 900, authenticity: 3, energy: -3, scandal: 2 }
      }
    ]
  },
  {
    id: "publish-thumbnails-extra",
    actionId: "publish",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.inspiration >= 10,
    title: "你在标题和封面上犹豫了太久",
    text: "一个版本更诚实，另一个版本更像会被点开。平台从不要求你说谎，它只要求你学会给真相穿更会赢的外套。",
    choices: [
      {
        label: "选更会赢的版本",
        text: "你让标题更锋利，封面更直接。点开率会替这个决定辩护，但你也知道那不是全部理由。",
        effects: { fans: 1400, alienation: 4, authenticity: -2, money: 40 }
      },
      {
        label: "选更诚实的版本",
        text: "你让内容按原本的气味出现，哪怕它不够抓人。慢一点，却更接近你愿意承担的样子。",
        effects: { authenticity: 4, reputation: 2, fans: -120 }
      }
    ]
  },
  {
    id: "publish-reedit-extra",
    actionId: "publish",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.energy >= 8,
    title: "导出前你发现节奏还能再改一轮",
    text: "再改一次，也许会更完整；直接发掉，也许能保住今天剩下的神经。所谓认真，有时只是把疲惫说得更体面。",
    choices: [
      {
        label: "继续重剪",
        text: "你又花了半小时，把每个停顿都修得更顺。成片更好，但你也更像把自己拧干了一点。",
        effects: { reputation: 3, inspiration: -2, energy: -6, fans: 500 }
      },
      {
        label: "按现在发布",
        text: "你接受不完美，让今天在仍可承受的时候结束。作品少一点工整，人反而多一点余地。",
        effects: { energy: 3, authenticity: 3, fans: -60 }
      }
    ]
  },
  {
    id: "publish-paid-credit-extra",
    actionId: "publish",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.money >= 120 || state.stats.network >= 14,
    title: "有人愿意付费让你挂上署名感谢",
    text: "对方不是品牌，只是一个想借你账号露面的人。价格不低，姿态也不算难看，问题在于你知道这和感谢无关，只和借壳有关。",
    choices: [
      {
        label: "接这笔钱",
        text: "你在文案里放进那句并不完全自然的感谢，语气仍然顺，只是心里知道这句顺不是自发生成的。",
        effects: { money: 180, reputation: -2, alienation: 3 }
      },
      {
        label: "拒绝挂名",
        text: "你把合作推掉，保住了语气的完整性。损失不大，却像替边界做了一次小而具体的练习。",
        effects: { authenticity: 4, money: -20, reputation: 1 }
      }
    ]
  },
  {
    id: "publish-family-note-extra",
    actionId: "publish",
    once: false,
    chance: 0.08,
    when: (state) => state.day >= 6,
    title: "家里人突然来问你最近到底在拍什么",
    text: "那条消息没有恶意，只带着一种不熟悉这个行业的人特有的困惑。你可以给出一个容易让他们安心的版本，也可以说得更接近真实。",
    choices: [
      {
        label: "说得轻松一点",
        text: "你把事情讲成普通创作练习，把风险、焦虑和算计都藏了起来。对方放心了，你却更像一个自动报喜的账号。",
        effects: { energy: 1, alienation: 2, authenticity: -2 }
      },
      {
        label: "如实说明近况",
        text: "你第一次认真解释平台、房租、流量和疲惫如何缠在一起。对方不一定全懂，但至少你没有再把自己翻译成一个安全假象。",
        effects: { authenticity: 5, inspiration: 2, energy: -1 }
      }
    ]
  },
  {
    id: "street-cafe-table-extra",
    actionId: "street",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.inspiration >= 10,
    title: "一家咖啡店愿意让你长期占角落拍摄",
    text: "店主说你可以常来，甚至愿意在店里给你留一张靠窗的小桌。免费的空间从不只是善意，它也可能把你慢慢变成一种稳定摆件。",
    choices: [
      {
        label: "答应常驻",
        text: "你接受了这个角落，便利立刻出现，重复也会跟着出现。一个固定空间能养出风格，也能养出模板。",
        effects: { inspiration: 4, fans: 500, authenticity: -1, alienation: 2 }
      },
      {
        label: "保持流动",
        text: "你谢过好意，还是决定继续四处走。麻烦一些，但至少还没有被某个方便的位置驯化。",
        effects: { authenticity: 4, energy: -2, inspiration: 3 }
      }
    ]
  },
  {
    id: "street-police-extra",
    actionId: "street",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.scandal >= 6 || state.stats.fans >= 5000,
    title: "你在街头拍摄时被要求看证件",
    text: "对方并不粗暴，但问题来得足够快，让你意识到镜头从来不是中性的存在。你可以讲理，也可以先退一步保住今天。",
    choices: [
      {
        label: "坚持解释",
        text: "你试着说明自己在拍什么，也说明并未越线。说理不一定有效，但至少没让自己立刻缩回去。",
        effects: { reputation: 2, energy: -4, scandal: 2 }
      },
      {
        label: "先收起设备",
        text: "你决定先退开，不把今天变成一次不必要的对撞。保住了平静，也失去了一点继续观察的锐度。",
        effects: { energy: 2, inspiration: -2, authenticity: 1 }
      }
    ]
  },
  {
    id: "street-lost-wallet-extra",
    actionId: "street",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.money <= 900,
    title: "你在路边捡到一个被遗落的钱包",
    text: "里面的钱不算多，却足够让今天的焦虑短暂松一点。把它交出去像一种简单正确，留下它则像现实朝你开的灰色小门。",
    choices: [
      {
        label: "交给店家保管",
        text: "你把钱包交给附近店员，离开时心里稍微轻了一点。正确未必带来奖励，但至少没留下别的东西。",
        effects: { reputation: 4, authenticity: 5, money: -10 }
      },
      {
        label: "拿走里面现金",
        text: "你只抽走那几张纸钞，告诉自己这不算真正的偷窃。问题是，一旦你开始替自己改写定义，边界就会越来越软。",
        effects: { money: 90, scandal: 5, alienation: 4 }
      }
    ]
  },
  {
    id: "street-borough-extra",
    actionId: "street",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.energy >= 12,
    title: "朋友提议你今天别在布鲁克林拍了",
    text: "他说换个区也许能拍到不一样的纽约。你知道这意味着额外时间和钱，也意味着今天可能终于不会再沿着熟悉路线重复自己。",
    choices: [
      {
        label: "临时改路线",
        text: "你坐上更远的一班车，让今天变得稍微陌生。素材没有立刻变得更好，但你的眼睛终于不那么像在背稿。",
        effects: { inspiration: 7, money: -40, energy: -5, authenticity: 2 }
      },
      {
        label: "还是留在熟悉街区",
        text: "你留在习惯的路径里，效率更高，惊喜更少。熟悉很容易伪装成稳定。",
        effects: { fans: 300, inspiration: -1, alienation: 2 }
      }
    ]
  },
  {
    id: "street-bench-talk-extra",
    actionId: "street",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.authenticity >= 12 || state.stats.inspiration >= 12,
    title: "一个在长椅上抽烟的人突然开始跟你聊天",
    text: "他谈失业、房租和这座城市如何让人习惯装没事。你可以把这段对话当素材记下来，也可以只是把它当一次没有用途的相遇。",
    choices: [
      {
        label: "记进备忘录",
        text: "你偷偷记下那几句最扎人的话，知道它们以后会变成内容的一部分。某种程度上你确实在认真听，只是听的方式不再单纯。",
        effects: { inspiration: 6, fans: 300, alienation: 2 }
      },
      {
        label: "只认真听完",
        text: "你没有把手机拿出来，只让那段谈话留在今天。不是每一份真实都需要被保存成素材。",
        effects: { authenticity: 5, inspiration: 3, energy: 1 }
      }
    ]
  },
  {
    id: "collab-credit-extra",
    actionId: "collab",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.network >= 10,
    title: "联动对象想把你的创意说成共同构思",
    text: "你知道点子基本是你想出来的，但对方显然更擅长把功劳讲成气氛。你可以当场较真，也可以先换一次表面的和气。",
    choices: [
      {
        label: "当场说清",
        text: "你把分工讲明，场面立刻有点冷。尊重不是自动生成的，有时必须由人自己开口索取。",
        effects: { reputation: 4, network: -2, authenticity: 3 }
      },
      {
        label: "先忍下来",
        text: "你把不快咽回去，换来合作继续顺滑。效率留下了，尊严则被轻轻折了一下。",
        effects: { fans: 1200, authenticity: -3, alienation: 3 }
      }
    ]
  },
  {
    id: "collab-greenroom-extra",
    actionId: "collab",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.fans >= 6000 || state.stats.network >= 14,
    title: "候场时你听到对方在背后评价你",
    text: "那不是赤裸裸的敌意，只是一种把人当作可替代资源时自然会出现的轻慢。你可以装作没听见，也可以借此重新判断这段关系。",
    choices: [
      {
        label: "继续照常合作",
        text: "你什么都没说，把今天的工作按原计划做完。成熟有时只是把失望藏得更深一点。",
        effects: { fans: 1000, network: 1, alienation: 3 }
      },
      {
        label: "提前结束合作",
        text: "你用最短的话结束了后续安排。损失了一次曝光，也省下了以后继续对自己解释的力气。",
        effects: { authenticity: 4, network: -3, energy: 2 }
      }
    ]
  },
  {
    id: "collab-guest-extra",
    actionId: "collab",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.reputation >= 10,
    title: "对方突然要你在镜头前临时站队",
    text: "本来只是轻松联动，临近开拍时对方却想让你对一件正在发酵的争议表态。拒绝会显得扫兴，答应则可能把你拖进别人的战场。",
    choices: [
      {
        label: "顺势表态",
        text: "你顺着现场气氛说了几句立场鲜明的话，热度立刻有了，复杂性则瞬间蒸发。",
        effects: { fans: 1800, scandal: 4, alienation: 4, reputation: -2 }
      },
      {
        label: "礼貌回避",
        text: "你把话题轻轻拨开，没有让场面爆炸，也没有让自己白白成为别人预设的炮弹。",
        effects: { reputation: 2, authenticity: 3, fans: -100 }
      }
    ]
  },
  {
    id: "collab-backend-extra",
    actionId: "collab",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.money <= 1200 || state.stats.network >= 12,
    title: "对方提议联名做一款小周边",
    text: "预算不大，野心不小。你知道这种东西最常见的结局不是大赚，而是把友谊和账目缠在一起。",
    choices: [
      {
        label: "试一把",
        text: "你答应合作，想看看关系能不能真的一起变现。希望出现了，分账焦虑也一起出现了。",
        effects: { money: 160, network: 3, energy: -3, alienation: 2 }
      },
      {
        label: "只做内容不做周边",
        text: "你把合作收在镜头里，不让它进一步落到账本上。某些边界越早画出来，后来越少互相埋怨。",
        effects: { authenticity: 3, network: 1, money: 0 }
      }
    ]
  },
  {
    id: "collab-roughcut-extra",
    actionId: "collab",
    once: false,
    chance: 0.12,
    when: (state) => state.stats.energy >= 8,
    title: "粗剪版本里你被剪得很像一个笑料",
    text: "对方说这只是节目效果，可你知道有些笑点一旦上线，就会变成一种更难撤回的公共印象。你可以要求重剪，也可以咬牙让它过去。",
    choices: [
      {
        label: "要求重剪",
        text: "你把问题说清，对方虽然不太高兴，还是重新处理了版本。麻烦一点，但没把自己便宜卖掉。",
        effects: { reputation: 3, network: -1, authenticity: 4 }
      },
      {
        label: "算了，照发",
        text: "你不想为了这点不适拖慢整个流程。播放上线后你看着大家笑，心里却知道那个被笑的形象会留下来。",
        effects: { fans: 1500, reputation: -3, alienation: 4 }
      }
    ]
  },
  {
    id: "business-retainer-extra",
    actionId: "business",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.network >= 14 || state.stats.money <= 1000,
    title: "一家公司想签你做月度固定内容",
    text: "价钱并不离谱，最诱人的其实是那种稳定感。你知道稳定从来不是免费赠品，它通常会要求你定期牺牲一点不稳定的自己。",
    choices: [
      {
        label: "签下固定单",
        text: "你接受了按月交付，日子立刻变得更可预估。焦虑少了一点，表达也被悄悄缩窄了一点。",
        effects: { money: 360, network: 3, authenticity: -3, alienation: 4 }
      },
      {
        label: "继续零散接活",
        text: "你拒绝稳定，保留了更多即兴空间，也保留了更多下个月可能继续发慌的理由。",
        effects: { authenticity: 4, energy: -1, money: -40 }
      }
    ]
  },
  {
    id: "business-panel-extra",
    actionId: "business",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.reputation >= 12,
    title: "品牌想让你上台讲“真实创作经验”",
    text: "你知道他们并不真的想听真实，他们想听一种足够安全、足够鼓舞人的真实。你可以配合把故事修顺，也可以把难堪部分留在台上。",
    choices: [
      {
        label: "讲安全版本",
        text: "你把所有尖锐处都磨圆，赢得掌声也赢得了自己的一点空心感。",
        effects: { money: 180, reputation: 2, authenticity: -3, alienation: 3 }
      },
      {
        label: "讲不太好听的版本",
        text: "你把那些不体面的部分也说了出来，会场的笑声变少了，真实感反而多了一点。",
        effects: { authenticity: 5, reputation: -1, network: -1 }
      }
    ]
  },
  {
    id: "business-agent-extra",
    actionId: "business",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.network >= 16,
    title: "一个中间人说能帮你把报价翻倍",
    text: "条件是以后所有合作都先过他手。你很清楚中间人卖的不是能力本身，而是别人对路径不透明的依赖。",
    choices: [
      {
        label: "把合作交给他",
        text: "你把一部分控制权换成更高报价，省下精力，也开始更难确定哪些决定还是你自己的。",
        effects: { money: 260, network: 2, alienation: 4 }
      },
      {
        label: "自己继续谈",
        text: "你决定继续亲自拉扯，麻烦但清楚。至少每一个数字的来路都还在你掌心里。",
        effects: { authenticity: 3, energy: -3, money: 20 }
      }
    ]
  },
  {
    id: "business-charity-extra",
    actionId: "business",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.fans >= 7000,
    title: "有人提议你把公益做成联名内容",
    text: "提案写得很漂亮，善意和转化率被并排写进一页 PPT。你知道这可能真有帮助，也可能只是另一种更高尚外观的包装。",
    choices: [
      {
        label: "先接下来试试",
        text: "你告诉自己至少事情会真的发生一点，只是也很清楚镜头不会无辜地站在一旁。",
        effects: { money: 220, reputation: 3, authenticity: -2, flags: ["fakeCharitySeed"] }
      },
      {
        label: "拒绝被包装成善意样板",
        text: "你把提案退回去，宁可少一次被夸，也不想让善意先学会配合 KPI。",
        effects: { authenticity: 5, reputation: -1, money: -30 }
      }
    ]
  },
  {
    id: "business-invoice-extra",
    actionId: "business",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.money <= 1400,
    title: "一笔尾款被拖着不打",
    text: "对方态度很客气，理由也很成熟，唯一不成熟的是你的账单并不会因为礼貌而暂缓。你可以催得更硬，也可以继续装懂事。",
    choices: [
      {
        label: "强硬催款",
        text: "你把话说得直接一点，不再替对方维护体面。钱未必立刻回来，但至少没继续替别人省事。",
        effects: { money: 180, reputation: -1, authenticity: 2 }
      },
      {
        label: "再等等看",
        text: "你暂时忍下不快，把希望押给对方下次真的履约。成熟被说了太多次，以至于像一种专门要求穷人练习的德性。",
        effects: { energy: -3, money: -40, alienation: 2 }
      }
    ]
  },
  {
    id: "rest-phone-extra",
    actionId: "rest",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.alienation >= 10 || state.stats.energy <= 80,
    title: "休息时你发现自己还是会本能地点开后台",
    text: "手指先于理智完成了这个动作，像某种条件反射。你可以把手机放远一点，也可以承认休息并不总能立刻停止上瘾。",
    choices: [
      {
        label: "把手机关机",
        text: "你给自己做了一次短暂的物理隔离，世界没有因此变好，但神经稍微松开了一点。",
        effects: { energy: 6, alienation: -4, inspiration: 2 }
      },
      {
        label: "继续刷一会儿",
        text: "你告诉自己只是看五分钟，可平台从不按人的说法计时。",
        effects: { energy: -4, alienation: 4, fans: 120 }
      }
    ]
  },
  {
    id: "rest-dishes-extra",
    actionId: "rest",
    once: false,
    chance: 0.09,
    when: (state) => state.day >= 4,
    title: "厨房里堆着很久没洗的碗",
    text: "它们不重要，却真实得过分。生活里最容易被拖延的，从来不是宏大理想，而是那些不会给你任何掌声的基本秩序。",
    choices: [
      {
        label: "把家务做完",
        text: "你花时间把空间稍微收拾回来，像替生活本身争取一点没有观众的尊严。",
        effects: { energy: 3, authenticity: 3, inspiration: 1 }
      },
      {
        label: "先继续瘫着",
        text: "你告诉自己明天再说，今天就先当一切不存在。逃避是有效的，只是有效期通常很短。",
        effects: { energy: 1, alienation: 2, inspiration: -1 }
      }
    ]
  },
  {
    id: "rest-call-extra",
    actionId: "rest",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.network >= 8 || state.stats.authenticity >= 10,
    title: "你想起很久没给一个老朋友打电话",
    text: "这不是资源，不是合作，只是一段可能还没彻底断掉的旧关系。真正没有用途的联系，在现在反而显得奢侈。",
    choices: [
      {
        label: "拨过去",
        text: "你们聊得并不多，却足够让你暂时想起自己不只是正在被计量的人。",
        effects: { energy: 4, authenticity: 4, network: 1 }
      },
      {
        label: "还是算了",
        text: "你把号码划过去，没有打。不是因为不在乎，只是今天连叙旧都像需要额外力气。",
        effects: { energy: 2, inspiration: -1, alienation: 1 }
      }
    ]
  },
  {
    id: "rest-sleep-extra",
    actionId: "rest",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.energy <= 65,
    title: "你知道自己最需要的是一场完整睡眠",
    text: "问题在于，一旦真正躺下，那些没发的内容、没回的消息和没交的钱又会开始排队出现在脑子里。",
    choices: [
      {
        label: "认真去睡",
        text: "你让今天在半途停下，像承认身体不是可以无限透支的服务器。",
        effects: { energy: 8, inspiration: -1, alienation: -2 }
      },
      {
        label: "边躺边刷到睡着",
        text: "你让疲惫和信息流一起把自己淹没，睡是睡了，恢复却并不完整。",
        effects: { energy: 3, alienation: 3, inspiration: -2 }
      }
    ]
  },
  {
    id: "rest-rent-note-extra",
    actionId: "rest",
    once: false,
    chance: 0.08,
    when: (state) => getRentCountdown() <= 3,
    title: "你在休息时还是想起了房租",
    text: "焦虑并不尊重休息，它最喜欢在人试图放松的时候重新出现。你可以把这份不安写下来，也可以立刻去找能换钱的办法。",
    choices: [
      {
        label: "先写下来",
        text: "你把恐慌拆成几条清楚的句子，事情没有立刻变轻，但至少不再是一团无形的压迫。",
        effects: { inspiration: 4, authenticity: 3, energy: 1 }
      },
      {
        label: "立刻去找兼职",
        text: "你停止休息，把自己重新塞回求生模式。问题开始动起来了，人却又累了一截。",
        effects: { money: 120, energy: -6, alienation: 2 }
      }
    ]
  },
  {
    id: "nightlive-guest-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.fans >= 3000,
    title: "直播间有人刷大额礼物要求你连麦",
    text: "对方语气热情，礼物特效也足够耀眼。你知道这既可能是惊喜，也可能是一次把气氛推向失控边缘的临时赌局。",
    choices: [
      {
        label: "答应连麦",
        text: "你把陌生人拉进直播，气氛立刻活了起来，风险也一起被放大到了屏幕正中央。",
        effects: { fans: 1600, money: 220, energy: -6, scandal: 4 }
      },
      {
        label: "谢谢但拒绝",
        text: "你把场面稳住，没有让直播进入不可预测的岔路。少了一点戏剧性，也少了一点后悔素材。",
        effects: { reputation: 2, energy: 1, fans: -80 }
      }
    ]
  },
  {
    id: "nightlive-confession-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.authenticity >= 12 || state.stats.energy <= 70,
    title: "你突然想在直播里说点平时不会说的话",
    text: "不是因为酒，也不是因为表演，只是凌晨会把人的边界照得比白天更松一些。你可以真的说出口，也可以把那句话再吞回去。",
    choices: [
      {
        label: "说出来",
        text: "你把那点压着的话讲了出来，弹幕一时安静了几秒。真诚不一定会赢，但它会留下不同于套路的痕迹。",
        effects: { fans: 1200, authenticity: 5, energy: -5, scandal: 2 }
      },
      {
        label: "继续讲轻松的东西",
        text: "你把话题拨回安全区域，让今晚继续可控。轻松保住了，某种更深的东西也被继续按住。",
        effects: { money: 140, alienation: 3, energy: -2 }
      }
    ]
  },
  {
    id: "nightlive-mod-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.fans >= 5000 || state.stats.scandal >= 8,
    title: "有人自告奋勇要帮你做直播间管理员",
    text: "对方很懂直播话术，也很懂如何替你挡掉一部分垃圾信息。问题是，把空间交给别人维护，也意味着把边界交出去一点。",
    choices: [
      {
        label: "让他试试",
        text: "直播秩序立刻好了一些，你也轻松了一点。只是当别人开始替你决定什么能留下，什么该被踢掉，你就没法完全装作这只是技术辅助。",
        effects: { energy: 3, network: 2, alienation: 2 }
      },
      {
        label: "继续自己控场",
        text: "你决定先不把钥匙递出去，哪怕这意味着还得继续手忙脚乱地稳住局面。",
        effects: { authenticity: 3, energy: -3, reputation: 1 }
      }
    ]
  },
  {
    id: "nightlive-tipjar-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.money <= 1200,
    title: "你考虑要不要在直播里更直接地提打赏",
    text: "大家都知道这套机制存在，只是有人说得更委婉，有人说得更坦白。你在犹豫的是诚实，还是体面。",
    choices: [
      {
        label: "直接开口",
        text: "你把现实压力说出来，打赏确实上去了。坦白带来了帮助，也让你感到自己被现实按着弯了一次腰。",
        effects: { money: 240, authenticity: 2, energy: -2, alienation: 2 }
      },
      {
        label: "照常直播",
        text: "你没有把缺钱放上台面，像仍想替自己保留某种说不清的体面。",
        effects: { authenticity: 3, money: -20, energy: 1 }
      }
    ]
  },
  {
    id: "nightlive-recording-extra",
    actionId: "nightlive",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.scandal >= 6 || state.stats.fans >= 4000,
    title: "有人提醒你今晚的直播会被完整录屏",
    text: "这句话本该只是常识，却在真正听见时让你身体发紧。知道一切都会留下，和抽象地理解互联网有记忆，是两回事。",
    choices: [
      {
        label: "更谨慎一点",
        text: "你收住了几次差点脱口而出的句子，夜晚因此安全了一点，也平了很多。",
        effects: { reputation: 2, fans: -120, alienation: 1 }
      },
      {
        label: "无视这句提醒",
        text: "你决定今晚还是按原来的强度说话。记录会留下，你至少不想让自己先一步被恐惧修剪成模板。",
        effects: { fans: 1500, scandal: 3, authenticity: 3, energy: -4 }
      }
    ]
  },
  {
    id: "trend-dashboard-extra",
    actionId: "trend",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.inspiration >= 8 || state.stats.alienation >= 10,
    title: "你发现一个付费趋势面板",
    text: "数据看起来非常精准，仿佛世界真的能被拆成几个可订阅的偏好曲线。你可以付钱买确定性，也可以继续凭经验和直觉摸索。",
    choices: [
      {
        label: "买来试用",
        text: "面板立刻给了你很多方向，像有人替你提前删掉了犹豫。效率变高的时候，人也会更容易忘记自己失去了什么。",
        effects: { money: -120, fans: 800, alienation: 4, inspiration: 2 }
      },
      {
        label: "继续靠自己观察",
        text: "你保留了判断的笨拙，也保留了判断仍属于自己的那点缓慢。",
        effects: { authenticity: 4, inspiration: 4, money: 0 }
      }
    ]
  },
  {
    id: "trend-copycat-extra",
    actionId: "trend",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.fans >= 3000,
    title: "一个热点模板几乎明摆着能复制",
    text: "你甚至能想象成片会长什么样，连评论区会刷什么都大致能猜到。问题不在会不会火，而在你愿不愿意这么直接地借别人的骨架。",
    choices: [
      {
        label: "照着做一版",
        text: "你把模板套进自己的语气里，很快得到回报。熟练是有效的，只是有效本身也会制造依赖。",
        effects: { fans: 1700, alienation: 4, inspiration: -2 }
      },
      {
        label: "只借结构不照抄",
        text: "你留了一点空间给自己，不让整件事完全沦为复印。效率没那么高，羞耻感也少一点。",
        effects: { inspiration: 4, authenticity: 3, fans: 300 }
      }
    ]
  },
  {
    id: "trend-academic-extra",
    actionId: "trend",
    once: false,
    chance: 0.08,
    when: (state) => state.day >= 8,
    title: "课堂阅读突然和你做的东西撞上了",
    text: "老师讲媒介理论时，你第一次强烈地意识到自己并不只是使用平台，也在被平台塑形。你可以把这当成灵感，也可以把它当成烦人的自我意识。",
    choices: [
      {
        label: "记下并继续想",
        text: "你把课堂上的那句理论记下来，像替自己最近的困惑找到了一点更稳的语法。",
        effects: { inspiration: 8, authenticity: 4, energy: -2 }
      },
      {
        label: "别想太多，先做内容",
        text: "你决定先把这些问题推后，毕竟理解世界并不自动等于交得起房租。",
        effects: { fans: 500, money: 50, alienation: 2 }
      }
    ]
  },
  {
    id: "trend-anger-extra",
    actionId: "trend",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.scandal >= 6 || state.stats.alienation >= 14,
    title: "你意识到愤怒类内容总是比细致内容跑得快",
    text: "这不是第一次发现，只是这次发现得尤其具体。问题是，你究竟是在研究趋势，还是在研究自己愿意被趋势改造成什么样。",
    choices: [
      {
        label: "接受这个现实",
        text: "你把愤怒当作一种效率工具暂时收下，热度会很快说明为什么那么多人最终都走向这里。",
        effects: { fans: 1500, scandal: 3, alienation: 5 }
      },
      {
        label: "坚持做慢一点的内容",
        text: "你把这条捷径暂时推开，哪怕知道自己可能会因此走得更慢。",
        effects: { authenticity: 4, reputation: 2, fans: -80 }
      }
    ]
  },
  {
    id: "trend-course-extra",
    actionId: "trend",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.money >= 80 || state.stats.network >= 10,
    title: "有人给你推荐一门“流量增长课”",
    text: "课纲把创作拆成几个稳定模块，像在教人如何把自我加工成产线。你可以把它当工具，也可以把它当警报。",
    choices: [
      {
        label: "买来看看",
        text: "你花钱买了一点确定性，也顺手买了一点更难摆脱的套路。",
        effects: { money: -90, fans: 700, alienation: 3, inspiration: 1 }
      },
      {
        label: "拒绝再学模板",
        text: "你把链接关掉，至少今天不想再让另一个人教你如何更像别人。",
        effects: { authenticity: 4, inspiration: 3 }
      }
    ]
  },
  {
    id: "relationship-roommate-extra",
    actionId: "relationship",
    once: false,
    chance: 0.11,
    when: (state) => state.day >= 5,
    title: "室友对你最近的作息有意见",
    text: "他说你半夜说话、补光灯、剪视频和来来往往的情绪已经开始影响公寓的空气。你可以讲道理，也可以先承认自己确实把生活挤成了工作室。",
    choices: [
      {
        label: "认真沟通",
        text: "你把最近的混乱讲清，也承认自己确实越界了一些。问题没有立刻消失，但关系至少没继续朝更坏处滑。",
        effects: { reputation: 2, energy: -2, authenticity: 3 }
      },
      {
        label: "敷衍过去",
        text: "你说了几句场面话，希望问题自己过去。很多关系并不会因为冲突消失，它们只是先把不满存起来。",
        effects: { energy: 1, alienation: 2, network: -1 }
      }
    ]
  },
  {
    id: "relationship-parent-extra",
    actionId: "relationship",
    once: false,
    chance: 0.08,
    when: (state) => state.day >= 7,
    title: "家里人问你毕业后到底想怎么活",
    text: "这不是一个适合在消息框里回答清楚的问题，却又总会在某个疲惫时刻突然落下来。你可以给一个容易被接受的答案，也可以说得更诚实一点。",
    choices: [
      {
        label: "给出安全答案",
        text: "你把未来讲得稳一点，像替他们也替自己临时搭了一块不会立刻塌的木板。",
        effects: { energy: 1, authenticity: -2, alienation: 2 }
      },
      {
        label: "承认自己也没完全想清楚",
        text: "你把不确定直接说出来，气氛不轻松，却比表演成熟更接近真正的交流。",
        effects: { authenticity: 5, energy: -1, inspiration: 2 }
      }
    ]
  },
  {
    id: "relationship-date-extra",
    actionId: "relationship",
    once: false,
    chance: 0.09,
    when: (state) => hasFlag(state, "loveInterest") || hasFlag(state, "loveRoute"),
    title: "有人约你今晚别谈工作和数据",
    text: "这个要求听起来很简单，可你已经太习惯把一切都翻译成效率、风险或素材。你可以认真赴约，也可以继续把今天让给待办清单。",
    choices: [
      {
        label: "认真赴约",
        text: "你把手机扣住，让一个晚上暂时不再服务于任何增长逻辑。时间没变多，人却像稍微回来了。",
        effects: { energy: 5, authenticity: 4, alienation: -3, flags: ["loveInterest"] }
      },
      {
        label: "改天再说",
        text: "你把约会往后推，事情确实因此更可控。亲密也因此又被安排进了一个更方便拖延的位置。",
        effects: { energy: -1, alienation: 2, inspiration: -1 }
      }
    ]
  },
  {
    id: "relationship-landlord-extra",
    actionId: "relationship",
    once: false,
    chance: 0.08,
    when: (state) => getRentCountdown() <= 2,
    title: "房东发来一条比平时更短的提醒",
    text: "没有威胁，只有那种把界限写得很清楚的简短。你可以提前解释，请求一点宽限，也可以先装作没看见。",
    choices: [
      {
        label: "主动说明情况",
        text: "你把近况说清，姿态并不体面，却至少没继续让沉默替你制造更坏的气氛。",
        effects: { energy: -2, reputation: 2, authenticity: 2 }
      },
      {
        label: "先不回",
        text: "你把消息晾着，希望今天能自己长出解决方案。拖延暂时保住了平静，也把明天推得更紧。",
        effects: { energy: 1, alienation: 2, reputation: -2 }
      }
    ]
  },
  {
    id: "relationship-friend-extra",
    actionId: "relationship",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.network >= 6,
    title: "朋友问你最近是不是变得很难约",
    text: "他不是责怪，只是说得很平静，反而更难敷衍。你可以把忙碌讲成必要代价，也可以承认自己最近确实把关系放在了更后面。",
    choices: [
      {
        label: "说自己真的太忙",
        text: "你给出了一个完全真实但不完整的理由。忙是真的，关系在你这里被不断后置也是真的。",
        effects: { network: -1, energy: 1, alienation: 2 }
      },
      {
        label: "承认自己忽略了人",
        text: "你不再只用工作当挡箭牌，这种坦白让场面有点别扭，却也让关系恢复了一点真实空气。",
        effects: { authenticity: 4, network: 2, energy: -1 }
      }
    ]
  },
  {
    id: "shadow-passkey-extra",
    actionId: "shadow",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.money <= 1500 || state.stats.scandal >= 6,
    title: "有人给你一个只用一次的内部邀请码",
    text: "它能带你进一个你本来进不去的群、局或交易链条。一次性通行证最擅长制造一种错觉，好像只进去一下不算真正参与。",
    choices: [
      {
        label: "进去看看",
        text: "你告诉自己只是观察，但真正的灰色地带往往只需要你在场，就会开始把你算进去。",
        effects: { network: 4, scandal: 5, alienation: 5, flags: ["shadowProxy"] }
      },
      {
        label: "当场删掉",
        text: "你把邀请码删掉，让自己别再多一个以后需要解释的入口。",
        effects: { authenticity: 4, energy: 1, network: -1 }
      }
    ]
  },
  {
    id: "shadow-package-extra",
    actionId: "shadow",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.money <= 1000 || state.stats.network >= 10,
    title: "有人请你代收一个来路不清的包裹",
    text: "理由说得很轻，报酬也给得直接。你知道最危险的从来不是已经清楚的犯罪，而是那些被包装成顺手帮忙的小动作。",
    choices: [
      {
        label: "答应代收",
        text: "你没去问里面是什么，因为你知道一旦问得太清楚，自己就更难继续装作只是帮忙。",
        effects: { money: 240, scandal: 7, alienation: 6, flags: ["crimeSeed"] }
      },
      {
        label: "拒绝碰它",
        text: "你把事情挡在门外，没有让今天多出一件以后可能会反咬你的物件。",
        effects: { authenticity: 4, network: -1, energy: 1 }
      }
    ]
  },
  {
    id: "shadow-dirt-extra",
    actionId: "shadow",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.scandal >= 8 || state.stats.network >= 10,
    title: "有人说手里有别人的黑料，想找你一起卖",
    text: "信息时代最便宜的暴力之一，就是把别人的脆弱重新定价。你可以借这次机会分一杯羹，也可以承认自己并不想再多背一层污迹。",
    choices: [
      {
        label: "先看看内容",
        text: "你没有立刻点头，只是先看了一眼。很多越界不是从答应开始，而是从觉得看看也没关系开始。",
        effects: { network: 3, scandal: 5, alienation: 4, tags: ["leak-market"] }
      },
      {
        label: "直接走开",
        text: "你不想让好奇心带着自己继续往里滑。拒绝有时不会让人变高尚，只会让局面少恶化一点。",
        effects: { authenticity: 4, energy: 1 }
      }
    ]
  },
  {
    id: "shadow-club-extra",
    actionId: "shadow",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.fans >= 4000 || state.stats.network >= 12,
    title: "你被邀请去一个只允许熟人带人的局",
    text: "那里可能有资源，也可能只有一堆互相利用的笑脸。夜里的门槛最擅长把风险包装成稀缺感。",
    choices: [
      {
        label: "去一趟看看",
        text: "你带着一点戒心进去，也把自己往更复杂的人情网里推近了一步。",
        effects: { network: 5, money: 80, alienation: 4, scandal: 3 }
      },
      {
        label: "不去",
        text: "你把这个夜晚让给别处，不把每一扇看起来有资源的门都当成必须推开的机会。",
        effects: { energy: 2, authenticity: 3, network: -1 }
      }
    ]
  },
  {
    id: "shadow-sponsor-extra",
    actionId: "shadow",
    once: false,
    chance: 0.1,
    when: (state) => state.stats.money <= 1300 || state.stats.fans >= 5000,
    title: "一个匿名账号愿意长期“资助”你",
    text: "条件写得很少，金额却比多数正经合作更爽快。你知道这种过度简单的好意通常都在别处藏着价格。",
    choices: [
      {
        label: "先拿这一笔",
        text: "你没有问太多，把钱收下。某种依赖就这样从最顺手的一次缓解开始。",
        effects: { money: 320, alienation: 5, scandal: 3 }
      },
      {
        label: "不接受匿名资助",
        text: "你把转账退回去，保住了清白感，也继续保留了现金流的紧张。",
        effects: { authenticity: 4, money: -20, energy: 1 }
      }
    ]
  },
  {
    id: "random-clinic-extra",
    actionId: "random",
    once: false,
    chance: 0.11,
    when: (state) => state.stats.energy <= 70,
    title: "学校邮箱推送了一次免费心理咨询名额",
    text: "邮件语气平静得像在介绍一门普通课程，可你知道真正困难的不是有没有名额，而是承不承认自己也许确实需要它。",
    choices: [
      {
        label: "预约试试",
        text: "你给自己留了一个更慢的出口，虽然还不知道它会不会真的有效。",
        effects: { energy: 5, authenticity: 3, alienation: -2 }
      },
      {
        label: "以后再说",
        text: "你把邮件星标，却没有真的点进去。知道自己需要帮助，和允许帮助发生，是两段距离。",
        effects: { energy: 1, alienation: 2 }
      }
    ]
  },
  {
    id: "random-lease-extra",
    actionId: "random",
    once: false,
    chance: 0.08,
    when: (state) => getRentCountdown() <= 4,
    title: "房东突然发来续租意向调查",
    text: "问题来得比你预期更早，像提醒你这份生活并不只要交当下的账，还要不断证明自己配继续留在这里。",
    choices: [
      {
        label: "先表示愿意续",
        text: "你提前给出一个看起来稳的态度，像替未来先占一块还没真正付得起的地。",
        effects: { reputation: 2, energy: -1, alienation: 1 }
      },
      {
        label: "暂时不回复",
        text: "你决定不提前承诺，把问题留给更后一点的自己。明智和拖延有时长得很像。",
        effects: { energy: 1, reputation: -1, authenticity: 1 }
      }
    ]
  },
  {
    id: "random-campus-extra",
    actionId: "random",
    once: false,
    chance: 0.1,
    when: (state) => state.day >= 5,
    title: "学校里有人认出你，语气却带着点讥讽",
    text: "那种熟悉感并不完全是支持，更像在提醒你线上形象已经开始渗进线下空气。你可以反击，也可以让这件事只在体内停一停。",
    choices: [
      {
        label: "反问回去",
        text: "你没有继续装作没听见，至少让自己在那一刻没有彻底退场。",
        effects: { reputation: 2, scandal: 2, energy: -2 }
      },
      {
        label: "装作没事",
        text: "你继续往前走，把那点刺留给晚上再消化。平静保住了，火气也一起被吞了回去。",
        effects: { alienation: 2, energy: -1, authenticity: 1 }
      }
    ]
  },
  {
    id: "random-scholarship-extra",
    actionId: "random",
    once: false,
    chance: 0.08,
    when: (state) => state.stats.reputation >= 8 || state.stats.inspiration >= 10,
    title: "学院公布了一个小额创作资助",
    text: "金额不算大，却足够在你目前的生活里产生真实影响。申请需要把自己讲得更值得支持一点，而这种事你最近已经做得太熟了。",
    choices: [
      {
        label: "提交申请",
        text: "你把经历整理成一段更容易被通过的叙事。诚实还在，只是被修得更像评审会喜欢的形状。",
        effects: { money: 180, reputation: 2, alienation: 2 }
      },
      {
        label: "放弃申请",
        text: "你不想再把自己写成一份能被审批的材料，哪怕这会让接下来继续更紧一点。",
        effects: { authenticity: 4, money: -20, inspiration: 2 }
      }
    ]
  },
  {
    id: "random-sublet-extra",
    actionId: "random",
    once: false,
    chance: 0.09,
    when: (state) => state.stats.money <= 1000 || state.stats.energy <= 70,
    title: "朋友说也许可以把房间临时转租几天",
    text: "这主意听起来灵活，实际却会让生活再松动一点。你可以把稳定再拆开换几口气，也可以死守这间公寓的完整。",
    choices: [
      {
        label: "考虑短租出去",
        text: "你开始把住所也纳入现金流管理，现实立刻变得更灵活，也更没有地面感。",
        effects: { money: 220, energy: -2, alienation: 3 }
      },
      {
        label: "不折腾住处",
        text: "你还是想保住一个至少不需要继续谈判的角落。穷的时候，坚持本身也会很贵。",
        effects: { authenticity: 3, money: -30, energy: 1 }
      }
    ]
  }
];

const conditionalEvents = [
  {
    id: "documentary-turn",
    once: true,
    when: (state) => hasTag(state, "documentary-friend") && state.stats.scandal >= 24,
    title: "有人提议拍一部关于你的纪录片",
    text: "那位纪录片学生找到你，说想把你的崛起和变形都拍进去，不做洗白，也不做猎奇。你第一次感到“被看见”和“被揭穿”几乎是同义词。",
    effects: { authenticity: 8, alienation: -2, flags: ["docProject"] }
  },
  {
    id: "capital-contract",
    once: true,
    when: (state) => state.stats.fans >= 180000 && state.stats.network >= 28,
    title: "经纪公司递来合约",
    text: "一份经纪合同被放在你面前，条款礼貌、周到、锋利，像一件剪裁完美的外套。它承诺稳定变现，也默许你逐步失去对叙事的所有权。",
    effects: { money: 900, network: 8, alienation: 10, flags: ["signedAttention"] }
  },
  {
    id: "collapse-warning",
    once: true,
    when: (state) => state.stats.energy <= 18 && state.stats.alienation >= 38,
    title: "身体先于人格抗议",
    text: "你在镜前彩排表情时忽然短暂失神，像被从自己身上拔掉。医生建议休息，粉丝建议坚持，品牌建议稳定输出。每一种建议都不像是说给你听的。",
    effects: { reputation: -2, authenticity: 3, flags: ["meltdownTrack"] }
  },
  {
    id: "revolution-door",
    once: true,
    when: (state) => hasTag(state, "protest-seen") && state.stats.authenticity >= 35 && state.stats.fans >= 18000,
    title: "地下组织邀请你加入",
    text: "你被拉进一个小型线下组织，他们想借你的影响力扩散行动，而不是卖货。你意识到镜头也许不止能贩卖欲望，它偶尔也能传递火种。",
    effects: { network: 10, authenticity: 6, flags: ["revolutionTrack"] }
  },
  {
    id: "love-solidifies",
    once: true,
    when: (state) => hasFlag(state, "loveInterest") && state.stats.authenticity >= 28 && state.day >= 10,
    title: "有人开始认真地爱你",
    text: "那位摄影系学生问你，如果不拍也不发，你还愿不愿意一起去海边。这个问题比任何商业邀约都更难回答，因为它不许你把自己包装成答案。",
    effects: { energy: 8, inspiration: 8, flags: ["loveRoute"] }
  },
  {
    id: "cancel-wave",
    once: true,
    when: (state) => state.stats.scandal >= 34 && state.stats.fans >= 9000 && state.day >= 14,
    title: "取消文化的浪潮来了",
    text: "旧合作、旧言论、旧玩笑被整编成一条时间线，公众像法庭一样高效。你第一次发现，算法不仅制造名望，也制造处刑台。",
    effects: { reputation: -16, fans: -5000, money: -260, alienation: 5, flags: ["cancelled"] }
  },
  {
    id: "onlyfans-door",
    once: true,
    when: (state) => state.stats.money <= 220 && state.stats.fans >= 16000 && state.stats.scandal >= 14 && state.day >= 14,
    title: "身体被建议重新定价",
    text: "一位运营顾问说你已经有足够的注意力基础，差的只是更直接的变现。资本擅长把“最后的边界”说成“新的赛道”。",
    effects: { money: 120, alienation: 8, flags: ["bodyMonetize"] }
  },
  {
    id: "commercial-midgame-push",
    once: true,
    when: (state) => state.day >= 16
      && state.stats.fans >= 45000
      && state.stats.network >= 18
      && (hasCommercialTrack(state) || hasAnyTag(state, ["brand-entry", "brand-deal"])),
    title: "资本开始把你当成可复制资产",
    text: "中介、公关和品牌比以前更快回复你，报价也开始不再像试探，而像投资前的摸底。你感到机会正在靠近，也感到某种更整齐的异化在靠近。",
    effects: { fans: 28000, money: 420, network: 7, authenticity: -4, alienation: 9, flags: ["signedAttention"] }
  },
  {
    id: "shell-midgame-push",
    once: true,
    when: (state) => state.day >= 18
      && hasCommercialTrack(state)
      && state.stats.alienation >= 38
      && state.stats.authenticity <= 26,
    title: "你开始被当成一台稳定的流量机器",
    text: "排期表和素材模板一张张叠起来，工作终于顺得像不再需要你本人。效率越高，你越感到自己正被替换成一个更好管理的版本。",
    effects: { fans: 52000, money: 280, authenticity: -5, alienation: 11 },
    activatesArc: "shell-acceleration"
  },
  {
    id: "shell-final-eve",
    once: true,
    when: (state) => state.day >= 27
      && hasCommercialTrack(state)
      && state.stats.authenticity <= 24
      && state.stats.alienation >= 48,
    title: "最后一晚，你已经像一套可复制模板",
    text: "团队在群里讨论你的内容时，语气像在讨论一个已经脱离肉身的资产包。你看着他们替你安排下周的所有情绪，突然意识到自己并没有被毁掉，只是被过度优化到了几乎不剩下谁。",
    effects: { fans: 42000, money: 220, authenticity: -5, alienation: 10, flags: ["endingMillionShellPriority"] }
  },
  {
    id: "platform-lockin",
    once: true,
    when: (state) => state.day >= 15
      && hasPlatformTrack(state)
      && state.stats.alienation >= 32,
    title: "平台把你训练成了自己的延伸插件",
    text: "你越来越快地知道什么会火，也越来越慢地想起自己原本为什么要拍。最糟糕的不是被替代，而是你开始享受这种高效。",
    effects: { fans: 18000, inspiration: -6, authenticity: -5, alienation: 12 }
  },
  {
    id: "radical-consolidation",
    once: true,
    when: (state) => state.day >= 15
      && hasFlag(state, "radicalSeed")
      && state.stats.fans >= 12000,
    title: "更激烈的话语替你打开了新的受众池",
    text: "你的言辞被更大范围地搬运、剪辑和重复引用。立场越绝对，传播越省力，观众也越愿意把你当作他们情绪的代言人。",
    effects: { fans: 22000, scandal: 8, reputation: -5, alienation: 8 }
  },
  {
    id: "body-route-midgame",
    once: true,
    when: (state) => state.day >= 16
      && hasFlag(state, "bodyMonetize"),
    title: "身体经济开始给你真正的现金反馈",
    text: "你发现这条路的现金流比多数内容线都更直接。收益来得快，羞耻也来得快，但平台从不负责区分两者。",
    effects: { money: 420, fans: 6000, authenticity: -5, alienation: 9 }
  },
  {
    id: "body-route-lock",
    once: true,
    when: (state) => state.day >= 18
      && hasFlag(state, "bodyMonetize")
      && state.stats.fans >= 18000,
    title: "你已经很难把这条路再说成偶然",
    text: "后台开始明确建议你继续把身体、欲望和若即若离的亲密感打包成主要产品。你知道自己只要点头，后面的增长就会比大多数内容都更直接。",
    effects: { money: 520, fans: 12000, authenticity: -8, alienation: 11, flags: ["bodyMonetize", "endingOnlyfansPriority"] }
  },
  {
    id: "cancel-tailwind",
    once: true,
    when: (state) => state.day >= 18
      && (hasFlag(state, "cancelled") || state.stats.scandal >= 32)
      && state.stats.reputation <= 26,
    title: "二次追杀开始了",
    text: "本来快要沉下去的旧事又被重新整理、拼接和扩散。你发现被取消并不是一次爆炸，而是一次次回潮，直到你很难再要求别人把你当复杂的人看。",
    effects: { reputation: -9, scandal: 8, fans: 4000, alienation: 6, flags: ["cancelled"] },
    activatesArc: "cancel-spiral"
  },
  {
    id: "cancel-final-eve",
    once: true,
    when: (state) => state.day >= 27
      && hasFlag(state, "cancelled")
      && state.stats.reputation <= 28,
    title: "最后一晚，所有解释都已经晚了",
    text: "你改了几遍澄清文案，又删掉了。不是因为没有可说的话，而是你终于明白这件事已经不是解释能解决的了。互联网并不总想知道真相，它更想确定谁该被留在最坏的位置上。",
    effects: { reputation: -8, scandal: 6, alienation: 5, flags: ["endingCancelledPriority"] }
  },
  {
    id: "love-exit-midgame",
    once: true,
    when: (state) => state.day >= 16
      && hasFlag(state, "loveRoute")
      && state.stats.authenticity >= 34,
    title: "你第一次认真想过离开这一切",
    text: "那个人没有问你下一条内容准备发什么，只问你周末愿不愿意把手机关掉。这个提议轻得像一句玩笑，却比任何宏大理想都更接近救赎。",
    effects: { energy: 10, authenticity: 8, alienation: -8, inspiration: 6 }
  },
  {
    id: "love-exit-final-eve",
    once: true,
    when: (state) => state.day >= 27
      && hasFlag(state, "loveRoute")
      && state.stats.authenticity >= 34
      && state.stats.alienation <= 30,
    title: "你们认真讨论了要不要一起退出",
    text: "你们把手机扣在桌上，第一次把未来谈成一种不需要被证明的东西。没有品牌、没有排期、没有观众需要被安抚，只有一个非常朴素的问题: 如果明天不再营业，你会不会更像自己。",
    effects: { energy: 8, authenticity: 8, alienation: -8, inspiration: 4, flags: ["endingLoveExitPriority"] }
  },
  {
    id: "forgotten-collapse",
    once: true,
    when: (state) => state.day >= 20
      && state.stats.fans <= 7000
      && state.stats.money <= 320,
    title: "连熟悉你的人都开始很少提到你",
    text: "没有人宣布你的失败，只是越来越少的人记得你还在更新。最钝的失去往往不是被讨厌，而是慢慢退出别人的句子。",
    effects: { fans: -3200, money: -110, network: -5, reputation: -3 },
    activatesArc: "forgotten-drift"
  },
  {
    id: "forgotten-final-eve",
    once: true,
    when: (state) => state.day >= 27
      && state.stats.fans <= 9000
      && state.stats.money <= 320
      && state.stats.network <= 12,
    title: "最后一晚，像谁都没有真的等你更新",
    text: "你刷新后台很多次，数字没有继续往下掉，也没有任何值得抓住的回弹。安静得过分的页面像某种礼貌的送别，提醒你并不是所有离场都配有掌声或嘘声。",
    effects: { fans: -2600, money: -90, network: -3, reputation: -2, flags: ["endingForgottenPriority"] }
  },
  {
    id: "onlyfans-escalation",
    once: true,
    when: (state) => state.day >= 19
      && hasFlag(state, "bodyMonetize")
      && state.stats.authenticity <= 36,
    title: "有人劝你别再假装这只是过渡",
    text: "运营告诉你，既然观众已经习惯以更直接的方式看你，就不要再把这条线说成临时方案。市场最喜欢的，是人在自我解释彻底疲惫之后终于认命的样子。",
    effects: { money: 360, fans: 9000, authenticity: -7, alienation: 10 },
    activatesArc: "body-market-arc"
  },
  {
    id: "onlyfans-final-eve",
    once: true,
    when: (state) => state.day >= 27
      && hasFlag(state, "bodyMonetize")
      && state.stats.authenticity <= 38,
    title: "最后一晚，你把身体正式当成主营业务",
    text: "你不再用‘过渡’、‘副线’、‘暂时’这些词为自己留后路，而是第一次完整承认这就是此刻最有效的变现方式。承认并没有带来轻松，只是让羞耻停止假装自己还会回头。",
    effects: { money: 320, fans: 6000, authenticity: -6, alienation: 8, flags: ["endingOnlyfansPriority"] }
  },
  {
    id: "radical-hardening",
    once: true,
    when: (state) => state.day >= 18
      && hasFlag(state, "radicalSeed")
      && state.stats.alienation >= 30,
    title: "你的犹豫开始被自己人视为软弱",
    text: "新的受众并不奖励复杂，他们只想要更快、更硬、更明确的姿态。你很快学会，越少保留，越容易被当作真正可靠的人。",
    effects: { fans: 16000, reputation: -7, scandal: 7, authenticity: -5, alienation: 10 }
  },
  {
    id: "radical-lock",
    once: true,
    when: (state) => state.day >= 18
      && hasFlag(state, "radicalSeed")
      && state.stats.fans >= 14000,
    title: "你被推到了更极端的位置上",
    text: "一群更激进的账号把你当成自己人，主动替你扩散、剪辑和护航。你不必再解释自己是否真的相信这些口号，因为流量已经替你做出了回答。",
    effects: { fans: 18000, scandal: 9, reputation: -8, authenticity: -6, alienation: 12, flags: ["radicalSeed", "endingRadicalPriority"] }
  },
  {
    id: "reality-love-boost",
    once: true,
    when: (state) => state.day >= 17
      && hasFlag(state, "realityLoveArc"),
    title: "亲密关系开始自己生产流量",
    text: "你们随手一张合照都能引发长串猜测和站队，连沉默都被读出剧情推进。爱情在此刻不再只是关系，也成了一台能自动运转的叙事发动机。",
    effects: { fans: 15000, money: 220, authenticity: -5, alienation: 8 }
  },
  {
    id: "reality-love-lock",
    once: true,
    when: (state) => state.day >= 18
      && hasFlag(state, "realityLoveArc")
      && state.stats.fans >= 14000,
    title: "平台已经默认你们是一档节目",
    text: "品牌、搬运号和观众都开始把你们当成一条持续更新的情侣线。你甚至不必主动营业，关系本身就会被推着进入下一集。",
    effects: { fans: 22000, money: 260, authenticity: -7, alienation: 10, flags: ["realityLoveArc", "endingRealityLovePriority"] }
  },
  {
    id: "split-live-spiral",
    once: true,
    when: (state) => state.day >= 18
      && hasTag(state, "messy-live")
      && state.stats.energy <= 34,
    title: "你开始期待下一次失控能不能更有内容",
    text: "最危险的不是失控本身，而是你开始把失控也纳入创作排程。你一边害怕自己再裂一点，一边又清楚那会很值钱。",
    effects: { fans: 9000, energy: -10, scandal: 4, alienation: 11 }
  },
  {
    id: "split-live-midgame",
    once: true,
    when: (state) => state.day >= 16
      && hasTag(state, "messy-live"),
    title: "那次失控直播被反复切片",
    text: "你的失神、停顿和破音被一遍遍搬运，像一段比本人更有生命力的证词。观看让失控获得了第二次寿命，也让你更难回到普通表达。",
    effects: { fans: 14000, energy: -8, scandal: 5, alienation: 10 }
  },
  {
    id: "forgotten-slide",
    once: true,
    when: (state) => state.day >= 18
      && state.stats.fans <= 9000
      && state.stats.money <= 260,
    title: "算法对你越来越冷",
    text: "你没有犯大错，也没有大成，只是逐渐失去被优先分发的资格。这个时代最常见的失败不是爆炸，而是静静沉下去。",
    effects: { fans: -2600, money: -80, network: -4, inspiration: -3 },
    activatesArc: "forgotten-drift"
  },
  {
    id: "cinema-door-midgame",
    once: true,
    when: (state) => state.day >= 17
      && hasCinemaTrack(state)
      && state.stats.reputation >= 42,
    title: "更长的镜头开始认真看向你",
    text: "有人不再只想买一条短视频，而想看你如何处理一个更完整的段落。你第一次觉得自己也许能从竖屏里横着走出去。",
    effects: { fans: 22000, reputation: 6, network: 8, authenticity: 3 }
  },
  {
    id: "million-shell-last-day",
    once: true,
    when: (state) => state.day === TOTAL_DAYS
      && state.actionsLeft === 0
      && hasCommercialTrack(state)
      && state.stats.authenticity <= 26
      && state.stats.alienation >= 42
      && Math.random() < 0.035,
    title: "最后一天，你被算法抬进了百万人群",
    text: "一条过于精准的切片被推向了远超你预期的人群，像一场迟到的、冰冷的赦免。粉丝暴涨得近乎失真，而你却在那一刻比任何时候都更像一个被批量复制出来的外壳。",
    effects: { fans: 980000, money: 600, authenticity: -6, alienation: 14, flags: ["signedAttention", "endingMillionShellPriority"] }
  },
  {
    id: "forgotten-last-day",
    once: true,
    when: (state) => state.day === TOTAL_DAYS
      && state.actionsLeft === 0
      && state.stats.fans >= 12000
      && state.stats.money <= 420
      && Math.random() < 0.035,
    title: "最后一天，九成关注在一夜之间蒸发",
    text: "平台改了推荐口径，旧内容被批量降权，几乎所有曾经托住你的数字都像退潮一样瞬间离开。你看着后台空下来，第一次明白遗忘并不总是慢慢发生，它也可能像断电。",
    effects: { fans: -120000, money: -160, network: -8, reputation: -5, authenticity: 2, alienation: -2, flags: ["endingForgottenPriority"] }
  },
  {
    id: "anonymous-thought",
    once: true,
    when: (state) => state.stats.alienation >= 34 && state.stats.authenticity >= 24,
    title: "你开始幻想消失",
    text: "某天回家路上，你突然想，如果明天不再上线，世界会不会比自己想象中更快归于平静。匿名像一种清洁的死亡方式。",
    effects: { inspiration: 4, flags: ["vanishThought"] }
  },
  {
    id: "anonymous-drift",
    once: true,
    when: (state) => state.day >= 18
      && hasFlag(state, "vanishThought")
      && state.stats.authenticity >= 30
      && state.stats.alienation <= 36,
    title: "你开始认真删减自己在网络上的痕迹",
    text: "不是戏剧性的退网宣言，而是把链接、简介、习惯和自动回复一点点撤下来。你发现真正的离场并不依赖观众批准，它只依赖你是否愿意不再把每次沉默都解释成内容策略。",
    effects: { authenticity: 4, alienation: -5, inspiration: 4 },
    activatesArc: "anonymous-fade"
  },
  {
    id: "anonymous-final-eve",
    once: true,
    when: (state) => state.day >= 27
      && hasFlag(state, "vanishThought")
      && state.stats.authenticity >= 32
      && state.stats.alienation <= 34,
    title: "最后一晚，你把名字从明天的安排里删掉了",
    text: "你没有写告别，也没有预留一个方便被转发的姿态，只是把那些原本会继续调用你的日程一个个清空。你第一次意识到，安静并不总是空白，它也可能是一种被主动选择的形式。",
    effects: { authenticity: 5, alienation: -6, energy: 4, flags: ["endingAnonymousPriority"] }
  }
];

function hasCommercialTrack(currentState) {
  return hasFlag(currentState, "signedAttention")
    || hasFlag(currentState, "soldTone")
    || hasAnyTag(currentState, ["brand-entry", "brand-deal", "late-sponsored", "soft-domestication", "asset-language"]);
}

function hasExploitativeTrack(currentState) {
  return hasFlag(currentState, "bodyMonetize")
    || hasFlag(currentState, "realityLoveArc")
    || hasAnyTag(currentState, ["love-content", "named-by-chat", "meme-face"]);
}

function hasCinemaTrack(currentState) {
  return hasAnyTag(currentState, ["student-film", "documentary-friend", "podcast-guest", "gallery-talk", "rare-director-mail"])
    || hasFlag(currentState, "docProject");
}

function hasCrimeTrack(currentState) {
  return hasFlag(currentState, "crimeSeed")
    || hasFlag(currentState, "blackmailSeed")
    || hasFlag(currentState, "shadowProxy")
    || hasAnyTag(currentState, ["proxy-deal", "extortion-whisper", "leak-market", "shadow-network", "specific-fall"]);
}

function hasPlatformTrack(currentState) {
  return hasAnyTag(currentState, ["algo-study", "template-life", "rage-bait", "algorithm-boost", "algorithm-whiplash", "preemptive-obedience", "emotion-template"]);
}

const endings = [
  {
    id: "million-shell",
    title: "百万粉丝的空壳",
    teaser: "人们认识你的头像，却不再认识你的声音。",
    when: (state) => state.stats.fans >= 120000
      && state.stats.authenticity <= 24
      && state.stats.alienation >= 48
      && hasCommercialTrack(state)
  },
  {
    id: "cancelled-person",
    title: "被取消的人",
    teaser: "不是沉默，而是每一句解释都被提前剪成了证词。",
    when: (state) => (hasFlag(state, "cancelled") || state.stats.scandal >= 40)
      && state.stats.reputation <= 30
      && state.stats.fans >= 9000
  },
  {
    id: "capital-signing",
    title: "资本的签约",
    teaser: "你的名字被装进合约，像一枚带编号的未来。",
    when: (state) => hasFlag(state, "signedAttention")
      && state.stats.network >= 24
      && state.stats.fans >= 60000
      && state.stats.money >= 900
  },
  {
    id: "real-breakout",
    title: "真实的爆红",
    teaser: "你被看见，不是因为最像模板，而是因为还保留着裂纹。",
    when: (state) => state.stats.fans >= 70000
      && state.stats.authenticity >= 44
      && state.stats.reputation >= 52
      && !hasCommercialTrack(state)
  },
  {
    id: "mental-collapse",
    title: "精神崩溃",
    teaser: "身体先退出，灵魂才被迫承认早已超负荷。",
    when: (state) => state.stats.energy <= 0
      || hasFlag(state, "meltdownTrack")
      || (state.stats.energy <= 10 && state.stats.alienation >= 44)
  },
  {
    id: "underground-revolutionary",
    title: "地下革命者",
    teaser: "你不再追逐曝光，而是把曝光变成暗号。",
    when: (state) => hasFlag(state, "revolutionTrack") && state.stats.authenticity >= 46 && state.stats.network >= 26
  },
  {
    id: "love-and-exit",
    title: "爱与退出",
    teaser: "你终于把某个人置于观众之前。",
    when: (state) => hasFlag(state, "loveRoute") && state.stats.alienation <= 26 && state.stats.authenticity >= 36
  },
  {
    id: "fake-death",
    title: "虚假死亡",
    teaser: "你伪造消失，让流量为葬礼做传播。",
    when: (state) => hasFlag(state, "vanishThought")
      && state.stats.scandal >= 26
      && state.stats.fans >= 32000
      && state.stats.alienation >= 32
  },
  {
    id: "forgotten",
    title: "无人记得他",
    teaser: "算法没有恨你，它只是把你忘了。",
    when: (state) => state.stats.fans <= 12000 && state.stats.money <= 320 && state.stats.network <= 14
  },
  {
    id: "onlyfans-pivot",
    title: "OnlyFans 转型",
    teaser: "当内容耗尽，身体被定义为最后的资产。",
    when: (state) => hasFlag(state, "bodyMonetize")
      && state.stats.money >= 220
      && state.stats.authenticity <= 40
      && (hasExploitativeTrack(state) || state.stats.alienation >= 28)
  },
  {
    id: "political-extreme",
    title: "政治极端化路线",
    teaser: "复杂的现实被你剪成敌我二分，流量迅速回报了这种简化。",
    when: (state) => hasFlag(state, "radicalSeed")
      && state.stats.reputation <= 46
      && state.stats.fans >= 15000
      && state.stats.alienation >= 24
  },
  {
    id: "fake-charity-scam",
    title: "假慈善骗局",
    teaser: "善意成了包装纸，账目才是故事真正的主角。",
    when: (state) => hasFlag(state, "fakeCharitySeed")
      && state.stats.scandal >= 30
      && state.stats.money >= 550
  },
  {
    id: "reality-show-love",
    title: "恋爱真人秀化",
    teaser: "亲密被切成片段，爱情变成一种高互动率栏目。",
    when: (state) => hasFlag(state, "realityLoveArc")
      && state.stats.fans >= 14000
      && state.stats.alienation >= 24
  },
  {
    id: "split-live",
    title: "精神分裂式直播",
    teaser: "你在直播里同时扮演本人、角色和旁白，连崩溃都像策划。",
    when: (state) => hasTag(state, "messy-live")
      && state.stats.alienation >= 38
      && state.stats.energy <= 30
  },
  {
    id: "algorithm-slave",
    title: "算法奴隶",
    teaser: "你不再决定拍什么，而是平台借你的手继续生产自己。",
    when: (state) => state.stats.alienation >= 48
      && hasPlatformTrack(state)
  },
  {
    id: "documentary-reversal",
    title: "真实曝光，纪录片反转",
    teaser: "一部纪录片替你夺回叙事，也顺手处决了你曾伪装的版本。",
    when: (state) => hasFlag(state, "docProject") && state.stats.authenticity >= 40 && state.stats.scandal >= 24
  },
  {
    id: "crime-edge",
    title: "犯罪边缘",
    teaser: "你以为只是靠近深渊，后来才知道法律不承认这种修辞。",
    when: (state) => hasCrimeTrack(state)
      && state.stats.scandal >= 30
      && state.stats.alienation >= 30
  },
  {
    id: "anonymous-vanish",
    title: "匿名消失",
    teaser: "没有声明，没有告别，只留下几个失效链接。",
    when: (state) => hasFlag(state, "vanishThought")
      && state.stats.authenticity >= 32
      && state.stats.alienation <= 34
  },
  {
    id: "film-crossover",
    title: "跨界成名，电影与资本",
    teaser: "镜头从竖屏横过来，你被允许拥有更昂贵的构图。",
    when: (state) => hasCinemaTrack(state)
      && state.stats.network >= 24
      && state.stats.reputation >= 46
      && state.stats.fans >= 42000
  }
];

const endingTexts = {
  "million-shell": "你达到了旁人梦寐以求的量级。经纪人替你定档，品牌替你修辞，粉丝替你解释你为何沉默。你站在百万关注的高台上，却像一栋早被搬空的建筑。德波说景观将真实生活倒置为表象，而你终于成了那句理论的走路版本。人们每天都在看见你，但没有任何人真正遇见你，连你自己也没有。",
  "cancelled-person": "你成为舆论共同完成的一次剥离。往日的模糊、玩笑、暧昧和投机，被一条条拎出，组成一个清晰得过分的恶人肖像。你试图解释，可互联网只擅长储存，不擅长宽恕。最后你明白，被取消并不等于消失，而是被永远固定在某个最坏版本里，供所有人复用。",
  "capital-signing": "合约签下那天，你穿了最体面的外套，像去参加自己被收编的仪式。公司把你的未来拆分成内容矩阵、商业版图和季度目标。钱终于不再那么紧张，房租不再像刀，但你每说一句话前都会先想到品牌安全。资本并没有杀死你，它只是让你学会把每一次呼吸都按 ROI 报表整理。",
  "real-breakout": "你没有完全迎合，也没有固执地拒绝世界。你学会了借用平台，却没有把灵魂全部寄存在那里。爆红来得并不突然，它像一场长期诚实终于获得回音的积累。你接受采访时说，真正重要的不是被多少人看见，而是在被看见的同时没有彻底背叛自己。那一刻你第一次不像在表演。",
  "mental-collapse": "崩溃发生时并不戏剧化。没有配乐，没有慢镜头，只有某天起床时你无法再扮演那个持续在线的人。医生说需要暂停，品牌说违约，粉丝说失望，只有你的身体说它早已发出过很多次警告。你终于承认，精神不是无限可透支的云端资源。你曾把自己当平台，最后平台先关闭了你。",
  "underground-revolutionary": "你开始把流量导向线下，把点赞变成行动暗号，把镜头变成组织工具。你不再关心单条视频的数据曲线，而更在意今晚会有多少人到场。阿伦特所说的公共空间，在你这里不再是理论词汇，而是仓库、楼顶、旧书店、社区厨房。你没有成为更大的明星，但你成为了更难被收编的人。",
  "love-and-exit": "你决定退出，不是因为世界终于善良，而是因为你终于遇见了不要求你持续营业的人。你们去了海边，没有拍照，也没有发定位。后来有人问你为什么不继续，你想了很久，只说生活不该总被证明。爱并没有替你解决所有问题，它只是让你发现，自己可以不把全部存在交给观众裁定。",
  "fake-death": "你发布了模糊的告别、无人证实的传闻和一组令人心碎的旧照片。舆论在数小时内替你搭好了灵堂，播放量与悼词一起疯涨。你躲在另一个账号后面看着自己的“死亡”扩散，忽然感到一种近乎宗教的空虚。你证明了在这个时代，死亡也可以被运营，而这恰恰是最可怕的活着方式。",
  forgotten: "你没有爆红，也没有翻车，甚至没有以足够失败的姿态留下传说。算法像风吹过廉价海报一样把你掀走，人们迅速转向新的面孔。几年后只有你自己还记得那些凌晨、那些剪辑、那些为了房租而妥协的时刻。遗忘不总是暴力，它有时只是社会运行效率过高的副产品。",
  "onlyfans-pivot": "你起初告诉自己这只是商业模式调整，后来才明白它更像一场边界重估。镜头更近，身体成为最直接的叙事载体，羞耻与收益同步增长。你并非受害者，也并非完全自由；你只是被逼到一个只能把自己拆得更具体的市场角落。资本最后总能找到剩余价值，而身体是它最古老的发明之一。",
  "political-extreme": "你学会了用最清楚的敌我叙事换取最快的扩散，复杂现实被压缩成易传播的战斗口号。人们爱你，不是因为你解释得更好，而是因为你让他们更快地愤怒。你逐渐失去怀疑的能力，仿佛任何迟疑都会降低互动率。极端化从不是思想成熟，它更像算法对情绪效率的最终优化。",
  "fake-charity-scam": "项目最初只是你在深夜里觉得不会被发现的一次弯路，后来它长成一整套漂亮话术和混乱账本。你参加活动、拥抱受助者、发布泪目视频，而真正流动最快的是赞誉和资金。直到一份匿名材料被公开，所有善意立刻反噬回来。你终于看清，伪善最大的成本不是坐牢，而是再也无法相信自己曾有过真心。",
  "reality-show-love": "你们的关系从第一次牵手开始就同时属于彼此和观众。争吵要选角度，和解要分上下集，亲密被训练成高潮点。数据证明爱情确实比观点更好卖，但你也渐渐分不清哪句告白是说给对方，哪句是说给镜头。最后你们没有真正分手，只是被剪成了一档不断续订的节目。",
  "split-live": "某个夜晚你在直播里像同时住着几个人。一个在哭，一个在解释，一个在观察自己哭。弹幕夸你真实，也有人说你演得高明。你盯着屏幕里的自己，忽然不再确信哪一个才是原件。拉康会说主体本就被裂开，而平台只是把这道裂缝打上补光灯，让它看起来像内容升级。",
  "algorithm-slave": "你变得极其高效，甚至高效得令人恐惧。几点发布、什么镜头、什么情绪、什么时长，全部都由历史数据告诉你答案。你几乎不再失败，也几乎不再发明。某天深夜你想起最初想拍东西的原因，却想不起完整句子。你没有输给别人，你只是把判断力一点点外包给了推荐机制。",
  "documentary-reversal": "那部纪录片上映后，人们第一次看到你如何被制造，也看到你如何参与制造自己。有人因此原谅你，有人因此更加厌恶你，但至少叙事权不再完全属于市场通稿和切片账号。你成了一个复杂的人，而复杂通常不利于流量，却有利于真相。代价是你再也无法回到那个被轻易消费的版本。",
  "crime-edge": "你本以为自己只是擦边取火，没想到火最终沿着交易记录、偷拍视频和地下派对名单烧回来。警方、媒体和平台一起构成了另一种景观，只不过这次你站在被围观的一侧。你并非穷凶极恶，却足够暧昧，足够轻率，足够自信。很多犯罪并不始于恶，而始于人误以为自己可以承受后果。",
  "anonymous-vanish": "你没有策划一场离场，也没有留下能被转发的感言。只是某天起不再更新，手机号注销，公寓退租，名字从所有待办事项里撤回。最初有人猜测你在酝酿大招，后来大家各自忙于新的热搜。你去了别处，也许还是写东西，也许只是正常生活。匿名不是失败，而是一种迟来的主权恢复。",
  "film-crossover": "一个制片人看中了你镜头里的城市质感和自我叙事能力，邀请你参与一部电影项目。横屏、长镜头、工业体系、资本预算，所有你曾在短视频里模拟过的野心，忽然有了更昂贵的容器。你知道这不是逃离商业，只是进入更大的商业，但至少在新的景框里，你还有机会把复杂保留下来。"
};

const fallbackEndings = ["real-breakout", "capital-signing", "algorithm-slave", "forgotten", "love-and-exit"];

const dayLabel = document.getElementById("day-label");
const weekLabel = document.getElementById("week-label");
const actionsLabel = document.getElementById("actions-label");
const rentLabel = document.getElementById("rent-label");
const statsGrid = document.getElementById("stats-grid");
const narrative = document.getElementById("narrative");
const actionsContainer = document.getElementById("actions-container");
const logContainer = document.getElementById("log-container");
const endingCollection = document.getElementById("ending-collection");
const systemTip = document.getElementById("system-tip");
const restartButton = document.getElementById("restart-button");
const clearSaveButton = document.getElementById("clear-save-button");
const rewindDayButton = document.getElementById("rewind-day-button");
const openLogButton = document.getElementById("open-log-button");
const openEndingsButton = document.getElementById("open-endings-button");
const overlay = document.getElementById("overlay");
const choiceTitle = document.getElementById("choice-title");
const choiceText = document.getElementById("choice-text");
const choiceOptions = document.getElementById("choice-options");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const modals = {
  log: document.getElementById("log-modal"),
  endings: document.getElementById("endings-modal"),
  choice: document.getElementById("choice-modal")
};

let state = createInitialState();
let unlockedEndings = loadUnlockedEndings();

function createInitialState() {
  const initialState = {
    day: 1,
    actionsLeft: ACTIONS_PER_DAY,
    gameOver: false,
    ending: null,
    stats: {
      fans: 1200,
      reputation: 45,
      money: 620,
      energy: 72,
      inspiration: 58,
      scandal: 4,
      network: 12,
      authenticity: 24,
      alienation: 12
    },
    tags: [],
    flags: [],
    narrativeEntries: [
      {
        title: "第 1 天",
        text: "你醒来时窗外是施工声和警笛声，城市提醒你它从不等人。",
        variant: "day-break"
      },
      {
        title: "开场",
        text: "你住在布鲁克林一间采光不稳定的公寓里，学传媒，拍短视频，欠着房租，也欠着一个还没成型的自我。纽约教人两件事，一是每个人都在出售某种版本的自己，二是最贵的通常是‘看起来毫不费力’。",
        variant: "card"
      }
    ],
    logs: [
      {
        day: 1,
        text: "游戏开始。你有 28 天，把自己变成神话、商品、废墟，或者别的东西。"
      }
    ],
    triggeredEvents: [],
    pendingChoice: null,
    activeEventModal: null,
    pendingEventQueue: [],
    activeArcs: [],
    daySnapshots: []
  };

  initialState.daySnapshots = [snapshotDayState(initialState)];
  return initialState;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function snapshotDayState(sourceState) {
  return JSON.parse(JSON.stringify({
    ...sourceState,
    pendingChoice: null,
    activeEventModal: null,
    pendingEventQueue: [],
    daySnapshots: []
  }));
}

function normalizeDaySnapshots(sourceState) {
  if (Array.isArray(sourceState.daySnapshots) && sourceState.daySnapshots.length > 0) {
    return sourceState.daySnapshots.map((snapshot) => snapshotDayState({
      ...createInitialState(),
      ...snapshot,
      stats: { ...createInitialState().stats, ...(snapshot.stats || {}) },
      tags: Array.isArray(snapshot.tags) ? snapshot.tags : [],
      flags: Array.isArray(snapshot.flags) ? snapshot.flags : [],
      narrativeEntries: Array.isArray(snapshot.narrativeEntries) ? snapshot.narrativeEntries : createInitialState().narrativeEntries,
      logs: Array.isArray(snapshot.logs) ? snapshot.logs : createInitialState().logs,
      triggeredEvents: Array.isArray(snapshot.triggeredEvents) ? snapshot.triggeredEvents : [],
      activeArcs: Array.isArray(snapshot.activeArcs) ? snapshot.activeArcs : [],
      daySnapshots: []
    }));
  }

  return [snapshotDayState(sourceState)];
}

function recordDaySnapshot() {
  const sanitizedSnapshot = snapshotDayState(state);
  const retained = Array.isArray(state.daySnapshots)
    ? state.daySnapshots.filter((snapshot) => snapshot.day < state.day)
    : [];

  retained.push(sanitizedSnapshot);
  state.daySnapshots = retained.slice(-TOTAL_DAYS);
}

function loadUnlockedEndings() {
  try {
    const raw = localStorage.getItem(ENDINGS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveUnlockedEndings() {
  localStorage.setItem(ENDINGS_KEY, JSON.stringify(unlockedEndings));
}

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !parsed.stats) {
      return null;
    }

    return parsed;
  } catch (error) {
    return null;
  }
}

function clearGameSave() {
  localStorage.removeItem(SAVE_KEY);
}

function hasTag(currentState, tag) {
  return currentState.tags.includes(tag);
}

function hasAnyTag(currentState, tags) {
  return tags.some((tag) => currentState.tags.includes(tag));
}

function hasFlag(currentState, flag) {
  return currentState.flags.includes(flag);
}

function hasAnyFlag(currentState, flags) {
  return flags.some((flag) => currentState.flags.includes(flag));
}

function addTag(tag) {
  if (!state.tags.includes(tag)) {
    state.tags.push(tag);
  }
}

function addFlag(flag) {
  if (!state.flags.includes(flag)) {
    state.flags.push(flag);
  }
}

function pushNarrative(title, text, variant = "card") {
  state.narrativeEntries.push({ title, text, variant });
  state.pendingEventQueue.push({ title, text, variant });
  openNextNarrativeModal();
}

function pushLog(text) {
  state.logs.unshift({ day: state.day, text });
  state.logs = state.logs.slice(0, 18);
}

function hasBlockingModalState() {
  return Boolean(state.pendingChoice || state.activeEventModal);
}

function openNextNarrativeModal() {
  if (state.activeEventModal || state.pendingChoice) {
    return;
  }

  if (!Array.isArray(state.pendingEventQueue) || state.pendingEventQueue.length === 0) {
    toggleModal("choice", false);
    return;
  }

  state.activeEventModal = state.pendingEventQueue.shift();
  renderChoiceModal();
  toggleModal("choice", true);
}

function acknowledgeEventModal() {
  if (!state.activeEventModal) {
    return;
  }

  state.activeEventModal = null;

  if (Array.isArray(state.pendingEventQueue) && state.pendingEventQueue.length > 0) {
    openNextNarrativeModal();
    render();
    saveGame();
    return;
  }

  if (state.pendingChoice) {
    renderChoiceModal();
    toggleModal("choice", true);
    render();
    saveGame();
    return;
  }

  toggleModal("choice", false);
  render();
  saveGame();
}

function applyEffects(effects = {}) {
  Object.entries(effects).forEach(([key, value]) => {
    if (key === "flags") {
      value.forEach(addFlag);
      return;
    }

    if (key === "tags") {
      value.forEach(addTag);
      return;
    }

    if (!(key in state.stats)) {
      return;
    }

    state.stats[key] += value;
  });

  state.stats.fans = Math.max(0, Math.round(state.stats.fans));
  state.stats.money = Math.round(state.stats.money);
  state.stats.energy = clamp(state.stats.energy, 0, 100);
  state.stats.inspiration = clamp(state.stats.inspiration, 0, 100);
  state.stats.reputation = clamp(state.stats.reputation, 0, 100);
  state.stats.scandal = clamp(state.stats.scandal, 0, 100);
  state.stats.network = clamp(state.stats.network, 0, 100);
  state.stats.authenticity = clamp(state.stats.authenticity, 0, 100);
  state.stats.alienation = clamp(state.stats.alienation, 0, 100);
}

function computeStatDeltas(effects = {}) {
  return statsConfig
    .concat(hiddenStatsConfig)
    .filter((item) => typeof effects[item.key] === "number" && effects[item.key] !== 0)
    .map((item) => {
      const amount = effects[item.key];
      const prefix = amount > 0 ? "+" : "";
      const rendered = item.key === "money"
        ? `${prefix}$${amount}`
        : item.key === "fans"
          ? `${prefix}${amount.toLocaleString("zh-CN")}`
          : `${prefix}${amount}`;

      return `${item.label} ${rendered}`;
    })
    .join(" · ");
}

function clampWeight(weight) {
  return Math.max(0.15, weight);
}

function weightedRandomPick(items, getWeight) {
  if (!items.length) {
    return null;
  }

  const weighted = items.map((item) => ({
    item,
    weight: clampWeight(getWeight(item))
  }));
  const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);

  if (totalWeight <= 0) {
    return items[Math.floor(Math.random() * items.length)];
  }

  let threshold = Math.random() * totalWeight;

  for (const entry of weighted) {
    threshold -= entry.weight;
    if (threshold <= 0) {
      return entry.item;
    }
  }

  return weighted[weighted.length - 1].item;
}

function scoreEffectsAffinity(effects = {}) {
  const current = state.stats;
  let weight = 1;

  if (current.energy <= 35) {
    weight += Math.max(0, (effects.energy || 0) * 0.22);
    weight += Math.max(0, -(effects.energy || 0)) * 0.03;
  } else {
    weight += Math.max(0, -(effects.energy || 0)) * 0.015;
  }

  if (current.money <= 220 || hasFlag(state, "rentCrisis")) {
    weight += Math.max(0, (effects.money || 0)) * 0.01;
  }

  if (current.inspiration <= 38) {
    weight += Math.max(0, (effects.inspiration || 0)) * 0.16;
  }

  if (current.reputation <= 36) {
    weight += Math.max(0, (effects.reputation || 0)) * 0.2;
    weight += Math.max(0, -((effects.scandal || 0))) * 0.18;
  }

  if (current.scandal >= 22) {
    weight += Math.max(0, -((effects.scandal || 0))) * 0.2;
    weight += Math.max(0, (effects.reputation || 0)) * 0.12;
  } else {
    weight += Math.max(0, (effects.scandal || 0)) * 0.04;
  }

  if (current.network >= 26) {
    weight += Math.max(0, (effects.network || 0)) * 0.16;
  }

  if (current.authenticity >= 34) {
    weight += Math.max(0, (effects.authenticity || 0)) * 0.18;
    weight += Math.max(0, -((effects.alienation || 0))) * 0.16;
  } else {
    weight += Math.max(0, (effects.authenticity || 0)) * 0.1;
  }

  if (current.alienation >= 26) {
    weight += Math.max(0, -((effects.alienation || 0))) * 0.18;
  }

  if (current.fans >= 25000) {
    weight += Math.max(0, (effects.fans || 0)) / 2600;
  } else {
    weight += Math.max(0, (effects.fans || 0)) / 4200;
  }

  if (hasAnyTag(state, ["algo-study", "template-life", "rage-bait"])) {
    weight += Math.max(0, (effects.alienation || 0)) * 0.08;
    weight += Math.max(0, (effects.fans || 0)) / 3200;
  }

  if (hasFlag(state, "loveRoute")) {
    weight += Math.max(0, (effects.authenticity || 0)) * 0.12;
    weight += Math.max(0, -((effects.alienation || 0))) * 0.12;
  }

  if (hasFlag(state, "radicalSeed") || hasFlag(state, "revolutionTrack")) {
    weight += Math.max(0, (effects.network || 0)) * 0.1;
    weight += Math.max(0, (effects.reputation || 0)) * 0.08;
  }

  return weight;
}

function getEventWeight(actionId, event) {
  const actionBias = {
    publish: state.stats.inspiration <= 35 ? 1.2 : 1,
    street: state.stats.authenticity >= 28 ? 1.15 : 1,
    collab: state.stats.network >= 16 ? 1.12 : 1,
    business: state.stats.money <= 350 ? 1.18 : 1,
    rest: state.stats.energy <= 45 ? 1.24 : 0.94,
    nightlive: state.stats.fans >= 7000 ? 1.08 : 1,
    trend: hasAnyTag(state, ["algo-study", "template-life", "rage-bait"]) ? 1.16 : 1,
    relationship: hasFlag(state, "loveRoute") ? 1.14 : 1,
    shadow: state.stats.scandal >= 16 || state.stats.money <= 180 ? 1.12 : 0.96,
    random: 1
  };

  return scoreEffectsAffinity(event.effects) * (actionBias[actionId] || 1);
}

function pickEvent(actionId) {
  const pool = [...(eventTemplates[actionId] || [])];
  if (state.day >= 14) {
    pool.push(...(lateEventTemplates[actionId] || []));
  }

  const rarePool = (rareEventTemplates[actionId] || []).filter((event) => {
    if (typeof event.when === "function" && !event.when(state)) {
      return false;
    }

    const chance = typeof event.rareChance === "number" ? event.rareChance : 0.06;
    return Math.random() < chance;
  });

  pool.push(...rarePool);
  return weightedRandomPick(pool, (event) => getEventWeight(actionId, event));
}

function activateStoryArc(arcId) {
  if (!arcId || !storyArcCatalog[arcId]) {
    return;
  }

  if (state.activeArcs.some((arc) => arc.id === arcId)) {
    return;
  }

  state.activeArcs.push({ id: arcId, stepIndex: 0 });
}

function pickNarrativeCoda(contextKey = "system") {
  const pool = narrativeCodas[contextKey] || narrativeCodas.system;
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildNarrativeText(baseText, contextKey = "system") {
  return `${baseText} ${pickNarrativeCoda(contextKey)}`;
}

function randomizeEffects(effects = {}) {
  const randomized = {};

  Object.entries(effects).forEach(([key, value]) => {
    if (typeof value !== "number") {
      randomized[key] = value;
      return;
    }

    const absolute = Math.abs(value);
    let variance = 0;

    if (key === "fans") {
      variance = Math.max(80, Math.round(absolute * 0.18));
    } else if (key === "money") {
      variance = Math.max(6, Math.round(absolute * 0.15));
    } else {
      variance = Math.max(1, Math.round(absolute * 0.2));
    }

    const swing = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
    randomized[key] = value >= 0 ? value + swing : value - swing;
  });

  return randomized;
}

function rebalanceEffectsForPacing(effects = {}, contextKey = "system") {
  const tuned = { ...effects };

  if (typeof tuned.energy === "number") {
    if (state.day <= 14 && tuned.energy < 0) {
      const earlyMultiplier = contextKey === "nightlive" || contextKey === "shadow" ? 0.72 : 0.58;
      tuned.energy = -Math.max(1, Math.round(Math.abs(tuned.energy) * earlyMultiplier));
    }

    if (contextKey === "rest" && tuned.energy > 0) {
      const restBoost = state.day <= 14 ? 1.55 : 1.28;
      tuned.energy = Math.max(1, Math.round(tuned.energy * restBoost));
    }
  }

  if (contextKey === "rest") {
    if (typeof tuned.alienation === "number" && tuned.alienation < 0) {
      tuned.alienation = -Math.max(1, Math.round(Math.abs(tuned.alienation) * 1.35));
    }

    if (typeof tuned.authenticity === "number" && tuned.authenticity > 0) {
      tuned.authenticity = Math.max(1, Math.round(tuned.authenticity * 1.2));
    }
  }

  return tuned;
}

function getBranchWeight(actionId, event) {
  const choiceEffects = event.choices.map((choice) => scoreEffectsAffinity(choice.effects || {}));
  const bestChoiceWeight = choiceEffects.length ? Math.max(...choiceEffects) : 1;
  const averageChoiceWeight = choiceEffects.length
    ? choiceEffects.reduce((sum, weight) => sum + weight, 0) / choiceEffects.length
    : 1;
  const urgencyBoost = state.stats.money <= 180 && actionId === "business" ? 1.2 : 1;
  const fatigueBoost = state.stats.energy <= 35 && actionId === "rest" ? 1.16 : 1;
  const visibilityBoost = state.stats.fans >= 12000 && actionId === "nightlive" ? 1.12 : 1;

  return (bestChoiceWeight * 0.65 + averageChoiceWeight * 0.35) * (event.chance || 0.2) * 10 * urgencyBoost * fatigueBoost * visibilityBoost;
}

function pickBranchEvent(actionId) {
  const candidates = branchingEvents.filter((event) => {
    if (event.actionId !== actionId) {
      return false;
    }

    if (event.once && state.triggeredEvents.includes(event.id)) {
      return false;
    }

    if (typeof event.when === "function" && !event.when(state)) {
      return false;
    }

    return true;
  });

  if (candidates.length === 0) {
    return null;
  }

  const eligible = candidates.filter((event) => Math.random() < clampWeight((event.chance || 0.2) * 1.35));
  const selectionPool = eligible.length ? eligible : candidates;
  return weightedRandomPick(selectionPool, (event) => getBranchWeight(actionId, event));
}

function applyEventPayload(payload, logPrefix, contextKey = "system", useVariance = true) {
  const baseEffects = rebalanceEffectsForPacing(payload.effects || {}, contextKey);
  const finalEffects = useVariance ? randomizeEffects(baseEffects) : { ...baseEffects };
  applyEffects(finalEffects);
  (payload.tags || []).forEach(addTag);
  (payload.flags || []).forEach(addFlag);
  if (payload.activatesArc) {
    activateStoryArc(payload.activatesArc);
  }
  if (Array.isArray(payload.activatesArcs)) {
    payload.activatesArcs.forEach((arcId) => activateStoryArc(arcId));
  }
  pushNarrative(payload.title, buildNarrativeText(payload.text, contextKey));
  const deltaText = computeStatDeltas(finalEffects);
  pushLog(`${logPrefix}${deltaText ? `（${deltaText}）` : ""}`);
}

function finalizeTurn() {
  runConditionalEvents();
  maybeEndDay();
  maybeEndGame();
  render();
  openNextNarrativeModal();
  saveGame();
}

function resolveAction(actionId) {
  if (state.gameOver || state.actionsLeft <= 0 || hasBlockingModalState()) {
    return;
  }

  const action = actionCatalog.find((item) => item.id === actionId);
  if (!action) {
    return;
  }

  const event = pickEvent(actionId);
  if (!event) {
    return;
  }

  state.actionsLeft -= action.cost;
  applyEventPayload(event, `${action.title}: ${event.title}`, actionId, true);

  const branchEvent = pickBranchEvent(actionId);
  if (branchEvent) {
    state.pendingChoice = {
      id: branchEvent.id,
      actionTitle: action.title,
      title: branchEvent.title,
      text: branchEvent.text,
      choices: branchEvent.choices
    };
    state.triggeredEvents.push(branchEvent.id);
    render();
    openNextNarrativeModal();
    saveGame();
    return;
  }

  finalizeTurn();
}

function runConditionalEvents() {
  conditionalEvents.forEach((event) => {
    const alreadyTriggered = state.triggeredEvents.includes(event.id);
    if (alreadyTriggered && event.once) {
      return;
    }

    if (!event.when(state)) {
      return;
    }

    state.triggeredEvents.push(event.id);
    applyEventPayload(event, event.title, "system", true);
  });
}

function maybeEndDay() {
  if (state.actionsLeft > 0) {
    return;
  }

  if (state.day % 7 === 0) {
    resolveRent();
  }

  if (state.day >= TOTAL_DAYS) {
    return;
  }

  state.day += 1;
  state.actionsLeft = ACTIONS_PER_DAY;
  progressStoryArcs();
  pushNarrative(
    `第 ${state.day} 天`,
    generateDayIntro(),
    "day-break"
  );
  pushLog(`进入第 ${state.day} 天。房租压力还剩 ${getRentCountdown()} 天。`);
  recordDaySnapshot();
}

function progressStoryArcs() {
  if (!Array.isArray(state.activeArcs) || state.activeArcs.length === 0) {
    return;
  }

  const remainingArcs = [];

  state.activeArcs.forEach((activeArc) => {
    const arc = storyArcCatalog[activeArc.id];
    if (!arc) {
      return;
    }

    const step = arc.steps[activeArc.stepIndex];
    if (!step) {
      return;
    }

    applyEventPayload(step, `${arc.title}: ${step.title}`, "system", true);

    if (activeArc.stepIndex + 1 < arc.steps.length) {
      remainingArcs.push({ id: activeArc.id, stepIndex: activeArc.stepIndex + 1 });
    }
  });

  state.activeArcs = remainingArcs;
}

function resolveRent() {
  state.stats.money -= RENT_AMOUNT;

  if (state.stats.money >= 0) {
    pushNarrative(
      "房租已付",
      `你把 $${RENT_AMOUNT} 转给房东，像向城市交一笔入场税。纽约暂时允许你继续留下。`
    );
    pushLog(`支付房租 $${RENT_AMOUNT}。`);
    return;
  }

  applyEffects({ reputation: -4, energy: -12, scandal: 6, alienation: 10, authenticity: -3 });
  addFlag("rentCrisis");
  pushNarrative(
    "房租危机",
    "你没能按时交租。房东的消息变得更短，语气也更冷。贫穷从不是诗意，它只是把所有选择压缩成更差的选择。"
  );
  pushLog(`房租违约，资金转为负值，危机升级。`);
}

function generateDayIntro() {
  const intros = state.day >= 14
    ? [
      "你醒来时先想到的不是今天想说什么，而是今天还能剩下多少自己。",
      "咖啡仍旧苦，但真正难以下咽的是你已经开始用后台曲线安排一天的情绪。",
      "窗外的城市没有变，变的是你越来越难在其中找到不带用途的目光。",
      "后半程像一条更窄的走廊，选择仍然很多，但每一扇门后都站着代价。",
      "镜子里的你依然熟悉，只是熟悉得越来越像一个被反复优化过的版本。",
      "你已经学会在起床前先检查自己今天更适合扮演哪一种人。",
      "城市还在正常运转，而你越来越像一台需要不断校准的内容机器。",
      "许多问题都还没爆炸，但它们已经在体内形成了清晰的倒计时。",
      "昨天的选择并没有过去，它们会在今天继续以惯性发声。",
      "房间看起来和第一天一样，真正变形的是你与房间相处的方式。",
      "你知道今天依然可以做决定，只是现在每个决定都更难假装没有后果。",
      "醒来的第一反应不再是灵感，而是排程，这件事本身已经足够说明问题。",
      "后半程里连安静都显得昂贵，因为你知道它会被任何通知轻易打断。",
      "你开始本能地盘算今天哪些话可以说，哪些话会害你更难维持现在的样子。",
      "这一天还没开始，你已经能感觉到某种迟到的疲惫先你一步坐到了桌前。",
      "你短暂怀念前几天那种还来得及把一切当作实验的轻率，现在大多数东西都已经开始变成账。"
    ]
    : [
      "你醒来时窗外是施工声和警笛声，城市提醒你它从不等人。",
      "咖啡很苦，后台数据更苦，但今天仍然可以被重新编排。",
      "公寓的白墙反射着冷光，你忽然觉得每一天都像一条待剪的视频素材。",
      "布鲁克林的风把垃圾和理想吹到同一条街上，今天轮到你决定追哪一个。",
      "你在镜子前停留了两秒，比起整理头发，更像在确认自己还剩几分真实。",
      "手机还没解锁，焦虑已经先一步从梦里醒了过来。",
      "你知道今天不会比昨天简单，但它至少还没有被完全决定。",
      "窗外有人赶地铁，有人倒垃圾，有人刚结束夜班，而你要决定今天如何把生活继续剪成内容。",
      "这座城市一早就很吵，像在提醒每个人别把迟疑当成特权。",
      "你还没有出门，却已经能感觉到今天会在体内留下新的耗损和新的借口。",
      "冰箱里的食物不多，待办事项很多，灵感则像总在最不合时宜的时候才显得重要。",
      "你看了一眼后台，又立刻把页面关掉，像想给今天争取一个没那么功利的开头。",
      "第一束光照进来时，你短暂相信自己也许还能把今天过得不像完全在营业。",
      "你给自己倒了杯水，试图把生活先当生活，而不是选题库。",
      "今天依旧有机会偏向某种版本的自己，问题只是你是否还愿意承担那个版本的代价。",
      "你站在窗边看了几秒街道，像在给自己找一个足够体面的开始理由。"
    ];

  return intros[Math.floor(Math.random() * intros.length)];
}

function scoreEnding(ending) {
  const current = state.stats;
  const priorityShield = hasAnyFlag(state, [
    "endingMillionShellPriority",
    "endingForgottenPriority",
    "endingOnlyfansPriority",
    "endingRadicalPriority",
    "endingRealityLovePriority",
    "endingCancelledPriority",
    "endingLoveExitPriority",
    "endingAnonymousPriority"
  ]);
  const scoreMap = {
    "million-shell": current.fans / 5500
      + current.alienation * 1.6
      - current.authenticity * 0.8
      + (hasCommercialTrack(state) ? 28 : 0)
      + (hasFlag(state, "endingMillionShellPriority") ? 130 : 0),
    "cancelled-person": current.scandal * 1.8
      - current.reputation * 0.8
      + current.fans / 12000
      + (hasFlag(state, "cancelled") ? 22 : 0)
      + (hasFlag(state, "endingCancelledPriority") ? 120 : 0),
    "capital-signing": current.money / 28
      + current.network * 1.5
      + current.fans / 9000
      + (hasFlag(state, "signedAttention") ? 30 : 0)
      - Math.max(0, 22 - current.authenticity) * 1.2
      - Math.max(0, current.alienation - 58) * 0.9
      - (priorityShield ? 55 : 0),
    "real-breakout": current.fans / 4200
      + current.authenticity * 1.6
      + current.reputation * 1.2
      - current.alienation * 0.45,
    "mental-collapse": (100 - current.energy) * 1.8
      + current.alienation * 1.1
      + (hasFlag(state, "meltdownTrack") ? 20 : 0),
    "underground-revolutionary": current.authenticity * 1.5
      + current.network * 1.2
      + current.fans / 14000
      + (hasFlag(state, "revolutionTrack") ? 26 : 0),
    "love-and-exit": current.authenticity * 1.6
      - current.alienation
      + current.energy * 0.5
      + (hasFlag(state, "loveRoute") ? 34 : 0)
      + (hasFlag(state, "endingLoveExitPriority") ? 80 : 0)
      - (hasFlag(state, "endingAnonymousPriority") ? 42 : 0),
    "fake-death": current.scandal * 1.15
      + current.fans / 7000
      + current.alienation * 0.9
      + (hasFlag(state, "vanishThought") ? 24 : 0),
    forgotten: (3500 - current.fans) / 140
      + Math.max(0, 220 - current.money) / 12
      + Math.max(0, 12 - current.network) * 2.5
      + Math.max(0, 24 - current.reputation) * 0.7
      + (hasFlag(state, "endingForgottenPriority") ? 120 : 0),
    "onlyfans-pivot": current.money / 18
      + current.alienation * 0.95
      - current.authenticity * 0.6
      + (hasFlag(state, "bodyMonetize") ? 34 : 0)
      + (hasFlag(state, "endingOnlyfansPriority") ? 120 : 0),
    "political-extreme": current.fans / 8000
      + current.alienation * 1.2
      + current.scandal * 0.8
      - current.reputation * 0.45
      + (hasFlag(state, "radicalSeed") ? 34 : 0)
      + (hasFlag(state, "endingRadicalPriority") ? 80 : 0),
    "fake-charity-scam": current.money / 20
      + current.scandal * 1.35
      + current.fans / 9000
      + (hasFlag(state, "fakeCharitySeed") ? 28 : 0),
    "reality-show-love": current.fans / 7000
      + current.alienation * 1.1
      + current.money / 30
      + (hasFlag(state, "realityLoveArc") ? 34 : 0)
      + (hasFlag(state, "endingRealityLovePriority") ? 80 : 0),
    "split-live": (100 - current.energy) * 1.3
      + current.alienation * 1.3
      + (hasTag(state, "messy-live") ? 36 : 0),
    "algorithm-slave": current.alienation * 1.65
      + current.fans / 10000
      + (hasPlatformTrack(state) ? 28 : 0),
    "documentary-reversal": current.authenticity * 1.35
      + current.scandal * 0.8
      + current.reputation
      + (hasFlag(state, "docProject") ? 26 : 0)
      - (priorityShield ? 42 : 0),
    "crime-edge": current.scandal * 1.3
      + current.alienation
      + current.money / 40
      + (hasCrimeTrack(state) ? 28 : 0)
      - (hasAnyFlag(state, ["endingOnlyfansPriority", "endingRadicalPriority", "endingRealityLovePriority", "endingForgottenPriority", "endingCancelledPriority", "endingLoveExitPriority", "endingAnonymousPriority", "endingMillionShellPriority"]) ? 48 : 0),
    "anonymous-vanish": current.authenticity * 1.4
      - current.alienation * 0.35
      + current.inspiration * 0.45
      + (hasFlag(state, "vanishThought") ? 24 : 0)
      + (hasFlag(state, "endingAnonymousPriority") ? 120 : 0),
    "film-crossover": current.network * 1.35
      + current.reputation * 1.05
      + current.fans / 6500
      + (hasCinemaTrack(state) ? 28 : 0)
  };

  return scoreMap[ending.id] ?? (current.fans / 9000 + current.reputation + current.money / 50 + current.network);
}

function determineEnding() {
  const matches = endings.filter((ending) => ending.when(state));
  if (matches.length > 0) {
    return matches.sort((first, second) => scoreEnding(second) - scoreEnding(first))[0];
  }

  return fallbackEndings
    .map((id) => endings.find((ending) => ending.id === id))
    .sort((first, second) => scoreEnding(second) - scoreEnding(first))[0];
}

function pushEndingPrelude(ending) {
  const text = endingPreludeTexts[ending.id];
  const preludeId = `ending-prelude-${ending.id}`;

  if (!text || state.triggeredEvents.includes(preludeId)) {
    return;
  }

  state.triggeredEvents.push(preludeId);
  pushNarrative(`前夜：${ending.title}`, text);
  pushLog(`结局前夜：${ending.title}`);
}

function maybeEndGame() {
  if (state.gameOver) {
    return;
  }

  if (state.stats.energy <= 0) {
    if (state.day < 14) {
      applyEffects({ energy: 16, reputation: -3, alienation: 4, authenticity: 2 });
      addFlag("meltdownTrack");
      pushNarrative(
        "你差点提前垮掉",
        "你在洗手间镜子前站了很久，久到终于承认自己离真正断裂只差一点。你没有立刻倒下，只是被迫用一次狼狈的停顿把命运往后推了几天。"
      );
      pushLog("你在前半程濒临崩溃，但暂时撑住了。");
      return;
    }

    finishGame(endings.find((ending) => ending.id === "mental-collapse"));
    return;
  }

  if (state.day >= TOTAL_DAYS && state.actionsLeft === 0) {
    finishGame(determineEnding());
  }
}

function finishGame(ending) {
  state.gameOver = true;
  state.ending = ending.id;
  pushEndingPrelude(ending);
  pushNarrative(`结局：${ending.title}`, endingTexts[ending.id]);
  pushLog(`达成结局：${ending.title}`);

  if (!unlockedEndings.includes(ending.id)) {
    unlockedEndings.push(ending.id);
    saveUnlockedEndings();
  }
}

function renderMeta() {
  dayLabel.textContent = `第 ${state.day} 天`;
  weekLabel.textContent = `第 ${Math.ceil(state.day / 7)} 周`;
  actionsLabel.textContent = `${state.actionsLeft} / ${ACTIONS_PER_DAY}`;
  rentLabel.textContent = `${getRentCountdown()} 天`;
}

function getRentCountdown() {
  const dayInWeek = ((state.day - 1) % 7) + 1;
  return 8 - dayInWeek;
}

function renderStats() {
  statsGrid.innerHTML = "";

  statsConfig.forEach((item) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    const value = item.format ? item.format(state.stats[item.key]) : state.stats[item.key];
    const healthHint = getStatHint(item.key, state.stats[item.key]);
    card.innerHTML = `
      <span class="label">${item.label}</span>
      <strong class="value">${value}</strong>
      <span class="delta ${healthHint.type}">${healthHint.text}</span>
    `;
    statsGrid.appendChild(card);
  });
}

function getStatHint(key, value) {
  if (key === "fans") {
    return value >= 100000 ? { type: "good", text: "注意力已形成规模。" } : { type: "bad", text: "仍在平台噪声里挣扎。" };
  }
  if (key === "money") {
    return value >= RENT_AMOUNT ? { type: "good", text: "短期房租尚可覆盖。" } : { type: "bad", text: "现金流接近危险线。" };
  }
  if (key === "energy") {
    return value >= 45 ? { type: "good", text: "身心状态还能支撑表演。" } : { type: "bad", text: "疲惫已进入可见范围。" };
  }
  if (key === "scandal") {
    return value <= 20 ? { type: "good", text: "黑料尚未形成系统风险。" } : { type: "bad", text: "舆论定时炸弹正在计时。" };
  }
  if (key === "reputation") {
    return value >= 50 ? { type: "good", text: "公众信任还能转化为筹码。" } : { type: "bad", text: "名声开始出现裂口。" };
  }
  return value >= 50 ? { type: "good", text: "状态较高，能支撑新分支。" } : { type: "bad", text: "偏低，可能限制后续路线。" };
}

function renderNarrative() {
  narrative.innerHTML = "";
  state.narrativeEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = `narrative-card narrative-${entry.variant || "card"}`;
    card.innerHTML = `<h3>${entry.title}</h3><p>${entry.text}</p>`;
    narrative.appendChild(card);
  });
  narrative.scrollTop = narrative.scrollHeight;
}

function renderActions() {
  actionsContainer.innerHTML = "";

  actionCatalog.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "action-button";
    button.disabled = state.gameOver || state.actionsLeft < action.cost || hasBlockingModalState();
    button.innerHTML = `<strong>${action.title}</strong><span>${action.desc}</span>`;
    button.addEventListener("click", () => resolveAction(action.id));
    actionsContainer.appendChild(button);
  });
}

function renderLogs() {
  logContainer.innerHTML = "";
  state.logs.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "log-entry";
    item.innerHTML = `<span class="log-day">第 ${entry.day} 天</span><p>${entry.text}</p>`;
    logContainer.appendChild(item);
  });
}

function renderEndings() {
  endingCollection.innerHTML = "";

  endings.forEach((ending) => {
    const unlocked = unlockedEndings.includes(ending.id);
    const card = document.createElement("article");
    card.className = `ending-card ${unlocked ? "" : "locked"}`.trim();
    card.innerHTML = `
      <h3>${unlocked ? ending.title : "未解锁结局"}</h3>
      <p>${unlocked ? ending.teaser : "继续多周目，解锁更多人生版本。"}</p>
    `;
    endingCollection.appendChild(card);
  });
}

function renderChoiceModal() {
  if (state.activeEventModal) {
    choiceTitle.textContent = state.activeEventModal.title;
    choiceText.textContent = state.activeEventModal.text;
    choiceOptions.innerHTML = "";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "event-confirm-button";
    button.setAttribute("aria-label", "确认并查看下一事件");
    button.textContent = "✓";
    button.addEventListener("click", acknowledgeEventModal);
    choiceOptions.appendChild(button);
    return;
  }

  if (!state.pendingChoice) {
    choiceTitle.textContent = "分支事件";
    choiceText.textContent = "你需要做出选择。";
    choiceOptions.innerHTML = "";
    return;
  }

  choiceTitle.textContent = state.pendingChoice.title;
  choiceText.textContent = state.pendingChoice.text;
  choiceOptions.innerHTML = "";

  state.pendingChoice.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `<strong>${choice.label}</strong><span>${choice.text}</span>`;
    button.addEventListener("click", () => resolveChoice(choice));
    choiceOptions.appendChild(button);
  });
}

function updateTip() {
  if (state.gameOver) {
    const ending = endings.find((item) => item.id === state.ending);
    systemTip.textContent = ending ? `已达成结局：${ending.title}` : "本局已结束。";
    return;
  }

  if (state.stats.energy <= 20) {
    systemTip.textContent = "能量过低。再把痛苦包装成内容，可能会直接断裂。";
    return;
  }

  if (state.stats.money < RENT_AMOUNT && (state.day % 7) >= 4) {
    systemTip.textContent = "房租即将到期，现金流比风格更重要。";
    return;
  }

  if (state.stats.scandal >= 32) {
    systemTip.textContent = "黑料值偏高。互联网对记忆的忠诚，通常只服务于指控。";
    return;
  }

  if (state.stats.authenticity >= 38) {
    systemTip.textContent = "真实度较高。你还有机会不把自己完全卖给模板。";
    return;
  }

  if (state.stats.alienation >= 36) {
    systemTip.textContent = "异化值偏高。你越来越像被后台数据远程操控。";
    return;
  }

  systemTip.textContent = "你的每个动作都在训练你成为某种人。";
}

function render() {
  renderMeta();
  renderStats();
  renderNarrative();
  renderActions();
  renderLogs();
  renderEndings();
  renderChoiceModal();
  rewindDayButton.disabled = state.day <= 1 || hasBlockingModalState();
  openLogButton.disabled = hasBlockingModalState();
  openEndingsButton.disabled = hasBlockingModalState();
  updateTip();
}

function toggleModal(key, shouldOpen) {
  const modal = modals[key];
  if (!modal) {
    return;
  }

  if (hasBlockingModalState() && key !== "choice") {
    return;
  }

  if (shouldOpen) {
    Object.entries(modals).forEach(([modalKey, entry]) => {
      if (modalKey !== key) {
        entry.classList.add("hidden");
        entry.setAttribute("aria-hidden", "true");
      }
    });
  }

  modal.classList.toggle("hidden", !shouldOpen);
  modal.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  const anyOpen = Object.values(modals).some((entry) => !entry.classList.contains("hidden"));
  overlay.classList.toggle("hidden", !anyOpen);
}

function closeAllModals() {
  if (hasBlockingModalState()) {
    return;
  }

  Object.keys(modals).forEach((key) => toggleModal(key, false));
}

function resolveChoice(choice) {
  if (!state.pendingChoice) {
    return;
  }

  const finalEffects = randomizeEffects(choice.effects);
  applyEffects(finalEffects);
  (choice.tags || []).forEach(addTag);
  (choice.flags || []).forEach(addFlag);
  activateStoryArc(choice.activatesArc);
  pushNarrative(choice.label, buildNarrativeText(choice.text, "choice"));
  pushLog(`分支选择：${choice.label}${computeStatDeltas(finalEffects) ? `（${computeStatDeltas(finalEffects)}）` : ""}`);
  state.pendingChoice = null;
  toggleModal("choice", false);
  finalizeTurn();
}

function rewindToPreviousDay() {
  if (hasBlockingModalState() || state.day <= 1) {
    return;
  }

  const previousSnapshot = (state.daySnapshots || [])
    .filter((snapshot) => snapshot.day === state.day - 1)
    .slice(-1)[0];

  if (!previousSnapshot) {
    return;
  }

  state = {
    ...createInitialState(),
    ...snapshotDayState(previousSnapshot),
    stats: { ...createInitialState().stats, ...(previousSnapshot.stats || {}) },
    tags: Array.isArray(previousSnapshot.tags) ? [...previousSnapshot.tags] : [],
    flags: Array.isArray(previousSnapshot.flags) ? [...previousSnapshot.flags] : [],
    narrativeEntries: Array.isArray(previousSnapshot.narrativeEntries) ? [...previousSnapshot.narrativeEntries] : createInitialState().narrativeEntries,
    logs: Array.isArray(previousSnapshot.logs) ? [...previousSnapshot.logs] : createInitialState().logs,
    triggeredEvents: Array.isArray(previousSnapshot.triggeredEvents) ? [...previousSnapshot.triggeredEvents] : [],
    pendingChoice: null,
    activeEventModal: null,
    pendingEventQueue: [],
    activeArcs: Array.isArray(previousSnapshot.activeArcs) ? [...previousSnapshot.activeArcs] : [],
    daySnapshots: (state.daySnapshots || [])
      .filter((snapshot) => snapshot.day <= previousSnapshot.day)
      .map((snapshot) => snapshotDayState(snapshot))
  };

  closeAllModals();
  pushLog(`已回到第 ${state.day} 天。`);
  saveGame();
  render();
}

function restartGame() {
  state = createInitialState();
  closeAllModals();
  saveGame();
  render();
}

function clearAllProgress() {
  clearGameSave();
  unlockedEndings = [];
  saveUnlockedEndings();
  state = createInitialState();
  closeAllModals();
  render();
}

restartButton.addEventListener("click", restartGame);
clearSaveButton.addEventListener("click", clearAllProgress);
rewindDayButton.addEventListener("click", rewindToPreviousDay);
openLogButton.addEventListener("click", () => toggleModal("log", true));
openEndingsButton.addEventListener("click", () => toggleModal("endings", true));
overlay.addEventListener("click", closeAllModals);
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleModal(button.dataset.closeModal.replace("-modal", ""), false);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
  }
});

const saved = loadGame();
if (saved) {
  state = {
    ...createInitialState(),
    ...saved,
    stats: { ...createInitialState().stats, ...(saved.stats || {}) },
    tags: Array.isArray(saved.tags) ? saved.tags : [],
    flags: Array.isArray(saved.flags) ? saved.flags : [],
    narrativeEntries: Array.isArray(saved.narrativeEntries) ? saved.narrativeEntries : createInitialState().narrativeEntries,
    logs: Array.isArray(saved.logs) ? saved.logs : createInitialState().logs,
    triggeredEvents: Array.isArray(saved.triggeredEvents) ? saved.triggeredEvents : [],
    pendingChoice: saved.pendingChoice || null,
    activeEventModal: saved.activeEventModal || null,
    pendingEventQueue: Array.isArray(saved.pendingEventQueue) ? saved.pendingEventQueue : [],
    activeArcs: Array.isArray(saved.activeArcs) ? saved.activeArcs : [],
    daySnapshots: normalizeDaySnapshots(saved)
  };
}

render();
if (!state.activeEventModal && !state.pendingChoice && Array.isArray(state.pendingEventQueue) && state.pendingEventQueue.length > 0) {
  openNextNarrativeModal();
  render();
}
if (state.activeEventModal || state.pendingChoice) {
  toggleModal("choice", true);
}
