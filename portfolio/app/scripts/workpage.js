function WorkPage() {

  var mX = 0;
  var mouseDirFromLeft = true;


  var g = null;
  var sat = null;

  var gamestext = null;
  var designtext = null;
  var codetext = null;
  var appstext = null;
  var webtext = null;

  var tvtextypos = 0;
  var gamestextmaxy = 700;
  var designtextmaxy = 150;

  var updateInterval = 20;

  var scrollingGames = false;
  var scrollingDesign = false;
  var scrollingCode = false;
  var scrollingApps = false;
  var scrollingWeb = false;

  var wgamesbuthi = null;
  var wdesignbuthi = null;
  var wcodebuthi = null;
  var wwebbuthi = null;
  var wappsbuthi = null;

  var wstatic1 = null;
  var wstatic2 = null;
  var electric1 = null;
  var electric2 = null;
  var playingStatic = false;

  var sship = null;
  var me = null;
  var tractorbeam = null;
  var hairup = null;
  var hairdown = null;
  var shipposx = 0;
  var shipposy = 0;

  var tv = null;
  var wbg = null;

  var artboard = null;
  var mobile1 = null;
  var mobile2 = null;
  var brainlo = null;
  var brainjarlo = null;
  var brainhi = null;
  var brainjarhi = null;

  this.setupGlobalSVGObjects = function( _sship, _me, _hairup, _hairdown, _tractorbeam )
  {
    sship = _sship;
    me = _me;
    hairup = _hairup;
    hairdown = _hairdown;
    tractorbeam = _tractorbeam;
  }

  var update = function()
  {
    if ( playingStatic == false )
    {
      if ( scrollingGames == true )
      {
        tvtextypos -= 2;

        updateTextPosition(gamestext);

        if ( tvtextypos < -gamestextmaxy )
        {
          wgamesbuthi.attr({opacity:0});
          scrollingGames = false;
        }
      }
      else if ( scrollingDesign == true )
      {
        tvtextypos -= 1;

        updateTextPosition(designtext);

        if ( tvtextypos < -designtextmaxy )
        {
          wdesignbuthi.attr({opacity:0});
          scrollingDesign = false;
        }
      }
      else if ( scrollingCode == true )
      {
        tvtextypos -= 1;

        updateTextPosition(codetext);

        if ( tvtextypos < -700 )
        {
          brainhi.attr({opacity:0});
          wcodebuthi.attr({opacity:0});
          scrollingCode = false;
        }
      }
      else if ( scrollingApps == true )
      {
        tvtextypos -= 1;

        updateTextPosition(appstext);

        if ( tvtextypos < -700 )
        {
          wappsbuthi.attr({opacity:0});
          scrollingApps = false;
        }
      }
      else if ( scrollingWeb == true )
      {
        tvtextypos -= 1;

        updateTextPosition(webtext);

        if ( tvtextypos < -700 )
        {
          wwebbuthi.attr({opacity:0});
          scrollingWeb = false;
        }
      }
    }
  }

  window.setInterval(update, updateInterval);

  var resetScrollingTexts = function()
  {
    tvtextypos = 0;
    updateTextPosition(gamestext);
    updateTextPosition(designtext);
    updateTextPosition(codetext);
    updateTextPosition(appstext);
    updateTextPosition(webtext);

    if ( scrollingGames )
    {
      wgamesbuthi.attr({opacity:0});
      scrollingGames = false;
    }

    if ( scrollingDesign )
    {
      wdesignbuthi.attr({opacity:0});
      scrollingDesign = false;
    }

    if ( scrollingCode )
    {
      brainhi.attr({opacity:0});
      wcodebuthi.attr({opacity:0});
      scrollingCode = false;
    }

    if ( scrollingApps )
    {
      wappsbuthi.attr({opacity:0});
      scrollingApps = false;
    }

    if ( scrollingWeb )
    {
      wwebbuthi.attr({opacity:0});
      scrollingWeb = false;
    }
  }

  var internSetSSPos = function(x,y,time,bouncefunc,callbackfunc)
  {
    sship.animate({ transform:'t' + x + ',' + y}, time, bouncefunc, callbackfunc );
    me.animate({ transform:'t' + x + ',' + y}, time, bouncefunc );
    hairup.animate({ transform:'t' + x + ',' + y}, time, bouncefunc );
    hairdown.animate({ transform:'t' + x + ',' + y}, time, bouncefunc );
    tractorbeam.animate({ transform:'t' + x + ',' + y}, time, bouncefunc );
  }

  this.setSpaceShipPos = function(x,y)
  {
    shipposx = x;
    shipposy = y;
    
    internSetSSPos(x,y,4000,mina.bounce, null);
  }

  var shipbackdown = function()
  {
    var x = shipposx;
    var y = shipposy;

    internSetSSPos(x,y,800,mina.bounce, null);
  }

  var hoverOverButton = function(buttonhiobj)
  {
    startStaticAnim();
    buttonhiobj.attr({opacity:1});
    resetScrollingTexts();
    tvtextypos = 0;
  }

  var hoverOverGamesBut = function()
  {
    if ( scrollingGames == false )
    {
      hoverOverButton(wgamesbuthi);
      scrollingGames = true;

      var x = shipposx;
      var y = shipposy-100;

      internSetSSPos(x,y,500,mina.easeinout, shipbackdown);
    }
  }

  var artboardend = function()
  {
    artboard.animate({ transform:'t0,0'}, 200, mina.bounce );
  }

  var hoverOverDesignBut = function()
  {
    if ( scrollingDesign ==false )
    {
      hoverOverButton(wdesignbuthi);
      scrollingDesign = true;

      artboard.animate({ transform:'t0,20'}, 200, mina.bounce, artboardend );
    }
  }

  var brainloend = function()
  {
    brainlo.animate({ transform:'t0,0'}, 200, mina.bounce );
  }

  var brainhiend = function()
  {
    brainhi.animate({ transform:'t0,0'}, 200, mina.bounce );
  }


  var hoverOverCodeBut = function()
  {
    if ( scrollingCode ==false )
    {
      hoverOverButton(wcodebuthi);
      scrollingCode = true;

      brainlo.animate({ transform:'t0,-10'}, 200, mina.bounce, brainloend );
      brainhi.animate({ transform:'t0,-10'}, 200, mina.bounce, brainhiend );
      brainhi.attr({opacity:1});
    }
  }

  var mobile1end = function()
  {
    mobile1.animate({ transform:'t0,0'}, 200, mina.bounce );
  }

  var mobile2end = function()
  {
    mobile2.animate({ transform:'t0,0'}, 300, mina.bounce );
  }

  var hoverOverAppsBut = function()
  {
    if ( scrollingApps ==false )
    {
      hoverOverButton(wappsbuthi);
      scrollingApps = true;

      mobile1.animate({ transform:'t0,-20'}, 200, mina.bounce, mobile1end );
      mobile2.animate({ transform:'t0,-30'}, 300, mina.bounce, mobile2end );
    }
  }

  var hoverOverWebBut = function()
  {
    if ( scrollingWeb ==false )
    {
      hoverOverButton(wwebbuthi);
      scrollingWeb = true;
      // startTvAnim();
    }
  }

  var createButton = function( foreground, buttonname, hoverfunc, textx, texty )
  {
    var but = foreground.select("#w" + buttonname + "but");
    g.append( but );
    but.hover(hoverOverCodeBut, null);

    var wbuthi = foreground.select("#w" + buttonname + "buthi");
    g.append( wbuthi );
    wbuthi.attr({opacity:0});
    wbuthi.hover(hoverfunc, null);

    text = g.text(textx, texty, buttonname.toUpperCase());
    text.attr({
          'font-family': 'lane',
          'font-size': '24px',
          'font-weight':'normal',
          'fill': '#FFF'
      });
    text.hover(hoverfunc, null);

    return wbuthi;
  }

  this.setup = function(f, contentgroup) {

    tvtextypos = 0;
    g = contentgroup;
    var all = f.select("#workpage");

    var skyback = all.select("#skyback");
    g.append(skyback); 

    wbg = all.select("#wbg");
    g.append( wbg );

    // displayGamesText();
    // displayDesignText();
    gamestext = all.select("#gamestext");
    g.append( gamestext );

    designtext = all.select("#designtext");
    g.append( designtext );

    codetext = all.select("#codetext");
    g.append( codetext );

    appstext = all.select("#appstext");
    g.append( appstext );

    webtext = all.select("#webtext");
    g.append( webtext );

    // var wl = f.select("#whitelayer");
    // g.append(wl);

    var fg = all.select("#wfg");
    g.append( fg );

    wstatic1 = fg.select("#wbgstatic1");
    g.append( wstatic1 );
    wstatic1.attr({opacity:0});

    wstatic2 = fg.select("#wbgstatic2");
    g.append( wstatic2 );
    wstatic2.attr({opacity:0});

    tv = fg.select("#tv");
    g.append( tv );

    electric1 = fg.select("#electric1");
    g.append(electric1);
    electric1.attr({opacity:0});

    electric2 = fg.select("#electric2");
    g.append(electric2);
    electric2.attr({opacity:0});

    artboard = fg.select("#artboard");
    g.append(artboard);

    mobile1 = fg.select("#mobile1");
    g.append(mobile1);
    mobile2 = fg.select("#mobile2");
    g.append(mobile2);

    brainlo = fg.select("#brainlo");
    g.append(brainlo);
    brainjarlo = fg.select("#brainjarlo");
    g.append(brainjarlo);

    brainhi = fg.select("#brainhi");
    g.append(brainhi);
    brainhi.attr({opacity:0});
    brainjarhi = fg.select("#brainjarhi");
    g.append(brainjarhi);

    wgamesbuthi = createButton( fg, "games", hoverOverGamesBut, 3193, 1420);
    wdesignbuthi = createButton( fg, "design", hoverOverDesignBut, 3128, 1665);
    wcodebuthi = createButton( fg, "code", hoverOverCodeBut, 3737, 1672);
    wappsbuthi = createButton( fg, "apps", hoverOverAppsBut, 3705, 1420);
    wwebbuthi = createButton( fg, "web", hoverOverWebBut, 3460, 1672);
  }

  var updateTextPosition = function(textobj)
  {
    var ypos = tvtextypos;

    textobj.attr({transform:'t 0' + ',' + ypos});
  }

  var endStatic = function()
  {
    wstatic1.attr({opacity:0});
    wstatic2.attr({opacity:0});
    electric1.attr({opacity:0});
    electric2.attr({opacity:0});
    playingStatic = false;
  }

  var staticPart3 = function()
  {
    wstatic1.attr({opacity:1});
    wstatic2.attr({opacity:0});
    electric1.attr({opacity:1});
    electric2.attr({opacity:0});
    setTimeout( endStatic, 100 );
  }

  var staticPart2 = function()
  {
    wstatic1.attr({opacity:0});
    wstatic2.attr({opacity:1});
    electric1.attr({opacity:0});
    electric2.attr({opacity:1});
    setTimeout( staticPart3, 100 );
  }

  var endTvBounce = function()
  {
    tv.animate({ transform:'t0,0'}, 200, mina.bounce );
    wstatic1.animate({ transform:'t0,0'}, 200, mina.bounce );
    wstatic2.animate({ transform:'t0,0'}, 200, mina.bounce );
    electric1.animate({ transform:'t0,0'}, 200, mina.bounce );
    electric2.animate({ transform:'t0,0'}, 200, mina.bounce );
    wbg.animate({ transform:'t0,0'}, 200, mina.bounce );
  }

  var startTvAnim = function()
  {
    tv.animate({ transform:'t0,5'}, 200, mina.bounce, endTvBounce );
    wstatic1.animate({ transform:'t0,5'}, 200, mina.bounce );
    wstatic2.animate({ transform:'t0,5'}, 200, mina.bounce );
    electric1.animate({ transform:'t0,5'}, 200, mina.bounce );
    electric2.animate({ transform:'t0,5'}, 200, mina.bounce );
    wbg.animate({ transform:'t0,5'}, 200, mina.bounce );
  }

  var startStaticAnim = function()
  {
    playingStatic = true;
    wstatic1.attr({opacity:1});
    electric1.attr({opacity:1});
    setTimeout( staticPart2, 100 );
  }

  this.deactivate = function()
  {
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