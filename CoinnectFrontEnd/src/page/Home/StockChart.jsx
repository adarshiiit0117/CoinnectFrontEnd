import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage ,AvatarFallback} from "@/components/ui/avatar";
const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
];

const StockChart=()=>{
    const[activeLable,setActiveLable]=useState("1 Day")
    const series=[
        {
            data:[  [1745824161027, 94592.8036452535],
    [1745827473975, 94719.8007727894],
    [1745831076188, 94726.4612137734],
    [1745834969796, 94753.0430242737],
    [1745838172487, 95095.0519486937],
    [1745841964374, 95209.8856204164],
    [1745845373485, 95379.0115514521],
    [1745849088768, 94160.6595102916],
    [1745852854634, 94518.1080935784],
    [1745856507201, 93743.2913425585],
    [1745860180584, 93768.1671603096],
    [1745863493496, 94088.3492259459],
    [1745867363238, 94370.3778853151],
    [1745870816100, 94724.2614098151],
    [1745874397946, 94489.7843382785],
    [1745877946289, 94524.7941328772],
    [1745881781062, 94892.3162272504],
    [1745885143303, 95023.3012361623],
    [1745888959570, 95092.1559341297],
    [1745892086787, 95037.6842700234],
    [1745895893530, 94634.3477529158],
    [1745899495231, 94711.8558259515],
    [1745903093801, 94402.8475887107],
    [1745906722025, 94309.3415055254],
    [1745910292243, 94736.9039971689],
    [1745913698575, 94945.8881870912],
    [1745917677608, 95036.5076179562],
    [1745921139216, 94982.6996012544],
    [1745924676095, 94844.8964248396],
    [1745928237804, 95138.9826524075],
    [1745932178716, 94821.9984027527]],
        },
    ];
    const options={
        chart:{
            id:"area-datetime",
            type:"area",
            height:350,
            zoom:{autoScaleYaxis:true}
        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount:6
        },
        colors:["#758AA2"],
       markers: {
  colors: ["#fff"],
  strokeColor: "#fff",
 size:0,
  strokeWidth: 1,
 style:"hollow"
},
tooltip: {
  theme: "dark"
},
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 100]
  }
},
grid:{
    borderColor:"#47535E",
    strokeDashArray:4,
    show:true
}


    };
    const handleActiveLable=(value)=>{
setActiveLable(value);
    }
    return(

        <div>
            <div className="space-x-3">
  {timeSeries.map((item)=><Button className="text-black" variant={activeLable==item.lable?"":"outline"} onClick={()=>handleActiveLable(item.lable)} key={item.lable} >
    {item.lable}
  </Button>)}
            </div>
<div id="chart-timelines">
    <ReactApexChart
    options={options}
    series={series}
    height={450}
    type="area"
   
    />

</div>
        </div>
    )
}
export default StockChart