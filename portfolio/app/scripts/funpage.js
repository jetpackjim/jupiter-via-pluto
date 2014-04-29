function FunPage() {

  var mX = 0;
  var mouseDirFromLeft = true;


  var g = null;
  var sat = null;

  this.setup = function(f, contentgroup) {

    g = contentgroup;
    // var all = f.select("#funpage");


    // sat = all.select("#fground");
    // g.append( sat ); 
  }

  var displayTitle = function(all)
  {
    // var text = g.text(420, 150, "ANDREW MORRIS");
    //   text.attr({
    //       'font-family': 'lane',
    //       'font-size':75,
    //       'font-weight':'normal',
    //       'fill': '#2C3775'
    //   });

    //   text = g.text(550, 185, "web,app and game developer");
    //   text.attr({
    //       'font-family': 'lane',
    //       'font-size':24,
    //       'font-weight':'normal',
    //       'fill': '#2C3775'
    //   });
  }

  

  $('body').mousemove(function(e) {

      // moving upward
      if (e.pageX < mX) {
          mouseDirFromLeft = false;

      // moving downward
      } else {
          mouseDirFromLeft = true;
      }

      // set new mY after doing test above
      mX = e.pageX;

      // todo: if mouse is above bottom of nav bar then set svg z-index to -1
      // else set it to 0
      // as it seems only either the svg or the the html gets the mouse focus, not both
      // how will this work on touch screens?

  });
};