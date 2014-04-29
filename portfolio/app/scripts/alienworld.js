var currentButtonSelected = null;

function getScalarFromRange(min, max, value)
{
  var scalar = ((value-min)/(max-min));
  return scalar;
}

function Button(name, xpos, navbar, navgroup, pagexpos, pageypos, contentgroup, onclickcallback) 
{
  this.name = name;
  var buttonEle = 1;
  var buttonOnEle = null;
  var buttonOffEle = null;
  var buttonTextEle = null;
  var thisObj = this;
  var contentgroup = contentgroup;
  this.pageypos = pageypos;
  this.pagexpos = pagexpos;
  var onclickcallback = onclickcallback;
  var nightmode = false;

  var onHover = function()
  {
    if ( currentButtonSelected.name != name )
    {
      var color = '#8C97D5';

      if ( nightmode == true )
      {
        color = '#CCC';
      }
      buttonTextEle.attr({
        'fill': color
      });
    }

    buttonTextEle.attr({
        'cursor': 'hand'
      });
  }

  var onHoverOff = function()
  {
    if ( currentButtonSelected.name != name )
    {
      var color = '#2C3775';

      if ( nightmode == true )
      {
        color = '#FFF';
      }

      buttonTextEle.attr({
        'fill': color
      });
    }
  }

  var onClick = function()
  {
    currentButtonSelected.highlight(false);
    buttonOnEle.attr({display:""});
    currentButtonSelected = thisObj;
    buttonTextEle.attr({
        'fill': '#FFF'
      });

    var scalar = window.innerWidth / 1384;

    var min = 0.5;
    var max = 1.0;
    if ( scalar < min )
    {
      scalar = min;
    }
    if ( scalar > max )
    {
      scalar = max;
    }
    
    var ypos = currentButtonSelected.pageypos;
    var x = currentButtonSelected.pagexpos + 100*(scalar*8.3);

    var tranformString = 't' + x + ',' + ypos;
    // // your code
    contentgroup.animate({transform: tranformString },2000, mina.bounce);

    onclickcallback();
  }

  this.highlight = function(highlight)
  {
    if ( highlight == true )
    {
      buttonOnEle.attr({display:""});
      buttonTextEle.attr({
          'fill': '#FFF'
        });
    }
    else
    {
      buttonOnEle.attr({display:"none"});
      buttonTextEle.attr({
          'fill': '#2C3775'
        });
    }
  }

  this.nightmenu = function(night)
  {
    if ( night == true )
    {
      buttonTextEle.attr({
          'fill': '#FFF'
        });
    }
    else
    {
      var color = '#2C3775';

      if ( currentButtonSelected.name == name )
      {
        color = '#FFF';
      }
      buttonTextEle.attr({
          'fill': color
        });
    }

    nightmode = night;
  }

  buttonEle = navbar.select("#" + name + "button");
  buttonOnEle = buttonEle.select("#" + name + "on");
  navgroup.append(buttonOnEle);
  buttonOnEle.attr({display:"none"});
  buttonOffEle = buttonEle.select("#" + name + "off");
  navgroup.append(buttonOffEle);

  buttonOffEle.click(onClick);
  buttonOnEle.hover(onHover, onHoverOff);
  buttonOffEle.hover(onHover, onHoverOff);

  buttonTextEle = navgroup.text(xpos, 29, name.toUpperCase());
    buttonTextEle.attr({
        'font-family': 'lane',
        'font-size':14,
        'font-weight':'normal',
        'fill': '#2C3775'
    });

  buttonTextEle.hover(onHover, onHoverOff);
  buttonTextEle.click(onClick);
  
}

