$(function() {
  $('#yes').mixItUp();

  //homepage filters
  $('#all').on('click', function() {
    $('#all').removeClass("active-home");
    $('#muffins').removeClass("active-home");
    $('#dinner').removeClass("active-home");
    $('#holiday').removeClass("active-home");
    $('#cookies').removeClass("active-home");
    $(this).addClass("active-home");
  });

  $('#cookies').on('click', function() {
    $('#all').removeClass("active-home");
    $('#muffins').removeClass("active-home");
    $('#dinner').removeClass("active-home");
    $('#holiday').removeClass("active-home");
    $('#cookies').removeClass("active-home");
    $(this).addClass("active-home");
  });

  $('#muffins').on('click', function() {
    $('#all').removeClass("active-home");
    $('#muffins').removeClass("active-home");
    $('#dinner').removeClass("active-home");
    $('#holiday').removeClass("active-home");
    $('#cookies').removeClass("active-home");
    $(this).addClass("active-home");
  });

  $('#dinner').on('click', function() {
    $('#all').removeClass("active-home");
    $('#muffins').removeClass("active-home");
    $('#dinner').removeClass("active-home");
    $('#holiday').removeClass("active-home");
    $('#cookies').removeClass("active-home");
    $(this).addClass("active-home");
  });

  $('#holiday').on('click', function() {
    $('#all').removeClass("active-home");
    $('#muffins').removeClass("active-home");
    $('#dinner').removeClass("active-home");
    $('#holiday').removeClass("active-home");
    $('#cookies').removeClass("active-home");
    $(this).addClass("active-home");
  });



  var fullClicked = true;
  var halfClicked = false;
  var doubleClicked = false;
  console.log('half clicked', halfClicked)
  console.log('double clicked', doubleClicked)
  console.log('full clicked', fullClicked)

  // If user clicks half
  $('#half').on('click', function() {
    $('#double').removeClass("active");
    $('#full').removeClass("active");
    $('#half').addClass("active");

    if (fullClicked) {

      $('.measurement').find('.amount').each(function() {
        var currentAmount = $(this).html();
        console.log('current on half', currentAmount);
        var newAmount = parseFloat(currentAmount);
        var halfAmount = newAmount / 2;
        console.log(halfAmount);
        $(this).text(halfAmount);
      })
      console.log('first')

    } else if (doubleClicked) {

      $('.measurement').find('.amount').each(function() {
        var currentAmount = $(this).html();
        console.log('current on half', currentAmount);
        var newAmount = parseFloat(currentAmount);
        var halfAmount = newAmount / 4;
        console.log(halfAmount);
        $(this).text(halfAmount);
      })
      console.log('second')

    } else if (halfClicked) {
      console.log('do nothing')
    }

    halfClicked = true;
    doubleClicked = false;
    fullClicked = false;
    console.log('half clicked', halfClicked)
    console.log('double clicked', doubleClicked)
    console.log('full clicked', fullClicked)

  })



  // if user clicks double
  $('#double').on('click', function() {
    $('#double').addClass("active");
    $('#full').removeClass("active");
    $('#half').removeClass("active");

    if (fullClicked) {

      $('.measurement').find('.amount').each(function() {
        var currentAmount = $(this).html();
        console.log('current on half', currentAmount);
        var newAmount = parseFloat(currentAmount);
        var halfAmount = newAmount * 2;
        console.log(halfAmount);
        $(this).text(halfAmount);
      })
      console.log('first')

    } else if (halfClicked) {

      $('.measurement').find('.amount').each(function() {
        var currentAmount = $(this).html();
        console.log('current on half', currentAmount);
        var newAmount = parseFloat(currentAmount);
        var halfAmount = newAmount * 4;
        console.log(halfAmount);
        $(this).text(halfAmount);
      })
      console.log('second')

    } else if (doubleClicked) {
      console.log('do nothing')
    }

    halfClicked = false;
    doubleClicked = true;
    fullClicked = false;
    console.log('half clicked', halfClicked)
    console.log('double clicked', doubleClicked)
    console.log('full clicked', fullClicked)
  })



  // When user clicks full
  $('#full').on('click', function() {
    $('#double').removeClass("active");
    $('#full').addClass("active");
    $('#half').removeClass("active");

    if (doubleClicked) {

      $('.measurement').find('.amount').each(function() {
        var currentAmount = $(this).html();
        console.log('current on half', currentAmount);
        var newAmount = parseFloat(currentAmount);
        var halfAmount = newAmount / 2;
        console.log(halfAmount);
        $(this).text(halfAmount);
      })
      console.log('first')

    } else if (halfClicked) {

      $('.measurement').find('.amount').each(function() {
        var currentAmount = $(this).html();
        console.log('current on half', currentAmount);
        var newAmount = parseFloat(currentAmount);
        var halfAmount = newAmount * 2;
        console.log(halfAmount);
        $(this).text(halfAmount);
      })
      console.log('second')

    } else if (fullClicked) {
      console.log('do nothing')
    }

    halfClicked = false;
    doubleClicked = false;
    fullClicked = true;
    console.log('half clicked', halfClicked)
    console.log('double clicked', doubleClicked)
    console.log('full clicked', fullClicked)
  })


});
