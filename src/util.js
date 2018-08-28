export default class Util{
    static dist(vec1,vec2){
        return Math.sqrt((vec2.x-vec1.x)*(vec2.x-vec1.x)+(vec2.y-vec1.y)*(vec2.y-vec1.y));
    }
}