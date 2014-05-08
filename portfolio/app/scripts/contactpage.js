function ContactPage() {

  var mX = 0;
  var mouseDirFromLeft = true;


  var g = null;
  var sat = null;
  var emailtext = null;
  var emailing = false;
  var satbeacon = null;
  var emailhide = null;
  var freeing = false;
  var numberofstars = 14;
  var stars = [];

  var sship = null;
  var me = null;
  var tractorbeam = null;
  var hairup = null;
  var hairdown = null;

  this.setup = function(f, contentgroup) {

    g = contentgroup;
    var all = f.select("#contactpage");

    var night = all.select("#night");
    g.append(night);

    for ( var i=0; i<numberofstars; i++ )
    {
      var allstars = all.select("#stars");
      var starid = "#star" + (i+1);
      stars[i] = allstars.select(starid);
      g.append(stars[i]);
      var funcname = 'hoveroverstar' + (i+1);
      stars[i].hover(hoveroverstar,null);
    }

    displayText(all);

    emailhide = all.select("#texthide");
    g.append( emailhide );

    sat = all.select("#satellite");
    g.append( sat );
    sat.hover(hoveroversat, null); 

    for ( var i=0; i<4; i++ )
    {
      var panelid = '#panel' + (i+1);
      var panel = sat.select(panelid);
      for ( var j=0; j<9; j++ )
      {
        var psquareid = '#p' + (i+1) + 's' + (j+1);
        var psquare = panel.select(psquareid);
        g.append(psquare);
        //console.log(psquareid);
        psquare.attr({ opacity:'0'});
        psquare.hover(hoveroverpanel,null);
      }
    }

    satbeacon = all.select("#satbeacon");
    g.append( satbeacon );
    satbeacon.attr({display:"none"});
  }

  this.setupGlobalSVGObjects = function( _sship, _me, _hairup, _hairdown, _tractorbeam )
  {
    sship = _sship;
    me = _me;
    hairup = _hairup;
    hairdown = _hairdown;
    tractorbeam = _tractorbeam;
  }

  this.activate = function()
  {
    sship.mouseover( hoveroversship );
  }

  this.deactivate = function()
  {
    sship.unmouseover( hoveroversship );
    if ( emailing )
    {
      emailtext.animate({ transform:'t1500,0'}, 1000, mina.easeout, resetemail);
    }
  }

  var hoveroverpanel = function()
  {
    this.attr({ opacity:'1'});
    this.animate({ opacity:'0'}, 1000, mina.easeout);
  }

  var hoveroverstar = function()
  {
    var x = 1000;
    var y = Math.random() * 100;
    this.animate({ transform:'t' + x + ',' + y}, 200, mina.easeout);
    this.animate({ opacity:'0'}, 500, mina.easeout, reappearstar);
  }

  var reappearstar = function()
  {
    this.attr({ transform:'t0,0'});
    this.animate({ opacity:'1'}, 5000, mina.easeout);
  }

  var hoveroversship = function()
  {
    if ( emailing && freeing == false)
    {
      freeing = true;
      freeemail();
    }
  }

  var displayText = function(all)
  {
    //g.append( all.select("#title") ); 

    emailtext = g.text(100+1500, 387, "amorris.home@gmail.com");
      emailtext.attr({
          'font-family': 'lane',
          'font-size':'17px',
          'font-weight':'normal',
          'fill': '#FFF'
      });
  }

  var hoveroversat = function()
  {
    if ( emailing == false )
    {
      emailing = true;
    
      emailtext.attr({ transform:'t0,0'});
      sendoutemailtext();

      sship.stop();
      me.stop();
      hairup.stop();
      hairdown.stop();
      tractorbeam.stop();

      sship.animate({ transform:'t200,-976'}, 500, mina.easeinout);
      me.animate({ transform:'t200,-976'}, 500, mina.easeinout);
      hairup.animate({ transform:'t200,-976'}, 500, mina.easeinout);
      hairdown.animate({ transform:'t200,-976'}, 500, mina.easeinout);
      tractorbeam.animate({ transform:'t200,-976'}, 500, mina.easeinout);

      satbeacon.attr({display:""});
      setTimeout( beaconoff, 200 );
    }
  }

  var beaconoff = function()
  {
    satbeacon.attr({display:"none"});
  }

  var sendoutemailtext = function()
  {
    emailtext.animate({ transform:'t320,0'}, 1000, mina.bounce, emailtextend);
  }

  var emailtextend = function()
  {
    //setTimeout( freeemail, 2000 );
    
  }

  var freeemail = function()
  {
    emailtext.animate({ transform:'t1500,0'}, 500, mina.easeout, resetemail);

    sship.animate({ transform:'t200,-1100'}, 500, mina.easeinout);
    me.animate({ transform:'t200,-1100'}, 500, mina.easeinout);
    hairup.animate({ transform:'t200,-1100'}, 500, mina.easeinout);
    hairdown.animate({ transform:'t200,-1100'}, 500, mina.easeinout);
    tractorbeam.animate({ transform:'t200,-1100'}, 500, mina.easeinout);
  }

  var resetemail = function()
  {
    emailtext.attr({ transform:'t0,0'});
    emailing = false;
    freeing = false;
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