$(function(){

  var initialised = false;
  var s = Snap(); 
  var contentgroup = s.group();
  var navgroup = s.group();
  var mX = 0;

  var navbar = null;
  var aboutButton = null;
  var skillsButton = null;
  var workButton = null;
  var funButton = null;
  var contactButton = null;

  var aboutpage = null;
  var contactpage = null;

  // global svg objects
  var sship = null;
  var me = null;
  var hairup = null;
  var hairdown = null;


  Snap.load("images/alienworld.svg", function ( f ) {  

    setupNavBar(f);
    aboutpage = new AboutPage();
    aboutpage.setup(f, contentgroup);  

    var skillspage = new SkillsPage();
    skillspage.setup(f, contentgroup);

    var workpage = new WorkPage();
    workpage.setup(f, contentgroup);

    var funpage = new FunPage();
    funpage.setup(f, contentgroup);
    
    contactpage = new ContactPage();
    contactpage.setup(f, contentgroup);

    var all = f.select("#global");

    tractorbeam = all.select("#tractorbeam");                      
    contentgroup.append( tractorbeam ); 
    tractorbeam.attr({display:"none"});

    sship = all.select("#sship");
    contentgroup.append( sship ); 
    
    me = all.select("#me");
    contentgroup.append( me );
    hairup = me.select("#hairup");
    contentgroup.append(hairup);
    hairdown = me.select("#hairdown");
    contentgroup.append(hairdown);
    hairup.attr({display:"none"});


    aboutpage.setupGlobalSVGObjects( sship, me, hairup, hairdown, tractorbeam );
    contactpage.setupGlobalSVGObjects( sship, me, hairup, hairdown, tractorbeam );

    initialised = true;
    resizeAlienworld();
  } );  

  window.onresize = function() {

    if ( initialised == true )
    {
      resizeAlienworld();
    }
  };

  

  var resizeAlienworld = function() {
    var scalar = window.innerWidth / 1384;

      var min = 0.5;
      var max = 1.0;
      if ( scalar < min )
      {
        scalar = min;
      }
      if ( scalar > max )
      {
        scalar = max;
      }
      
      var ypos = currentButtonSelected.pageypos;
      var x = currentButtonSelected.pagexpos + 100*(scalar*8.3);

      var tranformString = 't' + x + ',' + ypos;

      // your code
      contentgroup.attr({transform: tranformString});


      x = -800 + 100*(scalar*8.3);
      navgroup.attr({transform: 't'+ x + ',0'});

      console.log("scalar: " + scalar + " ypos: " + ypos);
  }

  var setupNavBar = function(f) {

    var text = f.select("#text");
    navbar = text.select("#nav");

    aboutButton = new Button( "about", 446, navbar, navgroup, -2050, -1000, contentgroup, onclickbuttoncallback );
    aboutButton.highlight(true);
    
    // ypos should be 0 when on skills page why isn't it?
    skillsButton = new Button( "skills", 529, navbar, navgroup, -500, -1000, contentgroup, onclickbuttoncallback );
    workButton = new Button( "work", 609, navbar, navgroup, -3700, -1000, contentgroup, onclickbuttoncallback );
    funButton = new Button( "fun", 687, navbar, navgroup, -2050, -2200, contentgroup, onclickbuttoncallback );
    contactButton = new Button( "contact", 750, navbar, navgroup, -2050, 0, contentgroup, onclickbuttoncallback );
    currentButtonSelected = aboutButton;
    navgroup.attr({transform: 's0.7'});
  }

  var turnOffNightMenu = function()
  {
    aboutButton.nightmenu(false);
    skillsButton.nightmenu(false);
    workButton.nightmenu(false);
    funButton.nightmenu(false);
  }

  var onclickbuttoncallback = function() {

    if ( currentButtonSelected.name == "about" )
    {
      contactpage.deactivate();
      aboutpage.setSpaceShipPos(0,0);
      turnOffNightMenu();
      aboutpage.activate();
    }
    else if ( currentButtonSelected.name == "skills" )
    {
      aboutpage.setSpaceShipPos(-1500,0);
      turnOffNightMenu();
    }
    else if ( currentButtonSelected.name == "work" )
    {
      aboutpage.setSpaceShipPos(1500,0);
      turnOffNightMenu();
    }
    else if ( currentButtonSelected.name == "fun" )
    {
      aboutpage.setSpaceShipPos(0,1200);
      turnOffNightMenu();
    }
    else if ( currentButtonSelected.name == "contact" )
    {
      aboutpage.setSpaceShipPos(200,-1100);
      aboutpage.deactivate();
      aboutButton.nightmenu(true);
      skillsButton.nightmenu(true);
      workButton.nightmenu(true);
      funButton.nightmenu(true)

      contactpage.activate();
    }

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

  $('#aboutButton').click(function() {

    if ( $('#aboutButton').hasClass('active') == false )
    {
      contentgroup.animate({ transform: 't0,-500' }, 2000, mina.bounce ); 
    }
  });

  $('#skillsButton').click(function() {
    if ( $('#skillsButton').hasClass('active') == false )
    {
      contentgroup.animate({ transform: 't -2000,0' }, 2000, mina.bounce ); 
    }
  });

  $('#workButton').click(function() {
    if ( $('#workButton').hasClass('active') == false )
    {
      contentgroup.animate({ transform: 't 2000,0' }, 2000, mina.bounce ); 
    }
  });

  $('#funButton').click(function() {
    if ( $('#funButton').hasClass('active') == false )
    {
      contentgroup.animate({ transform: 't -2000, -2000' }, 2000, mina.bounce ); 
    }
  });

  $('#contactButton').click(function() {
    if ( $('#contactButton').hasClass('active') == false )
    {
      contentgroup.animate({ transform: 't 0, -2000' }, 2000, mina.bounce ); 
    }
  });
});