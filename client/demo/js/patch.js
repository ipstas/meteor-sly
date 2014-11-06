/**
 * Created by dc on 11/6/14.
 */

// Use tweening for basic animations with known end point
else {
  //debugger
  animation.time = min(+new Date() - animation.start, o.speed);
  var obj = {
    o: o,
    animation: animation
  };
  obj.easing = jQuery.easing[o.easing];
  obj.params = [animation.time/o.speed, animation.time, 0, 1, o.speed];
  window.obj = obj;
  //console.log(obj);
  var jfactor = obj.easing(obj.params);
  pos.cur = animation.from + animation.delta * jfactor;
}
