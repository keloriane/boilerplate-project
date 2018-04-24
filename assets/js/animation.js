export function pageElement(elem,transOn,transOff,timing,ease){
  
  this.object = elem;
  this.VarsOn = transOn;
  this.VarsOff = transOff;
  this.VarsOn.ease = ease;
  this.VarsOff.ease = ease;
  this.timeDur = timing;
    
  this.transition = function(direction){
  if(direction == "on"){
  this.currentTrans = TweenMax.to(this.object,this.timeDur,this.VarsOn);
  }else if(direction == "off"){
  this.currentTrans = TweenMax.to(this.object,this.timeDur,this.VarsOff);
  }
  return this.currentTrans;
  }
  return this
  }

