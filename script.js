const url = `http://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=تهران`

async function init() {
  const respone = await fetch(url,{
    "headers": {
      "api-key": "e3ca1a3da75d464c8d2012eee32fa6c1"
    },
  })
  const data = await respone.json()
  const result = data.result.hava.summary.temp
  console.log(result);
}

init()