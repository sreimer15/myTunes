// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // Our library entry view needs to borrow the ended method from our songmodel
  // Maybe through this.get('currentSong')
  // Maybe wec ould add an ended function into our PlayerView.js that sets up the new model

  events: {
    'click': function() {
      this.model.enqueue();
      }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
