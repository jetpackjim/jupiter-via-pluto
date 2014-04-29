function ContactPage() {

  var mX = 0;
  var mouseDirFromLeft = true;


  var g = null;
  var sat = null;
  var emailtext = null;
  var emailing = false;
  var satbeacon = null;
  var emailhide = null;

  this.setup = function(f, contentgroup) {

    g = contentgroup;
    var all = f.select("#contactpage");

    var night = all.select("#night");
    g.append(night);

    displayText(all);

    emailhide = all.select("#texthide");
    g.append( emailhide );

    sat = all.select("#satellite");
    g.append( sat );
    sat.hover(hoveroversat, null); 

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

  var hoveroversship = function()
  {
    if ( emailing )
    {
      freeemail();
    }
  }

  var displayText = function(all)
  {
    //g.append( all.select("#title") ); 

    emailtext = g.text(100+1500, 387, "amorris.home@gmail.com");
      emailtext.attr({
          'font-family': 'lane',
          'font-size':17,
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

      // sship.attr({ transform:'t200,-1100'});
      // me.attr({ transform:'t200,-1100'});
      // hairup.attr({ transform:'t200,-1100'});
      // hairdown.attr({ transform:'t200,-1100'});
      // tractorbeam.attr({ transform:'t200,-1100'});

      sship.animate({ transform:'t200,-976'}, 500, mina.bounce);
      me.animate({ transform:'t200,-976'}, 500, mina.bounce);
      hairup.animate({ transform:'t200,-976'}, 500, mina.bounce);
      hairdown.animate({ transform:'t200,-976'}, 500, mina.bounce);
      tractorbeam.animate({ transform:'t200,-976'}, 500, mina.bounce);

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

    sship.animate({ transform:'t200,-1100'}, 500, mina.bounce);
    me.animate({ transform:'t200,-1100'}, 500, mina.bounce);
    hairup.animate({ transform:'t200,-1100'}, 500, mina.bounce);
    hairdown.animate({ transform:'t200,-1100'}, 500, mina.bounce);
    tractorbeam.animate({ transform:'t200,-1100'}, 500, mina.bounce);
  }

  var resetemail = function()
  {
    emailtext.attr({ transform:'t0,0'});
    emailing = false;
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