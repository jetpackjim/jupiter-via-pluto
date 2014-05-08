function AboutPage() {


  var mouseDirFromLeft = true;

  var g = null;
  var tree1 = null;
  var tree2 = null;
  var b1 = null;
  var b2 = null;
  var cloud1 = null;
  var cloud2 = null;
  var cloud3 = null;
  var sship = null;
  var me = null;
  var alien = null;
  var tractorbeam = null;
  var hairup = null;
  var hairdown = null;
  var tractorbeamon = false;

  this.setup = function(f, contentgroup) {

    g = contentgroup;
    var all = f.select("#aboutpage");

    all.attr({
      width:100,
      height:100
    });

    displayTitle(all);

    cloud1 = all.select("#cloud1");
    g.append( cloud1 ); 
    cloud1.hover( hoverovercloud1, null ); 

    cloud2 = all.select("#cloud2");
    g.append( cloud2 ); 
    cloud2.hover( hoverovercloud2, null ); 

    cloud3 = all.select("#cloud3");
    g.append( cloud3 ); 
    cloud3.hover( hoverovercloud3, null );

    g.append( all.select("#g3") ); 

    tree1 = all.select("#tree1");
    g.append( tree1 ); 
    tree1.hover( hoverovertree1, null );

    b1 = all.select("#b1");
    g.append( b1 ); 
    b1.hover( hoveroverb1, null );

    b2 = all.select("#b2");
    g.append( b2 ); 
    b2.hover( hoveroverb2, null );
    
    g.append( all.select("#g2") ); 

    tree2 = all.select("#tree2");
    g.append( tree2 ); 
    tree2.hover( hoverovertree2, null );

    tree3 = all.select("#tree3");
    g.append( tree3 ); 
    tree3.hover( hoverovertree3, null );

    tree4 = all.select("#tree4");
    g.append( tree4 ); 
    tree4.hover( hoverovertree4, null );

    g.append( all.select("#g1") ); 


    alien = all.select("#alien");
    g.append( alien ); 
    alien.hover( hoveroveralien, null );

    
  }

  this.setupGlobalSVGObjects = function( _sship, _me, _hairup, _hairdown, _tractorbeam )
  {
    sship = _sship;
    me = _me;
    hairup = _hairup;
    hairdown = _hairdown;
    tractorbeam = _tractorbeam;

    sship.mouseover( hoveroversship );
  }

  this.setSpaceShipPos = function(x,y)
  {
    sship.animate({ transform:'t' + x + ',' + y}, 4000, mina.bounce );
    me.animate({ transform:'t' + x + ',' + y}, 4000, mina.bounce );
    hairup.animate({ transform:'t' + x + ',' + y}, 4000, mina.bounce );
    hairdown.animate({ transform:'t' + x + ',' + y}, 4000, mina.bounce );
    tractorbeam.animate({ transform:'t' + x + ',' + y}, 4000, mina.bounce );
  }

  this.activate = function()
  {
    sship.mouseover( hoveroversship );
  }

  this.deactivate = function()
  {
    sship.unmouseover( hoveroversship );
  }

  var displayTitle = function(all)
  {
    //g.append( all.select("#title") ); 

    var text = g.text(140+1500, 1150, "ANDREW MORRIS");
      text.attr({
          'font-family': 'lane',
          'font-size': '62px',
          'font-weight':'normal',
          'fill': '#2C3775'
      });

      text = g.text(270+1500, 1170, "web, app and game developer");
      text.attr({
          'font-family': 'lane',
          'font-size':'17px',
          'font-weight':'normal',
          'fill': '#2C3775'
      });
  }

  var hoveringTree1 = false;
  var hoverovertree1 = function() {
    if ( hoveringTree1 == false )
    {
      hoveringTree1 = true;
    
      //var transform = tree1.attr("transform");
      var angle = -60;

      if ( mouseDirFromLeft == true )
      {
        angle = 60;
      }
      tree1.animate({ transform: 'r ' + angle + ',1598,1535' }, 200, resetToOriginTree1 ); 

      setTimeout( hovertree1Timeout, 200 );
    }
  };

  var hovertree1Timeout = function() {
    hoveringTree1 = false;
  }

  var resetToOriginTree1 = function() { 
    tree1.animate({ transform: 'r 0,1598,1535' }, 400, mina.bounce ); 
  };
  var hoveringTree2 = false;
  var hoverovertree2 = function() {
    if ( hoveringTree2 == false )
    {
      hoveringTree2 = true;
    
      //var transform = tree1.attr("transform");
      var angle = -60;

      if ( mouseDirFromLeft == true )
      {
        angle = 60;
      }
      tree2.animate({ transform: 'r ' + angle + ',2100,1564' }, 200, resetToOriginTree2 ); 

      setTimeout( hovertree2Timeout, 200 );
    }
  };

  var hovertree2Timeout = function() {
    hoveringTree2 = false;
  }
  var resetToOriginTree2 = function() { 
    tree2.animate({ transform: 'r 0,2100,1564' }, 400, mina.bounce );
  };
  var hoveringTree3 = false;
  var hoverovertree3 = function() {
    if ( hoveringTree3 == false )
    {
      hoveringTree3 = true;
    
      //var transform = tree1.attr("transform");
      var angle = -60;

      if ( mouseDirFromLeft == true )
      {
        angle = 60;
      }
      tree3.animate({ transform: 'r ' + angle + ',1841,1545' }, 200, resetToOriginTree3 ); 

      setTimeout( hovertree3Timeout, 200 );
    }
  };

  var hovertree3Timeout = function() {
    hoveringTree3 = false;
  }
  var resetToOriginTree3 = function() { 
    tree3.animate({ transform: 'r 0,1841,1545' }, 400, mina.bounce ); 
  };
  var hoveringTree4 = false;
  var hoverovertree4 = function() {
    if ( hoveringTree4 == false )
    {
      hoveringTree4 = true;
      var angle = -60
      if ( mouseDirFromLeft == true )
      {
        angle = 60;
      }
      tree4.animate({ transform: 'r ' + angle + ',1668,1578' }, 200, resetToOriginTree4 );
      setTimeout( hovertree4Timeout, 200 );
    }
  };
  var hovertree4Timeout = function() {
    hoveringTree4 = false;
  }
  var resetToOriginTree4 = function() { 
    tree4.animate({ transform: 'r 0,1668,1578' }, 400, mina.bounce );
  };
  var hoveroverb1 = function() {
    duck(b1, resetToOriginb1);
  };
  var resetToOriginb1 = function() { 
    resetToOrigin(b1);
  };
  var hoveroverb2 = function() {
    duck(b2, resetToOriginb2);
  };
  var resetToOriginb2 = function() { 
    resetToOrigin(b2);
  };
  var hoverovercloud1 = function() {
    moveright(-280, 280, cloud1, resetToOrigincloud1);
  };
  var resetToOrigincloud1 = function() { 
    resetToOrigin(cloud1);
  };
  var hoverovercloud2 = function() {
    moveright(280, 280, cloud2, resetToOrigincloud2);
  };
  var resetToOrigincloud2 = function() { 
    resetToOrigin(cloud2);
  };
  var hoverovercloud3 = function() {
    moveright(-280, 400, cloud3, resetToOrigincloud3);
  };
  var resetToOrigincloud3 = function() { 
    resetToOrigin(cloud3);
  };

  var hoveroversship = function() {
    if ( tractorbeamon == false )
    {
      tractorbeamon = true;

      duck(sship, resetToOriginsship);
      duck(me, null);
      duck(hairdown, null);
      duck(hairup, null);
      duck(tractorbeam, null);
      tractorbeam.attr({opacity:1});
      hairdown.attr({opacity:0});
      hairup.attr({opacity:1});
    }
  };
  var resetToOriginsship = function() { 
    //resettractorbeam(tractorbeam);
    tractorbeamalien();
    var transform = tractorbeam.attr("transform");
    tractorbeam.animate({ transform:'t0,-35'}, 1500, mouseoutsship );
    setTimeout( resethair, 100 );
    
    //resetToOrigin(sship);
    //resetToOrigin(me);
    //resetToOrigin(tractorbeam);
  };

  var resethair = function()
  {
    hairdown.attr({opacity:1});
    hairup.attr({opacity:0});
  }

  var mouseoutsship = function() {

    resettractorbeam(tractorbeam);
    resetsship();
    resetToOrigin(me);
    resetToOrigin(hairdown);
    resetToOrigin(hairup);
    //resetToOrigin(tractorbeam);
    resetToOrigin(alien);
  };

  var tractorbeamalien = function() {
    alien.animate({ transform: 't0,-150' }, 1500, null );
  };

  var hoveroveralien = function() {
    if ( tractorbeamon == false )
    {
      var dist = -70;

      if ( mouseDirFromLeft == true )
      {
        dist = 70;
      }
      moveright(dist, 140, alien, resetToOriginalien);
    }
  };

  var resetToOriginalien = function() { 
    resetToOrigin(alien);
  };

  var resetsship = function() {
    sship.animate({ transform: 't0,0' }, 1000, mina.bounce );
    tractorbeam.animate({ transform: 't0,0' }, 1000, endresetsship ); 
    endtractorbeam();
  };

  var endresetsship = function(){
    tractorbeamon = false;
  };

  var jump = function(obj, resetFunc) { 
    obj.animate({ transform: 't0,-70' }, 200, resetFunc ) 
  };
  var duck = function(obj, resetFunc) { 
    obj.animate({ transform: 't0,70' }, 200, resetFunc ) 
  };
  var moveright = function(dist, time, obj, resetFunc) { 
    obj.animate({ transform: 't ' + dist + ',0' }, time, resetFunc ) 
  };

  var resetToOrigin = function(obj) { 
    obj.animate({ transform: 't0,0' }, 1000, mina.bounce ); 
  };

  var resettractorbeam = function(obj) {
    obj.animate({ transform: 't0,0' }, 1000, endtractorbeam ) 
  };

  var endtractorbeam = function() {
    tractorbeam.attr({opacity:0});
  };

  var mX = 0;

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