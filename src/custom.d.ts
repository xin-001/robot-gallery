//定义Css的声明
declare module "*.css"{
    const css:{[key: string]:string};
    export default css;
}