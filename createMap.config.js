//createMap函数的配置文件
//createMap函数的参数为一个对象
// {
//     contianerId: "类型：字符串，含义：作为地图容器的div的id",
//     mapJSON: "类型：字符串，含义：地图文件所在的路径",
//     projection: "类型：字符串，含义：投影函数的名字",
//     mapCenter: "类型：数组，含义：一个经纬度的坐标，用于作为地图的中心点",
//     scale: "类型：number，含义：地图的放大倍数",
//     screenCenter: "类型：数组，含义：屏幕上的一点，和mapCenter重合",

// }
export const config = {
    //函数的名字
    name: 'createMap',
    //可配置的一些属性，有默认值
    configrable: {
        projection: 'geoEquirectangular',//x坐标-pi：pi，y坐标-pi/2:pi/2
        mapCenter: [0,0],
        scale: 100,
        screenCenter: [3.14*100,3.14*50],
        color: ["#3182bd", "#6baed6", "#9ecae1", 
                "#c6dbef", "#e6550d", "#fd8d3c", 
                "#fdae6b", "#fdd0a2", "#31a354", 
                "#74c476", "#a1d99b", "#c7e9c0", 
                "#756bb1", "#9e9ac8", "#bcbddc",
                "#dadaeb", "#636363", "#969696", 
                "#bdbdbd", "#d9d9d9"]
    },
    //不可配置的一些属性，没有默认值，如果参数不包括这些值，会报错
    unconfigrable: {
        containerId: undefined,
        mapJSON: undefined
    }
}