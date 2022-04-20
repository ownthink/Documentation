<h1 align = "center">语义理解</h1>

>>> 语义理解(NLU)是通过一系列的AI算法，将文本解析为结构化的、机器可读的意图与词槽信息，便于互联网开发者更好的理解并满足用户需求。 思知AI机器人开放平台面向互联网开发者提供对自然语言文本的语义理解服务。

领域、意图、词槽说明：

* 领域：domain，是包含一系列的相关的意图和词槽组成的语义理解场景。 
* 意图：intent，是用户通过交互输入所要表达的目的。 
* 词槽：slot，是意图下用户附带的一些限制条件。


# 语义说明
本表格详细描述了领域（domain）的取值。

| 领域名称 | 描述 | 示例query
| ------ | ------ | ------ |
| 天气 | 天气情况 | 后天天气如何；明天几度 | 
| 人物 | 人物语义 | 姚明真正的身高是多少 | 

### 聊天

### 天气

### 地图

### 电台

### 翻译

### 故事

### 闹钟

### 人物

### 新闻

### 音乐

### 影视





# 请求说明
<p<font size="6"><a>1. HTTP方法：GET</a></font></p>

请求URL：https://api.ownthink.com/slu?spoken=spoken_text

请求示例：
<p><a href="https://api.ownthink.com/slu?spoken=厦门明天会不会下雨"target="_blank">https://api.ownthink.com/slu?spoken=厦门明天会不会下雨</a> </p>


<p<font size="6"><a>2. HTTP方法：POST</a></font></p>

请求URL：https://api.ownthink.com/slu

请求参数：

| 参数 | 类型 |  是否必填 |   描述 | 
| ------ | ------ | ------ | ------ |
| spoken | string | 是 |  请求的文本 | 

返回参数：

| 参数 | 类型 |  描述 | 
| ------ | ------ | ------ |
| message | string | success表示请求正确，error表示请求错误 | 
| data | object | 返回的数据 | 
| input | string | 输入的文本 | 
| semantics | list | 语义解析列表 | 
| domain | string | 领域分类 | 
| score | float | 领域置信度 | 
| intent | string | 意图识别 | 
| slot | list | 槽填充列表，第一列为槽为名，第二列为槽位值 | 


请求示例：
```
{
    "spoken": "厦门明天会不会下雨"
}
```

返回示例：
```
{
    "message": "success",
    "data": {
        "input": "厦门明天会不会下雨",       // 输入文本
        "semantics": [                       // 语义理解解析列表
            {
                "domain": "天气",            // 领域分类
                "score": 0.976563,           // 领域置信度
                "intent": "雨",              // 意图识别
                "slot": [
                    [
                        "城市",
                        "厦门"
                    ],
                    [
                        "日期",
                        "明天"
                    ]
                ]
            }
        ]
    }
}
```





