import Ember from 'ember';

export function starRating(params) {
  var stars = params[0];

  if(stars === 5) {
    return Ember.String.htmlSafe(
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>'
    );
  } else if (stars === 4) {
    return Ember.String.htmlSafe(
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>'
    );
  } else if (stars === 3) {
    return Ember.String.htmlSafe(
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>'
    );
  } else if (stars === 2) {
    return Ember.String.htmlSafe(
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>'
    );
  } else if (stars === 1) {
    return Ember.String.htmlSafe(
      '<b class="glyphicon glyphicon-star"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>'
    );
  } else {
    return Ember.String.htmlSafe(
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>' +
      '<b class="glyphicon glyphicon-star-empty"></b>'
    );
  }

}

export default Ember.Helper.helper(starRating);
