<h1 align = "center">知识图谱</h1>

# 免费下载数据
史上最大规模1.4亿知识图谱数据免费下载途径：

1. 加入QQ群90780053找群主要下载链接。
2. 关注思知机器人公众号，回复：数据下载

![思知机器人](img/思知机器人.jpg)

<!--
<p>捐赠作者(您的鼓励是作者开源最大的动力！！！)：<a href="https://github.com/ownthink/Jiagu/wiki/donation"target="_blank">捐赠致谢</a> </p>

![收款码](img/收款码.jpg)
-->



# 获取歧义关系
说明：（mention -> entity）输入名称(mention)返回对应实体(entity)的列表。如遇到共指问题，请求将会自动对名称(mention)进行共指消解。

<p<font size="6"><a>1. HTTP方法：GET</a></font></p>

请求URL：https://api.ownthink.com/kg/ambiguous?mention=mention_name

请求示例：
<p><a href="https://api.ownthink.com/kg/ambiguous?mention=苹果"target="_blank">https://api.ownthink.com/kg/ambiguous?mention=苹果</a> </p>


<p<font size="6"><a>2. HTTP方法：POST</a></font></p>

请求URL：https://api.ownthink.com/kg/ambiguous

请求参数：

| 参数 | 类型 |  是否必填 |   描述 | 
| ------ | ------ | ------ | ------ |
| mention | string | 是 |  请求的文本 | 

返回参数：

| 参数 | 类型 |  描述 | 
| ------ | ------ | ------ |
| message | string | success表示请求正确，error表示请求错误 | 
| data | list | 返回的数据列表，每个列表第一列表示mention的实体entity，第二列表示权重 | 

请求body示例：
```text
{
    "mention": "苹果"
}
```

返回示例：
```
{
    "message": "success",
    "data": [
        [
            "苹果[蔷薇科苹果属果实]",
            12223855
        ],
        [
            "苹果[韩国2008年康理贯执导电影]",
            7589467
        ],
        [
            "苹果公司",
            10084009
        ],
        [
            "苹果[动漫《男子高中生的日常》中角色]",
            7498900
        ],
        [
            "苹果[谢和弦、E-SO演唱歌曲]",
            2047
        ],
        [
            "苹果[蔷薇科苹果属果树]",
            411871
        ],
        [
            "苹果[安与骑兵演唱歌曲]",
            7470320
        ],
        [
            "苹果[伊朗1998年莎米拉·玛克玛尔巴夫执导电影]",
            7477662
        ],
        [
            "苹果[Minecraft中的食物类物品]",
            2796
        ],
        [
            "苹果[邓丽欣演唱歌曲]",
            4661
        ],
        [
            "苹果[2007年李玉执导电影]",
            10917590
        ],
        [
            "苹果[网游《天堂梦》中人物]",
            7484342
        ]
    ]
}
```


# 获取实体知识

说明：（entity -> knowledge）输入实体(entity)返回字典格式的全部知识。实体名一般为消歧后的实体(entity)，如果直接输入名称(mention)，请求将会自动进行消歧处理并返回实体(entity)全部知识。


<p<font size="6"><a>1. HTTP方法：GET</a></font></p>

请求URL：https://api.ownthink.com/kg/knowledge?entity=entity_name

请求示例：
<p><a href="https://api.ownthink.com/kg/knowledge?entity=刘德华"target="_blank">https://api.ownthink.com/kg/knowledge?entity=刘德华</a> </p>


<p<font size="6"><a>2. HTTP方法：POST</a></font></p>

请求URL：https://api.ownthink.com/kg/knowledge

请求参数：

| 参数 | 类型 |  是否必填 |   描述 | 
| ------ | ------ | ------ | ------ |
| entity | string | 是 |  请求的文本 | 

返回参数：

| 参数 | 类型 |  描述 | 
| ------ | ------ | ------ |
| message | string | success表示请求正确，error表示请求错误 | 
| data | object | 返回的数据 | 
| entity | strin | 实体名 | 
| desc | strin | 实体简介 | 
| tag | list | 实体标签 | 
| avp | list | 实体属性值，第一列为实体的属性，第二列为实体属性所对应的值 | 

请求body示例：
```text
{
    "entity": "刘德华"
}
```

