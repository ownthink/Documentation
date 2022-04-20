<h1 align = "center">对话机器人</h1>

# 项目地址

<p align="left"><font size="5">Appid获取地址：<a href="https://console.ownthink.com//"target="_blank">AI开放平台</a> 体验地址：<a href="https://www.ownthink.com/robot.html"target="_blank">小思</a> 项目地址：<a href="https://github.com/ownthink/robot/"target="_blank">GitHub</a></font></p>
---

# 使用方式
```
姚明多高啊？
那姚明的体重呢？
苏大校长是谁？
苏州有哪些景点？
拙政园门票多少钱？
```

<p><a href="https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=姚明多高啊？"target="_blank">https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=姚明多高啊？</a> </p>

返回格式说明：
```
{
    "message": "success",               // 请求是否成功
    "data": {
        "type": 5000,                   // 答案类型，5000文本类型
        "info": {
            "text": "姚明的身高是226厘米"  // 机器人返回的答案
        }
    }
}
```

# 请求说明
<p<font size="6"><a>1. HTTP方法：GET</a></font></p>

请求URL：https://api.ownthink.com/bot?spoken=spoken_text

请求示例：
<p><a href="https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=姚明多高啊？"target="_blank">https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=姚明多高啊？</a> </p>


<p<font size="6"><a>2. HTTP方法：POST</a></font></p>

请求URL：https://api.ownthink.com/bot

请求参数：

| 参数 | 类型 |  是否必填 |   描述 | 
| ------ | ------ | ------ | ------ |
| spoken | string | 是 |  请求的文本 | 
| appid | string | 否 |  机器人的appid，填写可使用自己的机器人 | 
| userid | string | 否 |  自己管理的用户id，填写可进行上下文对话 | 

返回参数：

| 参数 | 类型 |  描述 | 
| ------ | ------ | ------ |
| message | string | success表示请求正确，error表示请求错误 | 
| data | object | 返回的数据 | 
| type | int | 返回的数据类型，5000表示正确返回文本类型的答复 | 
| info | object | 返回的信息体 | 
| text | string | 返回的答案 | 

请求body示例：
```
{
    "spoken": "姚明多高啊？",
    "appid": "xiaosi",
	"userid": "user"
}
```

返回示例：
```
{
    "message": "success",               // 请求是否成功
    "data": {
        "type": 5000,                   // 答案类型，5000文本类型
        "info": {
            "text": "姚明的身高是226厘米"  // 机器人返回的答案
        }
    }
}
```

# 1. Curl请求方式
```shell
curl https://api.ownthink.com/bot?spoken=姚明多高啊？
```

# 2. Python调用方式
pip3 install requests

```python
import json
import requests

sess = requests.get('https://api.ownthink.com/bot?spoken=姚明多高啊？')

answer = sess.text

answer = json.loads(answer)

print(answer)
```