返回示例：
```
{
    "message": "success",
    "data": {
        "avp": [
            [
                "中文名",
                "刘德华"
            ],
            [
                "英文名",
                "Andy Lau，Lau Tak Wah"
            ],
            [
                "其它外文名",
                "Lau TAK Wah"
            ],
            [
                "别名",
                "华仔"
            ],
            [
                "别名",
                "老大"
            ],
            [
                "别名",
                "华哥"
            ],
            [
                "别名",
                "华Dee"
            ],
            [
                "别名",
                "刘天王"
            ],
            [
                "别名",
                "华神"
            ],
            [
                "别名",
                "刘主席"
            ],
            [
                "性别",
                "男"
            ],
            [
                "国籍",
                "中国"
            ],
            [
                "籍贯",
                "广东新会"
            ],
            [
                "出生地",
                "香港新界大埔镇泰亨村"
            ],
            [
                "民族",
                "汉族"
            ],
            [
                "毕业院校",
                "可立中学、第十期无线艺员培训班"
            ],
            [
                "身高",
                "174cm"
            ],
            [
                "宗教信仰",
                "佛教"
            ],
            [
                "体重",
                "63kg"
            ],
            [
                "职业",
                "演员"
            ],
            [
                "职业",
                "歌手"
            ],
            [
                "职业",
                "填词人"
            ],
            [
                "职业",
                "电影人"
            ],
            [
                "主要成就",
                "三届香港电影金像奖最佳男主角"
            ],
            [
                "获得荣誉",
                "釜山电影节亚洲最有贡献电影人奖"
            ],
            [
                "音乐代表作品",
                "忘情水、冰雨、练习、中国人、笨小孩"
            ],
            [
                "音乐类型",
                "流行音乐"
            ],
            [
                "影视代表作品",
                "暗战、无间道、盲探、天若有情等"
            ],
            [
                "出道地区",
                "香港"
            ],
            [
                "活跃年代",
                "上世纪80年代至今"
            ],
            [
                "经纪公司",
                "东亚唱片、映艺娱乐"
            ],
            [
                "星座",
                "天秤座"
            ],
            [
                "血型",
                "AB型"
            ],
            [
                "爱好",
                "保龄球、羽毛球、台球、驾驶"
            ],
            [
                "特长",
                "唱歌、跳舞、拍戏"
            ],
            [
                "妻子",
                "朱丽倩"
            ],
            [
                "女儿",
                "刘向蕙"
            ],
            [
                "前女友",
                "喻可欣"
            ],
            [
                "好友",
                "李颖芝"
            ],
            [
                "好友",
                "杜汶泽"
            ],
            [
                "好友",
                "刘若英"
            ],
            [
                "代表作品",
                "旺角卡门"
            ],
            [
                "代表作品",
                "桃姐"
            ],
            [
                "代表作品",
                "天下无贼"
            ],
            [
                "代表作品",
                "忘情水"
            ],
            [
                "代表作品",
                "谢谢你的爱"
            ],
            [
                "代表作品",
                "爱你一万年"
            ],
            [
                "代表作品",
                "冰雨"
            ],
            [
                "代表作品",
                "今天"
            ],
            [
                "主要作品",
                "追龙"
            ],
            [
                "主要作品",
                "侠盗联盟"
            ],
            [
                "主要作品",
                "黑马王子"
            ]
        ],
        "desc": "刘德华（Andy Lau），1961年9月27日出生于中国香港，演员、歌手、作词人、制片人。",
        "entity": "刘德华",
        "tag": [
            "人物",
            "歌手",
            "演员"
        ]
    }
}
```

# 获取属性值

说明：（entity&attribute -> value）给定实体(entity)和属性(attribute)返回其对应的值(value)列表。实体名一般为实体(entity)，属性(attribute)一般为全部知识AVP列表中的属性，如果没有直接对应的entity与attribute请求将会对entity与attribute进行消歧、共指消解处理。


<p<font size="6"><a>1. HTTP方法：GET</a></font></p>

请求URL：https://api.ownthink.com/kg/eav?entity=entity_name&attribute=attribute_name

请求示例：

<p><a href="https://api.ownthink.com/kg/eav?entity=苹果&attribute=颜色"target="_blank">https://api.ownthink.com/kg/eav?entity=苹果&attribute=颜色</a> </p>


<p<font size="6"><a>2. HTTP方法：POST</a></font></p>

请求URL：https://api.ownthink.com/kg/eav

请求参数：

| 参数 | 类型 |  是否必填 |   描述 | 
| ------ | ------ | ------ | ------ |
| entity | string | 是 |  请求的实体名 | 
| attribute | string | 是 |  请求的属性名 | 

返回参数：

| 参数 | 类型 |  描述 | 
| ------ | ------ | ------ |
| message | string | success表示请求正确，error表示请求错误 | 
| data | list | 返回的数据 | 
| entity | string | 返回的实体名 | 
| attribute | list | 返回的属性名 | 
| value | string | 实体属性所对应的值 | 

请求body示例：
```text
{
    "entity": "苹果",
    "attribute": "颜色"
}
```

返回示例：
```
{
    "message": "success",
    "data": {
        "entity": "苹果[蔷薇科苹果属果实]",
        "attribute": "颜色",
        "value": [
            "红色",
            "粉色",
            "金黄色",
            "绿色",
            "白色"
        ]
    }
}
```


